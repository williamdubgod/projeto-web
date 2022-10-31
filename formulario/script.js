function enviar() {
    let cpf = document.getElementById('cpf');
    let login = document.getElementById('login');
    let senha = document.getElementById('password');
    let senhaConf = document.getElementById('passwordconf');
    let aviso = document.getElementById('aviso');


    if (cpf.value.length == 0) {
        aviso.innerHTML = "O preenchimento do campo CPF é obrigatório!";
        cpf.focus();
        return false;
    } else if (login.value.length == 0) {
        aviso.innerHTML = "O preenchimento do campo LOGIN é obrigatório!";
        login.focus();
        return false;
    } else if (senha.value.length == 0) {
        aviso.innerHTML = "O preenchimento do campo SENHA é obrigatório!";
        senha.focus();
        return false;
    } else if (senhaConf.value.length == 0) {
        aviso.innerHTML = "O preenchimento do campo CONFIRMAÇÃO SENHA é obrigatório!";
        senhaConf.focus();
        return false;
    }else if (senha.value != senhaConf.value) {
        aviso.innerHTML = "Senhas não conferem, digitar a mesma senha!";
        senha.focus();
        return false;
    }else{
        aviso.innerHTML = "";
        return true;
    }
}

function formatarCampo(campoTexto) {
    if (campoTexto.value.length <= 11) {
        campoTexto.value = mascaraCpf(campoTexto.value);
    } else {
        campoTexto.value = mascaraCnpj(campoTexto.value);
    }
}
function retirarFormatacao(campoTexto) {
    campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}
function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
}
function mascaraCnpj(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
}