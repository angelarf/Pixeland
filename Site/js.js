function checkLogin() {
    var login = $("#campo_login").val();
    var senha = $("#campo_senha").val();

    if (login == "luciana" && senha == "luciana") {
        $("#texto-cliente").css('display','block')
        $("#texto-antes").css('display','none')
        $("#texto-professor").css('display','none')
    }
    else if (login == "alexandre" && senha == "alexandre"){
        $("#texto-professor").css('display','block')
        $("#texto-antes").css('display','none')
        $("#texto-cliente").css('display','none')
    }
    else {
        alert("Login ou senha invalido!");
    }
}

function ready() {
    $("#entrar").click(function() {
        checkLogin();
    });  
}


$(ready);