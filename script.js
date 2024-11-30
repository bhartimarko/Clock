
setInterval(() => {
    
    const element = document.querySelector(".h1-clock");
    const sound = document.querySelector('audio');

    const time = new Date();
    
    const option = {
    timeZone : 'Asia/Kolkata',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit'
    }

    element.textContent = time.toLocaleTimeString('EN-US'.option);
    sound.play();

}, 1000);
