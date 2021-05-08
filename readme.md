<p align="center">
<img align="center" alt="DoWhileJWT" width="520px" height="150px" src=".github/dowhilejwt.png"
style="text-align: center;" />
</p>
<br />

# **DoWhile 2020 - Desafio JWT Aplicando boas praticas e com Typescript**

- Workshop apresentado no DoWhile 2020 evento organizado pela Rocketseat nos dias 14 e 15 de dezembro em 2020.
- Agradecimento ao **André Askmon** pelo conteudo do Workshop: _Autenticação com segurança no JWT._

## **🚀 Tecnologias**

Esse projeto foi desenvolvido com as seguintes tecnologias:

- _NodeJS_
- _Typescript_
- _ESlint_
- _Prettier_
- _Babel_
- _Express_
- _TypeORM_
- _Postgres_
- _JsonWebToken_

## **💻 Projeto**

O DoWhile foi um evento onde participei do Workshop de melhores práticas usando JWT e nesse repositorio que foi criado por min eu apliquei as praticas de segurança com JWT com Typescript, sendo que no projeto guiado pelo principal era feito com Javascript.

## **👨🏼‍💻 Como executar**

- Clone o repositório
- Instale as dependências com `yarn` ou `npm`
- Modifique os arquivos `.env.example` que você encontra em _/src/config/_ para `.env.development` e `ormconfig.js` com as suas configurações.
- Inicie o servidor com `yarn dev` ou `npm run dev`

E pronto sua aplicação está rodando e pode ser acessada em [`localhost:3333`](http://localhost:3333).

## **📄 Comandos para criação de chaves privada e pública**

A seguir os comandos para gerar chaves:

```
openssl genrsa -out private-key.pem 2048

openssl rsa -in private-key.pem -pubout -out public-key.pem
```

---
