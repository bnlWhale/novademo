import React, { useState } from 'react';
import axios from "../utils/AxiosAPI";

export default ()=>{

   const[selectedFile, setSelectedFile] = useState(null);
   const[selectedFilePath, setSelectedFilePath] = useState(null);

   const onFileUploadHook = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        // Details of the uploaded file
        console.log("file path:"+selectedFilePath);

        // Request made to the backend api
        // Send formData object

        axios.post('uploadFile', formData, config).then(response => {
            console.log("upload file:" + response.config);
            response.config.showRespState(response.status);
        }).catch(error => {
            console.log("upload file:" + error);
        });
    };

    const config = {
        onUploadProgress: function (progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log("uploadPage:" + percentCompleted);
        },
        showRespState: e => {
            console.log(e);
        }
    };

    const onFileChange = event => {

        // Update the state
        setSelectedFile(event.target.files[0]);
        setSelectedFilePath(event.target.files[0]);

    };

    const fileDataHook = () => {

        if (selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br/>
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };


    return (
        <div>
            <h3>
                File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={onFileUploadHook}>
                    Upload in Hook
                </button>
            </div>
            {fileDataHook()}
        </div>
    );
}







