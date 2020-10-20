function u() {
    if ($('#carocel1').hasClass('active')) {


        document.getElementById('imprimirAqui').innerHTML = '<div class="divimgCar"><img class="imgCar soNoDescktop" src="imagem/carrocel/DESENVOLVIMENTO DE NAMING.png" alt=""></div>'
        document.getElementById('impTit').innerHTML = '  <div class="divImgCarTit"><img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nome DESENVOLVIMENTO DE NAMING.png" alt=""></div>'



    } else if ($('#carocel2').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = '<div class="divimgCar"><img class="imgCar soNoDescktop" src="imagem/carrocel/DESENVOLVIMENTO DE MARCA.png" alt=""></div>'
        document.getElementById('impTit').innerHTML = ' <div ><img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nome DESENVOLVIMENTO DE MARCA.png" alt=""></div>'

    } else if ($('#carocel3').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = ' <div class="divimgCar"> <img class="imgCar soNoDescktop" src="imagem/carrocel/REDES SOCIAIS.png" alt=""> </div>'
        document.getElementById('impTit').innerHTML = '  <div class="divImgCarTit">  <img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nome REDES SOCIAIS.png" alt=""></div>'


    } else if ($('#carocel4').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = ' <div class="divimgCar"><img class="imgCar soNoDescktop" src="imagem/carrocel/GERENCIAMENTO ONLINE.png" alt=""></div>'
        document.getElementById('impTit').innerHTML = '<div class="divImgCarTit"><img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nome GERENCIAMENTO ONLINE.png" alt=""></div>'


    } else if ($('#carocel5').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = '<div class="divimgCar"> <img class="imgCar soNoDescktop" src="imagem/carrocel/MKT OFF.png" alt=""> </div>'
        document.getElementById('impTit').innerHTML = '<div class="divImgCarTit"> <img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nome MKT OFF.png" alt=""></div>'

    } else if ($('#carocel6').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = '<div class="divimgCar"> <img class="imgCar soNoDescktop" src="imagem/carrocel/SITE.png" alt=""></div>'
        document.getElementById('impTit').innerHTML = '<div class="divImgCarTit"><img class="ImgCarTitSite soNoDescktop" src="imagem/carrocel/nome SITE.png" alt=""></div>'

    } else if ($('#carocel7').hasClass('active')) {
        document.getElementById('imprimirAqui').innerHTML = '<div class="divimgCar"><img class="imgCar soNoDescktop" src="imagem/carrocel/SOCIAL ADS.png" alt=""></div>'
        document.getElementById('impTit').innerHTML = '<div class="divImgCarTit"> <img class="ImgCarTit soNoDescktop" src="imagem/carrocel/nomeSOCIAL  ADS.png" alt=""></div>'

    } else {
        document.getElementById('imprimirAqui').innerHTML = 'erro'


    }
};








window.setInterval('u()', 500);
// armasenar o que esta em imprima aqui em uma var e o que esta mara ser imputado em outra var 
// para comparar e so dar o iner html se for diferente do que ja esta n tela

$(function() {
    $(window).on("scroll ", function() {
        if ($(window).scrollTop() > 100) {
            $(".sidebar-wrapper ").addClass("teste2 ");
            $(".a ").addClass("b");

        } else {
            $(".sidebar-wrapper ").removeClass("teste2 ");
            $(".a").removeClass("b");
        }
    });
});

//<!--Cafés-->


function progress() {

    var percent = document.getElementById('cafes');
    var counter = 1;
    var id = setInterval(frame, 1);

    function frame() {
        if (counter == 2305) {
            clearInterval(id);
        } else {

            counter += 4;

            percent.innerHTML = '<p class="numero">' +
                counter + '</p>' + '<p class="cafes">Cafés</p>';
        }
    }
}
progress();



function jobs() {

    var percent = document.getElementById('Projetos');
    var counter = 1;
    var id = setInterval(frame, 1);

    function frame() {
        if (counter == 0) {
            clearInterval(id);
        } else {

            counter += 1;

            percent.innerHTML = '<p class="numero">' + counter + '</p>' + '<p class="cafes">Projetos</p>';;
        }
    }
}
jobs();