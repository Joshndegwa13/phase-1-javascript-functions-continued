// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
}

// Define wrapAdjective function
function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
}
