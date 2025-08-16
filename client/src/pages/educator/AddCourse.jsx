import React, { useContext, useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddCourse = () => {
  const { backendUrl, getToken } = useContext(AppContext);
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name:");
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters((prev) => [...prev, newChapter]);
      }
    } else if (action === "remove") {
      setChapters((prev) =>
        prev.filter((chapter) => chapter.chapterId !== chapterId)
      );
    } else if (action === "toggle") {
      setChapters((prev) =>
        prev.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapters((prev) =>
        prev.map((chapter) =>
          chapter.chapterId === chapterId
            ? {
                ...chapter,
                chapterContent: chapter.chapterContent.filter(
                  (_, i) => i !== lectureIndex
                ),
              }
            : chapter
        )
      );
    }
  };

  const addLecture = () => {
    setChapters((prev) =>
      prev.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          return {
            ...chapter,
            chapterContent: [...chapter.chapterContent, newLecture],
          };
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!image) {
        toast.error("Thumbnail Not Selectd!");
      }
      const courseData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
      };
      const fromData = new FormData();
      fromData.append("courseData", JSON.stringify(courseData));
      fromData.append("image", image);

      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/educator/add-course",
        fromData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success(data.message);
        setCourseTitle("");
        setCoursePrice(0);
        setDiscount(0);
        setImage(null);
        setChapters([]);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-blue-950 px-6 md:px-14 py-8">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full -z-10" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col gap-6 max-w-3xl w-full mx-auto text-cyan-50 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-cyan-400/20 shadow-xl"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Add New Course
        </h1>

        <div className="flex flex-col gap-1">
          <label>Course Title</label>
          <input
            type="text"
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            placeholder="Course name"
            className="outline-none py-2 px-3 rounded bg-white/5 border border-cyan-400/30 text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Course Description</label>
          <div
            ref={editorRef}
            className="bg-white text-black rounded-lg overflow-hidden"
          ></div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col gap-1">
            <label>Course Price</label>
            <input
              type="number"
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              placeholder="0"
              className="outline-none py-2 w-28 px-3 rounded bg-white/5 border border-cyan-400/30 text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Course Thumbnail</label>
            <label
              htmlFor="thumbnailImage"
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={assets.file_upload_icon}
                alt=""
                className="p-3 bg-blue-500 rounded-lg"
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="w-16 h-16 rounded-lg object-cover border border-cyan-400/30"
                />
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label>Discount %</label>
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            placeholder="0"
            min={0}
            max={100}
            className="outline-none py-2 w-28 px-3 rounded bg-white/5 border border-cyan-400/30 text-white"
            required
          />
        </div>

        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapter.chapterId}
              className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-lg mb-4 overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-cyan-400/10">
                <div className="flex items-center">
                  <img
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                    src={assets.dropdown_icon}
                    width={14}
                    alt=""
                    className={`mr-2 cursor-pointer transition-all ${
                      chapter.collapsed ? "-rotate-90" : ""
                    }`}
                  />
                  <span className="font-semibold text-white">
                    {chapterIndex + 1}. {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-cyan-300">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img
                  onClick={() => handleChapter("remove", chapter.chapterId)}
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer w-4"
                />
              </div>

              {!chapter.collapsed && (
                <div className="p-4 text-sm text-cyan-100">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lecture.lectureId}
                      className="flex justify-between items-center mb-3"
                    >
                      <span>
                        {lectureIndex + 1}. {lecture.lectureTitle} -{" "}
                        {lecture.lectureDuration} mins -{" "}
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-300 hover:underline"
                        >
                          Link
                        </a>{" "}
                        - {lecture.isPreviewFree ? "Free Preview" : "Paid"}
                      </span>
                      <img
                        onClick={() =>
                          handleLecture(
                            "remove",
                            chapter.chapterId,
                            lectureIndex
                          )
                        }
                        src={assets.cross_icon}
                        alt=""
                        className="cursor-pointer w-4"
                      />
                    </div>
                  ))}

                  <div
                    onClick={() => handleLecture("add", chapter.chapterId)}
                    className="inline-flex bg-cyan-400/10 px-4 py-2 rounded cursor-pointer hover:bg-cyan-400/20 transition"
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div
            className="flex justify-center items-center bg-cyan-400/10 hover:bg-cyan-400/20 transition p-3 rounded-lg cursor-pointer text-cyan-200"
            onClick={() => handleChapter("add")}
          >
            + Add Chapter
          </div>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white text-gray-700 p-6 rounded-xl relative w-full max-w-md shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

                <label className="block mb-2">
                  Lecture Title
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureTitle}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="block mb-2">
                  Duration (minutes)
                  <input
                    type="number"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="block mb-2">
                  Lecture URL
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureUrl}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                  />
                </label>

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    className="scale-125"
                    checked={lectureDetails.isPreviewFree}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        isPreviewFree: e.target.checked,
                      })
                    }
                  />
                  <span>Is Preview Free</span>
                </div>

                <button
                  onClick={addLecture}
                  type="button"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded hover:scale-[1.02] transition"
                >
                  Add
                </button>
                <img
                  src={assets.cross_icon}
                  onClick={() => setShowPopup(false)}
                  alt=""
                  className="absolute top-4 right-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white w-max py-2.5 px-8 rounded font-medium hover:scale-[1.02] transition"
        >
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
