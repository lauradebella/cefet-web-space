const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let slider = function(Index){
	let slide = document.getElementById('slide')
	let srcImage  = servidorDasImagens + todasAsImagens[Index];
	slide.src = srcImage;
};

let index = 0;
slider(index);

let next = document.getElementById('proximo');
	next.addEventListener('click', function(e){
		index++;
		if (index == 5){
			index =0;
		}
		slider(index);
	});


let previous = document.getElementById('anterior');
	previous.addEventListener('click', function(e){
		index--;
		if (index == -1){
			index = 4;
		}
		slider(index);
	});