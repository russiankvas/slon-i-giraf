is_x = true;
let end_game = false;
let win_x = 0;
let win_o = 0;

let arr = [['','',''],['','',''],['','','']];


function step (k) {
  if (end_game) { return };

  const char_x = '✕';
  const char_o = '◯';


  let i = Math.floor(k / 3);
  let j = k % 3;

  if (arr[i][j] !== '') {
    return;
  }

  const symb = (is_x ? char_x : char_o);

  arr[i][j] = symb;
  document.getElementById(k).innerHTML = symb;

  let flag

  //Проверка горизанталей
  for (let i = 0; i < 3; ++i) {
    flag = true
    
    for (let j = 0; j < 3; ++j) {
      flag &= (arr[i][j] === symb);
    };

    if (flag) {
      set_win('HOR', i);
      return;
    };

  };

    //Проверка вертикалей 
  for (let j = 0; j < 3; ++j) {
   flag = true

    for (let i = 0; i < 3; ++i) {
      flag &= (arr[i][j] === symb);
    };

    if (flag) {
      set_win('VER', j);
      return;
    };
  
  };

    //проверка глав диагонали 
    flag = true
    
    for (let i = 0; i < 3; ++i) {
      flag &= (arr[i][i] === symb);
    };

    if (flag) {
      set_win('MDG');
      return;
    };
   
    flag = true;

    
    for (let i = 0; i < 3; ++i) {
      flag &= (arr[2-i][i] === symb);
    };

    if (flag) {
      set_win('SDG');
      return;
    };

   flag = true
   for (let i = 0; i < 3; ++i) {
     for (let j = 0; j < 3; ++j){ 
       flag &= ( arr [i] [j] !== '');
     }
   }
  if (flag) {
  set_draw();
  return;
}

  is_x = !is_x;
}

function set_win(type, k) {
    switch (type) {
        case "HOR": {
            for (let j = 0; j < 3; ++j) {
                document.getElementById(3*k + j).classList.add("win");
            }
        } break;
        
        case "VER": {
            for (let i = 0; i < 3; ++i) {
                document.getElementById(3*i + k).classList.add("win");
            }
        } break;
        
        case "MDG": {
            for (let i = 0; i < 3; ++i) {
                document.getElementById(4*i).classList.add("win");
            }
        } break;
        
        case "SDG": {
            for (let i = 0; i < 3; ++i) {
                document.getElementById(2*i + 2).classList.add("win");
            }
        } break;
    }
    if (is_x) {
      ++win_x
   document.getElementById('win_x').innerHTML = win_x
} else {
      ++win_o
   document.getElementById('win_o').innerHTML = win_o
}
   

    let str = 'Победили ' + (is_x ? 'крестики' : 'нолики') + '!';
     setTimeout(() => alert (str), 100);

    document.getElementById("btn").removeAttribute("disabled");
    end_game = true;
}

function set_draw() {
    for (let k = 0; k < 9; ++k) {
        document.getElementById(k).classList.add("draw");
    }

    setTimeout(() => alert ('Ничья =( '), 100);
    
    document.getElementById("btn").removeAttribute("disabled");
    end_game = true;
}

function start_game() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            let k = 3*i + j;
            let elem = document.getElementById(k);
            elem.classList.remove("win", "draw");
            elem.innerHTML = "";
            arr[i][j] = "";
        }
    }
    
    document.getElementById("btn").setAttribute("disabled", true);
    end_game = false;
    is_x = !is_x;
}	
