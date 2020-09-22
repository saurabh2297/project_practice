

//function to clear values after each use
function clr(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    }

//function to count occurance of a element in array
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//function to hide result box
function hide(){
    document.getElementById('result').style.display = 'none';
}

//implementing love calculator algo

function cal(){
    val1 = document.getElementById('input1').value;
    val2 = document.getElementById('input2').value;

    val1 = val1.replace(/\s+/g, '')
    val2 = val2.replace(/\s+/g, '')

    if(val1.length===0 || val2.length===0){
        alert("Please enter both values");
        return ;
    }


   var comb = val1+val2;  
   comb = comb.split("")
   var un_str = new Set(comb);
   un_str = Array.from(un_str)
   var count = []
   for(let i=0;i<un_str.length;i++){
    console.log(un_str[i])
    var cnt = countOccurrences(comb,un_str[i]);
    count.push(cnt)
   }

   count = count.join("");

   var res_str = "";
   while(count.length>=2){
       var first = parseInt(count[0]);
       var last = parseInt(count[count.length-1])
       res_str += first+last
       count = count.slice(1,count.length-1)
   }

   while(parseInt(res_str)>100){
   res_str = (parseInt(res_str[0])+parseInt(res_str[2])).toString()+res_str[1]
   }

   document.getElementById('result').value = val1+" "+res_str+"% loves "+val2;
   document.getElementById('result').style.display = 'block';
   clr();

   setTimeout(hide, 7000);
}
