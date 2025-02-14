![Banner](/public/images/readme/background-readme.png)

## :bulb: Projeto

Neste projeto, você poderá explorar um pouco da minha trajetória, experiências e habilidades, apresentadas em um portfólio web. Dentro do conteúdo, busco abordar aspectos significativos da minha vida, tanto pessoais quanto profissionais, com foco nas minhas realizações dentro da Engenharia de Software. O portfólio foi minimamente desenvolvido para refletir minha identidade e marca, utilizando cores, imagens e elementos visuais que representam quem sou.


## :computer: Tecnologias

As tecnologias utilizadas no desenvolvimento deste portfólio incluem TypeScript e React. Como o portfólio possui temas claros e escuros, foi implementado o hook useTheme para gerenciar a troca de temas. Além disso, para garantir a funcionalidade multilíngue, foi utilizado o Next.js com a biblioteca next-i18next para realizar a tradução. Durante a estilização, o Tailwind CSS foi empregado, permitindo um design responsivo.

Durante o desenvolvimento, para melhorar a performance, foi utilizado o dynamic para carregar componentes de forma assíncrona, diminuindo o tempo de carregamento inicial. Com isso, o componente só é carregado quando necessário. Também fiz uso do React.memo, evitando que o componente seja re-renderizado desnecessariamente caso suas props não mudem. Além disso, utilizei o useMemo e o useCallback para garantir que as funções não sejam recriadas em cada renderização.

![Portfolio](public/images/readme/background-portfolio.png)


## :arrow_forward: Executar
```bash
# Instala todas as dependências.
$ npm install || yarn install

# Executa.
$ npm run dev || yarn dev
 ```
