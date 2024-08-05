
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
            output.textContent = 'error! please check your sequence to be valid.'
        }

    })
})

// dropdown 
document.getElementById('sequence-dropdown').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    document.getElementById('output').value = selectedValue;
});

document.getElementsByClassName('option').addEventListener('click', async () => {
    const outputField = document.getElementById('output');
    try {
        await navigator.clipboard.writeText(outputField.value);
        alert('Sequence copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});
