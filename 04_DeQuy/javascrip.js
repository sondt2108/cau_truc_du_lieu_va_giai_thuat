

function sum(n) {
    if (n <= 0) {
        return 0;
    }

    return sum(n-1) + n;
}

function giaiThua(n) {
    if (n<=0) {
        return 1;
    }

    return giaiThua(n-1)*n;
}

function fibonaci() {
    if (n <1) {
        return 0;
    }else if(n == 1){
        return 1;
    }

    return (fibonaci(n-1) * fibonaci(n-2));
}