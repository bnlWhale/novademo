import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
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


     uploadCB = (file) => {
        const formData = new FormData();
        formData.append('file', file);


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
