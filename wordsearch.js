const wordSearch = (letters, word) => { 
  
    let wordIsThere = false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log('horizontalJoin', horizontalJoin)
    for (l of horizontalJoin) {
      if (l.includes(word)) wordIsThere = true;
    } 


  let arr2 = [];
    for(let x = 0; x < letters[0].length; x++){
      let subArr =[];
      arr2.push(subArr);
    }
    for (i = 0; i < letters.length; i++) {
        for(let j =0; j < letters[0].length; j++ ){
          arr2[j][i] = letters[i][j];
        }
    }

    const verticalJoin = arr2.map(ls => ls.join(''))
    // console.log('horizontalJoin', horizontalJoin)
    for (l of verticalJoin) {
      if (l.includes(word)) wordIsThere = true;
    } 
    console.log(arr2);
    return wordIsThere;
    
  
}

module.exports = wordSearch