const handleSubmit = () => {
	const text = document.querySelector('.input-text').value;
	console.log('>>>>', convert(text));
}

const convert = (text) => {
	const lines = text.split('\n');
	const expNum = document.querySelector('.input-exp-num').value;
	let result = '';
	lines.forEach(line => {
		const alphaNum = line.replace(/[^a-z0-9 ]/gi, '');
		const goalName = alphaNum.toUpperCase().replace(/ +/gi, '_');
		const apiName = alphaNum.toLowerCase().replace(/ +/gi, '-');
		const googleApiName = `wf-track--clicks-to-${apiName}-e${expNum}`;
		result += `const CLICKS_TO_${goalName} = '${googleApiName}';<br />`;
	});
	document.querySelector('.result').innerHTML = result;
}
