const paragraph = document.querySelector('.par')
const increment = document.querySelector('.btn1');
const save = document.querySelector('.btn2');
const paragraph1 = document.querySelector('.par1');

let count = 0;



increment.addEventListener('click', () => {
    count += 1;
    paragraph.innerHTML = count;
})

save.addEventListener('click', () => {
    let saved = ' '+ count + ' - ';
    paragraph1.innerHTML += saved
    paragraph.innerHTML = 0
    count = 0    
})