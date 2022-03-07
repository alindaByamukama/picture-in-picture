const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Asycn function --> prompt user to select media stream, then play
async function selectMediaStream() {
    try {
        const MediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = MediaStream
        videoElement.onloadedmetadata = ()=>{
            videoElement.play()
        }
    } catch (error) {
        console.log('Error here! ', error)
    }
}
// Button event listener
button.addEventListener('click', async () =>{
    // disabled button
    button.disabled = true
    // start picture in picture
    await videoElement.requestPictureInPicture()
    // enable button
    button.disabled = false
})
// On load
selectMediaStream()