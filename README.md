# Passo a passo para inicialização

Executar o comando `npm i` para instalação das dependências;

Executar o comando `npm run build` para criar o build para criação do container;

Executar o comando `docker compose build` em Windows ou `docker-compose build` em Linux para a criação do imagem;

Executar o comando `docker compose up -d` em Windows ou `docker-compose up -d` em Linux para a criação do container;

Executar o comando `npm run migration` para criação das tabelas no banco;

Executar o comando `npm run seed` para preencher o banco com os dados pré definidos.



# Os end points disponíveis são:

POST `localhost:3042/client`

Body 
```
{
    "nome": "nome",
    "cpf": "cpf",
    "endereco": "endereco",
    "email": "email",
    "cep": "cep"
}
```
Response
```
{
    "id": 1
}
```
-----------------------------------
GET `localhost:3042/client`

Body 
```
{
    "id": 7
}
```
Response
```
{
    "id": 7,
    "nome": "nome",
    "cpf": "cpf",
    "endereco": "endereco",
    "email": "email",
    "cep": "cep"
}
```
-----------------------------------

GET `localhost:3042/client/all`

Body  none

Response
```
[
    {
        "id": 4,
        "nome": "nome",
        "cpf": "cpf",
        "endereco": "endereco",
        "email": "email",
        "cep": "cep"
    },
    {
        "id": 5,
        "nome": "nome",
        "cpf": "cpf",
        "endereco": "endereco",
        "email": "email",
        "cep": "cep"
    }
]
```
-----------------------------------
PATH `localhost:3042/client`

Body 
```
{
    "id": 1,
    "nome": "123",
    "cpf": "123",
    "endereco": "123",
    "email": "123",
    "cep": "123"
}
```
Response
```
{
    "count": 1
}
```
-----------------------------------
DELETE `localhost:3042/client`

Body 
```
{
    "id": 3
}
```
Response
```
{
    "count": 1
}
```
