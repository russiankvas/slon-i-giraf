function main () {
  console.log(average([2,57,4]));
}

function average(arr) {
  let m = 0;
  for (let i = 0; i < arr.length; ++i) {
    m += arr[i];
  }
	
  return (m / arr.length);
}

function example() {
    arr = [12, 13, 2.5 ,5]

   console.log('числа в масиве ' + arr)
   console.log('чисел в масиве ' + arr.length)

   console.log('первое число в массиве ' + arr[0])
   arr[2] = [1, 2, 3]
   console.log('изменим второе число в масиве на масив ' + arr[2])
 
   console.log('посмотрим весь масив' + arr)
   arr.push(23)
   console.log('добавим к масиву число 23 ')
   console.log('посмотрим на масив ещё раз ' + arr)
   arr.pop()
   console.log('уберём последнее число и посмотрим на массив ' + arr)
  arr.shift()
   console.log(arr)
   arr.unshift(3)
   console.log(arr)


}


