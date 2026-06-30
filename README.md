# Site pessoal — Fábio Pereira da Silva

Made by Claude.ai

Site estático, sem build, sem framework. Arquivos:

- `index.html` — esqueleto da página (não precisa editar)
- `style.css` — tema visual (não precisa editar)
- `script.js` — injeta o conteúdo no HTML (não precisa editar)
- `artigo.html` — página única que renderiza qualquer artigo em markdown (não precisa editar)
- `content.js` — **o único arquivo que você edita no dia a dia**
- `artigos/` — onde ficam os textos em markdown (`.md`)

## Adicionar um artigo novo

1. Escreva o texto em markdown puro, ex: `artigos/meu-artigo.pt.md`.
   Se quiser também em inglês: `artigos/meu-artigo.en.md`.
2. No `content.js`, adicione uma entrada em `articles`:

```js
{
  tag: "EMBEDDED",
  title: "Título do artigo",
  summary: "Resumo de uma linha.",
  date: "2026-07",
  langs: {
    pt: "artigos/meu-artigo.pt.md",
    en: "artigos/meu-artigo.en.md", // opcional — pode ter só pt
  },
}
```

3. Commit + push. Pronto — o site monta a linha, os badges PT/EN e a página
   do artigo (`artigo.html`) sozinho.

Se preferir linkar pra um artigo já publicado em outro lugar (LinkedIn, Medium),
use `url: "https://..."` em vez de `langs`.

## Editar o resto do conteúdo

Abra `content.js` e mude os campos: nome, bio, links, projetos.

## Rodar localmente

Não precisa de servidor nem `npm install` para o `index.html` sozinho, mas
o `artigo.html` carrega `.md` via `fetch()`, que exige um servidor local
(navegadores bloqueiam `fetch` em `file://`). Rode:

```bash
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório (ex: `devfabiosilva.github.io` para domínio raiz,
   ou qualquer nome para subpasta).
2. Coloque todos os arquivos (incluindo a pasta `artigos/`) na raiz do repositório.
3. No GitHub: **Settings → Pages → Branch: main → / (root) → Save**.
4. Pronto. A cada novo artigo, edite `content.js`, adicione o `.md`,
   `git add`, `git commit`, `git push`.

Sem pipeline, sem Actions, sem deploy manual.

