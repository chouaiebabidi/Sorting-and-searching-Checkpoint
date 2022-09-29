Array.prototype.insert = function (index, ...items) {
  this.splice(index, 0, ...items);
};
let a = [3, 2, 1, 10, 5, 4, 6, 8, 9];
a.sort(function (a, b) {
  return a - b;
});
let b = 104;
for (let i = 0; i < a.length; i++) {
  if (b < a[i]) {
    a.insert(i, b);
    break;
  }
}

console.log(a);
