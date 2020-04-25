import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../cssdir/WYSIWYGComponentCss.css';
import styled from 'styled-components';


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



      uploadImageCallBack = (file)=> {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
    }

    render() {
        const { editorState } = this.state;
        return (

            <div  className="editor_container">
                <div className= "editor_sub_item">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                        }}
                    />
                </div>

                <div className="editor_sub_item_1">
                    <button >  submit_1 </button>
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
