let a = [];
for (let i = 0; i < 6; i++) {
    a[i] = [Math.floor(Math.random() * (100 - 1 + 1) + 1)];
    for (let j = 0; j < 6; j++) {
        a[i][j] = [Math.floor(Math.random() * (100 - 1 + 1) - 3)];
    }
}
console.log(a);
let count = 0;
let sortdown = 0
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < 6; j++) {
        if (a[i][j] > a[i][j+1]) {
            count++;
        } else {
            count = 0;
            break;
        }
    }
    if (count == 5){
        sortdown ++;
    } 
}
console.log("Mảng có " + sortdown + " cột giảm dần");
