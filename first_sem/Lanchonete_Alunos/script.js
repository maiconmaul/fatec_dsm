function totalPagar() {
  let foodElement = document.getElementById('combos')
  let totalElement = document.getElementById('total')

  let extrasValue = calculateExtras()
  let deliveryValue = calculateDeliveryFee()
  let foodValue = Number(foodElement.value)
  let totalValue = extrasValue + deliveryValue + foodValue

  totalElement.value = `O total é: ${convertToCurrency((totalValue))} | Lanche: ${convertToCurrency(foodValue)} | Adicionais: ${convertToCurrency(extrasValue)} | Entrega: ${convertToCurrency(deliveryValue)}`
}

function imprimir() {
  window.print();
}

function calculateExtras() {
  let selectedItems = document.querySelectorAll("input[name='adicionais']")
  let totalExtra = 0

  selectedItems.forEach((item) => {
    if (item.checked) {
      totalExtra += Number(item.value)
    }
  })

  return totalExtra
}

function calculateDeliveryFee() {
  const deliveryElement = document.getElementById("escolha_viagem")
  var deliveryValue = 0

  if(deliveryElement.checked) {
    deliveryValue = Number(deliveryElement.value)
  }
  return deliveryValue
}

function convertToCurrency(value) {
  return value.toLocaleString("pt-BR", { style: 'currency', currency: "BRL" });
}
