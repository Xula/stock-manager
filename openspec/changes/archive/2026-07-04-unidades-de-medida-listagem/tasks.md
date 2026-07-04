## 1. Nova pagina de listagem

- [x] 1.1 Criar diretorio `app/unidades-de-medida/listar/`
- [x] 1.2 Criar `app/unidades-de-medida/listar/page.tsx` seguindo o padrao de `app/produtos/listar/page.tsx`
- [x] 1.3 Definir interface `UnidadeMedida` com campos `id` e `nome`
- [x] 1.4 Definir array `UNIDADES_MEDIDA` com pelo menos 5 unidades mock (ex: Unidade (UN), Litro (L), Quilograma (kg), Metro (m), Caixa (CX))
- [x] 1.5 Configurar colunas da tabela Ant Design: "Nome" e "Acoes" (com botoes Editar e Excluir)
- [x] 1.6 Implementar botao "Editar" que navega para `/unidades-de-medida/editar` via `useRouter().push()`
- [x] 1.7 Implementar botao "Excluir" que abre `Modal.confirm` do Ant Design com titulo "Confirmar exclusao", conteudo descritivo, e ao confirmar exibe `message.success("Unidade de medida excluida com sucesso!")`

## 2. Menu lateral

- [x] 2.1 Adicionar item `{ label: "Listar Unidades de Medida", key: "/unidades-de-medida/listar" }` ao submenu "Unidades de Medida" em `lib/menu-items.ts`

## 3. Redirecionamento da pagina raiz

- [x] 3.1 Substituir o placeholder em `app/unidades-de-medida/page.tsx` por um redirect para `/unidades-de-medida/listar` usando `redirect()` do Next.js ou `useRouter().replace()`

## 4. Verificacao

- [x] 4.1 Executar `npm run build` ou `npm run lint` para verificar que nao ha erros de compilacao
- [x] 4.2 Verificar navegacao: sidebar → listagem → editar → voltar
- [x] 4.3 Verificar modal de exclusao: abrir, cancelar e confirmar
