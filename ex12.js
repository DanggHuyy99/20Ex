let arr = [1, 23, 3, 4, 5];
let check = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
        check = true;
    } else {
        check = false;
        break;
    }
}
console.log(check);
if (check == true){
    console.log("Mảng tăng dần");
} else {
    console.log("Mảng không tăng dần");
}