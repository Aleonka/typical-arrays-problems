exports.min = function min (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
let k = array[0];
for (let i = 1; i < array.length; i++) {
if (k > array[i]) {
k =  array[i];
}
}
  return k;
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
  let j = array[0];
  for (let i = 1; i < array.length; i++) {
  if (j < array[i]) {
  j =  array[i];
  }
  }
    return j;
  }


exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
  let summa = 0;
  for (let i = 0; i < array.length; i++) {
summa = summa + array[i];
  }
  return summa / array.length;
}
