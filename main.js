const input = document.querySelector('.input'); 
const form = document.querySelector('form');


const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

const czas = (e) => {
    e.preventDefault();

    spanD.textContent = '';
    spanH.textContent = '';
    spanM.textContent = '';
    spanS.textContent = '';

    const word = input.value;
    console.log(word);
    if(input.value == "") return;

    const endTime = new Date(word).getTime();
    
    setInterval(() => {
        const nowTime = new Date().getTime();

        const time = endTime - nowTime;
        if(Number.isNaN(time)) return;
        else if(time<0) return;
        else{
        
        const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
       
        let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
         
        hours = hours < 10 ? `0${hours}` : hours;
       
        const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
       
        const secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
       
        spanD.textContent = days;
        spanH.textContent = hours;
        spanM.textContent = minutes;
        spanS.textContent = secs;
        }
       }, 1000)

    input.value= "";
}

form.addEventListener('submit', czas);