let form=document.getElementById('my-form');
let userlist=document.getElementsByClassName('userdata');


//Form submit Event
form.addEventListener('submit',savetolocal);


//////////*****function to save and add user data*********///////////////


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
    localStorage.setItem(mail,JSON.stringify(obj));

    //adding input name and email to the page

    //create li element
    let li=document.createElement('li');

    // add class name
    li.className='userdata';

    li.appendChild(document.createTextNode(name+mail));
    //li.appendChild(document.createTextNode(mail));

    //add delete button
    let deletebut=document.createElement('button');
    deletebut.onclick=()=>{
        localStorage.removeItem(obj.Email);
        form.removeChild(li)
    }


    //append text node
    deletebut.appendChild(document.createTextNode('delete'));

    //append button to li
    li.appendChild(deletebut);

    form.appendChild(li);

}

