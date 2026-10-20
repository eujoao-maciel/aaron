# Diretrizes do projeto Aaron

- Desenvolver o portfólio como site estático, usando HTML, CSS e JavaScript puros. Bibliotecas só entram quando houver necessidade concreta.
- Tratar hero, projetos, serviços e contato como seções da mesma landing page, com navegação por âncoras; os arquivos em `pages/` são pontos de organização dessas seções.
- Manter a direção visual dos protótipos: fundo escuro ou vermelho com textura, contraste em papel bege, colagens e elementos desenhados à mão, tipografia editorial e acentos vermelhos.
- Preservar uma experiência responsiva: a composição em colagem se adapta a telas menores sem esconder conteúdo ou navegação essencial.
- Separar estrutura, apresentação e comportamento em `pages/`, `css/` e `scripts/`; manter `index.html` como entrada do site.
- Usar nomes de arquivos e pastas em kebab-case, em inglês, e evitar dependências de frameworks.
- Reutilizar as variáveis e classes base de `css/tokens.css`, `css/base.css` e `css/elements.css` antes de criar novos estilos visuais.
- Carregar fontes locais apenas quando os arquivos forem adicionados a `assets/fonts/`; até lá, manter os fallbacks editoriais definidos nos tokens.
