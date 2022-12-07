	function fetchProductDetails(serviceId,subServiceId,subSubServiceId){
		$('#itemList').empty();
		$("#ecateringRes").empty();
	//alert(document.getElementById('itemList').rows.length);
		 commongetmethodwithdata(configOptions.servicebaseurl+"vendor/getVendorProductsByService",{"serviceId":serviceId,"subServiceId":subServiceId,"subSubServiceId":subSubServiceId}).then((response) => {
             console.log(JSON.stringify(response));
              /*  alert(JSON.stringify(response))   */
             if(response.data!=null&&response.data[0].productsDto.length!=0){
     			var html='';
	        		for(const x of response.data[0].productsDto){
	        			newx=replacenullwithdash(x);
	        			html = html + '<tr id="oldrow'+newx.id+'"><td><input type="hidden" name="id" value="'+newx.id+'"/><input class="form-control required" type="text" name="title" style="width:100%" placeholder="Enter Title Name" value="'+newx.title+'" readonly/></td>';
	        			html = html + '<td><input class="form-control price required" type="text" name="price" style="width:100%" placeholder="Enter Price" value="'+newx.price+'"/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="summary" style="width:100%" placeholder="Write.." value="'+newx.summary+'"/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="description" style="width:100%" placeholder="Write.." value="'+newx.description+'"/></td>';
	        			
	        			html = html + '<td><input class="form-control  " type="text" name="cgstRate" style="width:100%" placeholder="Enter CGST" value="'+newx.cgstRate+' "/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="sgstRate" style="width:100%" placeholder="Enter SGST" value="'+newx.sgstRate+'"/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="igstRate" style="width:100%" placeholder="Enter IGST" value="'+newx.igstRate+'"/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="ugstRate" style="width:100%" placeholder="Enter UGST" value="'+newx.ugstRate+' "/></td>';
	        			
	        			html = html + '<td><input class="form-control  " type="text" name="sku" style="width:100%" placeholder="Enter SKU" value="'+newx.sku+'"/></td>';
	        			html = html + '<td><input class="form-control  " type="text" name="discount" style="width:100%" placeholder="Enter Discount" value="'+newx.discount+'"/></td>';
	        			html = html + '<td><input class="form-control  required" type="text" name="maxQtyPerOrder" style="width:100%" placeholder="Enter Quantity" value="'+newx.maxQtyPerOrder+'"/></td>';
	        			html = html + '<td><button type="button" id="oldid'+newx.id+'" class="btn btn-danger removerow">Remove</button></td></tr>';
	        		}
	        		html = html ;
	        		$('#itemList').append(html);
	        		$('.toshow').css('display','');
	        		//alert(document.getElementById('itemList').rows.length);

	        	}else{
	        		var sno = document.getElementById('itemList').rows.length;
	        		if(sno==0){
	        			var html = '';

	        			html=getNewRowElements(sno);

	        			$('#itemList').append(html);
	        		}
	        		$('.toshow').css('display','');
	        		$("#ecateringRes").html( 'No data found for selected sub service');
	        	}

         }).fail((xhr, status) => {

             if (xhr.status == '401') {
            	 refreshToken().then((res) => {
		              	console.log(res);
		              	setSessionStorageItems(res);
		              	fetchProductDetails(serviceId,subServiceId,subSubServiceId);
		                 });
             }
             else {
                 alert("some internal error occurred");
             }
         });
	}
	
	
	
	function deleteProductDetails(serviceId,subServiceId,subSubServiceId,id){
		$('#itemList').empty();
		$("#ecateringRes").empty();
		var newDeleteArray = new Array();
		newDeleteArray.push(+(id));
		commondeletemethod(configOptions.servicebaseurl+"vendor/deleteVendorProducts/",JSON.stringify(newDeleteArray)).then((response) => {
            console.log(JSON.stringify(response));
             /*  alert(JSON.stringify(response))   */
            if(response.error==false){
            	fetchProductDetails(serviceId,subServiceId,subSubServiceId);
    	        $("#ecateringRes").html( response.message);
        	}

        }).fail((xhr, status) => {

            if (xhr.status == '401') {
            	 refreshToken().then((res) => {
		              	console.log(res);
		              	setSessionStorageItems(res);
		              	deleteProductDetails(serviceId,subServiceId,subSubServiceId,id);
		                 });
            }
            else {
                alert("some internal error occurred");
            }
        });
	}

	

	function getNewRowElements(sno){


		var html = '';
		html = html + '<tr id="row' +(+sno+1)+ '">';
		html = html + '<td><input class="form-control required" type="text" name="title" style="width:100%" placeholder="Enter Item Name" value=""/></td>';
		html = html + '<td><input class="form-control price required" type="text" name="price" style="width:100%" placeholder="Enter Price" value=""/></td>';
		html = html + '<td><input class="form-control  " type="text" name="summary" style="width:100%" placeholder="Write.." value=""/></td>';
		html = html + '<td><input class="form-control  " type="text" name="description" style="width:100%" placeholder="Write.." value=""/></td>';
		
		html = html + '<td><input class="form-control  " type="text" name="cgstRate" style="width:100%" placeholder="Enter CGST" value=" "/></td>';
		html = html + '<td><input class="form-control  " type="text" name="sgstRate" style="width:100%" placeholder="Enter SGST" value=""/></td>';
		html = html + '<td><input class="form-control  " type="text" name="igstRate" style="width:100%" placeholder="Enter IGST" value=""/></td>';
		html = html + '<td><input class="form-control  " type="text" name="ugstRate" style="width:100%" placeholder="Enter UGST" value=" "/></td>';
		html = html + '<td><input class="form-control  " type="text" name="sku" style="width:100%" placeholder="Enter SKU" value=""/></td>';
		html = html + '<td><input class="form-control  " type="text" name="discount" style="width:100%" placeholder="Enter Discount" value=""/></td>';
		html = html + '<td><input class="form-control  required" type="text" name="maxQtyPerOrder" style="width:100%" placeholder="Enter Quantity" value=""/></td>';
		html = html + '<td><button type="button" id="' +(+sno+1)+'" class="btn btn-danger removerow">Remove</button></td></tr>';
		

	return html;

	}
	
	
	
	function frameJsonData(){
		 var checkArray =[];
		    var data = $('tr:not(.headRow').map(function() {
		    	var obj = {};
		    	var temp='';
		    	$(this).find('input').each(function() {
		    		temp+=$(this).val();
		    		if(this.name=='id'||this.name=='cgstRate'||this.name=='igstRate'||this.name=='ugstRate'||this.name=='sgstRate'||this.name=='discount'||this.name=='price'||this.name=='maxQtyPerOrder'||this.name=='sku'){
		    			obj[this.name] = +$(this).val();
		    		}else{
		    	    	obj[this.name] = $(this).val();
		    		}
		        });
		    	if(!checkArray.includes(temp)){
				   	checkArray.push(temp);
				    return obj;
		    	}
		    }).get();
		    
		    return data;
		
		
	}
	
	function submitdata(serviceId,subServiceId,subSubServiceId,data){
		
		//alert(subSubServiceId);
var subService;
var subSubService;
if(subServiceId==null||subServiceId==""||subServiceId=="null"){
	
	subService=null;
}
else{
	subService=Number(subServiceId);
	
}
if(subSubServiceId==null||subSubServiceId==""||subSubServiceId=="null"){
	
	subSubService=null;
}
else{
	subSubService=Number(subSubServiceId);
	
}
		commonpostmethod(configOptions.servicebaseurl+"vendor/createVendorProductsByService",JSON.stringify({mstServicesId:serviceId,mstSubServicesId:subService,mstSubSubServicesId:subSubService,productsDto:data})).then((response)=>{
		   	

			fetchProductDetails(serviceId,subServiceId,subSubServiceId);
			if(response.status==200)
	        $("#ecateringRes").html( "Data updated Successfully");
	   })
	   .fail((xhr,status)=>{
	   	  if (xhr.status == '401') {
	             
	        	 // $("#vendorRegisterederror").html("Error :" +xhr.status+ "");
	            //alert("access denied, please refresh the page again");
	        	  refreshToken().then((res) => {
	              	console.log(res);
	              	setSessionStorageItems(res);
	              	submitdata(serviceId,subServiceId,subSubServiceId,data);
	                 });
	        }
	   }); 
		
		
		
	}
	
	function removerow(serviceId,subServiceId,subSubServiceId,id){
		var row_id = id;
		//alert(row_id);
		if(row_id.startsWith("oldid")){
			deleteProductDetails(serviceId,subServiceId,subSubServiceId,row_id.replace("oldid",""));
		}else{
			var sno = document.getElementById('itemList').rows.length;
			//alert("sno is"+sno);
			if(sno>1){
				$('#row' + row_id).remove();
			}else{
				alert("No data to delete");
			}
		}
		var sno = document.getElementById('itemList').rows.length;
		if(sno==0){
			var html=getNewRowElements(sno);
			
			$('#itemList').append(html);
		}
		
	}
	
	function replacenullwithdash(oldele){
		var newele={};
		 $.each(oldele, function(key, val) { 
			 if(val==null){
				 newele[key]="";
			 }
			 else{
				 newele[key]=val;
			 }
			    });
		 return newele;
		
	}