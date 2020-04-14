import * as React from "react";

export function formatDate(dateString) {

    const date = new Date(dateString);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return monthNames[monthIndex] + ' ' + year;
}

export function formatDateTime(dateTimeString) {

    const date = new Date(dateTimeString);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return date.getDate() + ' ' + monthNames[monthIndex] + ' ' + year + ' - ' + date.getHours() + ':' + date.getMinutes();
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

export function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}
