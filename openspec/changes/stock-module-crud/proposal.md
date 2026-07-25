## Why

O modulo de Estoque e necessario para gerenciar o inventario de produtos, permitindo registrar entradas de estoque com precos de compra e venda. Atualmente a rota `/estoque` exibe apenas um placeholder "Em breve...", sem funcionalidade real. Este modulo complementa os modulos ja implementados (Produtos e Unidades de Medida) e e o proximo passo natural na construcao do sistema.

## What Changes

- Substituir a pagina placeholder de `/estoque` por uma pagina de listagem de itens de estoque com tabela interativa
- Criar pagina `/estoque/criar` com formulario para registrar nova entrada no estoque (produto, quantidade, preco de compra, preco de venda)
- Criar pagina `/estoque/editar` com formulario pre-preenchido para editar um item de estoque (produto nao editavel)
- Implementar funcionalidade de remocao com modal de confirmacao na tabela de listagem
- Atualizar os itens do menu lateral do dropdown "Estoque" de placeholders para itens funcionais (Listar Estoque, Criar Estoque, Editar Estoque)
- Todos os dados serao mock (hardcoded) sem integracao com API, seguindo o padrao existente do projeto
- O select de Produto na pagina de criacao usara mock data temporario com suporte a busca (showSearch/filterOption do Ant Design)

## Capabilities

### New Capabilities
- `stock-crud`: Paginas de listagem, criacao, edicao e remocao de itens de estoque com dados mock

### Modified Capabilities
- `sidebar-dropdown-menu`: O dropdown "Estoque" deve exibir subitens funcionais (Listar Estoque, Criar Estoque, Editar Estoque) em vez dos placeholders "Opcao 1" e "Opcao 2"

## Impact

- Novos arquivos em `app/estoque/`: `criar/page.tsx`, `listar/page.tsx`, `editar/page.tsx`, `page.tsx` (override do placeholder atual)
- Atualizacao em `lib/menu-items.ts`: substituir placeholders do dropdown Estoque por subitens funcionais
- Atualizacao em `openspec/specs/sidebar-dropdown-menu/spec.md`: adicionar requisitos para o dropdown Estoque com subitens funcionais
