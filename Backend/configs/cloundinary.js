import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_NAME,
        api_secret: process.env.CLOUDINARY_SECRETKEY
    })
}

export default connectCloudinary;