let form=document.getElementById('my-form');


//Form submit Event
form.addEventListener('submit',savetolocal);

function savetolocal(e){
    let name=document.getElementById('name');
    let mail=document.getElementById('email');
    e.preventDefault();
    // console.log(name.value);
    // console.log(mail.value);

    localStorage.setItem(name.value,mail.value);
}

// // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   console.log(nameInput.value);
//   console.log(emailInput.value);
// }
