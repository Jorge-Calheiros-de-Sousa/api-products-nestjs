
# Api com Nest.Js

Uma crud básico usando Nest.Js pela primeira vez


## Instalação

Instale my-project com npm

```bash
  npm i
  npm run test
  npm run start:dev
```

    
## Documentação da API

#### Retorna todos os produtos

```http
  GET http://localhost:3000/products
```

#### Retorna um produto

```http
  GET http://localhost:3000/products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer |



#### Retorna um produto

```http
  POST http://localhost:3000/products
```
        

    {
        "name":"Product 1",
        "price":10.99,
        "description":""
    }

#### Retorna um produto altualizado

```http
  POST http://localhost:3000/products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer |        

    {
        "name":"Product 1 Alterado",
        "price":10.99,
        "description":""
    }

#### Retorna um nada

```http
  DELETE http://localhost:3000/products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer |
