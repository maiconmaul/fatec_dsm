// MARK: - Exercicio 1
function calcularAumentoDeSalario() {
  var salario = parseFloat(document.getElementById("salario").value)
  var porAumento = parseFloat(document.getElementById("porAumento").value)
  var novoSalario = salario + (salario * (porAumento / 100))
  var resultLabel = document.getElementById("novoSalario")
  let formattedValue = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    novoSalario
  )
  resultLabel.innerHTML = "Novo Salário: " + formattedValue

}

function limparExercicio1() {
  document.getElementById("salario").value = ""
  document.getElementById("porAumento").value = ""
  document.getElementById("novoSalario").innerHTML = "Novo Salário: "
}

// MARK: - Exercicio 2
function calcularAreaTriangulo() {
  var base = document.getElementById("baseTriangulo").value
  var altura = document.getElementById("alturaTriangulo").value
  var area = (base * altura) / 2
  document.getElementById("areaTriangulo").value = area
}

function limparExercicio2() {
  document.getElementById("baseTriangulo").value = ""
  document.getElementById("alturaTriangulo").value = ""
  document.getElementById("areaTriangulo").value = ""
}

// MARK: - Exercicio 3
function calcularMediaPonderada() {
  var alphaGrade = document.getElementById("alphaGrade").value
  var betaGrade = document.getElementById("betaGrade").value
  var weightedAvarage = (betaGrade * 0.7) + (alphaGrade * 0.3)

  document.getElementById("weightedAvarage").innerHTML = "Média Ponderada: " + weightedAvarage
}

function limparExercicio3() {
  document.getElementById("alphaGrade").value = ""
  document.getElementById("betaGrade").value = ""
  document.getElementById("weightedAvarage").innerHTML = "Média Ponderada: "
}