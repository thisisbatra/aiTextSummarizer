let stringVal=document.getElementById("inputArea");
let lengthChecker=document.getElementById("lengthChecker");
let submitBtn=document.getElementById("submitBtn");
const inputLength=()=>{
    let length=stringVal.value.length;
    lengthChecker.innerHTML="char :"+(stringVal.maxLength-length);
    if(length<200||length>10000){
        submitBtn.disabled="true";
        submitBtn.style.opacity="0.5";
        submitBtn.style.cursor="not-allowed";
    }
    else{
        submitBtn.disabled="false";
        submitBtn.style.opacity="1";
        submitBtn.style.cursor="pointer";
    }
}
const onSubmit=()=>{
        document.getElementById("outputArea").innerHTML=stringVal.value;
}
