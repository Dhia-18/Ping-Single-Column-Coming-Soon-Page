const inputText = document.querySelector("input");
const errorText = document.querySelector("#error-message");

const submitBtn = document.querySelector("button");

function verifyEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
}

inputText.addEventListener("input",()=>{
    inputText.style.borderColor=null;
    errorText.textContent=null;
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(inputText.value===""){
        inputText.style.borderColor="var(--light-red)";
        errorText.textContent="Please provide an email";
    }
    else if(!verifyEmail(inputText)){
        inputText.style.borderColor="var(--light-red)";
        errorText.textContent="Please provide a valid email";
    }
    else{
        alert("Congratulations!");
    }
})