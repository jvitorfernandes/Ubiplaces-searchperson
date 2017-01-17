$("#btn").on("click", function(){

	var searchterm = $(".nome").val();
    
    var payload = {"name":searchterm};
    payload = JSON.stringify(payload);

    $.post("https://dev.api.ubiplaces.com.br/t/searchperson", payload, function(data,status){

	console.log(status); //200

	list_of_servidores = data.results; //array of objects

	for(var i = 0; i < list_of_servidores.length; i++){
		for(var j in list_of_servidores[i]){
			console.log(j + ': ' + list_of_servidores[i][j]);
		}
		console.log('-------------------------------')
	}

    });
});
