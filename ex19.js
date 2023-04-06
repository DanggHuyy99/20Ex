let a = [];
for (let i = 0; i < 6; i++) {
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++) {
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);
let max = 0;

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        if (a[i][j] % 2 == 0){
            if (a[i][j] > max){
                max = a[i][j];
            }
        }
    }
}
console.log("Số chẵn lớn nhất trong mảng là " + max);