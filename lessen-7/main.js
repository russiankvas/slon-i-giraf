function main() {
    let elem = create('Slon', 'Giraf', 6);
    elem.hash = BigInt(6467);
    let blockchain = [elem];
    console.log(blockchain[0]);
    
    elem = create('Bora', 'Mikhael', 30000);
    blockchain.unshift(find_hash(blockchain, elem));
    console.log(blockchain[0]);

    elem = create('Dasha', 'Vadim', 100);
    blockchain.unshift(find_hash(blockchain, elem));
    console.log(blockchain[0]);
}

function create(from, to, amount) {
     return {
      data: {
	from,	
	to,
	amount
      },
      hash: 1n
    }
}

function find_hash(blockchain, elem) {
   let a = BigInt(parseInt(elem.data.from, 36));
   let b = BigInt(parseInt(elem.data.to, 36));
   let c = BigInt(elem.data.amount);
   let n = (a + b + c);

   let res = calc(blockchain[0].hash, n, elem.hash);
   
   while (res !== BigInt(1e+6)) {
     elem.hash += 1n;
     res = calc(blockchain[0].hash, n, elem.hash);
   }

   return elem;
}

function calc(n_1, n_2, n_3) {
  return (1n + n_1 * n_2 + n_3) % (1n + n_1 + n_2)
}
