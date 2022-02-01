const addDesposit = document.getElementById("add-deposit");
addDesposit.addEventListener("click", () => {
  const depositCurrence = Number(document.getElementById("depositCurrence").value);

  if (depositCurrence > 0) {
    sumInput('depositAmount', depositCurrence)
    sumInput('balance', depositCurrence )
  }
  
  document.getElementById("depositCurrence").value = "";
});


// WithDraw btn
const withDrawBtn = document.getElementById("withDrawBtn")
withDrawBtn.addEventListener('click', ()=>{
  const withDrawCurrency = Number(document.getElementById("withDrawCurrency").value);
  if(withDrawCurrency > 0){
  sumInput('withDrawAmount', withDrawCurrency)
  sumInput('balance', -1 *withDrawCurrency)
  }


  document.getElementById("withDrawCurrency").value = ''
})


const sumInput = (id, totalDeposit) =>{
  const balance = Number(document.getElementById(id).innerText);
      const totalBalance = totalDeposit + balance;
      document.getElementById(id).innerText = totalBalance;
}






      // const balance = Number(document.getElementById("balance").innerText);
      // const totalBalance = totalDeposit + balance;
      // document.getElementById("balance").innerText = totalBalance;

      
    // const depositAmount = Number(document.getElementById("depositAmount").innerText);
    // const totalDeposit = depositCurrence + depositAmount;
    // document.getElementById("depositAmount").innerText = totalDeposit;