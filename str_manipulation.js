function manipulatedString(str) {
    const manipulatedString = str.toUpperCase();

    function logString() {
        console.log(`The manipulated string is ${manipulatedString}`);
    }
    return logString;
}

const callbackFunc = manipulatedString('hello world!');
callbackFunc();