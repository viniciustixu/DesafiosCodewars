/* Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u".

Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

Examples
"add" ==> 1
"Dad" ==> 1
"aeiou" ==> 0
"sillystring" ==> 7
"abcdefghijklmnopqrstuvwxyz" ==> 21
"Count my unique consonants!!" ==> 7 */

function countConsonants(str) {
    let emLC = str.toLowerCase()
    let apenasVogais = emLC.replace(/[^bcdfghjklmnpqrstvwxyz]+/g, "")
    let result = ''
    
    for (let i = 0; i < apenasVogais.length; i++) {
      if (result.indexOf(apenasVogais[i]) === -1) {
        result += apenasVogais[i]
      }
    }  
    
    
    return result.length
  }

console.log(countConsonants('abracadabra')) // expect 5
