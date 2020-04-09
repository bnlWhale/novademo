import * as React from "react";

const footerStyle = {
    backgroundColor: "purple",
    fontSize: "15px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    right: "0",
    bottom: "0",
    height: "50px",

};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "50px",

};

export function Footer({children}) {
    return (
        <div>
            <div style={phantomStyle}/>
            <div style={footerStyle}>{children}</div>
        </div>
    );
}

let pTxt =
    ' It seems likely Apple will use Dark Sky\'s know how to bolster its own Weather app.\n' +
    '        Apple has used data from Yahoo (which is owned by Engadget\'s parent company Verizon) and\n' +
    '        The Weather Channel to power the app over the years. The website will stay online after then "in support of API\n' +
    '        and iOS App customers." As for the API, it\'ll remain active until the end of next year, but Dark Sky won\'t let\n' +
    '        anyone else sign up.'

export function getItemArray(num,key) {

    let a = Array(num).fill(null);
    let b = a.map((val,index)=>{
        let uniqueKey = key+"_getItemArray_"+index;
        let content = 'item '+(index+1);
        return(
            <p key={uniqueKey}>
                {content}
            </p>
        )

    })
    return b;
}







export function getTxtArray(num, key){

    let a = Array(num).fill(null);

    let b = a.map((val, index)=>{

        let uniqueKey = key+"_getTxtArray "+index;
        return (
            <p key={uniqueKey}>
            {pTxt+" "+index}
        </p>);
    })

    return b;


}
