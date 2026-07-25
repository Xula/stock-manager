## 1. Estrutura de rotas e sidebar

- [x] 1.1 Criar estrutura de diretorios `app/estoque/criar/`, `app/estoque/listar/`, `app/estoque/editar/`
- [x] 1.2 Atualizar `app/estoque/page.tsx` para redirecionar para `/estoque/listar` via server-side `redirect()`
- [x] 1.3 Atualizar `lib/menu-items.ts` substituindo placeholders "Opcao 1"/"Opcao 2" do dropdown Estoque por "Listar Estoque", "Criar Estoque" e "Editar Estoque"

## 2. Pagina de criacao de estoque

- [x] 2.1 Criar `app/estoque/criar/page.tsx` com formulario Ant Design contendo: select de Produto (com busca), input Quantidade (number), input Preco de Compra, input Preco de Venda
- [x] 2.2 Definir array mock de produtos para o select (minimo 5 opcoes) e configurar `showSearch` com `filterOption` para busca textual
- [x] 2.3 Configurar `InputNumber` para Preco de Compra e Preco de Venda com prefixo "R$", precisao de 2 casas decimais e step 0.01
- [x] 2.4 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/estoque/listar`
- [x] 2.5 Implementar botao Cancelar que redireciona para `/estoque/listar`
- [x] 2.6 Validar campos obrigatorios (Produto, Quantidade, Preco de Compra, Preco de Venda) usando `rules` do Form.Item

## 3. Pagina de listagem de estoque

- [x] 3.1 Criar `app/estoque/listar/page.tsx` com tabela Ant Design e dados mock (minimo 5 itens)
- [x] 3.2 Renderizar colunas: Produto (nome), Quantidade, Preco de Compra (formatado R$), Preco de Venda (formatado R$), Acoes
- [x] 3.3 Formatar colunas de preco com `toLocaleString('pt-BR')` exibindo "R$ X,XX"
- [x] 3.4 Adicionar botao "Editar" na coluna Acoes que navega para `/estoque/editar`
- [x] 3.5 Adicionar botao "Remover" na coluna Acoes que abre Modal com dados do item

## 4. Modal de remocao

- [x] 4.1 Criar Modal declarativo (Ant Design) exibindo dados do item selecionado: Produto, Quantidade, Preco de Compra, Preco de Venda
- [x] 4.2 Implementar botao "Confirmar" no modal que remove item do array via `useState` e exibe `message.success`
- [x] 4.3 Implementar botao "Cancelar" que fecha o modal sem alteracoes
- [x] 4.4 Controlar visibilidade do modal e item selecionado via `useState`

## 5. Pagina de edicao de estoque

- [x] 5.1 Criar `app/estoque/editar/page.tsx` com formulario Ant Design pre-preenchido via `form.setFieldsValue` em `useEffect`
- [x] 5.2 Exibir nome do produto como texto nao editavel (Typography.Text ou Input desabilitado)
- [x] 5.3 Renderizar campos editaveis: Quantidade, Preco de Compra, Preco de Venda (mesmos componentes da pagina de criacao)
- [x] 5.4 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/estoque/listar`
- [x] 5.5 Implementar botao Cancelar que redireciona para `/estoque/listar`
