function zeroDigit(num) {
    return num > 9 ? num : `0${num}`;
}

export function formatTime(time) {
    const minutes = zeroDigit(Math.floor(time / 60));
    const seconds = zeroDigit(Math.floor(time % 60));

    return `${minutes}:${seconds}`;
}
