let a = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 10);
}
console.log(a);
for (let i = 0; i < 10; i++) {
    if (a[i] % 2 == 0 && a[i+1] % 2 == 0){
        count++;
    }
}
console.log("Số lượng phần tử kề nhau mà cả 2 cùng chẵn là: " + count);