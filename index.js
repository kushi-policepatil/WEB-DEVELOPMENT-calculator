const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        switch (value) {
            case 'AC':
                display.innerText = '';
                break;
            case 'DE':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (err) {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += value;
        }
    });
});
