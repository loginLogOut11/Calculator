const display = document.querySelector('#display');  
const buttons = document.querySelectorAll('button');  
buttons.forEach((item) => {  
    item.onclick = () => {  
        if (item.id == 'clear') {  
            display.innerText = '';  
        } 
        else if (item.id == 'backspace') {  
            let string = display.innerText.toString();  
            display.innerText = string.substr(0, string.length - 1);  
        } 
        else if (display.innerText != '' && item.id == 'equal') { 
            display.innerText = Number(eval(display.innerText)).toFixed(10);
        } 
        else if (display.innerText == '' && item.id == 'equal') { 
            display.innerText = 'Empty!';  
            setTimeout(() => (display.innerText = ''), 2000);  
        } 
        else {  
            display.innerText += item.id;  
        }  
    }  
})  
const themeToggleBtn = document.querySelector('.theme-toggle');  
const calculator = document.querySelector('.dark');  
const toggleIcon = document.querySelector('.toggle-icon');  
let isDark = true;  
themeToggleBtn.onclick = () => {  
    calculator.classList.toggle('dark');  
    themeToggleBtn.classList.toggle('active');  
    isDark = !isDark;  
} 