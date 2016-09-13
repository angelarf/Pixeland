function checkLogin() {
    var login = $("#campo_login").val();
    var senha = $("#campo_senha").val();

    if (login == "luciana" && senha == "luciana") {
        $("#texto-antes").hide();
        $("#texto-professor").hide();
        $("#texto-cliente").show();
    }
    else if (login == "alexandre" && senha == "alexandre"){
        $("#texto-antes").hide();
        $("#texto-professor").show();
        $("#texto-cliente").hide();
    }
    else {
        alert("Login e/ou senha invalidos!");
    }
}

function ready() {
    $("#entrar").click(function() {
        checkLogin();
    });  

    $("#logout-professor").click(function() {
        $("#texto-antes").show();
        $("#texto-professor").hide();
        $("#texto-cliente").hide();
        alert("Logout realizado com sucesso!");
    });  

    $("#logout-cliente").click(function() {
        $("#texto-antes").show();
        $("#texto-professor").hide();
        $("#texto-cliente").hide();
        alert("Logout realizado com sucesso!");
    });  
}

//$("#texto-cliente").show();
$(ready);