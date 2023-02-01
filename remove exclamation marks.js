/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */



function removeExclamationMarks(s) {
    let result = s.replace(/!/gm, "")
    return result
}

console.log(removeExclamationMarks("bTpsV!dudmK!VBhDVKMVCJ mcgxk!zuEZQ!KkPXuDldO!!w"))
