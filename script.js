const username = document.getElementById('username');
const email = document.getElemenetById('email');
const password = document.getElemenetById('password');
const corrpass = document.getElemenetById('corrpassword');
const form = document.getElementById('form');
form.addEventListener('submit' , e=>
{
    e.preventDefaults();

    Checkinputs();
});

function CheckInputs(){
    const uservalue = username.value.trim()
    const emailvalue = email.value.trim();
    const passwordValue = password.value.trim();
    const coorectValue = corrpass.value.trim();
    if(uservalue === "")
    {
        setErrorFor(username , "username cannot be empty");
    }
    else{
      setSuccessFor(username);
    }


}

