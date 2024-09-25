//#region  01 - Crie a coleção "funcionarios" e insira os seguintes documentos usando o método 
use('exercicios')
db.funcionarios.insertMany([
    {
        nome: "João Silva",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 5000,
        departamento: "TI",
        dataContratacao: new Date("2023-01-01"),
        projetos: ["Projeto A", "Projeto B"],
        dataCadastro: new Date()
    },
    {
        nome: "Maria Oliveira",
        cargo: "Analista de Sistemas",
        sexo: "Feminino",
        salario: 6000,
        departamento: "TI",
        dataContratacao: new Date("2022-06-15"),
        projetos: ["Projeto C"],
        dataCadastro: new Date()
    },
    {
        nome: "Carlos Pereira",
        cargo: "Gerente de Projetos",
        sexo: "Masculino",
        salario: 8000,
        departamento: "TI",
        dataContratacao: new Date("2021-03-10"),
        projetos: ["Projeto A", "Projeto D"],
        dataCadastro: new Date()
    },
    {
        nome: "Ana Santos",
        cargo: "Desenvolvedora",
        sexo: "Feminino",
        salario: 5500,
        departamento: "TI",
        dataContratacao: new Date("2023-02-01"),
        projetos: ["Projeto E"],
        dataCadastro: new Date()
    },
    {
        nome: "Pedro Souza",
        cargo: "Designer",
        sexo: "Masculino",
        salario: 4500,
        departamento: "Design",
        dataContratacao: new Date("2023-05-20"),
        projetos: ["Projeto F", "Projeto G"],
        dataCadastro: new Date()
    },
    {
        nome: "Laura Mendes",
        cargo: "Analista de Qualidade",
        sexo: "Feminino",
        salario: 5000,
        departamento: "Qualidade",
        dataContratacao: new Date("2022-11-30"),
        projetos: ["Projeto H"],
        dataCadastro: new Date()
    }
])
//#endregion

//#region 02 - Insira um novo funcionário usando o método insertOne():
use('exercicios');
db.funcionarios.insertOne({
    nome: "Lucas Ferreira",
    cargo: "Analista de Dados",
    sexo: "Masculino",
    salario: 4800,
    departamento: "TI",
    dataContratacao: new Date("2024-01-10"),
    projetos: ["Projeto M", "Projeto N"],
    dataCadastro: new Date()
})
//#endregion

//#region 03 - Aumente o salário de todos os desenvolvedores em mais R$ 100 usando o método updateMany():
use('exercicios')
db.funcionarios.updateMany(
    { cargo: /Desenvolvedor/i },
    { $inc: { salario: 100 } }
)

//#endregion

//#region 04 - Adicione o projeto "Projeto C" à lista de projetos do funcionário João Silva usando o método updateOne():
use('exercicios')
db.funcionarios.updateOne(
    { nome: "João Silva" },
    { $push: { projetos: "Projeto C" } }
)

//#endregion

//#region 05 - Remova o campo "dataContratacao" de todos os funcionários usando o método updateMany():
use('exercicios')
db.funcionarios.updateMany(
    {},
    { $unset: { dataContratacao: "" } }
)

//#endregion

//#region 06 - Crie um novo campo chamado "bonificacao" e atribua o valor 500 para todos os funcionários do departamento de TI usando o método updateMany():
use('exercicios')
db.funcionarios.updateMany(
    { departamento: "TI" },
    { $set: { bonificacao: 500 } }
)

//#endregion

//#region 07 - Remova o registro do funcionário com o nome "João Silva".
use('exercicios')
db.funcionarios.deleteOne({ nome: "João Silva" })

//#endregion

//#region 08 - Remover todos os registros dos funcionários do departamento de "Contabilidade".
use('exercicios')
db.funcionarios.deleteMany({ departamento: "Contabilidade" })
//#endregion

//#region 09 - Mostre o nome, sexo e salário de todos os desenvolvedores:
use('exercicios')
db.funcionarios.find(
    { cargo: /Desenvolvedor/i },
    { nome: 1, sexo: 1, salario: 1 }
)
//#endregion

//#region 10 - Encontrar funcionários com salário maior que 4000:
use('exercicios')
db.funcionarios.find({ salario: { $gt: 4000 } })
//#endregion

//#region 11 - Encontrar funcionários contratados em 2023: (Dica utilize o new Date() na comparação.
use('exercicios')
db.funcionarios.find(
    {
        dataContratacao: {
            $gte: new Date("2023-01-01"),
            $lte: new Date("2023-12-31")
        }
    }
)
//#endregion

//#region 12 - Encontrar funcionários que trabalham no "Projeto A" ou no "Projeto B":
use('exercicios')
db.funcionarios.find(
    { $or: [{ projetos: "Projeto A" }, { projetos: "Projeto B" }] }
)

use('exercicios')
db.funcionarios.find(
    { projetos: { $in: ["Projeto A", "Projeto B"] } }
)

//#endregion

//#region 13 - Encontrar funcionários que não trabalham no "Projeto B":
use('exercicios')
db.funcionarios.find(
    { $nor: [{ projetos: "Projeto B" }] }
)

use('exercicios')
db.funcionarios.find(
    { projetos: { $not: { $eq: "Projeto B" } } }
)

use('exercicios')
db.funcionarios.find(
    { projetos: { $ne: "Projeto B" } }
)

//#endregion

//#region 14 - Mostrar o nome, salário, departamento e sexo apenas dos funcionários do sexo feminino:
use('exercicios')
db.funcionarios.find(
    { sexo: "Feminino" },
    { nome: 1, salario: 1, departamento: 1, sexo: 1 }
)

//#endregion

//#region 15 - Encontrar funcionários contratados antes de 2023 e com salário menor que 5000:
use('exercicios')
db.funcionarios.find(
    {
        dataContratacao: { $lt: new Date("2023-01-01") },
        salario: { $lt: 5000 }
    }
)

//#endregion

//#region 16 - Encontrar funcionários que trabalham em mais de um projeto: (Dica utilize o operador $size)
use('exercicios')
db.funcionarios.find(
    { projetos: { $size: { $gt: 1 } } }
)

//#endregion

//#region 17 - Encontrar funcionários cadastrados nos últimos 30 dias:
use('exercicios')
db.funcionarios.find(
    { dataCadastro: { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) } }
)

//#endregion

//#region 18 - Encontrar funcionários cujo nome começa com "João":
use('exercicios')
db.funcionarios.find(
    { nome: /^João/ }
)

//#endregion

//#region 19 - Encontrar funcionários cujo nome termina com "Silva":
use('exercicios')
db.funcionarios.find(
    { nome: /Silva$/ }
)

//#endregion

//#region 20 - Encontrar funcionários cujo nome contenha Luis ou Luiz:
use('exercicios')
db.funcionarios.find(
    { nome: /Luis|Luiz/ }
)

//#endregion

//#region 21 - Encontrar todos os desenvolvedores do departamento de TI com salário maior que 4500:
use('exercicios')
db.funcionarios.find(
    {
        cargo: "Desenvolvedor",
        departamento: "TI", salario: { $gt: 4500 }
    }
)

//#endregion

//#region 22 - Encontrar todos os funcionários que não são desenvolvedores e que foram contratados em 2023:
use('exercicios')
db.funcionarios.find({
    $and: [
        { cargo: { $ne: "Desenvolvedor" } },
        {
            dataContratacao: {
                $gte: new Date("2023-01-01"),
                $lte: new Date("2023-12-31")
            }
        }
    ]
})

//#endregion

//#region 23 - Encontrar funcionários que trabalham no "Projeto A" ou no "Projeto B" e que tenham salário menor ou igual a 5000:
use('exercicios')
db.funcionarios.find(
    { $or: [{ projetos: "Projeto A" }, { projetos: "Projeto B" }], salario: { $lte: 5000 } }
)

//#endregion

//#region 24 - Encontrar funcionários que não sejam do departamento de TI e que não trabalhem no "Projeto A":
use('exercicios')
db.funcionarios.find(
    { $and: [{ departamento: { $ne: "TI" } }, { projetos: { $ne: "Projeto A" } }] }
)

//#endregion

//#region 25 - Encontrar funcionários que sejam do sexo feminino ou que tenham sido contratados antes de 2023:
use('exercicios')
db.funcionarios.find(
    { $or: [{ sexo: "Feminino" }, { dataContratacao: { $lt: new Date("2023-01-01") } }] }
)

//#endregion

//#region 26 - Encontrar funcionários que são desenvolvedores ou analistas, com salário maior que 4000 e contratados a partir de 2023.
use('exercicios')
db.funcionarios.find(
    {
        $and: [
            { $or: [{ cargo: "Desenvolvedor" }, { cargo: "Analista" }] },
            { salario: { $gt: 4000 } },
            { dataContratacao: { $gte: new Date("2023-01-01") } }
        ]
    }
)

//#endregion

//#region ZONA DE TEST
use('exercicios');
db.funcionarios.find({});

//#endregion