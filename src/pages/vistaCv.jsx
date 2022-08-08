import { useState } from "react";
import "../styles/main.css"
import axios from "axios";

function VistaCV() {
    const [images, setImages]= useState([]);
    const [imageToRemove, setImageToRemove] = useState(null);

    function handleRemoveImg(imgObj){
      setImageToRemove(imgObj.public_id);
      axios.delete(`http://localhost:8080/${imgObj.public_id}`).then(() =>{
        setImageToRemove(null);
        setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
      })
      .catch((e) => console.log(e));

    }
    function handleOpenWidget(){
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dhhpm0cvg', 
            uploadPreset: 'vjinqps5'
          }, 
          (error, result) => { 
              if (!error && result && result.event === "success") { 
                setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
              }
            }
          );
          myWidget.open();
    }
    return(
        <div className="App">
            <button id="upload-widget" className="cloudinary-button" onClick={() => handleOpenWidget()}>
                Upload Photo
            </button>
            <div className="images-preview-container">
              {images.map((image) =>(
                <div className="image-preview">
                  <img src={image.url}/>
                  {imageToRemove != image.public_id && <i className ="fa fa-times-circle close-icon" onClick={() => handleRemoveImg(image)}></i>}
                </div>
              ))}
            </div>
        </div>
    );
    
}

export default VistaCV;