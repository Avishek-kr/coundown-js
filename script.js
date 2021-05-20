const subtract= document.querySelector('.subtract');
const reset= document.querySelector('.reset');
const add= document.querySelector('.add');
let count= document.querySelector('.count');


//count=0;
subtract.addEventListener('click',()=>{
    count.innerText--;
    count.style.color='red';
})

add.addEventListener('click',()=>{
    count.innerText++;
    count.style.color='lightgreen';
})

reset.addEventListener('click',()=>{
    count.innerText="0";
    count.style.color='white';
})
