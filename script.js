var imageQR=document.querySelector("#imageQR")
var inputText=document.querySelector("#inputText")

async function generateQR(){
    var apiURL="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data="+inputText;
    var imgSrc=await fetch(apiURL)
    console.log(imgSrc)
    imageQR.src=apiURL;
    imageQR.classList.toggle("showQR")    
}
