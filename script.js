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

    validateEmail(emailAddress,"emailAddress");

}

function checkCategoryValue(value,category, notice){
    if (value==""){
        document.getElementById(category+"-notice").innerHTML = notice + " cannot be empty";

        changePlaceholder(category);
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


function validateEmail(checkEmail,identity){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(checkEmail))
    {
        return (true)
    }
    else{
        document.getElementById("emailAddress-notice").innerHTML = "Looks like this is not an email";
        changePlaceholder(identity);
        return (false)
    }
    
}

function changePlaceholder(cat){
    let input = document.getElementById(cat);
    input.setAttribute("placeholder", "");
    input.style.backgroundImage = "url('./images/icon-error.svg')";
    input.style.backgroundRepeat = "no-repeat";
    input.style.backgroundSize = "20px";
    input.style.margin = "0";
    input.style.padding = "0";
    input.style.backgroundPosition = "right center";
    input.style.backgroundPositionX = "calc(100% - 30px)"; // move the image 30 pixels to the left 
}