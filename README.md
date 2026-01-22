# Firebase Cloud Messaging (FCM) Client

Este projeto é um cliente web simples para demonstrar e testar o recebimento de notificações push usando Firebase Cloud Messaging (FCM). Ele foi desenvolvido com Vite e Firebase JS SDK.

## Funcionalidades

- **Gerar Token de Registro**: Obtém o token FCM para o dispositivo atual, necessário para enviar notificações.
- **Recebimento de Notificações**:
  - **Foreground (Primeiro plano)**: Exibe a mensagem diretamente na página quando o app está aberto.
  - **Background (Segundo plano)**: Exibe uma notificação do sistema via Service Worker (`firebase-messaging-sw.js`).

## Pré-requisitos

- Node.js instalado (versão 14+ recomendada).
- Navegador com suporte a Push API (Chrome, Firefox, Edge, etc.).

## Configuração

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

3. Configure o Firebase:
    - O projeto já possui credenciais configuradas em `main.js` e `firebase-messaging-sw.js`.
    - **Nota**: Se precisar alterar o projeto Firebase, atualize a constante `firebaseConfig` em ambos os arquivos.

## Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível (geralmente) em `http://localhost:5173`.

## Uso

1. Abra a aplicação no navegador.
2. Clique no botão "Request Permission" (se houver) ou aguarde a solicitação de permissão de notificação.
3. Permita as notificações no navegador.
4. Copie o "Token" exibido na tela.
5. Use o console do Firebase ou uma ferramenta de teste de API (como Postman/cURL) para enviar uma notificação para este token.

### Estrutura de Arquivos

- `main.js`: Lógica principal da aplicação, inicialização do Firebase e manipulador de mensagens em primeiro plano (`onMessage`).
- `firebase-messaging-sw.js`: Service Worker para lidar com mensagens em segundo plano.
- `index.html`: Estrutura HTML da página.
