const inputRef = document.querySelector('#validation-input');

const inputHandleBlur = (event) => {
    if (inputRef.value.length === Number(inputRef.attributes['data-length'].value)) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
    }
}

inputRef.addEventListener('blur', inputHandleBlur);