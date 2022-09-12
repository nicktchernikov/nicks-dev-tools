const handleSubmit = () => {
	const text = document.querySelector('.input-text').value;
	console.log('>>>>', convert(text));
}

const convert = () => {
	const lines = text.split('\n');
	const expNum = document.querySelector('.input-exp-num').value;
	let result = '';
	lines.forEach(line => {
		const alphaNum = line.replace(/[^a-z0-9 ]/gi, '');
		const goalName = alphaNum.toUpperCase.replace(' ', '_');
		const apiName = alphaNum.toLowerCase.replace(' ', '-');
		const googleApiName = `wf-track--${apiName}-e${expNum}`;
		result += `${goalName} = '${googleApiName}';\n`;
	});
	document.querySelector('.result').textContent = result;
}
