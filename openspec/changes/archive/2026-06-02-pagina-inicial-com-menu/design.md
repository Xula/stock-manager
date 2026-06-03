## Context

Projeto Next.js com Ant Design configurado (antd v6, `@ant-design/nextjs-registry`). A página inicial atual (`app/page.tsx`) é um placeholder sem navegação. O sistema de estoque precisa de um ponto de entrada que dê acesso visual aos módulos do sistema.

## Goals / Non-Goals

**Goals:**

- Fornecer um menu dropdown como sidebar na página inicial listando todos os módulos do sistema
- O sidebar deve ser fixo e ter um botão de toggle para esconder e aparecer
- Utilizar componentes nativos do Ant Design (`Dropdown` + `Menu`) para consistência visual
- Navegar para rotas correspondentes ao selecionar uma opção do menu

**Non-Goals:**

- Implementar as páginas de destino dos módulos (rotas como `/produtos`, `/clientes` etc.)
- Criar header fixo ou layout de navegação global
- Implementar autenticação ou controle de acesso

## Decisions

1. **Ant Design Dropdown + Menu**: Utilizar `Dropdown` com `Menu` do Ant Design em vez de `Select` ou `Navigation`. O `Dropdown` oferece um botão de acionamento claro e o `Menu` fornece uma lista de itens clicáveis com suporte nativo a ícones e teclas de atalho. Alternativa considerada: `Select` — mais adequado para formulários, não para navegação principal.

2. **Rotas baseadas em path**: Cada opção do menu mapeia para uma rota (ex: "Produtos" → `/produtos`). Usar `useRouter` do `next/navigation` para navegação client-side. Alternativa considerada: usar `<Link>` — o `Menu` do Ant Design não renderiza `<a>` nativamente, então é mais simples usar `router.push` no evento `onClick`.

3. **Componente client-side**: A página continuará como `"use client"` pois `Dropdown` e `Menu` são componentes interativos que dependem de estado no cliente.

4. **Mapeamento declarativo dos itens**: Os itens do menu serão definidos como um array de objetos `{ label, path }` para facilitar manutenção e evitar duplicação.

## Risks / Trade-offs

- **Navegação com router.push não gera `<a>` semântico**: Mitigação — as rotas de destino serão implementadas posteriormente com páginas reais; se necessário, adicionar `Link` wrapper no futuro.
- **Dropdown fecha ao clicar fora**: Comportamento padrão e esperado do componente Ant Design.
