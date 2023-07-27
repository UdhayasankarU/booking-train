
// booking-first click train anime
trainbook=document.getElementById("book-tic")

a=0
button=0
function bookket(){
    traintrack =document.getElementById("train-track")
    traintrain =document.getElementById("train-train")

    train=0
   
    document.getElementById("train-train").style.animationName="button5"
// do{
   

// train++
// }



document.getElementById("train-mobtn")
// while(train<=1)


    // console.log("1");
    // button+=1
    // if(button%2==1){
    //     console.log("2");
    // document.getElementById("button").className="buttonno"}
    // else{
    //     document.getElementById("button").className="button"
    // }
    



setTimeout(function(){
a=a+1

if(a%2==1){
    document.getElementById("button").style.display="none"
    document.getElementById("train-mobtn").style.display="none"
    setTimeout(function(){
        document.getElementById("black").style.display="flex"
        document.getElementById("booking-place").style.display="flex"
        // document.getElementById("black").style.transform="scale(0)"
        // document.getElementById("booking-place").style.transform="scale(0)"
    },1000)
    
    setTimeout(function(){
        document.getElementById("black").style.transform="scale(1)"
        document.getElementById("booking-place").style.transform="scale(1)"
        document.getElementById("black").style.transition="10s linear"
    document.getElementById("booking-place").style.transition="10s linear"
    },1100)


}

// else{
//     document.getElementById("black").style.transform="scale(0)"
// document.getElementById("booking-place").style.transform="scale(0)"
// }
},13000)



}











































// booking ticket

function book(){
    check=document.getElementById("check-1")
    check1=document.getElementById("check-2")
    check2=document.getElementById("check-3")
    
if (  document.getElementById("check-1").checked==true) {
    

    
// page-1
        document.querySelector(" .option").style.transform= "translateX(0)"
        document.querySelector(".tick").style.transform= "translateX(0)"
        document.querySelector(".search").style.transform= "translateX(0)"
        document.querySelector(".input-1").style.transform= "translateX(0)"
        document.querySelector(".input-2").style.transform= "translateX(0)"
        document.querySelector(".arrow").style.transform= "translateX(0)"
// page-2
        document.getElementById("pnr").style.transform="translateX(-750px)"
        // page-3-------------------------

document.getElementById("train-point").style.transform="translateX(700px)"
   } 
   
        // i++
}
function book1(){
     check=document.getElementById("check-1")
 
    if (document.getElementById("check-2").checked==true) {
        // page-1
    document.querySelector(" .option").style.transform="translateX(-700px)"
    document.querySelector(".tick").style.transform="translateX(-700px)"
    document.querySelector(".search").style.transform="translateX(-700px)"
    document.querySelector(".input-1").style.transform="translateX(-700px)"
    document.querySelector(".input-2").style.transform="translateX(-700px)"
    document.querySelector(".arrow").style.transform="translateX(-700px)"
check1=document.getElementById("check-2")
// page-2
document.getElementById("pnr").style.transform="translateX(0)"
// page-3-------------------------

document.getElementById("train-point").style.transform="translateX(700px)"

   }

}
    function book2(){
     check=document.getElementById("check-3")
 
    if (document.getElementById("check-3").checked==true) {
        // page-1
    document.querySelector(" .option").style.transform="translateX(-700px)"
    document.querySelector(".tick").style.transform="translateX(-700px)"
    document.querySelector(".search").style.transform="translateX(-700px)"
    document.querySelector(".input-1").style.transform="translateX(-700px)"
    document.querySelector(".input-2").style.transform="translateX(-700px)"
    document.querySelector(".arrow").style.transform="translateX(-700px)"
check1=document.getElementById("check-2")
// page-2
document.getElementById("pnr").style.transform="translateX(-750px)"
// page-3-------------------------

document.getElementById("train-point").style.transform="translateX(0)"

   }

}
    


   
    
   


