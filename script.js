
import { translation } from "./translator.js";


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const output = document.getElementById('output');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = document.getElementById('input').value;
        try {
            const result = translation(input);
            output.textContent = ` ${result}`
        } catch (error) {
            output.textContent = 'error! please check your sequence.'
        }

    })
})

// dropdown 
document.getElementById('sequence-dropdown').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    document.getElementById('input').value = selectedValue;
});


