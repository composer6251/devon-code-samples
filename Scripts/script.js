

function submit() {

	const inputValue = document.getElementById('input').value;

}

function selectDropDownItem() {
	const selectedValue = document.getElementById('dropdown').value;

	console.log(selectedValue);
}

function submitForm() {
	console.log('Submitting');
	const valueOne = document.getElementById('input1').value;
	const valueTwo = document.getElementById('input2').value;
	const valueThree = document.getElementById('input3').value;
	const valueFour = document.getElementById('input4').value;

	console.log(valueOne,'\n' + valueTwo,'\n' + valueThree,'\n' + valueFour);
}