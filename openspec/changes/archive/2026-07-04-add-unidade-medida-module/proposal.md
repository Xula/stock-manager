## Why

O módulo "Unidades de Medida" existe no menu lateral com itens placeholder ("Opção 1", "Opção 2") e sua página exibe apenas "Em breve...". Unidades de medida são usadas como referência em produtos (`UNIDADES_MEDIDA` em `app/produtos/criar/page.tsx`), mas não há tela para gerenciá-las. Isso impede o cadastro e a edição de unidades de medida, essenciais para o controle de estoque.

## What Changes

- Substituir os itens placeholder "Opção 1" e "Opção 2" do menu lateral "Unidades de Medida" por "Criar Unidade de Medida" e "Editar Unidade de Medida"
- Criar a página de criar unidade de medida (`/unidades-de-medida/criar`) com formulário contendo campo de texto para nome da unidade e botão de salvar
- Criar a página de editar unidade de medida (`/unidades-de-medida/editar`) com formulário contendo campo de texto para nome da unidade (pré-preenchido) e botão de salvar
- Substituir a página placeholder `/unidades-de-medida` por um card informativo de boas-vindas (seguindo o padrão do módulo produtos)

## Capabilities

### New Capabilities
- `unidade-medida-crud`: Páginas de criar e editar unidades de medida, com formulários de nome e navegação pelo menu lateral

### Modified Capabilities
- `sidebar-dropdown-menu`: O menu "Unidades de Medida" deixa de ter itens placeholder e passa a ter itens funcionais "Criar Unidade de Medida" e "Editar Unidade de Medida"

## Impact

- `lib/menu-items.ts` — atualizar itens do menu "Unidades de Medida"
- `app/unidades-de-medida/page.tsx` — substituir placeholder
- `app/unidades-de-medida/criar/page.tsx` — nova página
- `app/unidades-de-medida/editar/page.tsx` — nova página
