## Why

O modulo de unidades de medida possui paginas de criar e editar, mas nao tem uma tela de listagem. Atualmente a rota `/unidades-de-medida` exibe apenas um placeholder "Em breve...". A tela de listagem e essencial para visualizar todas as unidades cadastradas e permite acoes como editar e excluir registros diretamente da tabela, seguindo o mesmo padrao ja implementado no modulo de produtos.

## What Changes

- Nova pagina `/unidades-de-medida/listar` com tabela listando as unidades de medida cadastradas
- Cada linha da tabela exibe o nome da unidade de medida e botoes de acao (Editar e Excluir)
- Botao "Editar" redireciona para `/unidades-de-medida/editar` (pagina ja existente)
- Botao "Excluir" abre modal de confirmacao (primeiro modal de confirmacao do sistema) usando `Modal.confirm` do Ant Design
- Adicionar item "Listar Unidades de Medida" no menu lateral (sidebar) dentro do submenu "Unidades de Medida"
- Substituir o placeholder da pagina `/unidades-de-medida` pelo redirecionamento para `/unidades-de-medida/listar`

## Capabilities

### New Capabilities
- `unidade-medida-list`: Tela de listagem de unidades de medida com tabela, botoes de editar e excluir, e modal de confirmacao de exclusao

### Modified Capabilities
- `unidade-medida-crud`: Adicionar requisitos de listagem (nova pagina `/unidades-de-medida/listar`) e exclusao (modal de confirmacao) a especificacao existente

## Impact

- `app/unidades-de-medida/listar/page.tsx` — nova pagina de listagem
- `app/unidades-de-medida/page.tsx` — substituir placeholder por redirect para `/listar`
- `lib/menu-items.ts` — adicionar item "Listar Unidades de Medida" ao submenu
