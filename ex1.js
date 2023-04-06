let a = [];
let total = 0;
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * (100 - 0 + 1) - 0);
}
console.log(a);
for (let i = 0; i < 10; i++){
    if (a[i + 1] > a[i]){
        total += a[i+1];
    }
}
console.log(total);