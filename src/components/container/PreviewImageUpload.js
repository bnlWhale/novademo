import * as React from 'react'


const style = {
    image: {
        border: '1px solid #ccc',
        background: '#fefefe',
        width: '400px',
        height: '300px',
    },
};


class PreviewImageUpload extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange}/>
                <img src={this.state.file}   style={style.image} width={240}
                     height={240}/>
            </div>
        );
    }
}

export default PreviewImageUpload;