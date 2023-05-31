function redirectToHomePage() {
    window.location.href="index.html"
}
function redirectToProfilePage(){
    window.location.href="#"
}
const nameField=document.getElementById("nameField")
const signupBtn=document.getElementById("signupBtn")
const signup=document.getElementById("signup")
const loginTitle=document.getElementById("loginTitle")
const loginBtn=document.getElementById("loginBtn")
const login=document.getElementById("login")
const password=document.getElementById("password")
const remember=document.getElementById("remember")
const fileFormat=document.getElementById("fileFormat")
const recruiter=document.getElementById("recruiter")
const jobseeker=document.getElementById("jobseeker")
const links=document.querySelectorAll("nav ul li a")

links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove active class from all links
      links.forEach((link) => {
        link.classList.remove('active');
      });

      // Add active class to the clicked link
      link.classList.add('active');
    });
});
recruiter.onclick=function() {
    if (recruiter.style.display==="none") {
recruiter.style.display="block";
    }
    else {
        jobseeker.style.display="none";
    }
    loginSignup.style.display="block"
    signup.onclick = function() {
        nameField.style.display="block"
        loginTitle.innerHTML= "Sign up"
        password.style.display="block"
        loginBtn.style.display="none"
        signupBtn.style.display="block"
        login.style.display="block"
        signup.style.display="none"
        remember.style.display="none"
        fileFormat.style.display="none"
        }
        login.onclick = function() {
            loginTitle.innerHTML= "Login"
            loginBtn.style.display="block"
            nameField.style.display="none"
            password.style.display="none"
            signupBtn.style.display="none"
            signup.style.display="block"
            login.style.display="none"
            remember.style.display="block"
            fileFormat.style.display="none"
        }
}

jobseeker.onclick= function() {
    if (jobseeker.style.display==="none") {
        jobseeker.style.display="block";
            }
            else {
                recruiter.style.display="none"
            }
loginSignup.style.display="block"
signup.onclick = function() {
nameField.style.display="block"
loginTitle.innerHTML= "Sign up"
password.style.display="block"
loginBtn.style.display="none"
signupBtn.style.display="block"
login.style.display="block"
signup.style.display="none"
remember.style.display="none"
fileFormat.style.display="block"
}
login.onclick = function() {
    loginTitle.innerHTML= "Login"
    loginBtn.style.display="block"
    nameField.style.display="none"
    password.style.display="none"
    signupBtn.style.display="none"
    signup.style.display="block"
    login.style.display="none"
    remember.style.display="block"
    fileFormat.style.display="none"
}

}
