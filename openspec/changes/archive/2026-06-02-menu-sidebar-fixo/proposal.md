## Why

O menu dropdown atual na página inicial não é prático para navegação contínua — o usuário precisa clicar no botão toda vez que quer acessar um módulo diferente. Uma sidebar fixa com opção de recolher/esconder oferece navegação persistente e acesso rápido a todos os módulos, padrão comum em sistemas de gestão.

## What Changes

- Extrair os itens do menu de `app/page.tsx` para um componente de sidebar compartilhado
- Substituir o `Dropdown` por uma sidebar fixa usando `Layout` + `Sider` do Ant Design
- Adicionar botão de toggle para expandir/recolher a sidebar
- Modificar `app/layout.tsx` para integrar a sidebar como parte do layout global
- Simplificar `app/page.tsx` para ser o conteúdo principal (dashboard), sem o menu dropdown

## Capabilities

### New Capabilities

- `sidebar-fixa`: Sidebar fixa à esquerda com lista de módulos do sistema e toggle para esconder/mostrar

### Modified Capabilities

- `pagina-inicial`: A página inicial deixa de conter o menu dropdown e passa a usar a sidebar do layout. O requisito de navegação por menu dropdown é removido em favor da sidebar.

## Impact

- Afeta `app/layout.tsx` (novo layout com sidebar)
- Afeta `app/page.tsx` (simplificação, remoção do dropdown)
- Utiliza componentes `Layout`, `Layout.Sider`, `Menu` e `Button` do Ant Design
- Utiliza `useState` para controle de estado collapsed da sidebar
