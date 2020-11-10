$(".btn").on("click", function(){
   const numCep = $(".cep").val();
    const url = "https://viacep.com.br/ws/"+numCep+"/json/";
    const resultados = $(".resultados")
    const cep = $(".cep")
    const bairro = $("#bairro")

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            $("#bairro").text(dados.bairro);
            $("#uf").text(dados.uf);
            $("#cidade").text(dados.localidade);
            $("#cep").text(dados.cep);
            $("#logradouro").text(dados.logradouro);      
        } 
        
    });

    // Fazer outra busca

    $(".btn-busca").on("click", function(){
    resultados.text("");
    bairro.text("Faça outra busca...")
    cep.val("");
});
});




