import * as React from 'react';
import axios from "../utils/AxiosAPI";

class UploadPage extends React.Component {

    state = {

        // Initially, no file is selected
        selectedFile: null
    };


    config = {
        onUploadProgress: function (progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log("uploadPage:" + percentCompleted);
        },
        showRespState: e => {
            console.log(e);
        }
    };


    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({
            selectedFile: event.target.files[0],
            selectedFilePath: event.target.files[0].mozFullPath
        });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log("file path:"+this.state.selectedFilePath);

        // Request made to the backend api
        // Send formData object

        axios.post('uploadFile', formData, this.config).then(response => {
            console.log("upload file:" + response.config);
            this.showObject(response.config);
            response.config.showRespState(response.status);
        }).catch(error => {
            console.log("upload file:" + error);
        });
    };

    showObject = obj => {
        for (let key in obj) {
            console.log(key)
        }
    }


    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
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

    render() {

        return (
            <div>
                <h1>
                    GeeksforGeeks
                </h1>
                <h3>
                    File Upload using React!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange}/>
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default UploadPage;