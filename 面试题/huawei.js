const tree = {
  data: '',
  left: null,
  right: null
}

const tree1 = {
  data: 'a',
  left: {
    data: 'b',
    left: 
    {
      data: 'd',
      left: null,
      right: null
    },
    right: {
      data: 'e',
      left: null,
      right: null
    },
  },
  right: {
    data: 'c',
    left: {
      data: 'f',
      left: null,
      right: null
    },
    right: {
      data: 'g',
      left: null,
      right: null
    }
  }

}
// 深度
const deep = (tree) => {
  if (tree === null) return 0;
  const leftNum = deep(tree.left);
  const rightNum = deep(tree.right);
  return leftNum > rightNum ? leftNum + 1 : rightNum + 1;
}

// 宽度
const width = (tree) => {
  if (tree === null) return 0;
  const queue = [];
  let maxNum = 1;
  let currentNum = 0;
  let lastNum = 1;
  queue.push(tree);
  while(queue.length !== 0) {
    while(lastNum > 0) {
      const node = queue.shift();
      lastNum--;
      if (node.left) {
        queue.push(node.left);
        currentNum++;
      }
      if (node.right) {
        queue.push(node.right);
        currentNum++;
      }
    }
    if (currentNum > maxNum) maxNum = currentNum;
    lastNum = currentNum;
    currentNum = 0;
  }
  return maxNum;
}

const jump = n => {
  if (n === 2) return 2;
  let arr = [1, 2];
  while (n-- > 2) {
    arr[1] = arr[0] + arr[1];
    arr[0] = arr[1] - arr[0]
  }
  return arr[1];
}
