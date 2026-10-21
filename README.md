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
    "image": "assets/images/project-name.webp",
    "imageAlt": "Descrição da imagem do projeto",
    "url": "https://example.com/project"
  }
]
```

Os caminhos de imagem são relativos ao `index.html`. Substitua os dados do
exemplo por um trabalho real e execute `npm run build` antes de publicar.
A numeração é automática. A grade usa três colunas acima de 1050px,
duas entre 701px e 1050px e uma até 700px.

## Serviços

Edite os três serviços em `pages/services/services.html` e a apresentação em
`css/services.css`. Execute `npm run build` para atualizar o HTML de entrada.
A seção usa a âncora `#servicos`: três cartões no desktop, dois por linha
com o último centralizado no tablet (701–1050px), e uma coluna no celular.

## Sobre e contato

A composição “Vamos nos conectar?” fica em `pages/about/about.html`, com
estilos em `css/about.css` e comportamento em `scripts/contact.js`.
O menu aponta para `#sobre`; `#contato` leva ao formulário.

Para habilitar o contato pelo WhatsApp, preencha `data-whatsapp=""`
no formulário de `pages/about/about.html` com país + DDD + número,
usando apenas dígitos (sem `+`, espaços ou pontuação).
Depois execute `npm run build`.

O botão abre o WhatsApp com nome, assunto e mensagem preenchidos.
A pessoa confirma o envio no WhatsApp. Enquanto o número estiver vazio,
o formulário informa que o contato estará disponível em breve.
Não existe envio para servidor nem armazenamento das mensagens.
