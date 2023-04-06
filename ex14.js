let a = [];
for (let i = 0; i < 6; i++){
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++){
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);

let check = true;
for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length; j++ ){
        if (a[i][j] >= 0){
            check = true
        } else {
            check = false;
            break;
        }
    }
    if (check == false){
        break;
    }
}
console.log(check);
if (check == true){
    console.log("mảng " + a + " dương");
} else {
    console.log("mảng " + a + " có số âm");
}