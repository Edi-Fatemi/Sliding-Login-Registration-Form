const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const bg = document.querySelector('body');

signupBtn.onclick = function () {
  formBx.classList.add('active');
  bg.classList.add('active');
}

signinBtn.onclick = function () {
  formBx.classList.remove('active');
  bg.classList.remove('active');
}

const passwordOne = document.getElementById('passwordOne');
const passwordTwo = document.getElementById('passwordTwo');
const passwordThree = document.getElementById('passwordThree');
const toggleOne = document.getElementById('toggleOne');
const toggleTwo = document.getElementById('toggleTwo');
const toggleThree = document.getElementById('toggleThree');

function showHideOne() {
  if (passwordOne.type === 'password' && passwordOne.value !== "") {
    
  passwordOne.setAttribute('type', 'text');
    toggleOne.classList.add('hide'); 
}
  else {
    passwordOne.setAttribute('type', 'password');
    toggleOne.classList.remove('hide');
  }
}
function showHideTwo() {
  if (passwordTwo.type === 'password' && passwordTwo.value !== "") {
  passwordTwo.setAttribute('type', 'text');
    toggleTwo.classList.add('hide'); 
}
  else {
    passwordTwo.setAttribute('type', 'password');
    toggleTwo.classList.remove('hide');
  }
}
function showHideThree() {
  if (passwordThree.type === 'password' && passwordThree.value !== "") {
  passwordThree.setAttribute('type', 'text');
    toggleThree.classList.add('hide'); 
}
  else {
    passwordThree.setAttribute('type', 'password');
    toggleThree.classList.remove('hide');
  }
}

