## ADDED Requirements

### Requirement: Sidebar fixa com lista de módulos

O sistema DEVE exibir uma sidebar fixa no lado esquerdo do layout contendo a lista de todos os módulos navegáveis. A sidebar DEVE estar sempre visível por padrão.

#### Scenario: Usuário acessa qualquer página do sistema

- **WHEN** o usuário acessa qualquer rota do sistema
- **THEN** a sidebar é exibida no lado esquerdo com a lista de módulos: Produtos, Unidades de Medida, Estoque, Clientes, Fornecedores, Usuário, Categorias, Marcas, Métodos de pagamento, Movimentações, Ordens de Serviço

#### Scenario: Usuário clica em um módulo na sidebar

- **WHEN** o usuário clica em um item da sidebar
- **THEN** o sistema navega para a rota correspondente e o item clicado fica destacado como ativo

### Requirement: Botão de toggle para esconder/mostrar a sidebar

A sidebar DEVE ter um botão de toggle que permite ao usuário recolher (esconder) ou expandir (mostrar) a barra lateral.

#### Scenario: Usuário clica para esconder a sidebar

- **WHEN** o usuário clica no botão de toggle da sidebar
- **THEN** a sidebar é recolhida (escondida) e o conteúdo principal ocupa a largura total da tela

#### Scenario: Usuário clica para mostrar a sidebar

- **WHEN** a sidebar está recolhida e o usuário clica no botão de toggle
- **THEN** a sidebar é expandida novamente, voltando a exibir a lista de módulos

### Requirement: Item ativo reflete a rota atual

O item do menu correspondente à rota atual DEVE ser exibido como selecionado (ativo) na sidebar.

#### Scenario: Usuário navega para uma rota específica

- **WHEN** o usuário está na rota `/produtos`
- **THEN** o item "Produtos" na sidebar é exibido com destaque de seleção

#### Scenario: Usuário acessa a raiz do sistema

- **WHEN** o usuário acessa `/`
- **THEN** nenhum item da sidebar está selecionado (ou o primeiro item é selecionado como padrão)
