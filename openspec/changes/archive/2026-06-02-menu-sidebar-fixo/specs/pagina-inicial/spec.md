## MODIFIED Requirements

### Requirement: Menu dropdown de navegação

A página inicial do sistema NÃO DEVE mais exibir o menu dropdown de navegação. A navegação entre módulos passa a ser feita exclusivamente pela sidebar fixa do layout.

#### Scenario: Usuário acessa a página inicial

- **WHEN** o usuário acessa a página inicial (`/`)
- **THEN** a página exibe apenas o conteúdo principal (dashboard) e a sidebar do layout fornece a navegação entre os módulos

## REMOVED Requirements

### Requirement: Menu dropdown de navegação (antigo)

**Reason**: Substituído pela sidebar fixa com toggle, que oferece navegação persistente em todas as páginas.
**Migration**: O menu dropdown e o botão "Navegar" são removidos. A navegação passa a ser feita pela sidebar no layout.
