var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
let obj = {
  name: "Mr.lee",
  Item: ["A4 Paper", "Ruler"],
  Qty: [5, 2],
  Price: [120, 25]
};
let obj2 = {
  name: "Mr.Yue",
  Item: ["Flash Drive", "A4 Paper"],
  Qty: [2, 3],
  Price: [130, 120]
};
let obj3 = {
  name: "Mr.San",
  Item: ["Flash Drive", "A4 Paper", "Ruler"],
  Qty: [2, 3, 1],
  Price: [130, 120, 100]
};
for (let j = 0; j < obj.Qty.length; j++) {
  sum1 += obj.Qty[j] * obj.Price[j];
  sum2 += obj2.Qty[j] * obj2.Price[j];
}
for (let i = 0; i<obj3.Qty.length; i++) {
  sum3 += obj3.Qty[i] * obj3.Price[i];
}
console.log(obj.name, sum1);
console.log(obj2.name, sum2);
console.log(obj3.name, sum3);