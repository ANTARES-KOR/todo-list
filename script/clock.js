const clockTitle = document.querySelector(".clock");

function getTime() {
    const date = new Date();
    const hours24 = date.getHours();
    const minute = date.getMinutes();
    clockTitle.innerText = `${hours24 < 10 ? `0${hours24}` : hours24}:${
        minute < 10 ? `0${minute}` : minute
    }`;

    printTimeMessage(hours24);
}
function printTimeMessage(currentTime) {
    const timeMessageTitle = document.querySelector(".time-message");
    if (currentTime >= 6 && currentTime < 11) {
        timeMessageTitle.innerText = "좋은 아침이네요.";
    } else if (currentTime >= 11 && currentTime < 14) {
        timeMessageTitle.innerText = "기다리던 점심시간! 식사 맛있게 하세요.";
    } else if (currentTime >= 14 && currentTime < 16) {
        timeMessageTitle.innerText =
            "식사는 맛있게 하셨나요? 이제 다시 힘내봐요!";
    } else if (currentTime >= 16 && currentTime < 18) {
        timeMessageTitle.innerText = "퇴근이 얼마 남지 않았어요. 영차영차!";
    } else if (currentTime >= 18 && currentTime < 23) {
        timeMessageTitle.innerText =
            "기다리던 저녁시간이 돌아왔네요. 이제 무얼 하실 계획이신가요?";
    } else if (currentTime >= 23 || currentTime < 6) {
        timeMessageTitle.innerText = "하루 동안 고생 많았어요. 잘 자요 :)";
    }
}

function init() {
    getTime();
    setInterval(getTime, 100);
}
init();
