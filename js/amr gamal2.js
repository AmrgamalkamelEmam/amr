
function  $(id)
{
    return document.getElementById(id);
}


function uc(){
    $("1").style.display="none";
    $("2").style.display="inline";
}
function login(){
    var x = $("un").value;
    var y = $("psw").value;
    
if(x.trim()!=""&&y.trim()!="")
    {
        alert("welcome back user : "+x);
        $("info").innerHTML="You are logged in as:<br><br>Username: <b>"+x+"</b><br>Password: <b>"+y+"</b>";
  $("ma").style.display="none";
  $("out").style.display="inline"; 
  $("mee").style.display="none";

    }

else if (x.trim()=="" && y.trim!="")
{
  alert ("please enter usermane");
}

else if (y.trim()=="" && x.trim!="")
alert ("please enter password ");

}

function logout(){
  $("un").value="";
  $("psw").value="";
  $("info").innerHTML="";
  $("out").style.display="none";
  $("ma").style.display="inline";
   $("mee").style.display="inline";

}



function  theme(checkbox)
{
    if(checkbox.checked)
    {

document.getElementById("hd").style.backgroundColor="gray";

var a = document.getElementsByTagName("a");
for (let i=0 ;i<19 ;i++)
     {

a[i].style.color="black";
    }

    document.getElementById("uu").style.backgroundColor="gray";
    document.getElementById("material-icons").style.color="black";

    document.getElementById("p1").style.backgroundColor="gray";
    document.getElementById("p2").style.backgroundColor="gray";
    document.getElementById("p3").style.backgroundColor="gray";
    document.getElementById("p4").style.backgroundColor="gray";
    document.getElementById("p5").style.backgroundColor="gray";
    document.getElementById("p6").style.backgroundColor="gray";
    document.getElementById("p7").style.backgroundColor="gray";
    document.getElementById("p8").style.backgroundColor="gray";
    document.getElementById("p9").style.backgroundColor="gray";
    document.getElementById("p10").style.backgroundColor="gray";
    document.getElementById("p11").style.backgroundColor="gray";
    document.getElementById("p12").style.backgroundColor="gray";
    document.getElementById("p13").style.backgroundColor="gray";
    document.getElementById("p14").style.backgroundColor="gray";


    document.getElementById("o1").style.color="gray";
    document.getElementById("o2").style.color="black";
    document.getElementById("o3").style.color="white";
    document.getElementById("o4").style.color="gray";
    document.getElementById("o5").style.color="white";



document.getElementById("form").style.backgroundColor="#beb9bb"


var m =document.getElementsByTagName("hr");

for(let i=0; i<2 ;i++)
{

    m[i].style.border="2px  solid   gray";
}


var l =document.getElementsByClassName("dd");

for(let i=0; i<2 ;i++)
{

    l[i].style.backgroundColor ="gray";
}


document.getElementById("form").style.width="450px";
document.getElementById("form").style.height="500px";

document.getElementById("rr").style.marginLeft="6px";


document.getElementById("p1").onmouseover=function(){
    this.style.backgroundColor="#dadada";
    }
    
    
    
    document.getElementById("p2").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
        
    document.getElementById("p3").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
        
    document.getElementById("p4").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
        
    document.getElementById("p5").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
        
    document.getElementById("p6").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
        
    document.getElementById("p7").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
        
    document.getElementById("p8").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
        
    document.getElementById("p9").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
    
        
        document.getElementById("p10").onmouseover=function(){
            this.style.backgroundColor="#dadada";
            }
    
            
    
        
    document.getElementById("p11").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }
    
    
    
    
        
        document.getElementById("p12").onmouseover=function(){
            this.style.backgroundColor="#dadada";
            }
    
    
        
            document.getElementById("p13").onmouseover=function(){
                this.style.backgroundColor="#dadada";
                }
    
                
    
        
    document.getElementById("p14").onmouseover=function(){
        this.style.backgroundColor="#dadada";
        }



        document.getElementById("i1").onmouseover=function(){
            this.style.backgroundColor="gray";
            }

            

        document.getElementById("i2").onmouseover=function(){
            this.style.backgroundColor="gray";
            }


            

        document.getElementById("i3").onmouseover=function(){
            this.style.backgroundColor="gray";
            }




    }

else{

    
document.getElementById("uu").style.backgroundColor="aliceblue";
    document.getElementById("material-icons").style.color="#4e9eff";

    document.getElementById("p1").style.backgroundColor="aliceblue";
    document.getElementById("p2").style.backgroundColor="aliceblue";
    document.getElementById("p3").style.backgroundColor="aliceblue";
    document.getElementById("p4").style.backgroundColor="aliceblue";
    document.getElementById("p5").style.backgroundColor="aliceblue";
    document.getElementById("p6").style.backgroundColor="aliceblue";
    document.getElementById("p7").style.backgroundColor="aliceblue";
    document.getElementById("p8").style.backgroundColor="aliceblue";
    document.getElementById("p9").style.backgroundColor="aliceblue";
    document.getElementById("p10").style.backgroundColor="aliceblue";
    document.getElementById("p11").style.backgroundColor="aliceblue";
    document.getElementById("p12").style.backgroundColor="aliceblue";
    document.getElementById("p13").style.backgroundColor="aliceblue";
    document.getElementById("p14").style.backgroundColor="aliceblue";


    document.getElementById("hd").style.backgroundColor="aliceblue";


    
var a = document.getElementsByTagName("a");
for (let i=0 ;i<19 ;i++){
    a[i].style.color="#3a6cf4";
}




document.getElementById("o1").style.color="#27a5df";
    document.getElementById("o2").style.color="aliceblue";
    document.getElementById("o3").style.color="aliceblue";
    document.getElementById("o4").style.color="#27a5df";
    document.getElementById("o5").style.color="aliceblue";



document.getElementById("form").style.backgroundColor="rgba(255,255,255,1)"


var m =document.getElementsByTagName("hr");

for(let i=0; i<2 ;i++)
{

    m[i].style.border="2px  solid   #c1c1c1";
}




var l =document.getElementsByClassName("dd");

for(let i=0; i<2 ;i++)
{

    l[i].style.backgroundColor ="#27a5df";
}

document.getElementById("form").style.width="400px";
document.getElementById("form").style.height="480px";


document.getElementById("rr").style.marginLeft="40px";




document.getElementById("i1").onmouseover=function(){
    this.style.backgroundColor="aliceblue";
    }

    

document.getElementById("i2").onmouseover=function(){
    this.style.backgroundColor="aliceblue";
    }


    

document.getElementById("i3").onmouseover=function(){
    this.style.backgroundColor="aliceblue";
    }


}

    

}