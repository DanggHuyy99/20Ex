let a = [];
let count = 0;
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * (100 + 50 + 1) - 50 );
}
console.log(a);
for (let i = 0; i < 10; i++){
    if (a[i] % 7 == 0){
        count++;
    }
}
console.log(count);