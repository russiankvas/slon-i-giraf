function main() {
    let list = create('slon', 'giraf', 6);
    
    let elem = create('Bora', 'Mikhael', 30000);
    list = add_elem(list, elem);

    elem = create('Dasha', 'Vadim', 100);
    list = add_elem(list, elem);

    console.log(list); 
}

function create(from, to, amount) {
     return {
      data: {
	from,	
	to,
	amount
      },
      hash: 0,
      prev: 0
    }
}

function add_elem(list, elem) {
   let a = parseInt(elem.data.from, 36);
   let b = parseInt(elem.data.to, 36);
   let n = (a + b + elem.data.amount)
   elem.hash = calc_hash(list.hash, n);
   elem.prev = list;
   return elem;
}

function calc_hash(n_1, n_2) {
  return (1 + n_1*n_2) % (1 + n_1 + n_2);
}
