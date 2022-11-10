# instalando o APP

Para rodar o app após baixar é necessário instalar suas dependências.

É necessário ter node e NPN instalados em sua máquina.

Em um prompt na pasta raiz após ter instalado node e NPM, rode o comando $ npm install e aguarde alguns minutos para a instalação das dependências app.

Após instaladas, crie um arquivo .env na pasta raiz com as informações de autenticação do Twitter que podem ser conseguidas em [https://developer.twitter.com/] e armazenadas conforme o arquivo .env.example na pasta raiz do projeto.

## Rodando o app

com prompt de comando na pasta raiz rode:

### `npm run startall`

Isso inicializará um servidor Node backend que se comunicará com a api do twitter, e outro que disponibilizará a página em React no front.

O front abriá sozinho no seu navegador, mas de qualquer forma pode acessá-lo em [http://localhost:3000/]

O app pode levar até 2 minutos para iniciar os seus scripts.

## HOME

O app abrirá na página "/", Home, onde haverão dois links, um para a página de controle, e um para a página de Dispplay

## Controle

na página controle [http://localhost:3000/control] o usuário poderá pesquisar por hashtag os últimos 10 twites e clicando na flecha azul(send) os enviar para a lista de aprovado que se atualiza sozinha a caa 3 segundos.

A lista de Aprovado permite retirar twites clicando na lixeira do lado de cada tuite, ou apagar todos clicando no botão "apagar todos" que ficam acima da lista.

## Display

a página Display [http://localhost:3000/display] serve de telão para apresentação de tuites, ele mostra a lista de aprovado do lado esquerdo, e ao clicar na seta(send) amplica o tuite selecionado para facilitar a visualização.

## Criado Por Daniel Modesto

Fique a vontade para modificar este projeto, e caso o use por favor não esqueça de fornecer créditos

meus links são:
[https://daniel-modesto.vercel.app/]
[https://www.linkedin.com/in/daniel-modesto-66628aa0/]
