## Purpose

Define o comportamento dos dropdowns colapsáveis na sidebar — cada módulo expande/recolhe exibindo subitens de navegação placeholder.

## Requirements

### Requirement: Sidebar exibe dropdowns colapsáveis

O sistema DEVE renderizar cada módulo da sidebar como um dropdown colapsável (SubMenu) contendo dois subitens de navegação placeholder.

#### Scenario: Usuário visualiza a sidebar

- **WHEN** o usuário acessa qualquer página do sistema
- **THEN** cada módulo da sidebar é exibido como um item expansível com indicador de dropdown (seta/chevron)

#### Scenario: Usuário expande um dropdown

- **WHEN** o usuário clica no rótulo de um módulo (ex: "Produtos")
- **THEN** o dropdown expande exibindo dois subitens: "Opção 1" e "Opção 2"

#### Scenario: Usuário recolhe um dropdown

- **WHEN** um dropdown está expandido e o usuário clica novamente no rótulo do módulo
- **THEN** o dropdown recolhe, ocultando os subitens

### Requirement: Subitens placeholder navegáveis

Cada dropdown DEVE conter exatamente dois subitens com rotas placeholder no formato `<modulo>/opcao-1` e `<modulo>/opcao-2`.

#### Scenario: Usuário clica em um subitem

- **WHEN** o usuário clica em "Opção 1" dentro do dropdown "Produtos"
- **THEN** o sistema navega para a rota `/produtos/opcao-1` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens consistente

- **WHEN** o usuário expande qualquer módulo da sidebar
- **THEN** o dropdown exibe exatamente dois subitens: "Opção 1" e "Opção 2"

### Requirement: Dropdown pai fica aberto quando sub-rota está ativa

O dropdown DEVE permanecer expandido quando o usuário está em uma sub-rota correspondente.

#### Scenario: Usuário navega para uma sub-rota diretamente

- **WHEN** o usuário acessa a rota `/produtos/opcao-1`
- **THEN** o dropdown "Produtos" aparece expandido e o subitem "Opção 1" aparece destacado

#### Scenario: Usuário recarrega a página em uma sub-rota

- **WHEN** o usuário está em `/estoque/opcao-2` e recarrega a página
- **THEN** o dropdown "Estoque" permanece expandido com "Opção 2" destacado
