let a = [];
for (let i = 0; i < 10; i++){
    a[i] = Math.floor(Math.random() * (100 - 0 + 1) - 0);
}
console.log(a);
for (let i = 0; i < 10; i++){
    perfect_square(a[i]);
}

function perfect_square(a){
    let is_square = 0;
    let i = 0
    while (i <= a){
        if (Math.pow(i, 2) == a){
            is_square = 1;
            break;
        }
        i++;
    }
    if (is_square == 1){
        console.log(a + "là số chính phương");
    }
    // return is_square;
}

