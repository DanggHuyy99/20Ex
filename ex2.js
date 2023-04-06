let a = [];
let total = 0;
let count = 0;
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * (100 + 50 + 1) - 50 );
}
console.log(a);
for (let i = 0; i < 10; i++){
    if (a[i] >= 0){
        count++;
        total = (total + a[i]);
    }
}
ave = total / count;
console.log(ave);