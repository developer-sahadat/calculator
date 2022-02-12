const result=document.getElementById('result');
const histry=document.getElementById('history');



//clear
document.getElementById('clear').addEventListener('click', function(){
    result.innerText="";
    histry.innerText='';
})

// onlcik function
function calculator(x){
    result.innerText +=x;
}

//result
document.getElementById('equalTo').addEventListener('click', function(){

    let arithmetic=eval(result.innerText);
    histry.innerText=arithmetic;

})