



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



/*	

  function refreshToken(){
	var username=sessionStorage.getItem('username');
	var password=sessionStorage.getItem('password');
	var usertype=sessionStorage.getItem('usertype');
	//alert("user name::::::"+username+" "+password+"usertype");
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
				//alert("session token set");
			  sessionStorage.setItem('key', access_token); 
			   // alert("session token get");
			    }
});
	
}
*/
function commongetmoethod1(url) {
////alert("commongetmethod :::"+url);
var accesstoken = sessionStorage.getItem('key');

//alert("commongetmethod :accesstoken  ::  "+accesstoken);
return $.ajax({
          url: url,
           method: "GET",
           timeout: 0,
           async:false,
           headers: {
                       "Authorization": "Bearer " + accesstoken
                      }
            
            });
      
         }
  function refreshToken(){
	var username=sessionStorage.getItem('username');
	var password=sessionStorage.getItem('password');
	var usertype=sessionStorage.getItem('usertype');
	//alert("user name::::::"+username+" "+password+"usertype");
	
	  return $.ajax({
		    url: "http://203.176.113.183/VendorAppLogin/oauth/token",
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
