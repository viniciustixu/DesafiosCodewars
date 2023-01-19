/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */

function past(h, m, s){
    let hToMilisecond = h * 3600000
    let mToMilisecond = m * 60000
    let sToMilisecond = s * 1000
    
    return hToMilisecond + mToMilisecond + sToMilisecond
}

console.log(past(1, 2, 3))