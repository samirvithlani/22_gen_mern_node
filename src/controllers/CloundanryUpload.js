const cloundinary = require('cloudinary').v2;

const uploadImage = async (file)=>{


        cloundinary.config({
            cloud_name: "dpjoxqisl",
            api_key:"add your key here",
            api_secret:"add your secret here"
        })

        const result = await cloundinary.uploader.upload(file.path)
        return result

}
module.exports = {
    uploadImage
}