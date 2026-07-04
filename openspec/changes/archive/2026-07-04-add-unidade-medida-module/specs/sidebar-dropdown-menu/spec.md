## ADDED Requirements

### Requirement: Dropdown Unidades de Medida exibe itens funcionais

O dropdown "Unidades de Medida" DEVE exibir "Criar Unidade de Medida" e "Editar Unidade de Medida" como subitens funcionais, substituindo os placeholders "Opção 1" e "Opção 2".

#### Scenario: Usuário expande o dropdown Unidades de Medida

- **WHEN** o usuário expande o dropdown "Unidades de Medida"
- **THEN** o dropdown exibe "Criar Unidade de Medida" e "Editar Unidade de Medida"

#### Scenario: Usuário clica em Criar Unidade de Medida

- **WHEN** o usuário clica em "Criar Unidade de Medida" no dropdown
- **THEN** o sistema navega para `/unidades-de-medida/criar` e o subitem fica destacado como ativo

#### Scenario: Usuário clica em Editar Unidade de Medida

- **WHEN** o usuário clica em "Editar Unidade de Medida" no dropdown
- **THEN** o sistema navega para `/unidades-de-medida/editar` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens do dropdown Unidades de Medida

- **WHEN** o usuário expande o dropdown "Unidades de Medida"
- **THEN** o dropdown NÃO exibe "Opção 1" ou "Opção 2" — exibe apenas "Criar Unidade de Medida" e "Editar Unidade de Medida"

## MODIFIED Requirements

### Requirement: Subitens placeholder navegáveis

Cada dropdown QUE NAO POSSUI paginas reais implementadas DEVE conter exatamente dois subitens placeholder com rotas no formato `<modulo>/opcao-1` e `<modulo>/opcao-2`. Os dropdowns "Produtos" e "Unidades de Medida" sao excecoes: todos os seus subitens sao funcionais.

#### Scenario: Outros dropdowns mantem placeholders

- **WHEN** o usuário expande qualquer dropdown que nao seja "Produtos" ou "Unidades de Medida"
- **THEN** o dropdown exibe "Opção 1" e "Opção 2" como subitens placeholder
