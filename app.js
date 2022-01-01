//user authentication-login
const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var mail = document.getElementById("text").value;
    let x = emailValidate(mail);
    console.log(x);
    var email = loginForm['text'].value;
    console.log(email);
    const password = loginForm['pass'].value;
    var pass = document.getElementById("pass").value;
    let y = passwordValidate(pass);
    console.log("y" + y);
    
   
    if(x && y){
       auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
       localStorage.setItem("email",email.toLowerCase());
	     var win = window.location.replace("profile.html");
       }).catch(ErrorEvent => {
        alert("Authentication faild");
        }
        );
      }
   }
    );

    function emailValidate(mail){ 
      console.log("email func");
        var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        if(regx.test(mail)){
          console.log("emailvalid");
          return true;   
        }
        else{
          console.log("enterd else");
            alert("Invalid email address")
            return  false;
        }
      }

      function passwordValidate(pass){
        var passregx = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
            if(passregx.test(pass)){
              console.log("pass ok");
              return true;
              
            }
            else{
              alert("password should be at least 6 chars and contain letters and digits");
              return false;
            }
      }