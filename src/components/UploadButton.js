import React, {useState} from "react";

export default function UploadButton(){
    const [image,setImage] = useState({preview:"", raw:""});
    
    const handleChange = e => {
        if(e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw:e.target.files[0]
            });
        }
    };
    const handleUpload = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
   await fetch("images/",{
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    });
    

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5>Upload your photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default UploadButton;