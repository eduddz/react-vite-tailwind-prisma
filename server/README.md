# Server

Code

    yarn init -y
    |
    yarn add -D typescript @types/node ts-node-dev
    |
    yarn tsc --init
    |
    yarn tsc
    |
    yarn add express
    |
    yarn add -D @types/express

SQlite não precisa ser instalado
Prisma é um ORM 
Migrate é um controle de versão e assim facilita controlar a criação ou alteração de tabelas e campos

    yarn add -D prisma
    |
    yarn add @prisma/client
    |
    yarn prisma init
    |
    yarn prisma migrate dev
    |
    yarn prisma studio

Para envio de emails

    npm install nodemailer
    |
    npm install -D @types/nodemailer

Seviço de email

    mailtrap.io

SOLID - 5 princípios da programação para deixar um código mais testável/escalável

Jest para testar a aplicação

    npm install jest -D
    |
    npx jest --init
    |
    npm install ts-node -D
    |
    npm install -D @swc/jest
    |
    npm i @types/jest -D
    |
    npm run test

Cors - Faz controle de segurança para não permitir que o frontend acesse inadequadamente as rotas

    npm i cors
    |
    npm i @types/cors -D