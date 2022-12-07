






function getVendorTrainList(){
	$('#trainno').empty();
	commongetmethod(configOptions.servicebaseurl+"vendor/fetchvendortrains").then((response) => {
        //console.log(JSON.stringify(response));
         /*  alert(JSON.stringify(response))   */
        var trainlist = '<option value="">--Select--</option>';
    	for(var i=0;i<response.data.length;i++){
    		trainlist = trainlist + '<option value="'+response.data[i].trainNo+'">'+response.data[i].trainNo+'-'+response.data[i].trainName+'</option>';
    	}
    	$('#trainno').append(trainlist);

    }).fail((xhr, status) => {

        if (xhr.status == '401') {
        	 refreshToken().then((res) => {
	              	console.log(res);
	              	setSessionStorageItems(res);
	              	getVendorTrainList();
	                 });
        }
        else {
            alert("some internal error occurred");
        }
    });
	
}

function getServiceList(){
	
	
	
}
function getSubServiceList(serviceid){
	commongetmethod(configOptions.servicebaseurl+"vendor/subServicesList/"+serviceid).then((response) => {
       // console.log(JSON.stringify(response));
         /*  alert(JSON.stringify(response))   */
        var subList = '<option value="">--Select--</option>';
    	for(var i=0;i<response.data.length;i++){
    		subList = subList + '<option value="'+response.data[i].id+'">'+response.data[i].name+'</option>';
    	}
    	$('#subServicetype').append(subList);

    }).fail((xhr, status) => {

        if (xhr.status == '401') {
        	 refreshToken().then((res) => {
	              	console.log(res);
	              	setSessionStorageItems(res);
	              	getSubServiceList(serviceid);
	                 });
        }
        else {
            alert("some internal error occurred");
        }
    });
}


function getTrainProfile(trainno){
	$('#trainprofile').empty();
	commongetmethod(configOptions.servicebaseurl+"vendor/gettrainprofile/"+trainno).then((response) => {
       // console.log(JSON.stringify(response));
         /*  alert(JSON.stringify(response))   */
        var list = '<option value="">--Select--</option>';
    	for(var i=0;i<response.data.length;i++){
    		list = list + '<option value="'+response.data[i].trainProfileId+'">'+response.data[i].jrnyStartDate+'-'+response.data[i].jrnyEndDate+'</option>';
    	}
    	$('#trainprofile').append(list);

    }).fail((xhr, status) => {

        if (xhr.status == '401') {
        	 refreshToken().then((res) => {
	              	console.log(res);
	              	setSessionStorageItems(res);
	              	getTrainProfile(trainno);
	                 });
        }
        else {
            alert("some internal error occurred");
        }
    });
}




   function getSubSubServiceList(subserviceid) {
	
	$('#subSubServicetype').html("");
	var haslist=false;
	return new Promise((resolve, reject) => {
	  commongetmethod(configOptions.servicebaseurl+"vendor/subSubServicesList/"+subserviceid).then((response) => {
        //console.log(JSON.stringify(response));
          //alert(JSON.stringify(response))   
           var subSubList = '<option value="">--Select--</option>';
       	for(var i=0;i<response.data.length;i++){
       		haslist=true;
       		subSubList = subSubList + '<option value="'+response.data[i].id+'">'+response.data[i].name+'</option>';
       	}
       	$('#subSubServicetype').append(subSubList);
           resolve(haslist);

    }).fail((xhr, status) => {

        if (xhr.status == '401') {
        	 refreshToken().then((res) => {
	              	console.log(res);
	              	setSessionStorageItems(res);
	              	getSubSubServiceList(subserviceid);
	                 });
        }
        else {
            alert("some internal error occurred");
            reject(haslist);
        }
    });
	});
	
}