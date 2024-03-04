function greeting(){
    alert("good evening!")
}

function myh(){
    document.querySelector("h1").style.cursor = "pointer";
    document.querySelector("h1").style.backgroundColor = "green";
}
function myh2(){
    document.querySelector("h1").style.backgroundColor = "darkolivegreen";

}

var n=0;
function test(){
    var r =Math.random()*256;
    console.log(r)
    document.querySelector("img").src = "images/fruit2/"+n+".jpg";
    n +=1;
    if (n >12){
        n =0;
    }
}
