function checkForm(form){

   if(form.fname.value == ""){
	alert("ENTER FIRST NAME");
	form.fname.focus();
	return false;
   }
   if(form.lname.value == ""){
	alert("ENTER LAST NAME");
	form.lname.focus();
	return false;
   }
   if(form.month.value == ""){
	alert("ENTER MONTH");
	form.month.focus();
	return false;
   }
   if(form.day.value == ""){
	alert("ENTER DAY");
	form.day.focus();
	return false;
   }
   if(form.year.value == ""){
	alert("ENTER YEAR NAME");
	form.year.focus();
	return false;
   }
  
   if(form.email.value == ""){
	alert("ENTER EMAIL NAME");
	form.email.focus();
	return false;
   }
   if(form.email.value != ""){
      var emailCheck = new RegExp(/[a-zA-z0-9+@[a-zA-Z]+(\.[a-zA-Z]+)+/);
      if(!emailCheck.test(form.email.value)){
         alert("EMAIL NOT VALID!");
         form.email.value = "";
         form.email.focus();
         return false;
      }
   }
   if(form.pass.value == ""){
	alert("ENTER PASSWORD");
	form.pass.focus();
	return false;
   }
   if(form.pass.value != ""){
      var passCheck = new RegExp(/(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9].{8,}/));
      if(!passCheck.test(form.pass.value)){
         alert("PASSWORD NOT VALID!");
         form.pass.value = "";
         form.pass.focus();
         return false;
      }
   }

   $.post('logInInfo.php',{"fname":form.fname.value, "lname":form.lname.value, "dobM":form.dobM.value, "dobD":form.dobD.value, "dobY":form.dobY.value, "email":form.email.value, "pass":form.pass.value},
   function(data){
   $('#logIn').hide();
   }
   )
   return false;
}

