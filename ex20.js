let a = [];
for (let i = 0; i < 6; i++) {
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++) {
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);
let total = 0;
let max = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        total += +a[i][j];
    }
    console.log(total);
    for (k = 0; k < 6; k++) {
        if (total > max) {
            max = total;
            total = 0;
        } else {
            total = 0;
        }
    }
}
console.log("dòng có tổng lớn nhát là " + max);

