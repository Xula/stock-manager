## 1. Sidebar Menu Update

- [x] 1.1 Atualizar `lib/menu-items.ts`: substituir "Opção 1" e "Opção 2" no dropdown "Produtos" por "Listar Produtos" (`/produtos/listar`) e "Editar Produto" (`/produtos/editar`)

## 2. Product List Page (`/produtos/listar`)

- [x] 2.1 Criar diretório `app/produtos/listar/`
- [x] 2.2 Criar `app/produtos/listar/page.tsx` com Card, título "Listar Produtos", e componente Table do Ant Design
- [x] 2.3 Definir dados mock (array de 5-6 produtos com id, nome, categoria, marca, unidadeMedida)
- [x] 2.4 Configurar colunas da tabela: Nome, Categoria, Marca, Unidade de Medida, Ações (botão Editar)
- [x] 2.5 Botão Editar redireciona para `/produtos/editar`

## 3. Product Edit Page (`/produtos/editar`)

- [x] 3.1 Criar diretório `app/produtos/editar/`
- [x] 3.2 Criar `app/produtos/editar/page.tsx` com Card e Form baseado na estrutura de "Criar Produto"
- [x] 3.3 Definir constantes mock: CATEGORIAS, MARCAS, UNIDADES_MEDIDA (mesmas de Criar Produto)
- [x] 3.4 Definir dados mock de um produto e pré-carregar no formulário via `form.setFieldsValue()`
- [x] 3.5 Implementar submit mock com mensagem "Produto atualizado com sucesso!" e redirecionar para `/produtos/listar`
- [x] 3.6 Botão Cancelar redireciona para `/produtos/listar`

## 4. Verification

- [x] 4.1 Verificar que o dropdown "Produtos" na sidebar exibe "Criar Produto", "Listar Produtos" e "Editar Produto"
- [x] 4.2 Verificar que `/produtos/listar` renderiza tabela com dados mock e botão Editar funcional
- [x] 4.3 Verificar que `/produtos/editar` renderiza formulário pré-preenchido e submit funciona
- [x] 4.4 Verificar que rotas estão corretas e navegação entre páginas funciona
