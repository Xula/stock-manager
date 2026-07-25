## MODIFIED Requirements

### Requirement: Dropdown Estoque exibe itens funcionais

O dropdown "Estoque" DEVE exibir "Listar Estoque", "Criar Estoque" e "Editar Estoque" como subitens funcionais, substituindo os placeholders "Opcao 1" e "Opcao 2".

#### Scenario: Usuario expande o dropdown Estoque

- **WHEN** o usuario expande o dropdown "Estoque"
- **THEN** o dropdown exibe "Listar Estoque", "Criar Estoque" e "Editar Estoque"

#### Scenario: Usuario clica em Listar Estoque

- **WHEN** o usuario clica em "Listar Estoque" no dropdown
- **THEN** o sistema navega para `/estoque/listar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Criar Estoque

- **WHEN** o usuario clica em "Criar Estoque" no dropdown
- **THEN** o sistema navega para `/estoque/criar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Editar Estoque

- **WHEN** o usuario clica em "Editar Estoque" no dropdown
- **THEN** o sistema navega para `/estoque/editar` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens do dropdown Estoque

- **WHEN** o usuario expande o dropdown "Estoque"
- **THEN** o dropdown NAO exibe "Opcao 1" ou "Opcao 2" — exibe apenas "Listar Estoque", "Criar Estoque" e "Editar Estoque"
