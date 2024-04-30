# nodeblog_v4
API para a aplicação de postagens em nodeJS (em desenvolvimento)

# Especificações
Esta aplicação utiliza um banco de dados MongoDB na nuvem através do MongoDB Atlas, para fins de consulta de dados.

Para a aplicação funcionar corretamente, é necessário conextar-se a um banco de dados MongoDB por meio do [Atlas](https://www.mongodb.com/cloud/atlas/register).


Após o banco ser criado, é necessário cirar um arquivo .env utilizando como modelo o arquivo .env.example:

```dosini
# Your URL to connect to mongodb database
MONGODB_URI=

# The port where the application will run
APP_PORT=
```

Após isso, basta subir os containers da aplicação no Docker:

```sh
docker compose up -d
```
