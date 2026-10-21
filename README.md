# Aaron Victor — Portfólio

Portfólio de design gráfico e ilustração desenvolvido com **HTML, CSS e JavaScript puros**. A landing page reúne apresentação, projetos, serviços e contato, com navegação por âncoras e layouts para desktop, tablet e celular.

A identidade visual combina fundos texturizados, papel bege, colagens, tipografia editorial e detalhes vermelhos.

## Como visualizar

Abra o `index.html` diretamente no navegador ou use um servidor local, como o Live Server.

Para atualizar a página após editar as seções, tenha **Node.js e npm** instalados e execute na raiz do projeto:

```bash
npm run build
```

O build usa apenas recursos nativos do Node.js. Ele reúne os arquivos de `pages/` no `index.html`, gerando uma página estática que não depende de carregamento de HTML via JavaScript.

## Onde editar

| Conteúdo | Arquivo principal | Estilos |
| --- | --- | --- |
| Apresentação | `pages/herosection/hero.html` | `css/hero.css` |
| Projetos | `pages/projects/projects.html` | `css/projects.css` |
| Serviços | `pages/services/services.html` | `css/services.css` |
| Sobre e contato | `pages/about/about.html` | `css/about.css` |

Outros arquivos importantes:

- `pages/projects/projects.json`: cadastro dos projetos.
- `css/tokens.css`: cores, fontes e espaçamentos compartilhados.
- `css/base.css` e `css/elements.css`: estilos base e elementos reutilizáveis.
- `css/navigation.css`: navegação, ícones sociais e botão flutuante.
- `scripts/navigation.js`: menu mobile e destaque da seção ativa.
- `scripts/contact.js`: preparação da mensagem para o WhatsApp.
- `scripts/build.cjs`: montagem do HTML final.
- `assets/`: imagens, desenhos e fontes locais.

**Edite as seções em `pages/` e execute o build.** Alterações feitas diretamente nas seções geradas dentro do `index.html` serão substituídas. O cabeçalho e o botão flutuante ficam no próprio `index.html`.

## Adicionar projetos

O cadastro contém três projetos fictícios para demonstrar o layout. Substitua os exemplos ou adicione novos objetos em `pages/projects/projects.json`:

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

Todos os campos são obrigatórios. O caminho da imagem é relativo ao `index.html`, e `url` define o destino do botão “ver projeto”. A numeração é automática.

Após salvar, execute `npm run build`. Para deixar a área vazia, use `[]` no cadastro.

## Configurar o WhatsApp

O formulário solicita **nome, assunto e mensagem**. Ao enviar, abre o WhatsApp com o texto preenchido; a pessoa confirma o envio na conversa. Não há servidor de mensagens nem armazenamento dos dados.

Para trocar o número, atualize os dois pontos:

1. O atributo `data-whatsapp` em `pages/about/about.html`.
2. O endereço `https://wa.me/…` do botão flutuante no `index.html`.

Use **país + DDD + número**, somente com dígitos, sem `+`, espaços ou pontuação. Depois execute `npm run build`.

Se `data-whatsapp` estiver vazio, o formulário informa que o contato estará disponível em breve.

## Atualizar redes sociais

Os links do Instagram e do 99Freelas ficam em `pages/herosection/hero.html`. Edite os endereços e execute o build para aplicar a alteração.

## Padrões do projeto

- Manter as seções na mesma landing page: `#home`, `#projetos`, `#servicos` e `#sobre`. A âncora `#contato` leva ao formulário.
- Separar estrutura em `pages/`, apresentação em `css/` e comportamento em `scripts/`.
- Reutilizar os tokens e elementos existentes antes de criar novos estilos.
- Usar nomes de arquivos em inglês e kebab-case.
- Preferir WebP para fotos e capas; preservar SVG para logos e ícones vetoriais.
- Carregar fontes locais somente quando os arquivos estiverem em `assets/fonts/`.

As diretrizes completas estão em [AGENTS.md](AGENTS.md).
