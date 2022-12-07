



function checksession(){


var USER_TYPE=sessionStorage.getItem('usertype');
//alert("userType :: "+USER_TYPE);

var key=sessionStorage.getItem('key');
//alert(key);
		if(key!='' && key!=null){


       //  alert("checksession not null");
         
         if(USER_TYPE!='' &&USER_TYPE!=null  && USER_TYPE==USER_TYPE){
         
        
        
 
         
         }
}
		else{

			 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/index.html');	


			}
		}



  function refreshToken(){
	var username=sessionStorage.getItem('username');
	var password=sessionStorage.getItem('password');
	var usertype=sessionStorage.getItem('usertype');
	//alert("user name::::::"+username+" "+password+"usertype");
	
	  return $.ajax({
		    url: configOptions.oauthbaseurl+"oauth/token",
		    type: 'POST',
		    timeout: 0,
			  headers: {
			    "Authorization": "Basic dmVuZG9yYXBwOnNlY3JldA==",
			    "Content-Type": "application/x-www-form-urlencoded"
			  },
			  data: {
			    "username":username ,
			    "password": password,
			    "grant_type": "password",
			    "userLoginType": usertype
			  }
		  });
	
	
}
  function setSessionStorageItems(response){
	  var access_token=response.access_token;
	  console.log(access_token);
	 
	 if(access_token!=''){
		//alert("session token set");
	  sessionStorage.setItem('key', access_token); 
	   // alert("session token get");
	    }
	  
  }
  
  function commongetmethod(geturl){
	  var accesstoken = sessionStorage.getItem('key');
	  return $.ajax({
		    url: geturl,
		    type: 'GET',
		    timeout: 0,
		    async: false,
		    headers: {
                "Authorization": "Bearer " + accesstoken
            }
			 
		  });
	  
  }
  function commongetmethodwithdata(geturl,data){
	  var accesstoken = sessionStorage.getItem('key');
	  return $.ajax({
		    url: geturl,
		    type: 'GET',
		    timeout: 0,
		    data:data,
		    headers: {
                "Authorization": "Bearer " + accesstoken
            }
			 
		  });
	  
  }
  
  function commonpostmethod(posturl,postdata){
	  var accesstoken = sessionStorage.getItem('key');
	  return $.ajax({
		    url: posturl,
		    method: "POST",

		    headers: {
		        "Authorization": "Bearer " + accesstoken,
		        "Content-Type": "application/json"
		    },
		    data: postdata
		

		});
	  
  }
  
  function commondeletemethod(deleteurl,deletedata){
	  var accesstoken = sessionStorage.getItem('key');
	  return $.ajax({
		    url: deleteurl,
		    method: "DELETE",

		    headers: {
		        "Authorization": "Bearer " + accesstoken,
		        "Content-Type": "application/json"
		    },
		    data: deletedata
		

		});
	  
  }
  
  
  function alphaOnly(event) {
	  var key = event.keyCode;
	  return ((key >= 65 && key <= 90) || key == 8|| key==32);
	};
	
	timerStopFunction(window.inquiryIntervalTimer);
	timerStopFunction(window.grievanceIntervalTimer);

function timerStopFunction(timername) {
	//alert("stop timer");
	  clearInterval(timername);
	}

function checkMandatoryFields(){
	
	var sel = document.querySelectorAll('.required'); 
    for (var i=0;i<sel.length;i++){
    if(sel[i].value.trim()==""){
		var errNode = document.createElement('div');
		errNode.className = "err";
		errNode.innerHTML = '<small style="color:red"><i>Please fill!</i></small>';
		sel[i].after(errNode);
		return false;
        }
    }
    return true;
}




