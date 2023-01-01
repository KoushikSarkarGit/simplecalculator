console.log('running');


let input = document.getElementById('input');

let btns = document.getElementsByClassName('cbtn');
let outputstr = '';


for ( item of btns) {

    item.addEventListener('click',(e)=>{

        
        let btntext = e.target.innerText;

        if(btntext== 'X'){
            outputstr = outputstr + '*';
            input.value= outputstr;
        }
        else if(btntext== '='){
            input.value= eval(outputstr);
            outputstr = input.value ;
        }
        else if(btntext== 'C'){
            outputstr = '';
            input.value= outputstr;
        }
        else if(btntext== '<'){
            outputstr = outputstr.substring(0,outputstr.length-1);
            input.value= outputstr;
        }
        else{
            outputstr = outputstr + btntext;
            input.value = outputstr;
        }
        
    } )
    
}