
let buttons=document.getElementsByClassName("button");

for(i=0; i<buttons.length; i++){
    if(buttons[i].innerHTML==="AC"){
        buttons[i].addEventListener("click",()=> allClear());
    }
    else if(buttons[i].innerHTML==="DEL"){
        buttons[i].addEventListener("click",()=> del());
    }
    else if(buttons[i].innerHTML==="X"){
        buttons[i].addEventListener("click",()=> multiply());
    }
    else if(buttons[i].innerHTML==="/"){
        buttons[i].addEventListener("click",()=> divide());
    }
    else if(buttons[i].innerHTML==="-"){
        buttons[i].addEventListener("click",()=> subtract());
    }
    else if(buttons[i].innerHTML==="+"){
        buttons[i].addEventListener("click",()=> add());
    }
    else if(buttons[i].innerHTML==="="){
        buttons[i].addEventListener("click",()=> equals());
    }
    else if(buttons[i].innerHTML==="."){
        buttons[i].addEventListener("click",()=> coma());
    }
    else buttons[i].addEventListener("click", ()=> {
        let number=parseInt(buttons[i].innerHTML);
        numberbuttons(number); 
    });
    
}

function allClear() {
     console.log("naciskam AC");  
}

function del(){

}

function multiply(){

}

function divide(){

}

function subtract(){

}

function add(){

}

function equals(){

}

function coma(){

}

function numberbuttons(number){
    //console.log(parseInt(button));
    console.log(number);
}

function display(){

}