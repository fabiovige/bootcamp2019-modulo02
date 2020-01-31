# Modulo02 - GoBarber

## Ambiente e conceitos

- Configurando estrutura
- Nodemon & Sucrase

```
$ yarn add sucrase nodemon -D
```
- Docker

Instalando Toolbox install windows

```
$ https://docs.docker.com/toolbox/toolbox_install_windows/
$ https://github.com/docker/toolbox/releases
$ https://www.virtualbox.org/wiki/Download_Old_Builds_5_2

```

Instalando Postgres Docker
https://hub.docker.com/_/postgres

```
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Client postgres Postbird
https://www.electronjs.org/apps/postbird

- Sequelize & MVC - ORM para NodeJS
- ESLint, Prettier & EditorConfig

```
$ yarn add eslint -D
$ yarn eslint --init
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
$ yarn eslint --fix src --ext .js
```
- Configurando Sequelize

```
$ yarn add sequelize
$ yarn add sequelize-cli -D
$ yarn add pg pg-hstore
```

## Cadastro e autenticação de usuários

- Migratios de usuários

```
$ yarn sequelize migration:create --name=create-users
$ yarn sequelize db:migrate
$ yarn sequelize db:migrate:undo
```

- Model de usuário
- Criando loader de models
- Cadastro de usuários
- Gerando hash de senha

```
$ yarn add bcryptjs
```

- Conceitos de JWT
- Autenticação JWT

```
$ yarn add jsonwebtoken
```
- Middleware de autenticação
- Update do usuário
- Validando dados do usuário

```
$ yarn add yup
```


### Créditos
[Rocketseta](http://www.rocketseat.com.br)
