//Elements from HTML

const adviceNumber = document.getElementById('id-number');
const quote = document.querySelector('.quote');
const buttonGenerator = document.getElementById('quoteGenerator');

//API connection
const getQuoteData = async function () {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        generateQuote(data);
    } catch (error) {
        console.log(error.message);
    }
}

quote.textContent = getQuoteData();

function generateQuote(data) {
    adviceNumber.textContent = `# ${data.slip.id}`;
    quote.textContent = data.slip.advice;
}

//Button function

buttonGenerator.addEventListener('click', (event) => {
    event.preventDefault();
    quote.innerHTML = '';
    adviceNumber.innerHTML = '';
    getQuoteData();
});