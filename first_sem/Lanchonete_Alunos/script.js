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
  let totalElement = document.getElementById('total')
  if( totalElement.value != '' ) {
    window.print()
  } else {
    alert('Por favor, preencha todos os dados.')
  }
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
  return value.toLocaleString("pt-BR", { style: 'currency', currency: "BRL" })
}

// MARK:- IGNORAR DAQUI PRA BAIXO:
function applyPhoneMask(input) {
  input.addEventListener('input', function(event) {
    let value = event.target.value
    
    // Remove tudo que não seja número
    value = value.replace(/\D/g, '')

    // Não aplica a máscara se o usuário está apagando (valor vazio)
    if (value.length === 0) {
      event.target.value = ''
      return
    }

    // Adiciona a máscara conforme o comprimento dos números
    if (value.length > 10) {
      // Formato para (99) 99999-9999
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    } else if (value.length > 5) {
      // Formato para (99) 9999-9999
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3')
    } else if (value.length > 2) {
      // Formato parcial para (99) 9999
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2')
    } else {
      // Formato parcial para (99
      value = value.replace(/^(\d*)$/, '($1')
    }

    event.target.value = value
  })
}

// Chama a função para aplicar a máscara ao campo de telefone
const phoneInput = document.getElementById('telefone')
applyPhoneMask(phoneInput)