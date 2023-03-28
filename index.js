const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterFeet = 3.281;
const literGallon = 0.264;
const kiloPounds = 2.204;

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  lengthEl.textContent = `${inputValue} meters = ${(
    inputValue * meterFeet
  ).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterFeet).toFixed(
    3
  )} meters`;
  volumeEl.textContent = `${inputValue} liters = ${(
    inputValue * literGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / literGallon
  ).toFixed(3)} liters`;
  massEl.textContent = `${inputValue} kilos = ${(
    inputValue * kiloPounds
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue / kiloPounds
  ).toFixed(3)} kilos`;
});
