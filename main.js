let form=document.getElementById('my-form');


//Form submit Event
form.addEventListener('submit',savetolocal);

function savetolocal(e){
    let name=document.getElementById('name').value;
    let mail=document.getElementById('email').value;
    e.preventDefault();
    // console.log(name.value);
    // console.log(mail.value);

    // localStorage.setItem('Name',name);
    // localStorage.setItem('Email',mail);
    
    const obj={
        Name:name,
        Email:mail
    }
    localStorage.setItem('UserDetails',JSON.stringify(obj));
}
