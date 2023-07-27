// eye and close
eye=1

function eye1(){
    // eye=document.getElementById("eye").className
    // eyeclose=document.getElementById("eye-close")
    input=document.getElementById("createpass")
   
  
    if(eye==1 && input.type=="password"){
        eye=0
       input.type="text"
        document.getElementById("eye-close").style.transform="scale(0)"
        
    }
    else{
        eye=1
        input.type="password"
        document.getElementById("eye-close").style.transform="scale(1)"
        
    }
    
}
eye0=0
function eye2(){
    // eye=document.getElementById("eye").className
    // eyeclose=document.getElementById("eye-close")
    input=document.getElementById("createpass12")
   
  
    if(eye0==1 && input.type=="password"){
        eye0=0
       input.type="text"
        document.getElementById("eye-close1").style.transform="scale(0)"
        
    }
    else{
        eye0=1
        input.type="password"
        document.getElementById("eye-close1").style.transform="scale(1)"
        
    }
    
}

// move sigin
off=0
function singup(){
    if(off==0){
        // off=1
    document.getElementById("form-off").className=""
    document.getElementById("form1").className="form2"
    document.getElementById("savereg").className="buttonon"
}
     else{
        off=0
        document.getElementById("form-off").className=""
     }
}

off1=0

function singup1(){
    if(off1==0){
        // off1=1
    document.getElementById("form1").className=""
    document.getElementById("form-off").className="form2"
    document.getElementById("savereg").className="buttonoff"
}
     else{
        // off=0
        document.getElementById("form1").className=""
        document.getElementById("savereg").className=""
     }
}












// alert---msg


num=document.getElementById("number")
athar=document.getElementById("athar")
first=document.getElementById("first")
last=document.getElementById("last")
ate2=document.getElementById("dateyear")
email=document.getElementById("email")
pass=document.getElementById("createpass")
repass=document.getElementById("repass")
gene=document.getElementById("General")
gene1=document.getElementById("General1")
gene2=document.getElementById("General2")
nick=document.getElementById("nick")



// var  save1,save2,save3,save4,save5,save6,save7,save8,save9,save10,save11
// let namesave,last




function send(){
    dele=0
    bn=1
    
   

//  if(pan.value.length==10){
//     alert("5")
// }
// else{
//     alert("6")
// }

// first name
val=first.value
if(first.value.length<=2 ){

    document.getElementById("al").className="ale"
                   
     dele+=bn
                 

}
else{
    
   
    document.getElementById("al").className="al"
}



 // last name-------


val=last.value
if(last.value.length<=0 ){

document.getElementById("alast").className="ale"

dele+=bn



}
else{


document.getElementById("alast").className="al"
}









// phone number----
if(num.value.length===10){
    document.getElementById("anum").className="al"
   

    dele+=bn




}
else{
    document.getElementById("anum").className="ale"
}






   // email------

   mai=/@gmail.com/g

   if(email.value.match(mai)){

document.getElementById("aemail").className="al"


dele+=bn





}
else{

document.getElementById("aemail").className="ale"

}




// password-------

cap=/[A-Z]/g
low=/[a-z]/g
 spcl=/[@#$&]/g
nub=/[0-9]/g

   if(pass.value.match(cap)&&pass.value.match(low)&&pass.value.match(spcl)
    &&pass.value.length<=20 &&pass.value.length>=6 &&  pass.value.match(nub)){

  document.getElementById("apass").className="al"


 dele+=bn


      }
      else{

document.getElementById("apass").className="ale"

     }







// repassword--------------

if(repass.value==pass.value && repass.value.length>0){
    document.getElementById("arepass").className="al"

    dele+=bn



  

}
else{
    document.getElementById("arepass").className="ale"
}










// athar-----
if(athar.value.length===12){
    document.getElementById("aathar").className="al"

    dele+=bn





}
else{
    document.getElementById("aathar").className="ale"
}


// pan-------
panm=/([0-9]){5}([A-Z]){4}([0-9]){1}$/

 if(pan.value.length===10 && pan.value.match(panm)){
    document.getElementById("apan").className="al"

    dele+=bn
 }

    
   
else{
    document.getElementById("apan").className="ale"
}



// nick
if(nick.value.length<=2 ){
  
    document.getElementById("anick").className="ale"
    dele+=bn



    
}
else{

   
    document.getElementById("anick").className="al"
}









// date




date1=new Date()
year1=date1.getFullYear()
ate2=document.getElementById("dateyear")
dattype=ate2.value
dae=new Date(dattype)
year2=dae.getFullYear()

document.getElementById("age").innerHTML=year1-year2
//  console.log(year1-year2);
end=year1-year2

if(ate2.value.length>0){
   
   document.getElementById("adate").className="al"
   document.getElementById("age6").className="age6"
  
    dele+=bn
     if(end>18){
      dele+=bn
        if(dele==8){
   
     
       window.open("index.html","_self")

      }
      else{
     
       console.log("not defined");
      }

       
      }
      else{
       document.getElementById("ag1").className="ale"
      

     }
   
   
}
else{
   
   document.getElementById("adate").className="ale"
   document.getElementById("age6").className="age5"
}





// general

if(gene.checked==true ||gene1.checked==true ||gene2.checked==true ){
  
    
    document.getElementById("ageneral").className="al"
    document.getElementById("checkd").checked=true
    dele+=bn


    if(gene.checked==true){
        localStorage.setItem("General",gene.value)
    }
    
      else if(gene1.checked==true){
        localStorage.setItem("General",gene1.value)
    }
    
      else if(gene2.checked==true){
        localStorage.setItem("General",gene2.value)
    }






Na1=first.value+""+last.value
localStorage.setItem("Name",Na1)
localStorage.setItem("Email",email.value)
localStorage.setItem("phone number",num.value)
localStorage.setItem("Password",pass.value)
localStorage.setItem("Adhar Number",athar.value)
localStorage.setItem("PAN Number",pan.value)
localStorage.setItem("Date of Birth",ate2.value)
localStorage.setItem("Age",end)



}
else{

    document.getElementById("ageneral").className="ale"
}






// `cler=document.getElementById("cler").className
// setTimeout(function(){ if( document.getElementById("cler").className=="al"){
// alert("done")}
// else{
//     console.log("fuck");

// }
// },2000)





}






















// function store(){
// if(dele==0){
    
// }
// else{
//     console.log("fuck");
// }
// }
// a="the"
// var b

// for(i=0;i<a.length;i++){ 
//     b=a.charAt(i) 
//     c=[b] 
//     console.log(c)
// }




// as=/[1-9]{5}/g
// a1=/[A-Z]{4}/g
// a2=/([0-9]){5}([A-Z]){4}([0-9]){1}$/
// d="12345AAAA1"
// s=d.match(a2)
// console.log(s)

emaila=document.getElementById("emailid")
usera=document.getElementById("user")
createrw=document.getElementById("createpass12")
user8=localStorage.getItem("Name")
pass8=localStorage.getItem("Password")
email8=localStorage.getItem("Email")

function send2(){
    kj=0
    ar=1
  if(usera.value.length>0){
    
     if(user8==usera.value ){

    
            kj=ar+1
           document.getElementById("auser").className="al"}
          else{
   

            document.getElementById("auser").className="ale"
          }

  }
  else{
   
   

    document.getElementById("auser").className="ale"
  }
  if( emaila.value.length>0){
      if(email8==emaila.value){
         kj=ar+1
          document.getElementById("aemaila").className="al"}
          else{
           document.getElementById("aemaila").className="ale"
          }
       
   
  }
  else{
   
    document.getElementById("aemaila").className="ale"
  }

  if(createrw.value.length>0){
    if(pass8==createrw.value ){
         kj=ar+1
          document.getElementById("apassa").className="al"}
         else{
          document.getElementById("apassa").className="ale"
         }
       
    
  }
 else{
    
   
    document.getElementById("apassa").className="ale"
  }

  
if(kj==2){
   
    console.log("deal");
    window.open("index.html","_self")

}
else{
    
    console.log("not defined");
}

}