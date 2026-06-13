## Context

A sidebar atualmente renderiza um menu plano com items que navegam diretamente para cada rota. O objetivo é transformar cada item em um dropdown (SubMenu do Ant Design) contendo dois links placeholder.

A aplicação usa:
- **Next.js App Router**: navegação via `useRouter().push()`
- **Ant Design v6**: componentes `Menu`, `Layout.Sider`, `SubMenu` via `children` nos items
- **Tailwind CSS v4**: não utilizado na sidebar (toda estilização via Ant Design)

## Goals / Non-Goals

**Goals:**
- Cada item da sidebar expande/recolhe um dropdown com subitens
- Cada dropdown contém exatamente dois links placeholder navegáveis
- O destaque de item ativo considera sub-rotas filhas
- Manter compatibilidade com o toggle de collapse da sidebar

**Non-Goals:**
- Criar páginas reais para os links placeholder
- Alterar a aparência visual além do comportamento de dropdown
- Adicionar ícones ou badges aos itens
- Implementar nested dropdowns (apenas 1 nível de profundidade)

## Decisions

### 1. Usar SubMenu nativo do Ant Design em vez de componente customizado

**Alternativa considerada:** Construir dropdowns customizados com estado manual.
**Decisão:** Usar `children` nos items do `Menu` — o Ant Design renderiza automaticamente como `SubMenu` quando um item possui `children`.

**Racional:** Zero código adicional para comportamento de expandir/recolher. O Ant Design gerencia `openKeys` internamente no modo `inline`.

### 2. Estrutura de menuItems com `children` tipados

Cada item no array `menuItems` passa de:
```ts
{ label: "Produtos", key: "/produtos" }
```
para:
```ts
{
  label: "Produtos",
  key: "/produtos",
  children: [
    { label: "Opção 1", key: "/produtos/opcao-1" },
    { label: "Opção 2", key: "/produtos/opcao-2" },
  ]
}
```

**Racional:** O tipo `MenuProps["items"]` do Ant Design já suporta `children`. Sem mudanças de tipo necessárias.

### 3. Gerenciar `openKeys` e `selectedKeys` separadamente

Atualmente o componente usa apenas `selectedKeys={[pathname]}`. Com SubMenu, é necessário:
- `selectedKeys`: igual ao atual, mas considera sub-rotas (ex: `/produtos/opcao-1`)
- `openKeys`: controla quais dropdowns estão expandidos. Abre automaticamente o dropdown pai quando uma sub-rota está ativa.

**Implementação:** Derivar `openKeys` do `pathname` — se o pathname começa com `/produtos`, o dropdown "Produtos" fica aberto. Usar `useState` com valor inicial derivado e atualizar via `onOpenChange`.

### 4. onClick atualizado para navegar apenas nos subitens

O handler `onClick` atual navega em qualquer clique. Com SubMenu, o clique no label pai expande/recolhe (comportamento nativo do Ant Design). O `onClick` deve navegar apenas quando o item clicado não possui `children` (ou seja, é um subitem folha).

**Implementação:** Verificar no handler se `item` possui `children` — se sim, não navegar (deixar o Ant Design gerenciar o toggle).

## Risks / Trade-offs

- **Risco:** Usuários acostumados com clique direto podem estranhar o dropdown → **Mitigação:** Comportamento padrão de UI — menus colapsáveis são amplamente reconhecidos.
- **Risco:** Sub-rotas placeholder retornam 404 se acessadas diretamente → **Mitigação:** Documentado como placeholder; futuramente as páginas serão implementadas.
- **Trade-off:** Itens com dropdown não navegam mais no clique do label pai → **Mitigação:** A primeira opção do dropdown pode servir como link principal (ex: "Produtos > Lista"), mantendo acesso rápido.
