function appendToTable(searchterm, list_of_servidores, qt){
    $(".thishead").empty();
    for(var i = 0; i < list_of_servidores.length; i++){
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
    $('#tabela').fadeIn(700);
}            

function myFunction(searchterm){
    
    var payload = {"name":searchterm};
    payload = JSON.stringify(payload);
    
    $.post("https://dev.api.ubiplaces.com.br/t/searchperson", payload, function(data,status){

        console.log(status); //200

        list_of_servidores = data.results; //array of objects
        qt = data.qt;
           
        $("#resultados").empty();
        $("#resultados").append('<b>' + qt + ' resultados para "' + searchterm + '":</b>');
        $('.resultado').fadeIn(350);
        
        appendToTable(searchterm, list_of_servidores, qt);
         
    },"json");
}

            
$("#btn").on("click", function(){
    
    var searchterm = $(".nome").val();
    $(".textentry").empty();    
    console.log(searchterm);
    console.log(typeof(searchterm));
    myFunction(searchterm);
    
    $('#main-container').hide();
    $('.header').fadeIn(700);
});


$("#top-btn").on("click", function(){
    console.log($(".ue").val());
    var searchterm = $(".ue").val();
    $(".textentry").empty();
    
    console.log(searchterm);
    console.log(typeof(searchterm));
    myFunction(searchterm);
    
    $('#tabela').fadeOut(700);
    $('.resultado').fadeOut(700);
});