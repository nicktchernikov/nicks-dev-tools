const handleSubmit = () => {
	const text = document.querySelector('.text').value;
	console.log('>>>>', text);
}

const splitByLine = (text) => {
	return text.split('\n');
}

const convert = () => {
	const lines = text.split('\n');
	console.log(lines);
}
