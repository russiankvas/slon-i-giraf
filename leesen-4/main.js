let is_x = true;
 let end_game = false;
let arr = [['','',''],['','',''],['','','']];


function step (k) {
  if (end_game) { return; }

  const char_x = '✕';
  const char_o = '◯';


  let i = Math.floor(k / 3);
  let j = k % 3;

  if (arr[i][j] !== '') {
    return;
  }

  arr[i][j] = (is_x ? char_x : char_o);
  document.getElementById(k).innerHTML = arr[i][j]
 
  //Проверка горизанталей
  for (let i = 0; i < 3; ++i) {
    let flag_o = true;
    let flag_x = true;
    
    for (let j = 0; j < 3; ++j) {
      flag_x &= (arr[i][j] === char_o);
      flag_o &= (arr[i][j] === char_x);
    };

    if (flag_o) {
      set_win('HOR', i);
      return;
    };

    if (flag_x) { 
      set_win('HOR', i);
      return;
    };
  };

    //Проверка вертикалей 
  for (let j = 0; j < 3; ++j) {
    let flag_o = true;
    let flag_x = true;

    for (let i = 0; i < 3; ++i) {
      flag_x &= (arr[i][j] === char_o);
      flag_o &= (arr[i][j] === char_x);
    };

    if (flag_o) {
      set_win('VER', j);
      return;
    };

    if (flag_x) { 
      set_win('VER', j);
      return;
    }; 
  };

    //проверка глав диагонали 
    let flag_o = true;
    let flag_x = true;
    
    for (let i = 0; i < 3; ++i) {
      flag_x &= (arr[i][i] === char_o);
      flag_o &= (arr[i][i] === char_x);
    };

    if (flag_o) {
      set_win('MDG');
      return;
    };

    if (flag_x) { 
      set_win('MDG');
      return;
    };
    flag_o = true;
    flag_x = true;
    
    for (let i = 0; i < 3; ++i) {
      flag_x &= (arr[2-i][i] === char_o);
      flag_o &= (arr[2-i][i] === char_x);
    };

    if (flag_o) {
      set_win('SDG');
      return;
    };

    if (flag_x) { 
      set_win('SDG');
      return;
    };
   let flag = true
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
    
    document.getElementById("btn").removeAttribute("disabled");
    end_game = true;
}

function set_draw() {
    for (let k = 0; k < 9; ++k) {
        document.getElementById(k).classList.add("draw");
    }
    
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
}	