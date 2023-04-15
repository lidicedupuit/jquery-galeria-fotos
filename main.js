$(document).ready(function(){    
    $('header button').click(function() {
        $('form').slideDown();
})
$('#botao-cancelar').click(function(){
        $('form').slideUp();
})

$('form').on('submit',function(e) {
    e.preventDeFault();
    const endererecoDaNovaImagem =$("#endereco-imagem-nova").Val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link"> 
    <a href="${enderecoDaNovaImagem}"  "target="_blank" title="ver imagem em tamnaho real">
        ver imagem em tamnho real
    </a>
    </div>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$(novoItem).fadeIn(1000);
$('#endereco-imagem-nova').val('');

})
})