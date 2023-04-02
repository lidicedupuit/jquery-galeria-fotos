$(document).ready(function(){    
    $('header button').click(function() {
        $('form').slideDown();
})
$('#botao-cancelar').click(function(){
        $('form').slideUp();
})

$('form').on('submit',function(e) {
    e.preventDeFault();
    const endererecoDaNovaImagem =$('#endereco-imagem-nova').Val();
    const novoItem = $('<li class="li"style="display:none"></li>');
    $('<img src="${enderecoDaImagem}"/>').appendTo(novoItem);
    $(`<div class="overlay-imagem-link">+
    '<a href="'+enderecoNovaImagem + "'target="_blank" title="ver imagem em tamnaho real" class="a">ver imagem em tamnho real'</div>`
).appendTo(novoItem);
$(novoItem).appendTo('ul');
$(novoItem).fadeIn(1000);
$('#endereco-imagem-nova').val('');

})
})