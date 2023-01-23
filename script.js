const form =
  document.querySelector(
    "#form-habits"
  ) //colocar uma variavel em um formulario
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//adc algo que vai ficar ouvindo o evento
//essa função precisara de dois argumentos
//existem varios eventos, e todos os exemplos sempre vão disparar uma função
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}
//localStorage é uma maneira de guardar dados no navegador

// || {} significa "ou" "objeto vazio"
//busca as inf do localStorage e converte elas em um objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
//nlwSetup.setData(data)
//nlwSetup.load()
