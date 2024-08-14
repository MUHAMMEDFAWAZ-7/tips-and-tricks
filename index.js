function validation() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password1").value;
  const cpassword = document.getElementById("password2").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("phnumber").value;

  document.getElementById("text_uname").innerText = "";
  document.getElementById("text_password").innerText = "";
  document.getElementById("text_cpassword").innerText = "";
  document.getElementById("text_email").innerText = "";
  document.getElementById("text_number").innerText = "";

  let isValid = true;

  if (username === "") {
      document.getElementById("text_uname").innerText = "Please enter username";
      isValid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password === "") {
      document.getElementById("text_password").innerText = "Please enter password";
      isValid = false;
  } else if (!passwordPattern.test(password)) {
      document.getElementById("text_password").innerText = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
      isValid = false;
  }

  if (cpassword === "" || cpassword !== password) {
      document.getElementById("text_cpassword").innerText = "Please enter the same password";
      isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
      document.getElementById("text_email").innerText = "Please enter email";
      isValid = false;
  } else if (!emailPattern.test(email)) {
      document.getElementById("text_email").innerText = "Please enter a valid email address";
      isValid = false;
  }
  const phonePattern = /^[0-9]{10}$/;
  if (number === "") {
      document.getElementById("text_number").innerText = "Please enter number";
      isValid = false;
  } else if (!phonePattern.test(number)) {
      document.getElementById("text_number").innerText = "Please enter a valid 10-digit phone number";
      isValid = false;
  }
   if(isValid){
    document.getElementById("text_compleat").innerText = "Its successfully";
   }

  return isValid;
}


// function validation(){
//     const username=document.getElementById("username").value;
//     const password=document.getElementById("password1").value;
//     const cpassword=document.getElementById("password2").value;
//     const email=document.getElementById("email").value;
//     const number=document.getElementById("phnumber").value;
//     window.onclick = function(event){


//    if(username==""){
//        document.getElementById("text_uname").innerText="Please enter username";
      
//       return false;
//     }
//     if(password==""){
//       document.getElementById("text_password").innerText="Please enter password";
//       return false;
//     }
//     if(cpassword==""  || cpassword!= password){
//       document.getElementById("text_cpassword").innerText="Please enter same password";
//       return false;
//     }
//     if(email==""){
//       document.getElementById("text_email").innerText="Please enter email";
//       return false;
//     }
//     if(number==""){
//       document.getElementById("text_number").innerText="Please enter number";
//       return false;
//     }
//     return true;

//     }
//   }
    
//   // document.getElementById("text_cpassword").innerText="Please enter same password";
//   //   if(username.value==""){
//   //     alert("Please enter user name");
//   //     document.formx.username.focus(); 
//   //     return false;
//   //   }
//   //   if(password.value==""){
//   //     alert("Pleas enter password");
//   //     document.formx.password.focus();
//   //     return false;
//   //   }
//   //   if(cpassword.value=="" || cpassword.value!=password.value){
//   //     alert("Pleas enter conform password");
//   //     document.formx.cpassword.focus();
//   //     return false;
//   //   }
//   //   if(email.value==""){
//   //     alert("Pleas enter Email");
//   //     document.formx.email.focus();
//   //     return false;
//   //   }
//   //   if(number.value==""){
//   //     alert("Pleas enter phone number");
//   //     document.formx.number.focus();
//   //     return false;
//   //   }
//   //   return true;

//   // }




//   // const username=document.getElementById('username');
//   // const password=document.getElementById('password1');
//   // const cpassword=document.getElementById('password2');
//   // const email=document.getElementById('email');
//   // const number=document.getElementById('phnumber');
//   // const name_error=document.getElementById('name_error');
  
//   // Form.addEventListener('submit',(e)=>
//   //   {
    
//   //     if(username.value=== '' || username.value==null)
//   //     {
//   //       e.preventDefault();
//   //       name_error.innerHTML="User name is required";
//   //     }
    
//   // })


//   // if(username.value==""){
//   //   alert("Please enter user name");
//   //   document.formx.username.focus(); 
//   //   return false;
//   // }
//   // if(password.value==""){
//   //   alert("Pleas enter password");
//   //   document.formx.password.focus();
//   //   return false;
//   // }
//   // if(cpassword.value=="" || cpassword.value!=password.value){
//   //   alert("Pleas enter conform password");
//   //   document.formx.cpassword.focus();
//   //   return false;
//   // }
//   // if(email.value==""){
//   //   alert("Pleas enter Email");
//   //   document.formx.email.focus();
//   //   return false;
//   // }
//   // if(number.value==""){
//   //   alert("Pleas enter phone number");
//   //   document.formx.number.focus();
//   //   return false;
//   // }
//   // return true;
