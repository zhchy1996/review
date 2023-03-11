// 防抖
function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  }
}

function print() {
  console.log('a');
}
const run = debounce(print, 3000);
run();
run();
run();
run();
