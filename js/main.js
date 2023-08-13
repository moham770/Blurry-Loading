let section = document.querySelector('section')
let text = document.querySelector('.text')

let counter = 0
let max = setInterval(bluer, 30)

function bluer() {
	counter++
	counter > 99 ? clearInterval(max) : null
	text.innerHTML = `${counter}%`
	text.style.opacity = scale(counter, 0, 100, 1, 0)
	section.style.filter = `blur(${scale(counter,0,100,30,0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}