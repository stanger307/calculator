const operators = ['+', '-', 'x', '%'];
const input = document.querySelector('.screen');
const keys = document.querySelectorAll('#calc span');

let entry = false;


function check(e) {
    let btnValue = this.innerHTML;
    
    if (btnValue == '=') {
        input.innerText = eval(input.innerText);
    } else if(btnValue == 'C') {
        input.innerText = '0';
    } else {
        if (input.innerText == '0') {
            input.innerText = btnValue;
        }
        else {
            input.innerText += btnValue;
        }
    }


}
keys.forEach(key => {
    key.addEventListener('click', check)
});
