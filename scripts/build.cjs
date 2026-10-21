const fs = require("node:fs");
const path = require("node:path");

// Monta as seções no HTML de entrada, sem carregamento no navegador.
const root = path.resolve(__dirname, "..");
const entryPath = path.join(root, "index.html");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

function safeUrl(value) {
  if (
    typeof value !== "string" ||
    !value.trim() ||
    (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value) && !/^https?:\/\//i.test(value))
  ) {
    throw new Error(
      "Use um caminho relativo ou uma URL HTTP(S) para os projetos.",
    );
  }
  return escapeHtml(value);
}

function renderProject(project, index) {
  for (const field of ["title", "description", "image", "imageAlt", "url"]) {
    if (typeof project[field] !== "string" || !project[field].trim()) {
      throw new Error(`Projeto ${index + 1}: preencha o campo ${field}.`);
    }
  }
  const title = escapeHtml(project.title);
  const url = safeUrl(project.url);
  return `<article class="project-card">
  <a class="project-cover paper-surface--rough" href="${url}" aria-label="Ver projeto: ${title}">
    <img src="${safeUrl(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" width="640" height="474">
  </a>
  <div class="project-caption">
    <span class="project-number">${String(index + 1).padStart(2, "0")}.</span>
    <h3 class="project-title">${title}</h3>
    <p class="project-description">${escapeHtml(project.description)}</p>
    <a class="project-link" href="${url}" aria-label="Ver projeto: ${title}">ver projeto →</a>
  </div>
</article>`;
}

const projects = JSON.parse(read("pages/projects/projects.json"));
if (!Array.isArray(projects))
  throw new Error("projects.json deve conter uma lista de projetos.");
const sections = {
  about: read("pages/about/about.html"),
  services: read("pages/services/services.html"),
  hero: read("pages/herosection/hero.html"),
  projects: read("pages/projects/projects.html").replace(
    "<!-- project-cards -->",
    projects.map(renderProject).join("\n"),
  ),
};
let entry = read("index.html");
for (const [name, html] of Object.entries(sections)) {
  const marker = new RegExp(
    `(<!-- ${name}:start[^\\n]*-->\\n)[\\s\\S]*?(        <!-- ${name}:end -->)`,
  );
  if (!marker.test(entry))
    throw new Error(`Marcadores de ${name} ausentes no index.html.`);
  const content = html
    .trimEnd()
    .split("\n")
    .map((line) => `        ${line}`)
    .join("\n");
  entry = entry.replace(
    marker,
    (_, start, end) => `${start}${content}\n${end}`,
  );
}
fs.writeFileSync(entryPath, entry);
console.log(
  `index.html atualizado: hero, projetos (${projects.length} cadastrados) serviços e sobre.`,
);
