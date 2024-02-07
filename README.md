Passo a passo para inicialização

Executar o comando `npm i` para instalação das dependências;
Executar o comando `npm run build` para criar o build para criação do container;
Executar o comando `docker compose build` em Windows ou `docker-compose build` em Linux para a criação do imagem;
Executar o comando `docker compose up -d` em Windows ou `docker-compose up -d` em Linux para a criação do container;
Executar o comando `npm run migration` para criação das tabelas no banco;
Executar o comando `npm run seed` para preencher o banco com os dados pré definidos.


Os end points disponíveis são:

GET `localhost:3042/client`
Body