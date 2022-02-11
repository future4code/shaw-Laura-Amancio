# Aprendizados da Semana

Essa semana foi nossa semana de Onboarding, então primeiramente aprendemos um pouco mais como funciona a Labenu e os canais de comunicação entre o pessoal da escola e os alunos. Aprendemos como usar o Slack, que é o canal dessa comunicação, como tirar dúvidas, a estrutura que as dúvidas tecnicas devem ser postadas no Canal de dúvidas, como responder dentro da Thread e assim manter o slack organizado, como abrir atendimento, dentre outras funções. Aprendemos também um pouco de como vai funcionar as aulas pelo Zoom, a forma de como fazer perguntas e expressar as "reações". 
Aprendido como funcionam as ferramentas de comunicação, passamos para as ferramentas de trabalho que usaremos durante o curso. Primeiro baixamos o que precisava ser baixado, depois fomos para nossa primeira aula tecnica mesmo, aprendendo sobre o Terminal. Aqui aprendemos o que é um terminal (esse centro de controle), para que vamos usar e os principais comandos do mesmo. Os principais que peguei e estão anotados foram:

- **head** : mostra as 10 primeiras linhas de um arquivo;
- **tail** : 10 ultimas linhas;
- **whoami** : mostra o usuário ativo;
- **echo "*hello world"** : imprime no terminal a *palavra/frase digitada;
- **cd** : muda de pasta (change directory);
- **cd ./(nome da pasta)**: vai para a pasta selecionada;
- **cd -** : volta para a última pasta;
- **cd ../ :** vai para a pasta acima;
- **ls**: lista todos os arquivos e pastar dentro de um diretório;
- **touch**: cria um arquivo;
- **mkdir**: cria pasta (make directory);
- **rm:** remover arquivo;
- **rm -rf:** remover diretório e tudo que tem dentro; (CUIDADO COM ISSO)
- **mv:** move ou renomeia arquivo;
- **cp:** copia arquivo;
- **cat**: imprime tudo dentro de um arquivo;
- **grep:** busca conteúdo dentro de um arquivo;

Na prática foi colocado o exercício do assasino, no começo achei que não ia conseguir fazer nada, mas uma vez pegando a lógica do negócio, consegui desenvolver até que bem e foi bem legal achar o assasino. 

Passada a aula de Terminal, Tivemos a aula de Git e GitHub (outro momento que achei que ia dar tudo errado). Com calma fomos entendendo as funcionalidades do Git e como fazer o link dele com o GitHub, passo a passo vimos como importar para nossa máquina o arquivo da núvem e a maneira correta de fazer as alterações, sendo elas **SEMPRE** feitas nas Branchs, **NUNCA** na Master, uma vez que posso quebrar o código e acabar com o projeto (meu e dos colegas). O caminho no começo parecia bem complexo, mas também, fazendo os exercícios foi ficando mais intuitivo e mais fácil. O segredo foi anotar os comandos do Git e como usá-los. Além de ter o complemento de como funciona o Terminal. Segue lista de principais comandos do Git:

- **git clone link-repositório:** clona repositório remoto;
- **git status:** status do repositório;
- **git add**: envia arquivos para a *staging area;*
- **git add —all**: adiciona todos os arquivos para a staging area;
- **git add .** : adiciona todos os arquivos da pasta atual para a staging area;
- **git commit -m "*mensagem*"**: "etiqueta" o que está na staging area;
- **git log**: verifica o histórico de commits;
- **git branch:** cria uma branch;
- **git checkout nome-da-branch:** acessa a branch;
- **git checkout -b nome-da-branch:** cria e já acessa a branch;
- **git branch -m novo-nome:** renomear branch;
- **git push origin nome-da-branch:** envia as atualizações para o repositório remoto;
- **git pull origin nome-da-branch:** atualiza a branch com as informações mergeadas no repositório;