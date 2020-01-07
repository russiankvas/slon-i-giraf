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
      hash: 1n,
      salt: 1n,
      prev: 0
    }
}

function add_elem(list, elem) {

   let min = 1e+5;
   let max = 1e+6;
   let a = BigInt(parseInt(elem.data.from, 36));
   let b = BigInt(parseInt(elem.data.to, 36));
   let c = BigInt(elem.data.amount);
   let n = (a + b + c);

   elem.hash = calc_hash(list.hash, n, elem.salt);
   
   while ((elem.hash < min) || (max < elem.hash)) {
     elem.salt += 1n;
     elem.hash = calc_hash(list.hash, n, elem.salt);
   }

   elem.prev = list;
   return elem;
}

function calc_hash(n_1, n_2, salt) {
  return (1n + n_1 * n_2 + salt) % (1n + n_1 + n_2)
}
