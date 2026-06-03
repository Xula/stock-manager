## ADDED Requirements

### Requirement: Menu dropdown de navegação

A página inicial do sistema DEVE exibir um menu dropdown acionado por um botão, contendo as opções de navegação para todos os módulos do sistema.

#### Scenario: Usuário abre o menu dropdown

- **WHEN** o usuário acessa a página inicial (`/`)
- **THEN** um botão rotulado "Menu" ou "Navegar" é exibido centralizado na tela

#### Scenario: Usuário clica no botão do dropdown

- **WHEN** o usuário clica no botão do menu
- **THEN** um dropdown é exibido contendo as seguintes opções: Produtos, Unidades de Medida, Estoque, Clientes, Fornecedores, Usuário, Categorias, Marcas, Métodos de pagamento, Movimentações, Ordens de Serviço

#### Scenario: Usuário seleciona uma opção do menu

- **WHEN** o usuário clica em uma das opções do dropdown
- **THEN** o sistema navega para a rota correspondente (`/<slug-da-opcao>`) e o dropdown é fechado

#### Scenario: Usuário clica fora do dropdown

- **WHEN** o dropdown está aberto e o usuário clica em qualquer área fora dele
- **THEN** o dropdown é fechado sem navegar
