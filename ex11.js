let arr = [1, 24, 5, 24, 1];
let check = false;
// function palindrome(a){
//     a = [];
//     let b = a.split('');
//     let len = b.length;
//     for (let i = 0; i < (len / 2); i++){
//         if (b[i] != b[len - 1 - i]){
//             console.log("mảng k dối xứng");
//         }
//     }
//     console.log("mảng đối xứng");
// }
// palindrome(arr);
function palindrome() {
    for (let i = 0; i < (arr.length/2); i++) {
        if (arr[i] === (arr[arr.length - 1 - i])) {
            check = true;
        } else {
            check = false;
            return console.log("Mảng không đối xứng");
        }
    }
    if (check == true){
        console.log("mảng đối xứng");
    } else {
        console.log(("Mảng không đối xứng"));
    }
}
palindrome(arr);