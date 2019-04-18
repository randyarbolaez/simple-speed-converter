function milesToKilometers(value) {
  let speedResult = document.getElementById('speed-result');
  let results = value * 1.609;
  speedResult.innerHTML = `<b>${value}</b> miles is equivalent to <b>${results}</b> kilometers`;
}

function speedConverter(e) {
  e.preventDefault();
  let speedNumber = document.getElementById('speed-number').value;
  milesToKilometers(speedNumber);
}
