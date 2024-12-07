function calculateamount() {
  const InputElementValue = document.querySelector('.input-js');
  const amountinput = Number(InputElementValue.value);


  const Inputintresetamount = document.querySelector('.intrest-js');
  const intrestInput = Number(Inputintresetamount.value);

  const Inputtenure = document.querySelector('.tenure-js');
  const tenure = Number(Inputtenure.value);

  // Intrest Calculation
  const intrestcalculation = (amountinput * (intrestInput/100));
  console.log(intrestcalculation);
  console.log((intrestcalculation + amountinput)/tenure);
  
  if (amountinput != 0 && intrestInput != 0 && tenure != 0) {
    total = Math.round(((intrestcalculation + amountinput)/tenure));
    document.querySelector('.emi').innerHTML = `Monthly EMI : ${total} /-`

    amount = (amountinput);
    document.querySelector('.principal').innerHTML = `Principal Amount : ${amount} /-`

    intrest = (intrestcalculation);
    document.querySelector('.intrest-amount').innerHTML = `Intrest Amount : ${intrest} /-`
  }
  else if (amountinput == 0 && intrestInput == 0 && tenure == 0) {
    total = '';
    document.querySelector('.error-js').innerHTML = `Enter Invalid Number ${total}`
  }
}

function clearinput() {
  var outputclear = document.querySelector('.clear-js1');
  var outputclear = document.querySelector('.clear-js2');
  var outputclear = document.querySelector('.clear-js3');

  if (outputclear!=0) {
    outputclear = '';
    document.querySelector('.clear-js1').innerHTML = `${outputclear}`
    document.querySelector('.clear-js2').innerHTML = `${outputclear}`
    document.querySelector('.clear-js3').innerHTML = `${outputclear}`
  }
}
