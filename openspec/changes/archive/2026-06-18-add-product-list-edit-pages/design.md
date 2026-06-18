## Context

O dropdown "Produtos" da sidebar contém "Opção 1" e "Opção 2" como placeholders. Precisamos substituí-los por "Listar Produtos" e "Editar Produto" com telas reais. As novas telas devem seguir o mesmo padrão visual e de dados mock usados em "Criar Produto" (`app/produtos/criar/page.tsx`).

Stack atual: Next.js (App Router), Ant Design (components + @ant-design/nextjs-registry), TypeScript.

## Goals / Non-Goals

**Goals:**
- Substituir placeholders "Opção 1"/"Opção 2" no dropdown Produtos por "Listar Produtos" e "Editar Produto"
- Criar página `/produtos/listar` com tabela de produtos (dados mock)
- Criar página `/produtos/editar` com formulário pré-preenchido (dados mock de um produto existente)
- Reutilizar os mesmos arrays mock de categorias, marcas e unidades de medida

**Non-Goals:**
- Backend real ou integração com banco de dados
- Paginação server-side, filtros avançados ou pesquisa
- Validação real de formulário (mantém validação client-side simples)
- Deleção de produtos
- Persistência de dados entre páginas

## Decisions

1. **Tabela de listagem com Table do Ant Design**: Para `/produtos/listar`, usa-se o componente `Table` do Ant Design com dados mock inline. Colunas: Nome, Categoria, Marca, Unidade de Medida, Ações (botão Editar que redireciona para `/produtos/editar`). Dados mock são um array de 5-6 produtos com estrutura idêntica aos campos do formulário de criação.

2. **Formulário de edição reutiliza estrutura de criação**: `/produtos/editar` usa o mesmo layout do `CriarProdutoPage` (Card + Form com os mesmos 7 campos), mas pré-carrega os dados via `form.setFieldsValue()` com dados mock de um produto. Os arrays `CATEGORIAS`, `MARCAS` e `UNIDADES_MEDIDA` são copiados (ou idealmente extraídos para um arquivo compartilhado, mas mantemos consistência com o padrão atual de constantes inline).

3. **Dados mock mantidos como constantes no componente**: Segue o mesmo padrão de `CriarProdutoPage` — arrays de opções definidos como `const` no topo do arquivo. Dados mock da tabela também são `const`.

4. **Menu items atualizados em `lib/menu-items.ts`**: Remove "Opção 1"/"Opção 2" e adiciona "Listar Produtos" apontando para `/produtos/listar` e "Editar Produto" apontando para `/produtos/editar`.

## Risks / Trade-offs

- [Duplicação de constantes mock]: As constantes `CATEGORIAS`, `MARCAS`, `UNIDADES_MEDIDA` ficam duplicadas entre `criar/page.tsx` e `editar/page.tsx` → Mitigação: segue o padrão existente do projeto (todas as páginas atualmente usam constantes inline). Extração para módulo compartilhado é escopo de futura refatoração.
- [Dados mock estáticos]: Os dados da tabela e do formulário de edição são hardcoded e não persistem → Mitigação: escopo atual é puramente front-end mock; persistência virá em mudanças futuras.
