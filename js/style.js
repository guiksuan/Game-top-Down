/* $("#btnAnimar").click(function () {
    $("#area").animate({ left: 300 }, { duration: 2000 })
    $("#area").animate({ top: 300 }, { duration: 2000 })
    $("#area").animate({ left: 0 }, { duration: 2000 })
    $("#area").animate({ top: 50 }, { duration: 2000 })
})*/

$("#Cima").click(
    function () {
        $("#Hollow").animate({ top: 280 }, { duration: 2000 }).css('animation','cima 2s steps(20)')
    }
)
$("#Baixo").click(
    function () {
        $("#Hollow").animate({ top: 600 }, { duration: 2000 }).css('animation','baixo 2s steps(20)')
    }
)
$("#Direita").click(
    function () {
        $("#Hollow").animate({ left: 1000 }, { duration: 3000 }).css('animation','direita 3s steps(30)')
    }
)
$("#Esquerda").click(
    function () {
        $("#Hollow").css('animation','esquerda 3s steps(30)').animate({ left: "300px" }, { duration: 3000 })
    }
)