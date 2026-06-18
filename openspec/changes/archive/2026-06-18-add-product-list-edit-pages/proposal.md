## Why

O dropdown "Produtos" da sidebar atualmente possui placeholders ("Opção 1", "Opção 2") sem páginas reais. É necessário substituí-los por opções funcionais ("Listar Produtos" e "Editar Produto") e implementar as telas correspondentes para evoluir o módulo de produtos além do formulário de criação.

## What Changes

- Substituir "Opção 1" e "Opção 2" no dropdown "Produtos" por "Listar Produtos" e "Editar Produto"
- Criar tela de listagem de produtos (`/produtos/listar`) com tabela de produtos mock
- Criar tela de edição de produto (`/produtos/editar`) com formulário baseado no de criação, mas pré-preenchido com dados mock de um produto existente
- As novas telas reutilizam os mesmos dados mock (categorias, marcas, unidades de medida) definidos em "Criar Produto"

## Capabilities

### New Capabilities

- `product-list`: Tela de listagem de produtos com tabela Ant Design, exibindo colunas como nome, categoria, marca, unidade de medida e ações; dados mock hardcoded
- `product-edit`: Tela de edição de produto com formulário pré-preenchido com dados mock de um produto, reutilizando a estrutura de campos de "Criar Produto"

### Modified Capabilities

- `sidebar-dropdown-menu`: O dropdown "Produtos" deixa de exibir "Opção 1"/"Opção 2" como placeholders e passa a exibir "Listar Produtos" e "Editar Produto" como subitens funcionais navegáveis

## Impact

- **Arquivos modificados**: `lib/menu-items.ts` (alteração dos subitens do dropdown Produtos)
- **Arquivos criados**: `app/produtos/listar/page.tsx`, `app/produtos/editar/page.tsx`
- **Specs modificados**: `openspec/specs/sidebar-dropdown-menu/spec.md` (delta)
- **Dependências**: Nenhuma nova dependência; reutiliza Ant Design, next/navigation e dados mock já existentes
