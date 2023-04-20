function checkInput(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;

    if(firstName==""){
        checkCategoryValue(firstName,"firstName","First Name");    
    }
    if(lastName==""){
        checkCategoryValue(lastName,"lastName", "Last Name");    
    }
    if(password==""){
        checkCategoryValue(password,"password", "Password");    
    }

    validateEmail(emailAddress);

}

function checkCategoryValue(value,category, notice){
    if (value==""){
        document.getElementById(category+"-notice").innerHTML = notice + " cannot be empty";
    }
    else{
        if(document.getElementById(category+"-notice").innerHTML == ""){
            // nothing
        }
        else{
            document.getElementById(category+"-notice").innerHTML = "";
        }
    }
    event.preventDefault();
}


function validateEmail(checkEmail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(checkEmail))
    {
        return (true)
    }
    else{
        document.getElementById("emailAddress-notice").innerHTML = "Looks like this is not an email";
        return (false)
    }
    
}