## Why

Home page design broken — vertical centering doesn't work (`flex-1` without flex parent), only raw Tailwind with no visual consistency with the Ant Design layout. Sidebar navigates to 11 routes that don't exist, resulting in 404. After visiting a non-existent route and returning, the router stops responding to clicks — navigation breaks completely.

## What Changes

- Create 11 placeholder page files (`app/<route>/page.tsx`) for all modules listed in the sidebar menu
- Redesign home page (`app/page.tsx`) with Ant Design components (Card, Typography), removing invalid `flex-1` and using correct centering
- Standardize design between home and placeholders — all pages use the same visual layout with Ant Design
- Remove unused `useState` import from `AppLayout.tsx`

## Capabilities

### New Capabilities

- `placeholder-pages`: Temporary pages for 11 system modules (Produtos, Unidades de Medida, Estoque, Clientes, Fornecedores, Usuário, Categorias, Marcas, Métodos de Pagamento, Movimentações, Ordens de Serviço). Each page displays the module name with consistent Ant Design styling.

### Modified Capabilities

- `pagina-inicial`: Update home page design requirement — must use Ant Design components (Card, Typography) instead of only Tailwind classes, with correct vertical centering and visual consistency with the system layout.

## Impact

- Affected code: `app/page.tsx`, `components/AppLayout.tsx`, 11 new files in `app/<route>/page.tsx`
- Dependencies: antd v6, React 19, Next.js 16 (no changes)
- Breaking: None
