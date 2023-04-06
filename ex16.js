let a = [];
for (let i = 0; i < 6; i++) {
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++) {
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);

let check = true;
for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        if (a[i][j] % 2 == 1){
            check = false;
            break;
        }
    }
}
if (check == true){
    console.log(("Mảng không có số lẻ"));
} else {
    console.log(("Mảng có số lẻ"));
}