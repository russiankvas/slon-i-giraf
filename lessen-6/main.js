function main() {
  let node = create_node('Привет');
  let tree = node;
  
 for (let i = 0; i < 1024; ++i){
    node = create_node('Прив');
    add_node(tree, node);
  }
  console.log(height(tree))
  console.log(tree)
}

function count(tree) {
  if (tree === 0) {
    return 0;
  } else {
    return (1+ count(tree.L) + count (tree.R));
  }; 
}

function add_node(tree, node) {
  if (tree === 0) {
    tree = node;
    return;
  }  

  tree.count += 1;

  if (tree.L === 0) {
    tree.L = node;
    return;
  }

  if (tree.R === 0) {
    tree.R = node;
    return;
  }

  if (tree.L.count < tree.R.count) {
    add_node(tree.L, node);
  } else {
    add_node(tree.R, node);
  
  }
}

function create_node(data) {
  return {
    data,
    count: 0,
    L: 0,
    R: 0 
  }
}  

function height(tree) {
  if (tree === 0) {
    return 0;
  }
  return (1 + Math.max(height(tree.L),height(tree.R)));
}
