const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || maxEl.value === '') {
        const error = document.getElementById('error');
        error.textContent = 'Son kirdizing Min va Max inputlariga';
        return;
    }

    if (min > max) {
        const error = document.getElementById('error');
        error.textContent = 'Mindan Max katta bolishi kerak';
        return;
    }
    const placeholder = document.querySelector('#placeholder');
    placeholder.textContent = getRandomNumber(min, max);
}

const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate);
