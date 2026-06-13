## MODIFIED Requirements

### Requirement: Usuário clica em um módulo na sidebar

O clique no rótulo de um módulo da sidebar DEVE expandir ou recolher o dropdown de subitens, em vez de navegar diretamente para uma rota. A navegação ocorre apenas ao clicar nos subitens do dropdown.

#### Scenario: Usuário clica em um módulo na sidebar

- **WHEN** o usuário clica em um rótulo de módulo na sidebar
- **THEN** o dropdown correspondente expande (se recolhido) ou recolhe (se expandido), sem navegar para outra página

#### Scenario: Usuário clica em um subitem do dropdown

- **WHEN** o usuário clica em um subitem dentro do dropdown expandido
- **THEN** o sistema navega para a rota correspondente ao subitem e o subitem fica destacado como ativo

### Requirement: Item ativo reflete a rota atual

O subitem do menu correspondente à rota atual DEVE ser exibido como selecionado (ativo) na sidebar. Quando a rota contém subcaminhos, o dropdown pai correspondente DEVE estar expandido e o subitem específico DEVE estar destacado.

#### Scenario: Usuário navega para uma sub-rota específica

- **WHEN** o usuário está na rota `/produtos/opcao-1`
- **THEN** o dropdown "Produtos" está expandido e o subitem "Opção 1" aparece com destaque de seleção

#### Scenario: Usuário acessa a raiz do sistema

- **WHEN** o usuário acessa `/`
- **THEN** nenhum item ou subitem da sidebar está selecionado
