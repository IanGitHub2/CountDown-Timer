let countDown;

function timer(seconds) {
    const now = Date.now()
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)

    countDown = setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000;

        if(secondsLeft < 0){
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderseconds = Math.floor(seconds % 60);
    console.log({minutes, remainderseconds});
}

