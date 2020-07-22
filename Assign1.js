function set_bgcolor(){
    docBody= document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("prog");
    myprog1 = myBodyElements[0];
    myprog1.style.bgcolor = "rgb(255,0,0)";
    myprog2=myBodyElements[1];
    myprog2.style.bgcolor = "rgb(255,255,0)";
}