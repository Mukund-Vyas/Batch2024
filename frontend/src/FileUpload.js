import {useState} from 'react';
import axios from 'axios';

function FileUpload() {
    const [image, setImage] = useState("");

    const submitImage = () =>{
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "studentphoto");
        data.append("cloud_name", "dcxdcs6l4");

        axios.post("https://api.cloudinary.com/v1_1/dcxdcs6l4/image/upload", data)
        .then((res) => res)
        .then((imgData) => {
            console.log(imgData.data.secure_url);
        }).catch((err) => console.log(err));
    }
    return(
        <>
            <div>
                <div>
                    <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                    <button onClick={submitImage}>Upload</button>
                </div>
            </div>
        </>
    );
}

export default FileUpload;