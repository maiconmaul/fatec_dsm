use('aula02');
db.receitas.insertMany([
  {
    _id: '129',
    nome: "Hambúrguer de Costela",
    preco: 15.99,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": false
    }
  },
  {
    _id: '124',
    nome: "Hambúrguer de Costela",
    preco: 15.99,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": false
    }
  },
  {
    _id: '125',
    nome: "Hambúrguer de Costela",
    preco: 15.99,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": false
    }
  },
  {
    _id: '126',
    nome: "Hambúrguer de Costela",
    preco: 15,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": true
    }
  },
  {
    _id: '127',
    nome: "Hambúrguer de Costela",
    preco: 15,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": true
    }
  }
])

use('aula02');
db.receitas.insertMany([
  {
    _id: '201',
    nome: "Taco de Carne",
    preco: 12.50,
    igredientes: ["tortilla", "carne", "queijo", "alface"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 700,
      "porcao": 1,
      "veggie": false
    }
  },
  {
    _id: '202',
    nome: "Salada Grega",
    preco: 10.99,
    igredientes: ["alface", "tomate", "pepino", "queijo feta", "azeitonas"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 300,
      "porcao": 1,
      "veggie": true
    }
  },
  {
    _id: '203',
    nome: "Sopa de Lentilha",
    preco: 8.75,
    igredientes: ["lentilha", "cenoura", "cebola", "alho"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 250,
      "porcao": 1,
      "veggie": true
    }
  },
  {
    _id: '204',
    nome: "Pizza Margherita",
    preco: 18.00,
    igredientes: ["massa", "tomate", "queijo mussarela", "manjericão"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 900,
      "porcao": 4,
      "veggie": true
    }
  },
  {
    _id: '205',
    nome: "Bolo de Chocolate",
    preco: 7.50,
    igredientes: ["farinha", "cacau", "açúcar", "ovos"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 450,
      "porcao": 1,
      "veggie": true
    }
  }
])



db.receitas.insertMany(
  {
    _id: '129',
    nome: "Hambúrguer de Costela",
    preco: 15.99,
    igredientes: ["pão", "costela", "queijo"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
      "calorias": 1500,
      "porcao": 1,
      "veggie": false
    }
  }
)



use('aula02');
db.receitas.find()

use('aula02');
db.receitas.find({ vegetariano: false }, { nome: 1, preco: 1 });

use('aula02');
db.receitas.find({ nome: { $eq: 'costela' } }, { nome: 1, preco: 1 });

// select nome, preco from receitas where nome LIKE '%costela%'
// I = insensitive case
use('aula02');
db.receitas.find({ nome: /costela/i }, { _id: 0, nome: 1, preco: 1 });

// select nome, preco from receitas where nome LIKE '%costela%'
use('aula02');
db.receitas.find({ preco: { $lt: 20.00 } }, {
  _id: 0,
  nome: 1,
  preco: 1,
  "detalhe.calorias": 1
})
// outra opcao
use('aula02');
db.receitas.find({ preco: { $lt: 20.00 } }, {
  _id: 0,
  nome: 1,
  preco: 1,
  detalhe: {
    calorias: 1
  }
})

// select nome, preco, calorias from receitas where preco between 10 and 30
use('aula02');
db.receitas.find(
  {
    preco: {
      $gt: 10.00,
      $lt: 30.00
    }
  },
  {
    _id: 0,
    nome: 1,
    preco: 1,
    "detalhe.calorias": 1
  }
)


// select nome, preco, calorias from receitas where preco < 10 AND nome like '%hamb%'
use('aula02');
db.receitas.find(
  {
    $and: [
      { preco: { $lt: 10.00 } },
      { nome: /hamb/i }
    ]
  },
  {
    _id: 0,
    nome: 1,
    preco: 1,
    "detalhe.calorias": 1
  }
)


// select nome, preco, calorias from receitas where preco < 10 or nome like '%hamb%'
use('aula02');
db.receitas.find(
  {
    $or: [
      { preco: { $lt: 10.00 } },
      { nome: /amb/ }
    ]
  },
  {
    _id: 0,
    nome: 1,
    preco: 1,
    "detalhe.calorias": 1
  }
)



// select nome, preco, calorias from receitas where preco not between 10 and 15
use('aula02');
db.receitas.find(
  {
    preco: {
      $not: {
        $gt: 10.00,
        $lt: 15.00
      }
    }
  },
  {
    _id: 0,
    nome: 1,
    preco: 1,
    "detalhe.calorias": 1
  }
)


// update receitas set preco = 25.00 where nome like '%costela%'
use('aula02');
db.receitas.updateOne(
  {
    nome: /costela/i
  },
  {
    $set: { preco: 25.00 }
  }
)



// update receitas set preco = 25.00 where nome like '%costela%'
use('aula02');
db.receitas.updateMany(
  {
    preco: { $lte: 10 }
  },
  {
    $set: { "detalhe.veggie": false }
  }
)

use('aula02');
db.receitas.find({ preco: { $lte: 10 } }, {})

// unset no update - remove o atributo especificado
use('aula02');
db.receitas.updateMany(
  {}, // no exemplo nao ha filtro
  { $unset: { vegetariano: null } }
)


// $push - adiciona um novo elemento ao array no update
use('aula02');
db.receitas.updateOne(
  { nome: /choco/i },
  { $push: { igredientes: 'fermento' } }
)

// $remove - remove o elemento do array no update
use('aula02');
db.receitas.updateOne(
  { nome: /choco/i },
  { $pull: { igredientes: 'fermento' } }
)

// $inc - incrementando ou decrementando um valor no update
use('aula02');
db.receitas.updateMany(
  { },
  { $inc: { "detalhe.calorias": 1100 } } // ou usar negativo para decrementar
)


// deletar 
use('aula02');
db.receitas.deleteOne(
  { _id: '123'}
)

