$( document ).ready(function() {

			//login VALIDACIJA POCNUVA OVDE
var objPeople = [
	{ // Object @ 0 index
		username: "davor@finki.com",
		password: "davor"
	},
	{ // Object @ 1 index
		username: "angela@finki.com",
		password: "angela"
	},
	{ // Object @ 2 index
		username: "brsjak@finki.com",
		password: "brsjak"
	},
	{

	}

]		

	$("#signIn-js").click(function(e)
	{
		e.preventDefault();
		var username = document.getElementById('inputEmail').value
		var password = document.getElementById('inputPassword').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			window.location.href = 'dashboard.html'
			// stop the function if this is found to be true
			return
		}
	}
	
	console.log("incorrect username or password");
	$("#logInPass").show();
	$("#logInEmail").show();
	});
//VALIDACIJA NA LOGIN ZaVRSUVA OVDE 


   	//If you click on Sign UP the following hides the SignIn form
	$("#UserSignUp").hide();
	$("#signUp").click(function(e){
		e.preventDefault();
    $("#MainForm").slideUp(800);
    $("#UserSignUp").show();
	});

	//Hide SignIn ends here
	
	//When on SignUp form u click signUp hides the signUp and shows the SignIn
	
	function validateEmail(email) {

            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test(email);
    }

    function validatePassword(pass) {
            var passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/);
            return passRegex.test(pass);
    }

    function saveUser()
    {
    	var newUsername = $("#inputEmail1").val();
    	var newUserPass = $("#inputPassword1").val();

    	objPeople.push({username: newUsername , password: newUserPass});


    }

	$("#signUp1").click(function(e){
		e.preventDefault();

	
	if((!validateEmail($("#inputEmail1").val()) || ($("#inputEmail1").val()=="")) && (!validatePassword($("#inputPassword1").val()))) 
	{

		$("#wrongMail-message").show();
		$("#wrongPassword-format").show();
	}
	else
	{
		$("#UserSignUp").slideUp(800);
    	$("#MainForm").show(1200);	
    	saveUser();
    	$("#wrongMail-message").hide();
		$("#wrongPassword-format").hide();
	}

	



	});
	//Hide SignUP edns here

	//Choice between highschool and college
	$("#fakultet").hide();
	$("#sredno1").hide(); //this hides both of the lists
	
	$("#sredno").click(function(){
		
		$("#fakultet").slideUp(500);
		$("#sredno1").show(700);
	});
	$("#faks").click(function(){
		
		$("#sredno1").slideUp(500);
		$("#fakultet").show(700);
	});
	//the choice ends here

	
});