function clr(){
    document.getElementById("result").value="";
    document.getElementById("input").value="";
    }

var unit=''
function callme(){
var sel = document.getElementById("Unit").selectedIndex;
unit = document.getElementsByTagName("option")[sel].value;

dis_unit(unit)
    }

function dis_unit(x){
    if(x =='kg'){
        document.getElementById("cnvto").value = 'Pounds';
    }
    else if(x =='cel'){
        document.getElementById("cnvto").value = 'Farenheit';
    }
    else if(x =='mtr'){
        document.getElementById("cnvto").value = 'Kilometers';
    }
    else if(x =='pnd'){
        document.getElementById("cnvto").value = 'Kilograms';
    }
    else if(x =='fnt'){
        document.getElementById("cnvto").value = 'Celcius';
    }
    else if(x =='yrd'){
        document.getElementById("cnvto").value = 'Sq. Feet';
    }
    else if(x =='feet'){
        document.getElementById("cnvto").value = 'Sq. Yards';
    }
    else{
        document.getElementById("cnvto").value = '';
    }
    
}

function solve(){
    x = document.getElementById("input").value;  
    if(unit =='kg'){
        document.getElementById("result").value = x*2.205;
    }
    else if(unit =='cel'){
        document.getElementById("result").value = (x * 9/5) + 32;
    }
    else if(unit =='mtr'){
        document.getElementById("result").value = x/1000;
    }
    else if(unit =='pnd'){
        document.getElementById("result").value = x/2.205;
    }
    else if(unit =='fnt'){
        document.getElementById("result").value = (x - 32) * 5/9;
    }
    else if(unit =='yrd'){
        document.getElementById("result").value = x*9;
    }
    else if(unit =='feet'){
        document.getElementById("result").value = x/9;
    }
    else{
        document.getElementById("result").value = '';
    }
}

