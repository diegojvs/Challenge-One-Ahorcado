let list = [
	'javascript',
	'python',
	'java',
	'alura',
	'oracle',
	'react',
	'angular',
	'ruby',
	'rust'
];

const btn_start = document.getElementById('btn_start');
const btn_add = document.getElementById('btn_add');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const btn_cancel = document.getElementById('btn_cancel');
const btn_save = document.getElementById('btn_save');
const btn_restart = document.getElementById('btn_restart');
const btn_desist = document.getElementById('btn_desist');
let word = null;
let word_array = null;
let input_array = [];
let counter = 0;
let isPage2 = false;
let isLive = true;
let win = false;

const wrongMobile = () => {
	const canvas = document.getElementById('canvas').getContext('2d');
	canvas.lineWidth = 8;
	canvas.lineCap = 'round';
	canvas.lineJoin = 'round';
	canvas.fillStyle = '#f3f5f6';
	canvas.strokeStyle = '#0A3871';
	console.log(counter);
	if (counter === 0) {
		// palo hacia arriba
		canvas.beginPath();
		canvas.moveTo(30, 300);
		canvas.lineTo(30, 0);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 1) {
		// palo hacia la derecha
		canvas.beginPath();
		canvas.moveTo(30, 0);
		canvas.lineTo(150, 0);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 2) {
		// cuerda
		canvas.beginPath();
		canvas.moveTo(150, 0);
		canvas.lineTo(150, 40);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 3) {
		// cara
		canvas.beginPath();
		canvas.arc(150, 70, 30, 0, 2 * 3.1415);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 4) {
		// cuerpo
		canvas.beginPath();
		canvas.moveTo(150, 100);
		canvas.lineTo(150, 170);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 5) {
		// brazo izquierdo
		canvas.beginPath();
		canvas.moveTo(150, 120);
		canvas.lineTo(100, 150);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 6) {
		// brazo derecho
		canvas.beginPath();
		canvas.moveTo(150, 120);
		canvas.lineTo(200, 150);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 7) {
		// pierna izquierda
		canvas.beginPath();
		canvas.moveTo(150, 170);
		canvas.lineTo(100, 200);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 8) {
		// pierna derecha
		canvas.beginPath();
		canvas.moveTo(150, 170);
		canvas.lineTo(200, 200);
		canvas.stroke();
		canvas.closePath();
		counter++;
		alert('Perdiste :(');
		isLive = false;
	}
};

const canvasMobile = () => {
	const canvas1 = document.getElementById('canvas');
	canvas1.width = 280;
	canvas1.height = 300;
	const canvas = canvas1.getContext('2d');
	canvas.lineWidth = 8;
	canvas.lineCap = 'round';
	canvas.lineJoin = 'round';
	canvas.fillStyle = '#f3f5f6';
	canvas.strokeStyle = '#0A3871';
	// piso
	canvas.fillRect(0, 0, 280, 350);
	canvas.beginPath();
	canvas.moveTo(0, 300);
	canvas.lineTo(280, 300);
	canvas.stroke();
	canvas.closePath();
};

const startGame = () => {
	isPage2 = true;
	let random = Math.floor(Math.random() * list.length);
	word = list[random];
	word_array = word.split('');
	input_array = word.split('');
	console.log(word_array);
	const container_input = document.getElementById('Container-input');
	for (let i = 0; i < word_array.length; i++) {
		let div = document.createElement('div');
		div.classList.add('Container-p');
		container_input.appendChild(div);
	}
	let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
	if (screenWidth < 720 && screenHeight >= screenWidth) {
		canvasMobile();
	} else {
		const canvas = document.getElementById('canvas').getContext('2d');
		canvas.lineWidth = 8;
		canvas.lineCap = 'round';
		canvas.lineJoin = 'round';
		canvas.fillStyle = '#f3f5f6';
		canvas.strokeStyle = '#0A3871';
		// piso
		canvas.fillRect(0, 0, 500, 500);
		canvas.beginPath();
		canvas.moveTo(0, 500);
		canvas.lineTo(500, 500);
		canvas.stroke();
		canvas.closePath();
	}
};

btn_start.addEventListener('click', () => {
	page1.style.display = 'none';
	page2.style.display = 'grid';
	startGame();
});

btn_add.addEventListener('click', () => {
	page1.style.display = 'none';
	page3.style.display = 'grid';
});

btn_cancel.addEventListener('click', () => {
	page1.style.display = 'grid';
	page3.style.display = 'none';
});

const reset = () => {
	document.getElementById('Container-input-wrong').remove();
	let div = document.createElement('div');
	div.id = 'Container-input-wrong';
	div.className = 'Container-input-wrong';
	page2.appendChild(div);
	const container_input_wrong = document.getElementById(
		'Container-input-wrong'
	);
	let input = document.createElement('div');
	input.id = 'Container-input';
	input.className = 'Container-input';
	container_input_wrong.appendChild(input);
	let wrong = document.createElement('div');
	wrong.id = 'Container-wrong';
	wrong.className = 'Container-wrong';
	container_input_wrong.appendChild(wrong);
	word = null;
	word_array = null;
	input_array = null;
	isLive = true;
	win = false;
	counter = 0;
};

btn_restart.addEventListener('click', () => {
	reset();
	startGame();
});

btn_desist.addEventListener('click', () => {
	page2.style.display = 'none';
	page1.style.display = 'grid';
	reset();
	isPage2 = false;
});

btn_save.addEventListener('click', () => {
	let input = document.getElementById('text-area').value;
	if (input !== '' && input.length < 9) {
		list.push(input);
		page3.style.display = 'none';
		page2.style.display = 'grid';
		startGame();
	} else {
		alert('La palabra está vacia o excede el límite de caracteres');
	}
});

const wrongDesktop = () => {
	const canvas = document.getElementById('canvas').getContext('2d');
	canvas.lineWidth = 8;
	canvas.lineCap = 'round';
	canvas.lineJoin = 'round';
	canvas.fillStyle = '#f3f5f6';
	canvas.strokeStyle = '#0A3871';
	if (counter === 0) {
		// palo hacia arriba
		canvas.beginPath();
		canvas.moveTo(100, 0);
		canvas.lineTo(100, 500);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 1) {
		// palo hacia el lado
		canvas.beginPath();
		canvas.moveTo(100, 0);
		canvas.lineTo(300, 0);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 2) {
		// palo hacia abajo, va a la cabeza
		canvas.beginPath();
		canvas.moveTo(300, 0);
		canvas.lineTo(300, 50);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 3) {
		// cabeza
		canvas.beginPath();
		canvas.arc(300, 85, 35, 0, 2 * 3.1415);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 4) {
		// cuerpo
		canvas.beginPath();
		canvas.moveTo(300, 120);
		canvas.lineTo(300, 300);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 5) {
		// brazo izquierdo
		canvas.beginPath();
		canvas.moveTo(300, 150);
		canvas.lineTo(250, 200);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 6) {
		// brazo derecho
		canvas.beginPath();
		canvas.moveTo(300, 150);
		canvas.lineTo(350, 200);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 7) {
		// pierna izquierda
		canvas.beginPath();
		canvas.moveTo(300, 300);
		canvas.lineTo(250, 400);
		canvas.stroke();
		canvas.closePath();
		counter++;
	} else if (counter === 8) {
		// pierna derecha
		canvas.beginPath();
		canvas.moveTo(300, 300);
		canvas.lineTo(350, 400);
		canvas.stroke();
		canvas.closePath();
		counter++;
		alert('Perdiste :(');
		isLive = false;
	}
};

document.addEventListener('keydown', (e) => {
	if (isPage2 && isLive && !win) {
		let key = e.key;
		key = key.toLowerCase();
		let index = [];
		for (let i = 0; i < word_array.length; i++) {
			if (key === word_array[i]) {
				index.push(i);
			}
		}
		if (index.length > 0) {
			const container_input = document.getElementById('Container-input');
			let children = container_input.childNodes;
			for (let i = 0; i < index.length; i++) {
				let p = children[index[i]];
				p.innerHTML = `<p class="Input-p">${key}</p>`;
			}
			input_array = input_array.filter((item) => item !== key);
			console.log(input_array);
			if (input_array.length == 0) {
				win = true;
				alert('Ganaste!!!');
			}
		} else {
			let screenWidth = window.innerWidth;
			let screenHeight = window.innerHeight;
			if (screenWidth < 720 && screenHeight >= screenWidth) {
				wrongMobile();
				const container_wrong = document.getElementById('Container-wrong');
				let p = document.createElement('p');
				p.classList.add('wrong');
				p.innerHTML = key;
				container_wrong.appendChild(p);
			} else {
				wrongDesktop();
				const container_wrong = document.getElementById('Container-wrong');
				let p = document.createElement('p');
				p.classList.add('wrong');
				p.innerHTML = key;
				container_wrong.appendChild(p);
			}
		}
		console.log(key);
	}
});
