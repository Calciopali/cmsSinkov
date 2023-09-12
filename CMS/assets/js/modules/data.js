"use strict"

const getData = () => {
    const xhr = new XMLHttpRequest();

    let xhrResponse;

    xhr.open('GET', 'https://peppered-lake-thing.glitch.me/api/goods')

    xhr.responseType = 'json'

    xhr.send()

    xhr.onload = () =>{
        xhrResponse = xhr.response;

        console.log(xhrResponse)
    }
}


export{getData};