import * as React from "react";


const divLayoutStyle = {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
    width: '100%',
    top: '100px',
    flexDirection: 'column',
};

const divContentStyle = {
    flex: '1 0 auto',
}

const divFooterStyle = {
    flexShrink:  0,
    height: '100px',
    backgroundColor: 'burlywood',
}

export default ()=>{

    return(
        <div style={divLayoutStyle}>
            <div style={divContentStyle}>
                <h1>welcome page ! </h1>
            </div>
            <div style={divFooterStyle}>
                footer
            </div>
        </div>
    )
}
