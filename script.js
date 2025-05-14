async function openCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }
    });
    const video = document.getElementById("video");
    video.srcObject = stream;
    video.style.display = "block";
    document.getElementById("caption").textContent = "Yes, it's YOU!";
  } catch (err) {
    alert("Camera access denied.");
  }
}