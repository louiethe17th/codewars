function insertDash(num) {
    var numString = num.toString();
    var newNum = numString.split('');
   
    for (var i in newNum) {
      var x = i++;
   
      if (newNum[i] % 2 === 1 && newNum[x] % 2 === 1) {
        newNum.splice(i, 0, '-');
      }
    }
   
    newNum = newNum.join('');
    return newNum
   }