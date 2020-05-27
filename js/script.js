window.addEventListener('load', start)

let count = 0
let inputRed = null
let inputGreen = null
let inputBlue = null

function start() {
  inputRed = document.querySelector('#inputRed')
  inputRed.addEventListener('change', colorRedDiv)

  inputGreen = document.querySelector('#inputGreen')
  inputGreen.addEventListener('change', colorGreenDiv)

  inputBlue = document.querySelector('#inputBlue')
  inputBlue.addEventListener('change', colorBlueDiv)
  
  buttonDark = document.querySelector('.dark')
  buttonDark.addEventListener('click', enabledDark)
}

function colorRedDiv(event) {
  let valueRed = document.querySelector('#valueRed') 
  valueRed.classList.add("inputActive")
  valueRed.value = event.target.value

  valueRed.addEventListener('change', setColors())
}

function colorGreenDiv(event) {
  let valueGreen = document.querySelector('#valueGreen') 
  valueGreen.classList.add("inputActive")
  valueGreen.value = event.target.value

  valueGreen.addEventListener('change', setColors())
}


function colorBlueDiv(event) {
  let valueBlue = document.querySelector('#valueBlue') 
  valueBlue.classList.add("inputActive")
  valueBlue.value = event.target.value

  valueBlue.addEventListener('change', setColors())
}

function setColors(R, G, B) {
  let R = valueRed.value
  let G = valueGreen.value
  let B = valueBlue.value

  let square = document.querySelector('.square')
  square.style.backgroundColor = `rgb(${R}, ${G}, ${B})`

  let h1 = document.querySelector('h1')
  h1.style.color = `rgb(${R}, ${G}, ${B})`

  let container = document.querySelector('.container')
  container.style.boxShadow = `1px 2px 2px 0px rgb(${R}, ${G}, ${B})`

}

function enabledDark(event) {
  count++
  
  body = document.querySelector('body')
  if (count % 2 !== 0) {
    body.style.background = 'radial-gradient(circle, rgba(88,85,85,1) 0%, rgba(32,35,42,1) 100%)'
    buttonDark.textContent = 'Light'
    buttonDark.style.border = '2px solid yellow'
    let container = document.querySelector('.container')
    container.style.boxShadow = '3px 3px 3px 0px #fff'
  } else {
    console.log('ei')
    body.style.background = '#0002'
    buttonDark.textContent = 'Dark'
    buttonDark.style.border = '1px solid #0001'
  }
  
}
