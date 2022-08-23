<h1 align="center">:ballot_box: Desafio FullStack Signo :bar_chart:</h1>

<br>

## :dart: Objetivo do desafio:
Desafio FullStack proposto pela Signo Soluções Web. Nele tive que desenvolver um sistema de votação, com gerenciamento de enquete e atualizações em realtime. No **Backend** montei uma API usando MySQL e Node.JS com Express em Typescript, contendo todos os endpoints necessários para uma melhor aplicação no Front, fazendo um CRUD completo. Já no **Frontend** optei por usar React e jsx, styled components para melhor utilização do CSS puro, além de ter optado por desenvolve-lo em Mobile First, mantendo um site responsivo.

## :hammer_and_wrench: BackEnd
<br>

### Endpoints desenvolvidos:

- **Pegar todas as enquetes** 
- **Pegar enquete pelo ID** 
- **Pegar todos os votos** 
- **Cadastro usuário**
- **Login do usuário** 
- **Criar enquete** 
- **Votar na enquete** 
- **Editar enquete** 
- **Deletar enquete** 

### ⚙️ Funções e regras de negócio desenvolvidas:

- Utilizei o ***MySQL*** como Banco de Dados.
- ***Nickname de usuários ADMIN: "lauraamancio", "laura", "signo", "signo_web"***
- ***Senha de TODOS usuário já cadastrados: 1234567***
- No ***Cadastro Usuário***, o usuário precisa informar apenas um nickname e senha (deve conter no mínimo 7 dígitos). Faço a verificação se o nickname já está cadastrado no meu banco de dados, caso esteja, o cadastro é interrompido. Em caso de sucesso, o cadastro é relizado e um ID é atribuido ao Usuário (ID gerado pela biblioteca ***UUID***). Além disso é gerado um Token personalizado como resposta ao endpoint, este deve ser guardado no Local Storage para autenticação nos outros endpoints (Token gerado pela biblioteca ***Json web token***).
- Ainda no ***Cadastro Usuário***, atente-se que existem 2 tipos de usuários, os ADMIN e os NORMAL. Usuários ADMIN podem editar e deletar qualquer enquete, já os NORMAL, só podem editar e deletar enquetes que eles mesmos criaram. Essa validação é feita e composta pelo Token personalizado.
Os Usuários que são ADMIN estão mocados num array dentro da pasta Mocks do backend, apenas para simular essa funcionalidade em mundo real.
- No ***Login Usuário*** usuário precisa informar seu nickname e senha, aqui também é esperado um novo Token personalizado, enviado como resposta ao usuário.
- Para ***Pegar todas as enquetes*** o usuário precisa apenas informar o Token válido que é respondido no login ou signup.
- Para ***Pegar enquete pelo ID*** é necessário passar o Token de validação e o ID da enquete que deseja por params.
- Para ***Pegar todos os votos*** é necessário passar o Token de validação e o ID da enquete que deseja pegar os votos por params.
- Quando for ***Criar enquete*** é preciso passar o Token de validação, um title (título), uma start_date (data de início) e uma end_date (data de término). As datas devem seguir a ordem cronológica do tempo, não podendo começar no passado e nem terem data de término menor que a data de início. Não é necessário passar as respostas da votação, uma vez que são geradas automaticamente com as opções de: Concordo, Concordo Parcialmente, Discordo e Não sei opinar. (Aqui é o frontend que delimita receber apenas essas respostas do usuário)
- Para ***Votar na enquete*** é preciso do Token de validação e a resposta seguindo as opções de: *CONCORDO*, *CONCORDO PARCIALMENTE*, *DISCORDO*, *NÃO SEI OPINAR*. O usuário pode votar apenas 1 vez na enquete.
- Para ***Editar enquete***, um usuário NORMAL pode apenas editar as enquetes que ele mesmo criou, já um ADMIN pode editar todas as enquetes já criadas. Nesse endpoint também é preciso do Token de validação e usuário pode editar tanto o título, como as datas de início e término.
- ***Deletar enquete*** segue as mesmas regras do editar, usuários NORMAL só podem deletar enquetes que eles mesmos criaras, já os ADMIN podem deletar qualquer enquete. Ambos precisam do Token de validação.
<!-- - ***Deletar todos os votos*** é usado para poder deletar  -->

### :books: Documentação da API:
- [Acesse completa aqui!](https://documenter.getpostman.com/view/20352925/VUqoPHyx)

### :desktop_computer: Linguagens e Bibliotecas usadas:
- Typescript;
- Node;
- Express;
- Knex;
- Cors;
- UUID;
- Json web token;
<br>

## :paintbrush: FrontEnd
<br>

### ⚙️ Funcionalidades:

- ***Desenvolvido*** em ***React*** com Mobile First.
- ***Login***: utilizando o nickname e senha cadastrada o usuário consegue ter acesso as páginas da aplicação com proteções de autenticações (Token deve ser armazenado no Local Storage)
- ***Cadastro***: efetua o cadastro de um novo usuário para adquirir uma autenticação (Token) e encaminha para o Feed de enquetes.
- ***Home/ Feed***: Nele você encontra a caixa de criação de uma nova enquete e todas enquetes já criadas listadas, com um botão de "votar" ao lado.
- ***Página de Voto***: Nela temos o título da enquete ao topo e logo abaixo as datas de início e término da votação. Caso a votação esteja fora do prazo, os botões de opções de votos são desativados. Caso ela seja uma enquete ativa, as opções de votos são ativadas e ao lado de cada opção temos a quantidade de votos de cada uma. O usuário pode votar apenas uma vez em cada enquete.
Além disso, é nesta página que estão as opções de Editar e Deletar uma enquete. Ao deletar você é redirecionado para o Feed de enquetes (lembrando que se você for um usuário NORMAL, poderá apenas apagar as suas próprias enquetes).
- ***Editar Enquete***: ao clicar na opção de editar, você é redirecionado para esta página. Nela os campos de título, data de início e data de término estão com as informações atuais da enquete, logo o que você mudar, será alterado (lembrando que se você for um usuário NORMAL, poderá apenas editar as suas próprias enquetes).

### :books: Bibliotecas utilizadas:
- axios
- react-router-dom
- styled-components
- material-ui

### 🔗 Link Surge: 
- Acesse o site [clicando aqui.](https://laura-amancio-signo.surge.sh/)

### 📱 Imagens Mobile:

Página de Login     | Página de Cadastro
:------------------:|:--------------------:
![Página de Login](https://user-images.githubusercontent.com/98964160/184971405-536b1a9d-5eee-4b15-a542-65e4a50871a9.png) | ![Página de Cadastro](https://user-images.githubusercontent.com/98964160/184972329-27ddc7d3-980f-47ef-bbbc-ca58c65df9a5.png)

Feed     | Página de votação (fora do período)
:------------------:|:--------------------:
![Feed](https://user-images.githubusercontent.com/98964160/184972841-6c0aeea5-3f5b-4711-98f7-72f82b37b501.png) | ![Página de votação (fora do período)](https://user-images.githubusercontent.com/98964160/185168442-dd2f4a9a-b098-43fc-baef-1be32c7c70e5.png)

Página de votação (dentro do período)     | Editar Enquete
:------------------:|:--------------------:
![Página de votação (dentro do período)](https://user-images.githubusercontent.com/98964160/185166610-6b9f9dde-b1b7-4a71-8355-26d1df306b7d.png) | ![Editar Enquete](https://user-images.githubusercontent.com/98964160/185169093-3e76faec-0bec-4b72-96fb-d3a9ca2fe08a.png)

<br>

## :woman_technologist: Desenvolvido por:
[<img src="https://avatars.githubusercontent.com/u/98964160?v=4" width=115><br><sub>Laura Neves Amancio</sub>](https://www.linkedin.com/in/laura-amancio-9b3b8b168/)

<br>

<h2>
  <a href='#top'>Voltar para o topo.</a>
</h2>
