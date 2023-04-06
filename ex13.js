let a = [1, 2, 4, 5, 6, 7];
let b = [2, 4, 5, 6];
let check = false;

for (let i = 0; i < b.length; i++){
    for (let j = 0; j < a.length; j++){
        if (b[i] == a[j]){
            check = true;
            break;
        } else {
            check = false;
        }
    }
}
console.log(check);
if (check == true){
    console.log("Mảng " + b + " nằm trong mảng " + a);
} else {
    console.log("Mảng " + b + " không nằm trong mảng " + a);
}