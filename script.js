let videoElement= document.getElementById("video")
let button= document.getElementById("button")

async function selectMediaStream() {
    try{
        // select the media which you wanna play 
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        // passing the srcObject of the video element from HTML5
        videoElement.srcObject=mediaStream;
        //Playing the ongoing thing using onloadmetadata function from videoElement!!
        videoElement.onloadedmetadata =() =>
        {
            videoElement.play()
        }
    } catch (error) {
        // Error Handling!
        console.log("You Got A Error", error)
    }
}

button.addEventListener("click", async () =>{
    //Disable Button
    button.disabled=true
    //PICTURE in PICTURE
    await videoElement.requestPictureInPicture();
    //Enbale Button
    button.disabled=false

});

selectMediaStream()