## 1. Estrutura de rotas e sidebar

- [x] 1.1 Criar estrutura de diretorios `app/clientes/criar/`, `app/clientes/listar/`, `app/clientes/editar/`
- [x] 1.2 Atualizar `app/clientes/page.tsx` para redirecionar para `/clientes/listar` via server-side `redirect()`
- [x] 1.3 Atualizar `lib/menu-items.ts` substituindo placeholders "Opcao 1"/"Opcao 2" do dropdown Clientes por "Listar Clientes", "Criar Cliente" e "Editar Cliente"

## 2. Pagina de criacao de cliente

- [x] 2.1 Criar `app/clientes/criar/page.tsx` com formulario Ant Design contendo: Nome (Input), CPF/CNPJ (Input), Email (Input), Telefone (Input)
- [x] 2.2 Configurar placeholder adequado para cada campo (ex: CPF/CNPJ "000.000.000-00 ou 00.000.000/0001-00", Telefone "(00) 00000-0000", Email "email@exemplo.com")
- [x] 2.3 Configurar validacao de email no Form.Item usando `type: "email"` e validacao de obrigatoriedade (`required`) em todos os campos
- [x] 2.4 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/clientes/listar`
- [x] 2.5 Implementar botao Cancelar que redireciona para `/clientes/listar`

## 3. Pagina de listagem de clientes

- [x] 3.1 Criar `app/clientes/listar/page.tsx` com tabela Ant Design e dados mock (minimo 5 clientes)
- [x] 3.2 Renderizar colunas: Nome, CPF/CNPJ, Email, Telefone, Acoes
- [x] 3.3 Adicionar botao "Editar" na coluna Acoes que navega para `/clientes/editar`
- [x] 3.4 Adicionar botao "Remover" na coluna Acoes que abre Modal com dados do cliente

## 4. Modal de remocao

- [x] 4.1 Criar Modal declarativo (Ant Design) exibindo dados do cliente selecionado: Nome, CPF/CNPJ, Email, Telefone
- [x] 4.2 Implementar botao "Confirmar" no modal que remove cliente do array via `useState` e exibe `message.success("Cliente removido com sucesso!")`
- [x] 4.3 Implementar botao "Cancelar" que fecha o modal sem alteracoes
- [x] 4.4 Controlar visibilidade do modal e cliente selecionado via `useState`

## 5. Pagina de edicao de cliente

- [x] 5.1 Criar `app/clientes/editar/page.tsx` com formulario Ant Design pre-preenchido via `form.setFieldsValue` em `useEffect`
- [x] 5.2 Renderizar campos editaveis: Nome, CPF/CNPJ, Email, Telefone (mesmos componentes e validacoes da pagina de criacao)
- [x] 5.3 Implementar submissao mock: `setTimeout` + `message.success` + `router.push` para `/clientes/listar`
- [x] 5.4 Implementar botao Cancelar que redireciona para `/clientes/listar`
