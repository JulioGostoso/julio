//alert("salve")
console.log(document);

var formulario = document.querySelector("form")
var paragrafo = document.createElement('p')
formulario.append(paragrafo)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')
 
    console.log(nome, email, turma, motivo, mensagem);

    paragrafo.innerHTML = '<b>{nome} </b>, sua mensagem foi enviada com sucesso!'

    formulario.append(paragrafo)
    
    var templateParams = {
        name: 'nome',
        notes: 'Check this out!'
    };
     
    emailjs.send('service_swt055v', 'template_fs9t12x', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
})

