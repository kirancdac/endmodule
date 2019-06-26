
var http=require('http');   

var admin ={  empId:"101",
			empName:"Raj",
			office:"Contoso,Mumbai",
			designation:"admin",
				salary:"70000",
				DateOfJoining:"12/06/2012" };


var admincontroller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
							
	                response.end( JSON.stringify(admin));
};
var server=http.createServer(admincontroller);
server.listen(7001);
console.log("admin microservice running on 7001");