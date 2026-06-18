## MODIFIED Requirements

### Requirement: Dropdown Produtos exibe item funcional

O dropdown "Produtos" DEVE exibir "Listar Produtos", "Editar Produto" e "Criar Produto" como subitens funcionais, substituindo os placeholders "Opcao 1" e "Opcao 2".

#### Scenario: Usuario expande o dropdown Produtos

- **WHEN** o usuario expande o dropdown "Produtos"
- **THEN** o dropdown exibe "Criar Produto", "Listar Produtos" e "Editar Produto"

#### Scenario: Usuario clica em Listar Produtos

- **WHEN** o usuario clica em "Listar Produtos" no dropdown
- **THEN** o sistema navega para `/produtos/listar` e o subitem fica destacado como ativo

#### Scenario: Usuario clica em Editar Produto

- **WHEN** o usuario clica em "Editar Produto" no dropdown
- **THEN** o sistema navega para `/produtos/editar` e o subitem fica destacado como ativo

### Requirement: Subitens placeholder navegaveis

Cada dropdown QUE NAO POSSUI paginas reais implementadas DEVE conter exatamente dois subitens placeholder com rotas no formato `<modulo>/opcao-1` e `<modulo>/opcao-2`. O dropdown "Produtos" e excecao: todos os seus subitens sao funcionais.

#### Scenario: Estrutura de subitens do dropdown Produtos

- **WHEN** o usuario expande o dropdown "Produtos"
- **THEN** o dropdown NAO exibe "Opcao 1" ou "Opcao 2" — exibe apenas "Criar Produto", "Listar Produtos" e "Editar Produto"

#### Scenario: Outros dropdowns mantem placeholders

- **WHEN** o usuario expande qualquer dropdown que nao seja "Produtos"
- **THEN** o dropdown exibe "Opcao 1" e "Opcao 2" como subitens placeholder
