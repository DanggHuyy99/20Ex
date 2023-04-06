let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 10);
}
for (let i = 0; i < 10; i++) {
    PrimeNumber(a[i]);
}
console.log(a);
function PrimeNumber(a) {
    let count = 0;
    let isPrime = false;
    if (a == 0) {
        console.log(a + ' không phải số nguyên tố');
    } else
        for (let j = 1; j <= a; j++) {
            if (a % j == 0) {
                count++;
            }
        }
    // console.log("count : " + count);
    if (count == 2) {
        console.log(a + " là số nguyên tố");
    } else {
        console.log(a + ' không phải số nguyên tố');
    }
}
