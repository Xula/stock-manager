## 1. Estrutura de rotas e sidebar

- [x] 1.1 Criar estrutura de diretorios `app/fornecedores/criar/`, `app/fornecedores/listar/`, `app/fornecedores/editar/`
- [x] 1.2 Atualizar `app/fornecedores/page.tsx` para redirecionar para `/fornecedores/listar` via server-side `redirect()`
- [x] 1.3 Atualizar `lib/menu-items.ts` substituindo placeholders "Opcao 1"/"Opcao 2" do dropdown Fornecedores por "Listar Fornecedores", "Criar Fornecedor" e "Editar Fornecedor"

## 2. Pagina de criacao de fornecedor

- [x] 2.1 Criar `app/fornecedores/criar/page.tsx` com formulario Ant Design contendo: Nome (Input), CNPJ (Input), Telefone (Input), Email (Input)
- [x] 2.2 Configurar placeholder adequado para cada campo (ex: CNPJ "00.000.000/0001-00", Telefone "(00) 00000-0000", Email "email@exemplo.com")
- [x] 2.3 Configurar validacao de email no Form.Item usando `type: "email"` e validacao de obrigatoriedade (`required`) em todos os campos
- [x] 2.4 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/fornecedores/listar`
- [x] 2.5 Implementar botao Cancelar que redireciona para `/fornecedores/listar`

## 3. Pagina de listagem de fornecedores

- [x] 3.1 Criar `app/fornecedores/listar/page.tsx` com tabela Ant Design e dados mock (minimo 5 fornecedores)
- [x] 3.2 Renderizar colunas: Nome, CNPJ, Telefone, Email, Acoes
- [x] 3.3 Adicionar botao "Editar" na coluna Acoes que navega para `/fornecedores/editar`
- [x] 3.4 Adicionar botao "Remover" na coluna Acoes que abre Modal com dados do fornecedor

## 4. Modal de remocao

- [x] 4.1 Criar Modal declarativo (Ant Design) exibindo dados do fornecedor selecionado: Nome, CNPJ, Telefone, Email
- [x] 4.2 Implementar botao "Confirmar" no modal que remove fornecedor do array via `useState` e exibe `message.success("Fornecedor removido com sucesso!")`
- [x] 4.3 Implementar botao "Cancelar" que fecha o modal sem alteracoes
- [x] 4.4 Controlar visibilidade do modal e fornecedor selecionado via `useState`

## 5. Pagina de edicao de fornecedor

- [x] 5.1 Criar `app/fornecedores/editar/page.tsx` com formulario Ant Design pre-preenchido via `form.setFieldsValue` em `useEffect`
- [x] 5.2 Renderizar campos editaveis: Nome, CNPJ, Telefone, Email (mesmos componentes e validacoes da pagina de criacao)
- [x] 5.3 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/fornecedores/listar`
- [x] 5.4 Implementar botao Cancelar que redireciona para `/fornecedores/listar`
