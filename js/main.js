	const elementos = [
		{
			id: 'img1',
			posicao: 1,
			imagem: 1,
		},
		{
			id: 'img2',
			posicao: 2,
			imagem: 2,
		},
		{
			id: 'img3',
			posicao: 3,
			imagem: 3,
		},
		{
			id: 'img4',
			posicao: 4,
			imagem: 4,
		},
		{
			id: 'img5',
			posicao: 5,
			imagem: 5,
		},
		{
			id: 'img6',
			posicao: 6,
			imagem: 6,
		},
		{
			id: 'img7',
			posicao: 7,
			imagem: 7,
		},
		{
			id: 'img8',
			posicao: 8,
			imagem: 8,
		},
		{
			id: 'img9',
			posicao: 9,
			imagem: 9,
		},
		{
			id: 'img10',
			posicao: 10,
			imagem: 10,
		},
		{
			id: 'img11',
			posicao: 11,
			imagem: 11,
		},
		{
			id: 'img12',
			posicao: 12,
			imagem: 12,
		},
		{
			id: 'img13',
			posicao: 13,
			imagem: 13,
		},
		{
			id: 'img14',
			posicao: 14,
			imagem: 14,
		},
		{
			id: 'img15',
			posicao: 15,
			imagem: 15,
		},
		{
			id: 'img16',
			posicao: 16,
			imagem: 16,
		},
	]
	
	var posicao_vazia, imagem, posicao;
	var sequencia = [12, 5, 8, 130, 44];
	
	const apiEl = document.querySelector('#api');
	
	function vitoria(element, index, array) {
		return element.imagem === element.posicao;
	}	
	
	function mover() {
		var temp = document.querySelector(`.pecas${imagem}`);
		temp.setAttribute('class', 'mudando');
		temp.setAttribute('style', 'background-image:');
		
		temp = document.querySelector('.pecas16');
		temp.setAttribute('class', `pecas pecas${imagem}`);
		
		temp = document.querySelector('.mudando');
		temp.setAttribute('class', 'pecas pecas16');
		
		elementos[posicao-1].id = 'img16';
		elementos[posicao-1].posicao = posicao;
		elementos[posicao-1].imagem = 16;
		
		elementos[posicao_vazia-1].id = 'img' + imagem;
		elementos[posicao_vazia-1].posicao = posicao_vazia;
		elementos[posicao_vazia-1].imagem = imagem;
				
		render();
	}
	
	function descobrirPosicoes(n) {
		imagem = n;
		const find = elementos.find(element => element.imagem === imagem);
		posicao = find.posicao;		
		
		switch (posicao) {
			case 1:
				posicao_vazia === 2 || posicao_vazia === 5 ? mover() : null;
				break;
			case 2:
				posicao_vazia === 1 || posicao_vazia === 3 || posicao_vazia === 6 ? mover() : null;
				break;
			case 3:
				posicao_vazia === 2 || posicao_vazia === 4 || posicao_vazia === 7 ? mover() : null;
				break;
			case 4:
				posicao_vazia === 3 || posicao_vazia === 8 ? mover() : null;
				break;
			case 5:
				posicao_vazia === 1 || posicao_vazia === 6 || posicao_vazia === 9 ? mover() : null;
				break;
			case 6:
				posicao_vazia === 2 || posicao_vazia === 5 || posicao_vazia === 7 || posicao_vazia === 10 ? mover() : null;
				break;
			case 7:
				posicao_vazia === 3 || posicao_vazia === 6 || posicao_vazia === 8 || posicao_vazia === 11 ? mover() : null;
				break;
			case 8:
				posicao_vazia === 4 || posicao_vazia === 7 || posicao_vazia === 12 ? mover() : null;
				break;
			case 9:
				posicao_vazia === 5 || posicao_vazia === 10 || posicao_vazia === 13 ? mover() : null;
				break;
			case 10:
				posicao_vazia === 6 || posicao_vazia === 9 || posicao_vazia === 11 || posicao_vazia === 14 ? mover() : null;
				break;
			case 11:
				posicao_vazia === 7 || posicao_vazia === 10 || posicao_vazia === 12 || posicao_vazia === 15 ? mover() : null;
				break;
			case 12:
				posicao_vazia === 8 || posicao_vazia === 11 || posicao_vazia === 16 ? mover() : null;
				break;
			case 13:
				posicao_vazia === 9 || posicao_vazia === 14 ? mover() : null;
				break;
			case 14:
				posicao_vazia === 10 || posicao_vazia === 13 || posicao_vazia === 15 ? mover() : null;
				break;
			case 15:
				posicao_vazia === 11 || posicao_vazia === 14 || posicao_vazia === 16 ? mover() : null;
				break;
			case 16:
				posicao_vazia === 12 || posicao_vazia === 15 ? mover() : null;
				break;
		}
	}
	
	function definirPecas() {
		document.querySelector('.pecas1').onclick = () => descobrirPosicoes(1);
		document.querySelector('.pecas2').onclick = () => descobrirPosicoes(2);
		document.querySelector('.pecas3').onclick = () => descobrirPosicoes(3);
		document.querySelector('.pecas4').onclick = () => descobrirPosicoes(4);
		document.querySelector('.pecas5').onclick = () => descobrirPosicoes(5);
		document.querySelector('.pecas6').onclick = () => descobrirPosicoes(6);
		document.querySelector('.pecas7').onclick = () => descobrirPosicoes(7);
		document.querySelector('.pecas8').onclick = () => descobrirPosicoes(8);
		document.querySelector('.pecas9').onclick = () => descobrirPosicoes(9);
		document.querySelector('.pecas10').onclick = () => descobrirPosicoes(10);
		document.querySelector('.pecas11').onclick = () => descobrirPosicoes(11);
		document.querySelector('.pecas12').onclick = () => descobrirPosicoes(12);
		document.querySelector('.pecas13').onclick = () => descobrirPosicoes(13);
		document.querySelector('.pecas14').onclick = () => descobrirPosicoes(14);
		document.querySelector('.pecas15').onclick = () => descobrirPosicoes(15);
		document.querySelector('.pecas16').onclick = () => descobrirPosicoes(16);
	}
	
	function render(){
		apiEl.innerHTML = '';
		for (cont = 1; cont <= elementos.length; cont++) {
			let pecaEl = document.createElement('div');
			pecaEl.setAttribute('class', `pecas pecas${elementos[cont-1].imagem}`);
			apiEl.appendChild(pecaEl);
			if(elementos[cont-1].imagem === elementos.length) {
				posicao_vazia = cont;
				pecaEl.setAttribute('style', 'background-image:');
			}
		}
		definirPecas();
		if (elementos.every(vitoria) === true) {
			alert('Parabéns, voce ganhou!');
		}
	}

	function embaralhar() {
		var maximo = elementos.length;

		var i, arr = [];
		for (i = 0; i < maximo; i++) {
		   arr[i] = i + 1;
		}
		
		var p, n, tmp, cont=0;
		
		for (p = arr.length; p;) {
			n = Math.random() * p-- | 0;
			tmp = arr[n];
			arr[n] = arr[p];
			arr[p] = tmp;
			let pecaEl = document.createElement('div');
			pecaEl.setAttribute('class', `pecas pecas${tmp}`);
			apiEl.appendChild(pecaEl);
			elementos[cont].id = 'img' + arr[p];
			elementos[cont].posicao = cont +1;
			elementos[cont].imagem = arr[p];
			if(tmp === elementos.length) {
				posicao_vazia = cont + 1;
				pecaEl.setAttribute('style', 'background-image:');
			}
			cont++;
		}
		definirPecas();		
	}
	
	embaralhar();	