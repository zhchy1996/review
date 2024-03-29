function throttle(func, wait) {
  let timer = null;
  return function (...arg) {
    if(!timer) {
      func(...arg);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  }
}

function print(str1, str2) {
  console.log(str1, str2);
}

const run = throttle(print, 3000);
run('a', 'b');