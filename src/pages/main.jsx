import { useState } from "react";

function Main() {
    const [images, setImages]= useState([]);
    const [imageToRemove, setImageToRemove] = useState(null);

    function handleRemoveImg(imgObj){

    }
    function handleOpenWidget(){
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dhhpm0cvg', 
            uploadPreset: 'vjinqps5'
          }, 
          (error, result) => { 
              if (!error && result && result.event === "success") { 
                // console.log('Done! Here is the image info: ', result.info); 
                setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
              }
            }
          );
          myWidget.open();
    }
    return(
        <div className="Main">
            <button id="upload-widget" className="cloudinary-button" onClick={()=> handleOpenWidget()}>
                Upload Photo
            </button>
            <div className="images-preview-container">
              {images.map((image) =>(
                <div className="image-preview">
                  <img src={image.url}/>
                </div>
              ))}
            </div>
        </div>
    );
    
}

export default Main;