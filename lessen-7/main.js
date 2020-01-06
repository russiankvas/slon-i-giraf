function main() {
    let list = create(2007);
    list.hash = calc_hash(list.data, list.data % 13);
    
    let elem = create(208);
    list = add_elem(list, elem);

    elem = create(105);
    list = add_elem(list, elem);
    
    console.log(list); 
}

function create(data){
     return {
      data,
      hash: 0,
      prev: 0
    }
}

function add_elem(list, elem) {
   elem.hash = calc_hash(list.hash, elem.data);
   elem.prev = list;
   return elem;
   
}

function calc_hash(n_1, n_2) {
  return (1 + n_1*n_2) % (1 + n_1 + n_2);
}