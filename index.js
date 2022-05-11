function shout(somestring) {
    return somestring.toUpperCase();
}

function whisper(somestring) {
    return somestring.toLowerCase();
}

function logShout(somestring) {
    console.log(somestring.toUpperCase());
}

function logWhisper(somestring) {
    console.log(somestring.toLowerCase());
}

function sayHiToHeadphonedRoommate(somestring) {
    if (somestring === whisper(somestring))
    {
        return "I can't hear you!"
    }
    else if (somestring === shout(somestring)) {
        return "YES INDEED!"
    }
    else if (somestring == "Let's have dinner together!") {
        return "I would love to!"
    }
}