

function solution(str){
    //set count for while loop
    let i = 0
    //turns string into arr
    let  strArr = str.split('');
    //empty array to hold converted array
     let  coupled = []
     // checks to see of string is odd
    if (strArr.length % 2 != 0){
      //add charcter if odd
      strArr.push('_')
    }
    //couples old array into new
    while (i< strArr.length){
      coupled.push(strArr[i] + strArr[i + 1])
      i += 2
    }
      return coupled 
  }