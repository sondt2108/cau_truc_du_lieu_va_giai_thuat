
function showMessage(message,n){
     
      b = [message];
     for (i = 1; i < n; i++) {
        b.push(message);        
     }
     return b;
}

function sum(n) {
   var tong = 0;
   for (i = 1; i <= n; i++) {
      tong = tong +i;
      
   }
   
   return tong;
}

function sumAToB(a,b) {
   var tong = 0;
   for (i = a; i <= b; i++) {
      tong = tong +i;
      
   }
   
   return tong;
}

function sumLe(a,b) {
   var tong = 0;
   for (i = a; i <= b; i++) {
      if (i%2 !=0) {
         tong = tong +i;
      }
      
      
   }
   
   return tong;
}

function soLeNN(n){
   var soHienTai = 1;
   var danhSachSoChan = new Array();
   while (danhSachSoChan.length < n) {
       if (laSoLe(soHienTai) == true) {
           danhSachSoChan.push(soHienTai);
       }
       soHienTai = soHienTai + 1;
   }
   return danhSachSoChan;
}

function laSoLe(number) {
   if(number == 0)
       return false;
   for (var i = 2; i < number; i++) {
       if (number % 2 == 0)
           return false;
   }
   return true;
}

function soLeMToN(m,n){
   
   var danhSachSoChan = new Array();
   while (danhSachSoChan.length < n) {
       if (laSoLe(m) == true) {
           danhSachSoChan.push(m);
       }
       m = m + 1;
   }
   return danhSachSoChan;
}

function laSoLe(number) {
   if(number == 0)
       return false;
   for (var i = 2; i < number; i++) {
       if (number % 2 == 0)
           return false;
   }
   return true;
}


function kiemTraSNT(n)
{
    
    var flag = true;
 
    
    if (n < 2){
        flag = false;
    }
    else{
        
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    if (flag == true){
        return n + " là số nguyên tố ";
    }
    else{
      return n + " không phải là số nguyên tố ";
    }
}



function soNT(n) {
    
   var m = 2;
   var listSNT = new Array();
   while (listSNT.length < n) {
       
       if (KTSNT(m) == true) {
         listSNT.push(m);
       }


       m = m + 1;
   }
   return listSNT;
}

function KTSNT(number) {
   if (number < 2)
       return false;

   for (var i = 2; i < number; i++) {
       if (number % i == 0)
           return false;
   }
   return true;
}

function soNTMtoN(from,amount) {
    
   
   var listSNT = new Array();
   while (listSNT.length < amount) {
       
       if (KTSNT(from) == true) {
         listSNT.push(from);
       }


       from = from + 1;
   }
   return listSNT;
}

