## 1. Estrutura Base

- [x] 1.1 Criar arquivo `lib/menu-items.ts` com o array de itens do menu (extraído de `app/page.tsx`)
- [x] 1.2 Criar componente `components/Sidebar.tsx` usando `Layout.Sider` do Ant Design com prop `collapsible` e estado `collapsed`
- [x] 1.3 Configurar o `Menu` dentro do `Sider` com `items`, `selectedKeys` via `usePathname`, e `onClick` com `useRouter`

## 2. Integração no Layout

- [x] 2.1 Atualizar `app/layout.tsx` para usar `Layout` + `Sidebar` envolvendo `children`
- [x] 2.2 Simplificar `app/page.tsx` removendo o `Dropdown`, mantendo apenas conteúdo de dashboard

## 3. Verificação

- [x] 3.1 Executar `npm run build` e confirmar que compila sem erros
- [x] 3.2 Executar `npm run dev` e verificar que a sidebar aparece fixa à esquerda com os 11 itens
- [x] 3.3 Verificar que o toggle da sidebar funciona (expandir/recolher)
- [x] 3.4 Verificar que clicar em um item navega para a rota correspondente e destaca o item ativo
