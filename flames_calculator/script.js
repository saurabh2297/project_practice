function clr(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    }


function hide(){
    document.getElementById('result').style.display = 'none';
}


function cal(){
    val1 = document.getElementById('input1').value;
    val2 = document.getElementById('input2').value;
    
    val1 = val1.replace(/\s+/g, '')
    val2 = val2.replace(/\s+/g, '')

    if(val1.length===0 || val2.length===0){
        alert("Please enter both values")
    }
    //all to lowercase so that easy to compare
    var a1 = val1.toLowerCase().split("")
    var a2 = val2.toLowerCase().split("")

    //to remove the common characters
    for(let i=0;i<a1.length;i++){
        for(let j=0;j<a2.length;j++){
            if(a1[i]==a2[j]){
                a1.splice(i,1)
                i--;
                a2.splice(j,1)
                j--;
                break;
            }
        }
    }

    final_string=a1.concat(a2)
    //final_string is the array of characters left after removing all common character of both the names 

    var l = final_string.length
    var ar = ["Friends", "Lovers", "being Affectionate", "Married", "Enemy", "Siblings"]
    var stp=1;

        for(var x=6; x>1; x--)
        {
            var g=((l%x)+stp)-1;
            
            if(g>x)
            {
                g=g%x;
            }
            if(g==0)
            {
                g=ar.length;
            }
                ar.splice(g-1,1);
                stp=g;
        }
        
    res_str=ar.join("")

    document.getElementById('result').value = val1+" and "+val2+' will end as '+res_str;
    document.getElementById('result').style.display = 'block';

    clr();

    setTimeout(hide, 7000);
}