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

  lengthResult.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
  volumeResult.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon`
  kilogramResult.textContent = `${baseValue} kilogram = ${baseValue * kiloToPound} pound`

})

