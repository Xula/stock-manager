## Context

The project is a Next.js 16 App Router application using Ant Design v6 and Tailwind CSS v4. The sidebar layout (global `AppLayout` with `Sidebar`) is fully implemented with 11 menu items, but none of the target routes have page files. The home page (`app/page.tsx`) is a minimal server component using only Tailwind classes with broken vertical centering. After navigating to a non-existent route (404) and returning, the router becomes unresponsive.

## Goals / Non-Goals

**Goals:**
- Create placeholder page files for all 11 sidebar routes so navigation works end-to-end
- Redesign the home page with Ant Design components for visual consistency
- Fix vertical centering on home page (remove invalid `flex-1`)
- Standardize the page template across home and all placeholders

**Non-Goals:**
- Implement actual module functionality (CRUD, forms, tables) — placeholders only
- Add breadcrumbs, page headers with actions, or any interactive features
- Create a shared reusable page component — each page remains independent and simple
- Modify sidebar, layout, or menu items structure

## Decisions

### 1. Page template: Ant Design Card + Typography

Each page (home + 11 placeholders) follows the same structure:
```tsx
<Card>
  <Typography.Title level={2}>Module Name</Typography.Title>
  <Typography.Text type="secondary">...</Typography.Text>
</Card>
```

**Why:** `Card` provides visual elevation, padding, and border consistent with Ant Design's design system. `Typography.Title` and `Typography.Text` use Ant Design's type scale and color tokens. This matches the sidebar's dark-theme visual language.

**Alternative considered:** Continue using raw Tailwind only — rejected because it creates visual inconsistency with the Ant Design sidebar.

### 2. Centering approach: flex parent wrapper

Replace the current:
```tsx
<div className="flex flex-col flex-1 items-center justify-center p-6">
```
With a flex parent:
```tsx
<div className="flex items-center justify-center min-h-full p-6">
  <Card>...</Card>
</div>
```

**Why:** `flex-1` only works when the parent is `display: flex`. The parent (`<Content>`) is `display: block`. A wrapper with `flex items-center justify-center min-h-full` correctly centers content without depending on parent flex context.

### 3. Server components for all pages

All page files remain server components (no `"use client"` directive). They import Ant Design components which are compatible with server-side rendering via `AntdRegistry` (already configured in root layout).

**Why:** Keeps pages simple. No state, no hooks needed. Ant Design server components work with the existing `@ant-design/nextjs-registry`.

### 4. Each route gets its own independent page file

11 separate files under `app/<route>/page.tsx`, each hardcoding its module name. No shared component or factory pattern.

**Why:** Each route will later evolve independently with unique functionality (forms, tables, charts). Premature abstraction would add complexity without benefit at this stage.

### 5. Remove unused `useState` import from AppLayout.tsx

Line 4 of `components/AppLayout.tsx` imports `useState` but never uses it. Remove to keep the code clean.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| Placeholder pages give false impression of completion | Each page explicitly shows placeholder text like "Em breve..." to indicate work in progress |
| 11 new files add duplication | Intentional — each route will diverge with unique functionality. Duplication now is cheaper than premature abstraction |
| Ant Design Card may look too finished for a placeholder | The visual consistency is the goal. Placeholder status is communicated through text, not through deliberately broken styling |

## Open Questions

- None. Design is straightforward — create pages, fix centering, standardize layout.
