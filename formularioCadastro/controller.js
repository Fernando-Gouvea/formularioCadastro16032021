function calcSalary(){
    var salary = document.getElementById("Salario").value;
    if (salary>10000){
        alert("Necessario declarar imposto de renda!!!");       
    }
}

function estadoCivil(){
    var eCivil = document.getElementById("eCivil").value;
    if (eCivil === 'casado'){
        alert("Necessario enviar documentação do conjuge");  
    }

}

function cadastrar(){
    var idade = document.getElementById("Idade").value;
    if (idade < 18){
        alert("Não é permitido o cadastro idade menor que 18 anos!!!");  
    }
    else window.print();
    
}


const url = 'https://viacep.com.br/ws/$cep/json/';

function findCEP(){
    var cep = document.getElementById("cep").value;
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-","");
    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){

        console.log("logradouro: " + data.logradouro);
        console.log("complemento: " + data.complemento);
        console.log("bairro: " + data.bairro);
        console.log("localidade: " + data.localidade);
        console.log("uf: " + data.uf);
        console.log("ibge: " + data.ibge);
        console.log("gia: " + data.gia);
        console.log("ddd: " + data.ddd);
        console.log("siafi: " + data.siafi);

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
    });
}

var getJSON = function(url, callback){

    var  xhr  = new XMLHttpRequest(); //XMLHttpRequest é um objeto que 
                                      //fornece funcionalidade ao cliente para 
                                      //transferir dados entre um cliente e um servidor.

    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200){
            callback(null,  xhr.response);
        }else{
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

