## Context

O layout atual (`AppLayout`) consiste em `Sidebar` + `Content` dentro de um `Layout` com `hasSider`. Não existe header global. O título "Stock Manager" aparece apenas na sidebar (quando expandida) e nas páginas individuais. Ações globais como notificações e configurações não possuem local visível.

## Goals / Non-Goals

**Goals:**
- Adicionar header global com título "Stock Manager" à esquerda
- Adicionar dois botões com ícones à direita (notificações e configurações)
- Manter consistência visual com a sidebar (tema escuro)
- Header visível em todas as páginas do sistema

**Non-Goals:**
- Funcionalidade real nos botões (apenas placeholder visual)
- Menu dropdown, breadcrumbs, ou avatar de usuário
- Responsividade mobile (header colapsável)
- Modificar estrutura da sidebar

## Decisions

### 1. Layout aninhado: Header + Content dentro de Layout interno

```
Layout (min-h-screen)
├── Sider (sidebar)
└── Layout (coluna direita)
    ├── Header (novo)
    └── Content
```

**Why:** Ant Design `Layout.Header` requer um `Layout` pai. Ao aninhar um `Layout` (sem sider) dentro da coluna direita, o `Header` e `Content` empilham verticalmente. Isso preserva o `hasSider` no Layout externo.

**Alternativa considerada:** Posicionar Header absoluto com CSS — rejeitado por ser frágil e quebrar o layout system do antd.

### 2. Tema escuro no Header

```tsx
<Header style={{ background: "#001529", padding: "0 24px", display: "flex", ... }}>
```

**Why:** A sidebar usa `theme="dark"` do antd que aplica `background: #001529`. O Header deve usar a mesma cor de fundo para consistência visual.

### 3. Componente Header como client component

```tsx
"use client";
```

**Why:** Ant Design `Layout.Header`, `Button`, e `Space` são componentes client-side (usam hooks/context internamente). Sem `"use client"`, falham na geração estática.

### 4. Ícones do @ant-design/icons

Usar `NotificationOutlined` e `SettingOutlined` — já disponíveis pois `@ant-design/icons` é dependência do antd.

**Why:** Ícones padrão, sem necessidade de instalar pacotes adicionais.

### 5. Botões sem ação

Botões renderizam sem `onClick` handler. São puramente visuais nesta etapa. Funcionalidade será adicionada quando houver requisitos específicos (ex: página de configurações, sistema de notificações).

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| Header adiciona altura fixa (~64px) reduzindo espaço do conteúdo | Altura padrão do antd Header é 64px, aceitável para aplicações desktop |
| Layout aninhado pode causar scroll duplo | Apenas o Content interno deve ter scroll; Header é fixo no topo |
| Botões sem ação podem confundir usuário | Implementação futura dará funcionalidade; placeholder é aceitável no estágio atual |
