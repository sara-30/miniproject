function formvalidate(){
    var letters = /^[A-Za-z]+$/;
      if(document.regform.FNAME.value.match(letters)||document.regform.FNAME.value == "")
      {
      }
      else
      {
      alert('Please input characters only in First Name');
      return false;
      }
    if(document.regform.FNAME.value == "")
    {
        alert("please Enter your First NAME");
        document.regform.FNAME.focus();
        return false;
    }
    if(document.regform.EMAIL.value == "")
			{
				alert("please Enter email");
				document.regform.EMAIL.focus();
				return false;
            }
            if(document.regform.NUM.value.match(numbers)||document.regform.NUM.value=="")
             {
       
             }
             else
             {
             alert('Please input numbers only');
             return false;
             }
                   if(document.regform.NUM.value=="")
                   {
                       alert("Please Enter Your Number");
                       document.regform.NUM.focus();
                       return false;
                   }
			var email = document.regform.EMAIL.value;
            atpos = email.indexOf("@");
  			dotpos = email.lastIndexOf(".");
 			if (atpos < 1 || ( dotpos - atpos < 2 )) 
 			{
     		alert("Please enter correct email ID")
     		document.regform.EMAIL.focus() ;
		    return false;
             }
             var numbers = /^[0-9]+$/;
             
}