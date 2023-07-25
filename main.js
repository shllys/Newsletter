const form = document.getElementById('form');
const email = document.getElementById('correo');
const submitEmail = document.querySelector("#submit");
const text = document.querySelector('.warning');
const box = document.querySelector('.caja')
const box2 = document.querySelector('.caja2')

function updateSuccessMessage(email) {
    submittedEmail.textContent = email;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warning = ''
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+/
    let entrar = false
    text.innerHTML = ''
    if(!regexEmail.test(email.value)){
        email.style.color = '#E85654'
        email.style.border = '1px solid #E85654'
        email.style.background = '#ffedec'
        warning += `Valid email required` 
        entrar = true 
    } else {
        box.classList.remove('visibled')
        box2.classList.add('visibled2')
    }
    
    if (entrar) {
        text.innerHTML = warning
    }
})

