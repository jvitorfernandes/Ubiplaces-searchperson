$("#btn").on("click", function(){

	var searchterm = $(".nome").val();
    
    var payload = {"name":searchterm};
    payload = JSON.stringify(payload);
    

    
    $.post("https://dev.api.ubiplaces.com.br/t/searchperson", payload, function(data,status){

	console.log(status); //200
    
	list_of_servidores = data.results; //array of objects
    qt = data.qt;
    
        
    $("#resultados").append('<b>' + qt + ' resultados para "' + searchterm + '":</b>');
        
    $('#main-container').hide();
    $('.header').fadeIn(700);
    $('#tabela').fadeIn(700);
        
        
    console.log(list_of_servidores)

	for(var i = 0; i < list_of_servidores.length; i++){
		for(var j in list_of_servidores[i]){
			console.log(j + ': ' + list_of_servidores[i][j]);
		}
		console.log('-------------------------------')
	}
    
    $('.thishead').append('</tbody>');
    for(var i = 0; i < list_of_servidores.length; i++){
        console.log(j + ': ' + list_of_servidores[i][j]);
        $('.thishead').append('<tr>');
        $('.thishead').append('<td>' + list_of_servidores[i].idx + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].name + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].cpf + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].basic_data + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].type + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].gain + '</td>');
        $('.thishead').append('<td>' + list_of_servidores[i].entity + '</td>');
        $('.thishead').append('</tr>');
	}
    $('.thishead').append('</tbody>');
        
    },"json");

});

