const pngitxt = require('png-itxt')
const pug = require('pug');

function handleErrors(response) {
    if (!response.ok) {
        console.log("An Error During Check");
        //console.log(response);
        throw new Error(response.status);
    }
    return response;
}

function toTxt(response) {
    //console.log(response.status)
    //console.log("Unpacking");
    return response.text()
}

fetch("test.pug")
    .then(handleErrors)
    .then(toTxt)
    .then((t) => {
        document.getElementById("pp").innerHTML = pug.render(t, {name: "Pete"})
    })


fetch("input.png")
    .then(handleErrors)
//    .then(res=>{return res.body})
    .then(response => response.body)
    .then((img) => {
        console.log(typeof(img));
        console.log(img);
        img.pipeTo(
            pngitxt.get("Description",function (err, data) {
                if (!err && data) {
                    console.log(data.value);
                }
            })
        )
    })
console.log("Hi");