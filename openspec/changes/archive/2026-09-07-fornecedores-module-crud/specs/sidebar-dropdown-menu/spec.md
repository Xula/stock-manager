## MODIFIED Requirements

### Requirement: Dropdown Fornecedores exibe itens funcionais

O dropdown "Fornecedores" DEVE exibir "Listar Fornecedores", "Criar Fornecedor" e "Editar Fornecedor" como subitens funcionais, substituindo os placeholders "Opcao 1" e "Opcao 2".

#### Scenario: Usuario expande o dropdown Fornecedores

- **WHEN** o usuario expande o dropdown "Fornecedores"
- **THEN** o dropdown exibe "Listar Fornecedores", "Criar Fornecedor" e "Editar Fornecedor"

#### Scenario: Usuario clica em Listar Fornecedores

- **WHEN** o usuario clica em "Listar Fornecedores" no dropdown
- **THEN** o sistema navega para `/fornecedores/listar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Criar Fornecedor

- **WHEN** o usuario clica em "Criar Fornecedor" no dropdown
- **THEN** o sistema navega para `/fornecedores/criar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Editar Fornecedor

- **WHEN** o usuario clica em "Editar Fornecedor" no dropdown
- **THEN** o sistema navega para `/fornecedores/editar` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens do dropdown Fornecedores

- **WHEN** o usuario expande o dropdown "Fornecedores"
- **THEN** o dropdown NAO exibe "Opcao 1" ou "Opcao 2" — exibe apenas "Listar Fornecedores", "Criar Fornecedor" e "Editar Fornecedor"
