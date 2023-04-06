let a = [];
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * 100);
}
console.log(a);
for (let i = 0; i < 10; i++){
    if (a[i] % 3 == 0){
        swap(a, i)
    }
}
function swap(a, i){
    b = a[i];
    for(let c = i; c > 0; c--){
        a[i] = a[i-1]
    }
    a[0] = b
}
console.log(a);