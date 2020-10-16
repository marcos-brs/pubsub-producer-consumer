<h1 align="center">Bem-vindo a aplicação PUBSUB 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/beta-v0.1-green?cacheSeconds=2592000" />
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" />
  </a>
</p>

> Esse repositório possui duas aplicações: um producer e um consumer. O producer cria um tópico e envia uma mensagem através dele, enquanto o consumer cria um subscriber para esse mesmo tópico e ouve todas essas mensagens.

## Requerimentos

- [x] NodeJS (para rodar o comando npm)
- [x] Conta na GCP (para ter um aplicativo)
- [x] Configurar um serviço de PUB/SUB na GCP e exportar as credências
- [x] Exportas as credências como variável ambiente

## Instalação

```sh
git clone https://github.com/zerocoolbr/pubsub-producer-consumer.git
cd pubsub-producer-consumer
npm i
```

## Instruções de Uso

Entrar na pasta de `packages/consumer` e `packages/producer` e executar o comando

```sh
npm run dev:start
```

## Autor

👤 **Marcos Santana**

- Github: [@zerocoolbr](https://github.com/zerocoolbr)
- LinkedIn: [@marcosbrs](https://linkedin.com/in/marcosbrs)

## 📝 License

Copyright © 2020 [Marcos Santana](https://github.com/zerocoolbr).<br />
This project is [MIT](LICENSE) licensed.

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
