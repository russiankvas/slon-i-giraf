function main() {
    // problem_1(5, 6, 9, 3, 13);
    problem_2(250, 247, 2);
}

function problem_1(a, b, c, d, e) {
    let s_1 = d*b/2;
    let s_2 = (d+c-a)*(e-b);
    let s_3 = e*(d+c);

    console.log('S1= ' + s_1 + ' S2= ' + s_2 + ' S3= ' + s_3 + ' S= S3-S2-S1 = ' + (s_3 - s_2 - s_1));
}

function problem_0() {
    console.log("Привет от Слона и жирафа!");

   let a = 56;
   let b = 25;
   console. log('плoщадь прямоугольника со сторонами ' + a + ' и ' + b + ' = ' + a*b); 

   console. log('а периметр этого прямоугольника равен ' + (a*2 + b*2));

   a = 3;
   b = 2;
   let c = 4;
   let h = 6;
   console.log('периметр треугольника со сторонами ' + a + ', ' + b + ' и ' + c + ' = ' + (a+b+c));
   console.log('а площадь равна ' + (a*h/2))
}
 
function problem_2(a, b, c) {
   console.log('a = ' + a + ' b = ' + b +' c = ' + c);   
   
   if (a > b + c) {
       console.log('ОШИБКА: а больше чем b+c');
       return;
   }

   if (b > a + c) {
       console.log('ОШИБКА: b больше чем a+c');
       return;
   }

   if (c > b + a) {
       console.log('ОШИБКА: c больше чем b+a');
       return;
   }

   console.log('треугольник существует')   
}