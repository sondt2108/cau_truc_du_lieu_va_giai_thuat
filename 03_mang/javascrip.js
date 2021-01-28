
function getLessThan(n) {
    var number = [];
    for (let i = 0; i < n; i++) {
        number.push(i);
    }
    return number;
}

function getOddlessThan(n) {
    var number = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 != 0) {
            number.push(i);
        }
    }
    return number;
}

var arr = ["bóng chuyền", "bóng rổ", "bóng đá"];
var chuoiCanTim = "bóng rổ";

function findFirst() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            return i + 1;
        }
    }
}

function findLast() {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == chuoiCanTim) {
            return i + 1;
        }
    }
}

var array = ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"];

function find() {
    var number = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == chuoiCanTim) {
            number.push(i + 1);
        }
    }
    return number;
}

chuoiCanThem = "bóng rổ";

function add() {
    arr.push(chuoiCanThem);
    return arr;
}


function addIfNotExist(arr, chuoiCanThem) {
    if (arr.indexOf(chuoiCanThem) < 0) {
        arr.push(chuoiCanThem);
    }
    return arr;
}

function Delete(arr, chuoiCanXoa) {
    return arr.filter(
        function (dele) { 
            return (dele !== chuoiCanXoa);
        }
    )
}