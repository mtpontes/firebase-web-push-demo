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

3. Crie um arquivo `.env` na raiz do projeto com suas credenciais do Firebase:
   ```env
   VITE_FIREBASE_API_KEY=sua-api-key
   VITE_FIREBASE_AUTH_DOMAIN=seu-auth-domain
   VITE_FIREBASE_PROJECT_ID=seu-project-id
   VITE_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
   VITE_FIREBASE_APP_ID=seu-app-id
   ```

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
