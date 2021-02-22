# Estudando NodeJS

O foco é aprender Node.Js com o *framework express*, no entanto, outras tecnologias também serão aplicadas.
O *express* tem foco no *back-end*, porém existem algumas opções de *template engine* disponíveis, uma das mais populares é o *handlebars*.

## Revisão

### Criar e Executar o projeto

- Para criar um novo projeto Node, basta abrir o diretório desejado no CMD/Terminal e executar o comando: `npm init -y`;
- Logo após, criar um novo arquivo com extensão `.js` para ser a `main`, exemplo: `app.js`;
- Executar o projeto basta executar no CMD: `node app.js`;

### Instalar dependências

Existem dois tipos de dependências em um projeto Node, as de desenvolvimento, que são utilizadas apenas durante a construção da aplicação; e as dependências globais que além da máquina local também estarão disponíveis para o servidor em produção.

- Instalar globalmente: `npm i NOME_DO_PACOTE`;
- Instalar para desenvolvimento: `npm i -D NOME_DO_PACOTE`;

### Pacote nodemon

Quando alterações são realizadas no projeto, utilizando apenas o comando `node` tradicional, faz-se necessário parar a execução e iniciar um novo serviço todas as vezes que queira testar algo que foi acrescido no projeto de forma posterior ao início do processo.

Para evitar essa repetição existe o pacote `nodemon` que realiza o monitoramento para sempre que for detectada alterações, o processo é reiniciado automaticamente, para isso, basta instalar o pacote nodemon como dev:

- `npm i -D nodemon`

Após isso, ir até o arquivo `package.json` e acrescentar os scripts de inicialização, são eles:

- `"start": "node app"` (para executar em produção);
- `"dev": "nodemon app"` (para executar em desenvolvimento);

Para executar o projeto, basta utilizar o comando: `npm run dev`.

### Front-end

O pacote utilizado é o express-handlebars e toda a documentação pode ser encontrada [aqui](https://handlebarsjs.com/);

- Instalar o pacote handlebars: `npm i express-handlebars`;
- Criar o diretório de views e layouts: `/views/layouts`;
- No arquivo `app.js` é definido o nome do layout e a extesão padrão, foi definido nesse projeto como `main` de extensão `.hbs`, logo: `main.hbs`;