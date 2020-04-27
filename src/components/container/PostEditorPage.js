import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../cssdir/WYSIWYGComponentCss.css';
import styled from 'styled-components';
import axios from "../utils/AxiosAPI";


const EditorStyled = styled.div`
  width: ${() => "calc(100% - 40px)"};
  min-height: 400px;
  margin: 20px;
  border: 1px solid black;
`;

class PostEditorPage extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };


     uploadCB = (file) => {
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


    }


     onSubmit = (e) => {
        e.preventDefault()




    }

    render() {
        const {editorState} = this.state;
        return (

            <div className="editor_container">
                 <div className= "editor_sub_item">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{ image: { uploadEnabled: true, uploadCallback: this.uploadCB, previewImage: true }}}
                    />
                </div>
                <div className="editor_sub_item_1">
                    <button onClick={this.onSubmit}> submit_1</button>
                </div>



                {/*<textarea
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    />*/}

            </div>
        );
    }
}

export default PostEditorPage;
