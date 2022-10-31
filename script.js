var meuarray = [];

function add() {
	console.log('add');
	var idproduto = document.getElementById('inputIdProduto').value;
	var nomeproduto = document.getElementById('inputNomeProduto').value;
	var valorproduto = document.getElementById('inputValorProduto').value;
	var qtdadeproduto = document.getElementById('inputQtdadeProduto').value;
	var produto =
		idproduto +
		' - ' +
		nomeproduto +
		' - ' +
		valorproduto +
		' - ' +
		qtdadeproduto +
		' - ' +
		valorproduto * qtdadeproduto;
	meuarray.push(produto);
	console.log(meuarray);
	
}

function remove() {
	console.log('remove');
	meuarray.pop();
	console.log(meuarray);
	
}

function list() {
	console.log('list');
	let lista = '<ul>';
	for (i = 0; i < meuarray.length; i++) {
		lista += '<li>' + meuarray[i] + '</li>';
		console.log(meuarray[i].split(' - '));// split = separar
	}
	lista += '</ul>';

	document.getElementById('lista').innerHTML = '<br>' + lista;
	// console.log(meuarray.split(' - '));
}


function result(){
	console.log('result');
	let result = document.getElementById("result");
	
}