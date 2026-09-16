## Why

O modulo de Clientes e necessario para cadastrar e gerenciar os clientes do sistema, com informacoes de contato (nome, cpf/cnpj, email e telefone). Atualmente a rota `/clientes` exibe apenas um placeholder "Em breve..." sem funcionalidade real, e o dropdown "Clientes" do menu lateral possui somente placeholders "Opcao 1"/"Opcao 2". Este modulo segue o padrao ja estabelecido pelos modulos Produtos, Unidades de Medida e Estoque.

## What Changes

- Substituir a pagina placeholder de `/clientes` por redirecionamento para `/clientes/listar`
- Criar pagina `/clientes/criar` com formulario para cadastrar um cliente (Nome, CPF/CNPJ, Email, Telefone), cada campo usando o input adequado do Ant Design
- Criar pagina `/clientes/editar` com formulario pre-preenchido para editar um cliente
- Criar pagina `/clientes/listar` com tabela de clientes e opcao de remocao com modal de confirmacao
- Atualizar os itens do menu lateral do dropdown "Clientes" de placeholders para itens funcionais (Listar Clientes, Criar Cliente, Editar Cliente)
- Todos os dados serao mock (hardcoded) sem integracao com API, seguindo o padrao existente do projeto

## Capabilities

### New Capabilities
- `cliente-crud`: Paginas de listagem, criacao, edicao e remocao de clientes com dados mock

### Modified Capabilities
- `sidebar-dropdown-menu`: O dropdown "Clientes" deve exibir subitens funcionais (Listar Clientes, Criar Cliente, Editar Cliente) em vez dos placeholders "Opcao 1" e "Opcao 2"

## Impact

- Novos arquivos em `app/clientes/`: `criar/page.tsx`, `listar/page.tsx`, `editar/page.tsx`, `page.tsx` (override do placeholder atual)
- Atualizacao em `lib/menu-items.ts`: substituir placeholders do dropdown Clientes por subitens funcionais
- Atualizacao em `openspec/specs/sidebar-dropdown-menu/spec.md`: adicionar requisitos para o dropdown Clientes com subitens funcionais
