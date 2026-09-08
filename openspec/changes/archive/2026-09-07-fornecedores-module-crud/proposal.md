## Why

O modulo de Fornecedores e necessario para cadastrar e gerenciar os fornecedores do sistema, com informacoes de contato (nome, CNPJ, telefone e email). Atualmente a rota `/fornecedores` exibe apenas um placeholder "Em breve..." sem funcionalidade real, e o dropdown "Fornecedores" do menu lateral possui somente placeholders "Opcao 1"/"Opcao 2". Este modulo segue o padrao ja estabelecido pelos modulos Produtos, Unidades de Medida, Estoque e Clientes.

## What Changes

- Substituir a pagina placeholder de `/fornecedores` por redirecionamento para `/fornecedores/listar`
- Criar pagina `/fornecedores/criar` com formulario para cadastrar um fornecedor (Nome, CNPJ, Telefone, Email), cada campo usando o input adequado do Ant Design
- Criar pagina `/fornecedores/editar` com formulario pre-preenchido para editar um fornecedor
- Criar pagina `/fornecedores/listar` com tabela de fornecedores e opcao de remocao com modal de confirmacao
- Atualizar os itens do menu lateral do dropdown "Fornecedores" de placeholders para itens funcionais (Listar Fornecedores, Criar Fornecedor, Editar Fornecedor)
- Todos os dados serao mock (hardcoded) sem integracao com API, seguindo o padrao existente do projeto

## Capabilities

### New Capabilities
- `fornecedor-crud`: Paginas de listagem, criacao, edicao e remocao de fornecedores com dados mock

### Modified Capabilities
- `sidebar-dropdown-menu`: O dropdown "Fornecedores" deve exibir subitens funcionais (Listar Fornecedores, Criar Fornecedor, Editar Fornecedor) em vez dos placeholders "Opcao 1" e "Opcao 2"

## Impact

- Novos arquivos em `app/fornecedores/`: `criar/page.tsx`, `listar/page.tsx`, `editar/page.tsx`, `page.tsx` (override do placeholder atual)
- Atualizacao em `lib/menu-items.ts`: substituir placeholders do dropdown Fornecedores por subitens funcionais
- Atualizacao em `openspec/specs/sidebar-dropdown-menu/spec.md`: adicionar requisitos para o dropdown Fornecedores com subitens funcionais
