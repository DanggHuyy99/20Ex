let a = [];
for (let i = 0; i < 6; i++) {
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++) {
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);
let count = 0;

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        if (a[i][j] % 2 != 0){
            count++;
        } else {
            console.log("Số chẵn đầu tiên nằm ở vị trí " + " a[" + i + "]" + "[" + j + "]");
            break;
        }
    }
    break;
}