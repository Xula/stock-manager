## Why

A sidebar menu plana limita a organização dos módulos quando cada módulo possui subseções ou ações relacionadas. Transformar cada item em um dropdown permite agrupar links relacionados sob um mesmo rótulo, melhorando a navegabilidade e preparando a estrutura para futuras expansões de funcionalidades por módulo.

## What Changes

- Cada item da sidebar torna-se um dropdown colapsável (SubMenu do Ant Design), substituindo o clique de navegação direta
- Cada dropdown exibe dois links placeholder: um para funcionalidade principal e outro para funcionalidade secundária
- Os placeholders usam chaves de rota no formato `<modulo>/opcao-1` e `<modulo>/opcao-2` (ex: `/produtos/opcao-1`, `/produtos/opcao-2`)
- O destaque de item ativo passa a considerar sub-rotas (ex: `/produtos/opcao-1` destaca o dropdown "Produtos")
- A estrutura de `menuItems` em `lib/menu-items.ts` é refatorada para o formato de SubMenu com `children`

## Capabilities

### New Capabilities

- `sidebar-dropdown-menu`: Cada item da sidebar é um dropdown colapsável contendo subitens de navegação placeholder

### Modified Capabilities

- `sidebar-fixa`: O comportamento de clique nos itens da sidebar muda — ao invés de navegar diretamente, o item expande/colapsa um dropdown com subitens. O destaque de item ativo passa a considerar rotas filhas.

## Impact

- `lib/menu-items.ts`: refatoração da estrutura de items plana para items aninhados com `children`
- `components/Sidebar.tsx`: possível ajuste na lógica de `selectedKeys` para suportar sub-rotas com `openKeys`
- Nenhuma dependência externa nova é necessária (antd já suporta SubMenu nativamente)
