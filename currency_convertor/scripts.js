function clr(){
    document.getElementById("result").value="";
    document.getElementById("input").value="";
    window.location.reload()
    }

var curr1='from';
var curr2='to';
function callme(){
var sel = document.getElementById("curr1").selectedIndex;
curr1 = document.getElementsByTagName("option")[sel].value;
    }

function callme2(){
    var sel = document.getElementById("curr2").selectedIndex;
    curr2 = document.getElementsByTagName("option")[sel].value;
    check()
    }

function check(){
if(curr1==curr2){
    alert("Please select diffrent currencies")
    window.location.reload()
}
}

function solve(){
    x = document.getElementById("input").value;  

if(curr1=="ruppy"){
    if (curr2=="dollar"){
        document.getElementById("result").value = (x*0.014).toFixed(2);
    }
    else if(curr2=="yen"){
        document.getElementById("result").value = (x*1.43).toFixed(2);
    }
    else if(curr2=="pound"){
        document.getElementById("result").value = (x*0.011).toFixed(2);
    }
    else if(curr2=="euro"){
        document.getElementById("result").value = (x*0.012).toFixed(2);
    }
    else if(curr2=="franc"){
        document.getElementById("result").value = (x*0.013).toFixed(2);
    }
}

if(curr1=="dollar"){
    if (curr2=="ruppy"){
        document.getElementById("result").value = (x*73.57).toFixed(2);
    }
    else if(curr2=="yen"){
        document.getElementById("result").value = (x*105.43).toFixed(2);
    }
    else if(curr2=="pound"){
        document.getElementById("result").value = (x*0.78).toFixed(2);
    }
    else if(curr2=="euro"){
        document.getElementById("result").value = (x*0.86).toFixed(2);
    }
    else if(curr2=="franc"){
        document.getElementById("result").value = (x*0.93).toFixed(2);
    }
}

if(curr1=="yen"){
    if (curr2=="dollar"){
        document.getElementById("result").value = (x*0.0095).toFixed(2);
    }
    else if(curr2=="ruppy"){
        document.getElementById("result").value = (x*0.7).toFixed(2);
    }
    else if(curr2=="pound"){
        document.getElementById("result").value = (x*0.0074).toFixed(2);
    }
    else if(curr2=="euro"){
        document.getElementById("result").value = (x*0.0081).toFixed(2);
    }
    else if(curr2=="franc"){
        document.getElementById("result").value = (x*0.0088).toFixed(2);
    }
}

if(curr1=="pound"){
    if (curr2=="dollar"){
        document.getElementById("result").value = (x*1.27).toFixed(2);
    }
    else if(curr2=="yen"){
        document.getElementById("result").value = (x*134.39).toFixed(2);
    }
    else if(curr2=="ruppy"){
        document.getElementById("result").value = (x*93.92).toFixed(2);
    }
    else if(curr2=="euro"){
        document.getElementById("result").value = (x*1.09).toFixed(2);
    }
    else if(curr2=="franc"){
        document.getElementById("result").value = (x*1.18).toFixed(2);
    }
}

if(curr1=="euro"){
    if (curr2=="dollar"){
        document.getElementById("result").value = (x*1.17).toFixed(2);
    }
    else if(curr2=="yen"){
        document.getElementById("result").value = (x*122.84).toFixed(2);
    }
    else if(curr2=="ruppy"){
        document.getElementById("result").value = (x*85.84).toFixed(2);
    }
    else if(curr2=="pound"){
        document.getElementById("result").value = (x*0.91).toFixed(2);
    }
    else if(curr2=="franc"){
        document.getElementById("result").value = (x*1.08).toFixed(2);
    }
}

if(curr1=="franc"){
    if (curr2=="dollar"){
        document.getElementById("result").value = (x*1.17).toFixed(2);
    }
    else if(curr2=="yen"){
        document.getElementById("result").value = (x*122.84).toFixed(2);
    }
    else if(curr2=="ruppy"){
        document.getElementById("result").value = (x*85.84).toFixed(2);
    }
    else if(curr2=="pound"){
        document.getElementById("result").value = (x*0.91).toFixed(2);
    }
    else if(curr2=="euro"){
        document.getElementById("result").value = (x*1.08).toFixed(2);
    }
}    
}

