export default function addCommas(num) {
    var str = num.toString();
    var result = '';
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
      if (j % 3 === 0 && j !== 0) {
        result = ',' + result;
      }
      result = str.charAt(i) + result;
    }
    return result;
  }