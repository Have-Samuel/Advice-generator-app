const diceIcon = document.querySelector('.changer');
const adviceNum = document.querySelector('.advice-num');
const paragraph = document.querySelector('.paragraph');

// Using the Axios library to make a GET request
async function getAdvice() {
  // const axios = require('axios');
  const response = await axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      // handle success
      console.log(response.data.slip.advice);
      adviceNum.innerHTML = response.data.slip.id;
      paragraph.innerHTML = response.data.slip.advice;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

// Event listener
diceIcon.addEventListener('click', getAdvice);