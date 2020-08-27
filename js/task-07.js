const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector("#text");

const changeFontSize = (event) => {
    console.log('valueAsNumber', event.target.valueAsNumber)
    console.log('style.fontSize', Number.parseInt(textRef.style.fontSize))
    console.log(textRef)
    // event.target.value === Number.parseInt(textRef.style.fontSize);

    // Number.parseInt(textRef.style.fontSize) += Number(event.target.valueAsNumber);

}

inputRef.addEventListener('input', changeFontSize);