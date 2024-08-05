
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
            output.textContent = 'error'
        }

    })
})