var numberWord = function(numbers){
  var numberArray = numbers.split("");
  var lessThanTwenty = {0: "", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven",
                        8:"eight", 9:"nine", 10: "ten",11:"eleven", 12:"twelve", 13:"thirteen",
                        14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18: "eighteen", 19:"ninteen"}
  var tens = {1: "ten", 2:"twenty", 3:"thirty", 4:"forty",5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninty"}
  var hundreds = {1:"hundred", 2:"two hundred", 3:"three hundred",
                  4:"four hundred", 5:"five hundred", 6:"six hundred",
                  7:"seven hundred", 8:"eight hundred", 9:"nine hundred"}
  var result;
  var empty = [];

  if (numbers <= 19){
    result = lessThanTwenty[numbers];
  } else if ((numbers % 10 === 0) && (numbers <= 99)){
    result = tens[numberArray[0]];
  } else if (20<= numbers && numbers <= 99){
    result = (tens[numberArray[0]]  + " " + lessThanTwenty[numberArray[1]]);
  } else if (100 <= numbers && numbers <= 999){
    result = (hundreds[numberArray[0]] + " " + tens[numberArray[1]]  + " " + lessThanTwenty[numberArray[2]]);
  }
    return result;
};










  // numberArray.forEach(function(numberArray1){
  //   if (numberArray.length = 1){
  //     result = empty.push(singles[numbers]);
  //   } else if (numberArray.length = 2){
  //     result = empty.push(tens[numberArray[0]], singles[numberArray[1]])
  //   }

  // });
  // return empty.join();
