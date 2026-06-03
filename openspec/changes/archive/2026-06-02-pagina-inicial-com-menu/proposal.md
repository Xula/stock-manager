## Why

O sistema de controle de estoque precisa de uma página inicial que sirva como ponto de entrada e navegação para todos os módulos do sistema. Atualmente a página inicial (`app/page.tsx`) contém apenas um placeholder, sem qualquer estrutura de navegação.

## What Changes

- Substituir o conteúdo atual de `app/page.tsx` por um menu dropdown (Ant Design `Dropdown`) com botão de acionamento
- O menu listará as seguintes opções de módulo: Produtos, Unidades de Medida, Estoque, Clientes, Fornecedores, Usuário, Categorias, Marcas, Métodos de pagamento, Movimentações, Ordens de Serviço
- Cada opção do menu será um item clicável que navega para a rota correspondente (ex: `/produtos`, `/clientes`, etc.)

## Capabilities

### New Capabilities

- `pagina-inicial`: Página inicial com menu dropdown de navegação listando os módulos do sistema (Produtos, Unidades de Medida, Estoque, Clientes, Fornecedores, Usuário, Categorias, Marcas, Métodos de pagamento, Movimentações, Ordens de Serviço)

### Modified Capabilities

<!-- Nenhum - projeto novo, sem specs existentes -->

## Impact

- Afeta `app/page.tsx` (substituição do conteúdo placeholder)
- Utiliza componentes `Dropdown` e `Menu` do Ant Design
- Utiliza `next/navigation` para navegação entre rotas
