function tinhTong(a, b) {
    return a + b;
}

function hieu(a,b) {
    return a - b;
}

function nhan(a,b) {
    return a * b;
}

function thuong(a, b) {
    
        return a / b;
    
}

function chia(n1, n2) {
    if(n2 == 0){
        return n1 + ' Không chia được cho 0';
    }else{
        return n1/n2;
    }
}

function chiaHaiSo(n1,n2) {
    if(n1 == 0){
        return n1 + " chia mọi số đều bằng 0";
    }else{
        return n1/n2;
    }
}

function binhPhuong(a) {
    return a*a;
}

function binhPhuong2So(a,b) {
    return "bình phương của "+a+" là:"+a*a + ", bình phương của "+b+" là:"+b*b;
}

function timSoLon(a,b) {
    if(a > b){
        return a;
    }else if(a<b){
        return b;
    }else{
        return a + "=" +b;
    }
}

function timSoBe(a,b) {
    if(a < b){
        return a;
    }else if(a>b){
        return b;
    }else{
        return a + "=" +b;
    }
}

function tinhTB(a,b) {
    return (a+b)/2
}

function chiaLayDu(a,b) {
    return a%b;
}

function kiemTraChiaHet(a, b) {
    if(a % b == 0){
        return a + " Chia hết cho "+ b +" Kết quả :"+ a/b;
    }else{
        return "Không chia hết!";
    }
}

function ktChiaHet(a,b) {
    if(a %b == 0){
        return a + " Chia hết cho "+ b;
    }else {
        return "Không chia hết";
    }
}

function ktChia(a,b) {
    if(b % a == 0){
        return a + " Chia hết cho "+ b;
    }else {
        return "Không chia hết!";
    }
}

function chuViHCN(a,b) {
    return (a+b)*2;
}

function dienTichHCN(a,b) {
    return a*b;
}

function chuViHinhTron(a) {
    return 2*a*3.14;
}

function dienTichHinhTron(a) {
    return a*a*3.14;
}

// chuổi

function noiChuoi(s1, s2) {
    
    return s1 +" "+s2;
}

function noiChuoiS(s1, s2,s3,s4,s5) {
    var s = s1 +" "+ s2 +" "+ s3+" "+s4+" "+s5;
    return s;
}

function noiChuoiInHoa(s1, s2,s3,s4,s5) {
    var s = s1 +" "+ s2 +" "+ s3+" "+s4+" "+s5;
    var c= s.toUpperCase();
    return c ;
}

function kt(s1,s2) {

    var s = s1.includes(s2);

    return s;
}

function tinhDoDaiChuoi(s1, s2,s3,s4,s5) {
    var s = s1 + s2 + s3 + s4 + s5;
    var e = s.length;
    return e;
}

function catChuoi(s1, s2,s3,s4,s5) {
    var s = s1 + s2 + s3 + s4 + s5;
    var f = s.substring(1,3);
    return f;
}


function ktChuoi(s1, s2, s3, s4, s5) {
    
    var p = s1.includes(s5);

    var t = s2.includes(s5);
    var y = s3.includes(s5);
    var u = s4.includes(s5);

     if(p == true){
         return "chuổi "+s1+" có tồn tại trong chuổi "+ s5;
     } if(p == false){
         return "chuổi "+s1+" không tồn tại trong chuổi "+ s5;
     }if(t == true){
         return "chuổi "+s2+" có tồn tại trong chuổi "+ s5;
     } if(t == false){
         return "chuổi "+s2+" không tồn tại trong chuổi "+ s5;
     } if(y == true){
        return "chuổi "+s3+" có tồn tại trong chuổi "+ s5;
    } if(y == false){
        return "chuổi "+s3+" không tồn tại trong chuổi "+ s5;
    }

     ///
    
     
    

    

}