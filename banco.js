let dados = []
let res = document.getElementById('res')

function cadastrar() {
  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value



  dados.push({ nome, email })

  res.innerHTML = `Usuário cadastrado: ${nome} <br>Email cadastrado: ${email}`;

  document.getElementById("nome").value = ""
  document.getElementById("email").value = ""
}
