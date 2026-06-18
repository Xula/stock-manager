## MODIFIED Requirements

### Requirement: Subitens placeholder navegaveis

Cada dropdown DEVE conter exatamente dois subitens placeholder com rotas no formato `<modulo>/opcao-1` e `<modulo>/opcao-2`. Dropdowns podem conter subitens funcionais adicionais (ex: "Criar Produto") quando o modulo possuir paginas reais implementadas.

#### Scenario: Usuario clica em um subitem

- **WHEN** o usuario clica em "Opcao 1" dentro do dropdown "Produtos"
- **THEN** o sistema navega para a rota `/produtos/opcao-1` e o subitem fica destacado como ativo

#### Scenario: Estrutura de subitens consistente

- **WHEN** o usuario expande qualquer modulo da sidebar
- **THEN** o dropdown exibe no minimo os dois subitens placeholder: "Opcao 1" e "Opcao 2"

#### Scenario: Dropdown Produtos exibe item funcional

- **WHEN** o usuario expande o dropdown "Produtos"
- **THEN** o dropdown exibe "Opcao 1", "Opcao 2" e "Criar Produto"
