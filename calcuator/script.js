let display = document.getElementById('display');
///123+325-88*2
let btn = document.querySelectorAll('.btn')
    //console.log(btn)
let buttons = Array.from(btn)
    //console.log(buttons)

//eval =>js inbuilt method 
// =>

buttons.map((b) => {
    b.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;

            case 'DEL':
                if (display.innerHTML) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML)
                } catch {
                    display.innerHTML = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;

        }
    })
})