# CP2B — conceitos dos ambientes

Visualizador interativo das plantas do Edifício NIPE / CP2B para comparação e votação dos conceitos de interiores.

## Como usar

1. Selecione o pavimento na barra lateral.
2. Clique em um marcador sobre a planta.
3. Compare as opções na galeria. Use os botões ou o scroll do mouse para ampliar a imagem.
4. Clique em **Votar neste conceito**.
5. O GitHub abrirá um novo registro já preenchido. Confirme em **Submit new issue**.

Cada issue com o marcador interno de voto é contabilizada pelo site. Para evitar votos duplicados, a contagem considera apenas o registro mais recente de cada usuário em cada ambiente.

## Publicação

O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente o conteúdo no GitHub Pages após alterações na branch `main`.

## Atualizar imagens

As imagens publicadas ficam em `assets/concepts`. O script `scripts/prepare_assets.py` recompõe os arquivos WebP a partir da pasta local do projeto arquitetônico.

## Limitação de segurança do voto

Uma página estática não deve conter token de acesso ao GitHub. Por isso, o voto é registrado por meio de uma issue autenticada no GitHub. Isso mantém autoria, histórico e auditoria no próprio repositório sem expor credenciais no navegador.
