let a = [];
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * (100 - 0 + 1) - 0);
}
console.log(a);
for (let i = 0; i < 10; i++){
    if (a[i] > Math.abs(a[i+1])){
        console.log(a[i]);
    }
}