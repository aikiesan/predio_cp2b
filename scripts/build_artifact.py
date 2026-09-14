"""Gera a versao Artifact do Hub a partir do index.html do site.

O Artifact publica o conteudo dentro de um esqueleto proprio (doctype, html,
head e body), entao a pagina publicada precisa conter apenas o miolo do body
mais o <title> e o link para o CSS. Os demais arquivos (app.js, styles.css e
assets) sao enviados como arquivos de apoio, sem alteracao.

Uso:
    python scripts/build_artifact.py <diretorio_de_saida>
"""

import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def build(out_dir):
    with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as handle:
        html = handle.read()

    title_match = re.search(r"<title>(.*?)</title>", html, re.S)
    title = title_match.group(1).strip() if title_match else "CP2b Hub"

    body_match = re.search(r"<body[^>]*>(.*)</body>", html, re.S)
    if not body_match:
        raise SystemExit("index.html sem <body>")
    body = body_match.group(1).strip()

    page = (
        f"<title>{title}</title>\n"
        '<link rel="stylesheet" href="styles.css" />\n\n'
        f"{body}\n"
    )

    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8", newline="\n") as handle:
        handle.write(page)

    for name in ("app.js", "styles.css"):
        shutil.copy2(os.path.join(ROOT, name), os.path.join(out_dir, name))

    assets_src = os.path.join(ROOT, "assets")
    assets_dst = os.path.join(out_dir, "assets")
    if os.path.isdir(assets_dst):
        shutil.rmtree(assets_dst)
    shutil.copytree(assets_src, assets_dst)

    count = sum(len(files) for _, _, files in os.walk(assets_dst))
    print(f"artifact montado em {out_dir}: pagina + app.js + styles.css + {count} assets")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "dist"))
