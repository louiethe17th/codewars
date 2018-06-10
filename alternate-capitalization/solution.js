function capitalize(s){
    var even = s.split('');
    var odd = s.split('');
    
    for (var i in even){
      if (i % 2 === 0){
      var letter = even[i]
      evenUpper = letter.toUpperCase()
      even.splice(i, 1, evenUpper)
      } else {
        var letter = odd[i]
        oddUpper = letter.toUpperCase()
        odd.splice(i, 1, oddUpper)
    
      }
    }
    
    var arr = []
      arr.push(even.join(''));
      arr.push(odd.join(''));
      return arr
    }