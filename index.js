const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

const convBtn = document.getElementById("conv-btn")
let inputArea = document.getElementById("input-area")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let kilogramResult = document.getElementById("kilogram-result")

convBtn.addEventListener("click", function () {
  let baseValue = inputArea.value

  let metLength = inputArea.value * meterToFeet;
  let feetLength = inputArea.value / meterToFeet;
  lengthResult.textContent = `${baseValue} meter = ${metLength.toFixed(3)} feet | ${baseValue} feet
 = ${feetLength.toFixed(3)} meter`

  let litVolume = inputArea.value * literToGallon;
  let galVolume = inputArea.value / literToGallon;
  volumeResult.textContent = `${baseValue} liter = ${litVolume.toFixed(3)} gallon | ${baseValue} gallon 
  = ${galVolume.toFixed(3)} liter`

  let kiloMass = inputArea.value * kiloToPound;
  let poundMass = inputArea.value / kiloToPound;
  kilogramResult.textContent = `${baseValue} kilogram = ${kiloMass.toFixed(3)} pound | ${baseValue} pound 
  = ${poundMass.toFixed(3)} kilogram`

})

