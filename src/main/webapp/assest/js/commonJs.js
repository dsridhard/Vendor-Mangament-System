function checksession(){

var key=sessionStorage.getItem('key');
//alert(key);
		if(key!='' && key!=null){




			}
		else{

			 $(location).attr('href', window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))+'/index.html');	


			}
		}


function refreshToken(){
	var username=sessionStorage.getItem('username');
	var password=sessionStorage.getItem('password');
	var usertype=sessionStorage.getItem('usertype');
	var settings = {
			  "url": "http://203.176.113.183/VendorAppLogin/oauth/token",
			  "method": "POST",
			  "timeout": 0,
			  "headers": {
			    "Authorization": "Basic dmVuZG9yYXBwOnNlY3JldA==",
			    "Content-Type": "application/x-www-form-urlencoded"
			  },
			  "data": {
			    "username":username ,
			    "password": password,
			    "grant_type": "password",
			    "userLoginType": usertype
			  }
			};

			$.ajax(settings).done(function (response) {
				
			  var access_token=response.access_token;
			  console.log(access_token);
			 
			 if(access_token!=''){
			  sessionStorage.setItem('key', access_token); 
			    
			    }
			



	


});
	
	
	
}


  function  populatetrainlist() 
  {
	
	 var token=sessionStorage.getItem('key');
	  alert(token);
	  var dropdownlist="";
	  var settings2 = {
	   		  "url": "http://203.176.113.183/VendorAppServices/divisional/vendorcategorylist",
	   		  "token" : token,
	   		  "method": "GET",
	   		  "timeout": 0,
	   		 "headers": {
		            "Authorization": `Bearer ${token}` // This is the important part, the auth header
		        }
	   		 
	   		};
	  
	  $.ajax(settings2).done(function (response) {
		  dropdownlist=JSON.stringify(response);
		  console.log(dropdownlist);
		  console.log(JSON.stringify(response));
		
		  $.each(dropdownlist, function(i, option) {
		      $('#multiple-checkboxes').append($('<option/>').attr("value", option.id).text(option.categoryName));
		  });
		  
		 
	   });
  }  