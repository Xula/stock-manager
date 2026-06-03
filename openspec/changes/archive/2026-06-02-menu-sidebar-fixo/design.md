## Context

O sistema possui uma página inicial (`app/page.tsx`) com um menu dropdown (Ant Design `Dropdown`) que lista 11 módulos. O layout atual (`app/layout.tsx`) é simples, apenas com `AntdRegistry`. O objetivo é evoluir a navegação para uma sidebar fixa no layout, usando componentes nativos do Ant Design (`Layout`, `Layout.Sider`, `Menu`), com toggle para esconder/mostrar.

## Goals / Non-Goals

**Goals:**
- Criar uma sidebar fixa no layout que exiba os 11 módulos como itens de menu
- Usar `Layout` + `Layout.Sider` do Ant Design com suporte a collapse
- Adicionar botão de toggle integrado ao `Sider` para expandir/recolher
- Mover a definição dos itens do menu para um arquivo compartilhado (ex: `lib/menu-items.ts`)
- Remover o `Dropdown` da página inicial, mantendo-a como dashboard

**Non-Goals:**
- Implementar as páginas de destino dos módulos
- Adicionar submenus ou agrupamentos
- Adicionar ícones aos itens do menu
- Implementar responsividade mobile (hamburger menu)

## Decisions

1. **Ant Design `Layout.Sider` com `collapsible` e `collapsed`**: O componente `Layout.Sider` do Ant Design já oferece suporte nativo a collapse com botão de toggle integrado. Basta usar a prop `collapsible` e controlar o estado com `useState`. Alternativa considerada: implementar toggle manual com CSS — desnecessário, pois o Ant Design já provê a funcionalidade.

2. **Componente client-side separado**: Criar um componente `Sidebar` (client component) que encapsula o `Layout.Sider` e o `Menu`. O `layout.tsx` permanece server component e importa o `Sidebar`. Alternativa considerada: colocar tudo no `layout.tsx` — inviável pois `useState` e `usePathname` exigem `"use client"`.

3. **Arquivo compartilhado `lib/menu-items.ts`**: Extrair o array de itens do menu para um módulo separado, compartilhado entre `Sidebar` (para exibição) e futuras páginas. Evita duplicação. Formato: `{ label: string, key: string }[]`.

4. **`usePathname` para item ativo**: Usar `usePathname` do `next/navigation` para determinar qual item do menu está ativo, passando `selectedKeys` para o `Menu`. Mapeamento direto: pathname atual → key do item.

5. **Header com botão toggle quando collapsed**: Quando a sidebar está collapsed, o toggle fica visível como um ícone no header/canto, permitindo reabrir.

## Risks / Trade-offs

- **Layout.Sider animação de collapse**: O Ant Design gerencia a transição. Não há risco de layout quebrado.
- **Flash de conteúdo**: Como `usePathname` é client-side, pode haver um breve flash antes do item correto ser destacado. Mitigação: aceitável para UX inicial; resolver com `defaultSelectedKeys` se necessário.
