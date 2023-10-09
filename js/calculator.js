let inputElement;
let btnList;
let operations;
const regex = /^[0-9]+([-+*/][0-9]+)*$/;
const operationCheck = 0;
function createLiElement(value,result,input){
    let li = document.createElement('li');
    li.setAttribute('value',value)
    li.innerText = result;
    li.addEventListener('click', ()=>input.value = li.getAttribute('value'));
    return li;
}


document.addEventListener('DOMContentLoaded',()=>{
    inputElement = document.querySelector('.calculator__input');
    operations = document.querySelector('.operations__block ul')
    btnList = document.querySelectorAll('.calculator__btn');

    inputElement.addEventListener('input',(event)=>{
        let inputValue = event.target.value;
        if(!regex.test(event.target.value + inputValue + operationCheck)){
            event.target.value = inputValue.slice(0, -1);
        }
    })

    btnList.forEach(btn => {
        if(btn.value != '=') {
            btn.addEventListener('click',()=>{
                if(regex.test(inputElement.value + btn.value + operationCheck)){
                    inputElement.value += btn.value;
                }
            });
        } else {
            btn.addEventListener('click', ()=>{
                try{
                    let result = inputElement.value;
                    if(isNaN(result) && result.length>0) {
                        result = eval(inputElement.value);
                        let li = createLiElement(inputElement.value,result,inputElement);
                        inputElement.value = result;
                        operations.append(li);
                    }
                } catch {
                    alert("неправельный ввод");
                }
            });
        }
    });
});

 

