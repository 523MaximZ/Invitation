document.querySelector(".envelope").addEventListener("click", function () {
  this.classList.toggle("fold");
});

setTimeout(function () {
  document.querySelector(".envelope").classList.add("fold");
}, 2000);

//sign up
function clearName() {
			if (document.getElementById('nameField').value == 'First and Last Name') {
				document.getElementById('nameField').value = '';
			}
		}
		//Funtcion to clear the default text, will not erase user text
		function clearPhone() {
			if (document.getElementById('phoneField').value == 'example: 212-123-1234') {
				document.getElementById('phoneField').value = '';
			}
		}
		//Funtcion to bring back default text if name field is empty
		function resetName() {
			if (document.getElementById('nameField').value == '') {
				document.getElementById('nameField').value = 'First and Last Name';
			}
		}

		function resetPhone() {
			if (document.getElementById('phoneField').value == '') {
				document.getElementById('phoneField').value = 'example: 212-123-1234';
			}
		}

		function clearEmail() {
			if (document.getElementById('emailField').value == 'youraccount@gmail.com') {
				document.getElementById('emailField').value = '';
			}
		}
		function resetEmail() {
			if (document.getElementById('emailField').value == '') {
				document.getElementById('emailField').value = 'youraccount@gmail.com';
			}
		}
