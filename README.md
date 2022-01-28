# Imersão React Alura

Desenvolvimento do AluraCord
    (Aplicação WEB simulando o funcionamento de Discord)
### Aula 1
Documentação Next-JS
    - https://nextjs.org/docs/getting-started

Instalando dependências 

    - yarn init -y

    - yarn add next react-dom

    - adicionar  ao package.json 
        "scripts": {
                    "dev": "next dev",
                    "build": "next build",
                    "start": "next start",
                    "lint": "next lint"
                    }

Criando primeira Pagina

    - './pages/index.js'

Comando para rodar aplicação em modo dev
    - yarn dev


Publicando Aplicação 

     https://coffeecord.vercel.app/

### Aula 2

Aprofundar sobre o funcionamento: 

    - useState 
    - useRouter
    - onChange
    - onSubmit

#### Desafio 1
Validação: 

    - Se o campo login tiver menos de 2 caracteres: não mostrar a imagem e desativar o botão. Senão executar normalmente.


### Aula 3

Aprofundar: 
    - Em como podemos trabalhar com state
    - Trabalhar com arrays no state

#### Desafio 2 
    - Criar um botão 'OK' como  mais uma alternativa para se enviar as mensagens, assim como o enter 

#### Desafio 3 
    - Criar um botão para excluir as mensagens da tela 

### Aula 4

- Configurar back-end: supabase.io

- Integração 

- Como fazer AJAX: https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6


#### Desafio 4

- Adicionar loading enquanto a lista estiver vazia 

#### Desafio 5 

- Fazer um mouseOver, exibir detalhes do perfil do github

#### Desafio 6

- Botão para adicionar arquivos difentes, além das mensagens 