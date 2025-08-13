import logo from "./logo.png";
import logo_dark from "./logo_dark.svg";
import search_icon from "./search_icon.svg";
import cross_icon from "./cross_icon.svg";
import upload_area from "./upload_area.svg";
import sketch from "./sktech.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import adobe_logo from "./adobe_logo.svg";
import paypal_logo from "./paypal_logo.svg";
import course_1_thumbnail from "./course_1.jpeg";
import course_2_thumbnail from "./course_2.webp";
import course_3_thumbnail from "./course_3.webp";
import course_4_thumbnail from "./course_4.jpeg";
import star from "./rating_star.svg";
import star_blank from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.jpeg";
import profile_img_2 from "./profile_img_2.webp";
import profile_img_3 from "./profile_img_3.webp";
import arrow_icon from "./arrow_icon.svg";
import down_arrow_icon from "./down_arrow_icon.svg";
import time_left_clock_icon from "./time_left_clock_icon.svg";
import time_clock_icon from "./time_clock_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import my_course_icon from "./my_course_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import file_upload_icon from "./file_upload_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import dropdown_icon from "./dropdown_icon.svg";
import patients_icon from "./patients_icon.svg";
import play_icon from "./play_icon.svg";
import blue_tick_icon from "./blue_tick_icon.svg";
import course_4 from "./course_4.jpeg";
import profile_img from "./profile_img.jpeg";
import profile_img2 from "./profile_img2.webp";
import profile_img3 from "./profile_img3.webp";
import lesson_icon from "./lesson_icon.svg";

export const assets = {
  logo,
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  logo_dark,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  play_icon,
  blue_tick_icon,
  lesson_icon,
};

export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b24",
  name: "GreatStack",
  email: "user.greatstack@gmail.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0,
};

export const dummyTestimonial = [
  {
    name: "Priya Deshmukh",
    role: "Data Analyst @ TCS",
    image: assets.profile_img_1,
    rating: 4,
    feedback:
      "The intuitive interface makes Imagify the best platform I've used for my creative projects.",
  },
  {
    name: "Ahmed Khan",
    role: "SWE Intern @ Flipkart",
    image: assets.profile_img_2,
    rating: 5,
    feedback:
      "As a student, Imagify gave me all the tools I needed to enhance my portfolio quickly and easily.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Lead @ Adobe",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "With Imagify, we've elevated our brand visuals in record time. Love the seamless workflow!",
  },
  {
    name: "Carlos Gutierrez",
    role: "Frontend Dev @ Spotify",
    image: assets.profile_img,
    rating: 5,
    feedback:
      "The speed and productivity boost from Imagify is unmatched. Highly recommend to all my peers.",
  },
];


export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Sameer sharma",
        imageUrl:
          "https://th.bing.com/th/id/OIP.eB_8q4u9YDocNgFb7zb1owAAAA?w=141&h=150&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      },
    },
    {
      courseTitle: "Advanced Python Programming",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Nikhil Ojha",
        imageUrl:
          "https://tse1.mm.bing.net/th/id/OIP.u5Rb6tVbO22BFSEEv8yhXQAAAA?w=100&h=100&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    },
    {
      courseTitle: "Web Development Bootcamp",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Vibhav",
        imageUrl:
          "https://tse1.mm.bing.net/th/id/OIP.sb356dySZGn0evlpXhhZxAAAAA?w=260&h=260&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    },
    {
      courseTitle: "Data Science with Python",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Vishal Singh",
        imageUrl:
          "https://tse1.mm.bing.net/th/id/OIP.Gg7jGToUBYyfOfamvWm08QHaHe?w=569&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    },
    {
      courseTitle: "Cybersecurity Basics",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Sweta Chaursiya",
        imageUrl:
          "https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg",
      },
    },
  ],
  totalCourses: 8,
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "Vishal Singh",
      imageUrl:
        "https://th.bing.com/th/id/OIP.eB_8q4u9YDocNgFb7zb1owAAAA?w=141&h=150&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "Gautam singh",
      imageUrl:
       "https://tse1.mm.bing.net/th/id/OIP.u5Rb6tVbO22BFSEEv8yhXQAAAA?w=100&h=100&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:59:49.964Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "Sameer Sharma",
      imageUrl:
  "https://tse1.mm.bing.net/th/id/OIP.sb356dySZGn0evlpXhhZxAAAAA?w=260&h=260&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    courseTitle: "Advanced Python Programming",
    purchaseDate: "2024-12-20T11:03:42.931Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "Nikhil Ojha",
      imageUrl:
        "https://tse1.mm.bing.net/th/id/OIP.Gg7jGToUBYyfOfamvWm08QHaHe?w=569&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    courseTitle: "Web Development Bootcamp",
    purchaseDate: "2024-12-20T11:04:48.798Z",
  },
];

export const DummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1b1",
    courseTitle: "React.js for Beginners",
    courseDescription: `<h2>Build Interactive UIs</h2><p>Learn the fundamentals of React.js, the popular JavaScript library for building user interfaces. </p><ul><li>Understand JSX and component architecture</li><li>Work with state and events</li><li>Build reusable components</li></ul>`,
    coursePrice: 59.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with React",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "React Introduction",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/dGcsHMXbSOA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting up React App",
            lectureDuration: 750,
            lectureUrl: "https://youtu.be/dGcsHMXbSOA",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "React States and Props",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Understanding Props",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/dGcsHMXbSOA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Using State Hook",
            lectureDuration: 730,
            lectureUrl: "https://youtu.be/dGcsHMXbSOA",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    courseRatings: [
      { userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", rating: 5 }
    ],
    createdAt: "2025-01-10T10:00:00.000Z",
    updatedAt: "2025-01-11T10:00:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b3",
    courseTitle: "Mobile App Development with Flutter",
    courseDescription: `<h2>Create Cross-Platform Apps</h2><p>Learn how to develop beautiful and responsive mobile apps using Flutter and Dart.</p><ul><li>Understand Flutter architecture</li><li>Build UI with widgets</li><li>Connect apps to APIs</li></ul>`,
    coursePrice: 79.99,
    isPublished: true,
    discount: 30,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Flutter Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Setting Up Flutter",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/fq4N0hgOWzU",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Creating First App",
            lectureDuration: 740,
            lectureUrl: "https://youtu.be/fq4N0hgOWzU",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Working with APIs",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "HTTP Requests",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/fq4N0hgOWzU",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "JSON Parsing",
            lectureDuration: 750,
            lectureUrl: "https://youtu.be/fq4N0hgOWzU",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],

      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [
      { userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", rating: 5 }
    ],
    createdAt: "2025-01-10T10:20:00.000Z",
    updatedAt: "2025-01-11T10:20:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/fq4N0hgOWzU/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b4",
    courseTitle: "Blockchain Fundamentals",
    courseDescription: `<h2>Understand Decentralized Technology</h2><p>Dive into the basics of blockchain, cryptocurrencies, and decentralized applications (dApps).</p><ul><li>Learn blockchain architecture</li><li>Understand smart contracts</li><li>Explore Ethereum and Bitcoin</li></ul>`,
    coursePrice: 84.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Blockchain Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Blockchain?",
            lectureDuration: 650,
            lectureUrl: "https://youtu.be/SSo_EIwHSd4",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "How Blockchain Works",
            lectureDuration: 680,
            lectureUrl: "https://youtu.be/SSo_EIwHSd4",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Smart Contracts",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Ethereum Overview",
            lectureDuration: 690,
            lectureUrl: "https://youtu.be/SSo_EIwHSd4",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Writing Smart Contracts",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/SSo_EIwHSd4",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T10:30:00.000Z",
    updatedAt: "2025-01-11T10:30:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b5",
    courseTitle: "Advanced SQL and Database Management",
    courseDescription: `<h2>Master SQL and Database Systems</h2><p>Explore advanced SQL queries, optimization techniques, and database management best practices for scalable applications.</p><ul><li>Complex joins and subqueries</li><li>Database indexing and performance</li><li>Backup and recovery techniques</li></ul>`,
    coursePrice: 64.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Advanced SQL Queries",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Complex Joins",
            lectureDuration: 680,
            lectureUrl: "https://youtu.be/9Pzj7Aj25lw",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Subqueries and Unions",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/9Pzj7Aj25lw",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Database Optimization",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Indexing Strategies",
            lectureDuration: 710,
            lectureUrl: "https://youtu.be/9Pzj7Aj25lw",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Backup & Recovery",
            lectureDuration: 690,
            lectureUrl: "https://youtu.be/9Pzj7Aj25lw",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T10:40:00.000Z",
    updatedAt: "2025-01-11T10:40:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/9Pzj7Aj25lw/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b6",
    courseTitle: "Digital Marketing Mastery",
    courseDescription: `<h2>Grow Your Brand Online</h2><p>Learn SEO, content marketing, social media strategies, and PPC campaigns to grow your business digitally.</p><ul><li>SEO fundamentals</li><li>Social media marketing</li><li>Google Ads and analytics</li></ul>`,
    coursePrice: 69.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "SEO Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is SEO?",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/KA21LJd4p-I",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Keyword Research",
            lectureDuration: 650,
            lectureUrl: "https://youtu.be/KA21LJd4p-I",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Marketing Strategies",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Content Marketing",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/KA21LJd4p-I",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Social Media Ads",
            lectureDuration: 690,
            lectureUrl: "https://youtu.be/KA21LJd4p-I",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T10:50:00.000Z",
    updatedAt: "2025-01-11T10:50:00.000Z",
    __v: 0,
    courseThumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/digital-marketing-video-thumbnail-design-template-dfc17e5520ba884bb168f48a3111db57_screen.jpg?ts=1634743309",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b2",
    courseTitle: "UI/UX Design Fundamentals",
    courseDescription: `<h2>Design User-Friendly Interfaces</h2><p>Learn the principles of effective UI/UX design, from wireframing to prototyping, with practical examples.</p><ul><li>Understand design thinking</li><li>Learn color theory and typography</li><li>Build interactive prototypes</li></ul>`,
    coursePrice: 54.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Design Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "UX vs UI",
            lectureDuration: 650,
            lectureUrl: "https://youtu.be/0x_lmwvNX1Y",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Design Principles",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/0x_lmwvNX1Y",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Tools and Prototyping",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Using Figma",
            lectureDuration: 780,
            lectureUrl: "https://youtu.be/0x_lmwvNX1Y",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Interactive Prototypes",
            lectureDuration: 800,
            lectureUrl: "https://youtu.be/0x_lmwvNX1Y",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T10:10:00.000Z",
    updatedAt: "2025-01-11T10:10:00.000Z",
    __v: 0,
    courseThumbnail: "https://th.bing.com/th/id/OIP.QXXpnsFnNBx7G-a0IIes5AHaE7?w=252&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b7",
    courseTitle: "Photography Essentials",
    courseDescription: `<h2>Capture Stunning Photos</h2><p>Master the basics of photography including camera settings, lighting, composition, and editing techniques.</p><ul><li>Understanding camera modes</li><li>Lighting and composition</li><li>Photo editing basics</li></ul>`,
    coursePrice: 49.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Camera Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Camera Settings",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/HN1Ujz_O2Ng",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Manual vs Auto Mode",
            lectureDuration: 650,
            lectureUrl: "https://youtu.be/HN1Ujz_O2Ng",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Editing Photos",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Lightroom Basics",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/HN1Ujz_O2Ng",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Photoshop Essentials",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/HN1Ujz_O2Ng",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T11:00:00.000Z",
    updatedAt: "2025-01-11T11:00:00.000Z",
    __v: 0,
    courseThumbnail: "https://th.bing.com/th/id/OIP.W-7qUNnkwAmuYBj65ghVqQHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b8",
    courseTitle: "Excel for Data Analysis",
    courseDescription: `<h2>Analyze Data with Excel</h2><p>Learn to use Excel formulas, pivot tables, and charts to analyze and visualize data effectively.</p><ul><li>Excel formulas and functions</li><li>Pivot tables and charts</li><li>Data visualization</li></ul>`,
    coursePrice: 44.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Excel Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Formulas and Functions",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/rwbho0CgEAE",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Data Cleaning",
            lectureDuration: 650,
            lectureUrl: "https://youtu.be/rwbho0CgEAE",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Advanced Excel",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Pivot Tables",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/rwbho0CgEAE",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Charts & Dashboards",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/rwbho0CgEAE",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-01-10T11:10:00.000Z",
    updatedAt: "2025-01-11T11:10:00.000Z",
    __v: 0,
    courseThumbnail: "https://th.bing.com/th/id/OIP.XfbZwj4p9P4zKamBZy-mFQHaEK?w=323&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
];
