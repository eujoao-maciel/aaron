# aaron
graphic design portfolio

## Hero section

Edite o conteúdo em `pages/herosection/hero.html` e execute `npm run build`
para atualizar o `index.html`. O resultado é HTML estático e pode ser aberto
diretamente no navegador, sem servidor e sem carregamento via JavaScript.
Os estilos ficam em `css/hero.css` e o menu em `scripts/navigation.js`.

## Projetos

A seção faz parte da mesma landing page, na âncora `#projetos`.

- Estrutura: `pages/projects/projects.html`.
- Cadastro dos trabalhos: `pages/projects/projects.json`.
- Estilos: `css/projects.css`.
- Geração do HTML estático: `npm run build`.

O cadastro começa com `[]`, mantendo a área de trabalhos vazia.
Para adicionar um trabalho, inclua um objeto na lista:

```json
[
  {
    "title": "Nome do projeto",
    "description": "Uma breve descrição do trabalho.",
    "image": "assets/images/project-name.jpg",
    "imageAlt": "Descrição da imagem do projeto",
    "url": "https://example.com/project"
  }
]
```

Os caminhos de imagem são relativos ao `index.html`. Substitua os dados do
exemplo por um trabalho real e execute `npm run build` antes de publicar.
A numeração é automática. A grade usa três colunas acima de 1050px,
duas entre 701px e 1050px e uma até 700px.
