## MODIFIED Requirements

### Requirement: Dropdown Clientes exibe itens funcionais

O dropdown "Clientes" DEVE exibir "Listar Clientes", "Criar Cliente" e "Editar Cliente" como subitens funcionais, substituindo os placeholders "Opcao 1" e "Opcao 2".

#### Scenario: Usuario expande o dropdown Clientes

- **WHEN** o usuario expande o dropdown "Clientes"
- **THEN** o dropdown exibe "Listar Clientes", "Criar Cliente" e "Editar Cliente"

#### Scenario: Usuario clica em Listar Clientes

- **WHEN** o usuario clica em "Listar Clientes" no dropdown
- **THEN** o sistema navega para `/clientes/listar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Criar Cliente

- **WHEN** o usuario clica em "Criar Cliente" no dropdown
- **THEN** o sistema navega para `/clientes/criar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Editar Cliente

- **WHEN** o usuario clica em "Editar Cliente" no dropdown
- **THEN** o sistema navega para `/clientes/editar` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens do dropdown Clientes

- **WHEN** o usuario expande o dropdown "Clientes"
- **THEN** o dropdown NAO exibe "Opcao 1" ou "Opcao 2" — exibe apenas "Listar Clientes", "Criar Cliente" e "Editar Cliente"
