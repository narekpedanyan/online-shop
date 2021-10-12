import React from 'react';

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

async function imageFileToBase64 (file) {
  const result = await toBase64(file).catch(e => Error(e));
  if(result instanceof Error) {
    console.log('Error: ', result.message);
    return;
  }
  return result;
}

const Resources = ({
                     handleFieldChange,
                     productInfo
                   }) => {
 const {img} = productInfo;
 const handleImgSelect = (e) => {
   const {files} = e.target;
   if (files.length > 0) {
     const imageFile = files[0];
     const {lastModified, name: imageName, size, type} = imageFile;
     const promise = imageFileToBase64(imageFile);
     promise.then((res) => {
       handleFieldChange({
         target: {
           name: 'img',
           value: [...productInfo.img, {
             lastModified: lastModified,
             name: imageName.split('.')[0],
             extension: imageName.split('.')[1],
             base64: res,
             size: size,
             type: type
           }]
         }
       });
     }).catch((err) => {
       console.log(err);
     })
   }
 }

 const removeUploadedImage = (idx) => {
   const arrRef = [...img];
   arrRef.splice(idx, 1);
   handleFieldChange({
     target: {
       name: 'img',
       value: arrRef
     }
   })
 }

  return (
    <div className="resources">
      <div className="container">
        <div className="resources-row">
          {
            [{}, {}, {}].map((_item, index) => {
              const imageFile = img[index];
              return (
                <div key={index} className="new-image-frame">
                  {
                    imageFile ? (
                      <React.Fragment>
                        <img src={imageFile.base64} alt=""/>
                        <button
                          onClick={() => removeUploadedImage(index)}
                          className="remove-btn"
                          type="button"
                        >X</button>
                      </React.Fragment>
                    ) : (
                      <input type='file' onChange={handleImgSelect} />
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Resources;
