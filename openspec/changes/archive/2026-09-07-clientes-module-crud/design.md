## Context

O projeto e um sistema de gerenciamento de estoque (Stock Manager) construido com Next.js 16 (App Router), React 19, TypeScript e Ant Design 6. Atualmente, os modulos Produtos, Unidades de Medida e Estoque possuem paginas CRUD implementadas com dados mock. O modulo Clientes possui apenas uma pagina placeholder e o dropdown "Clientes" do menu lateral contem placeholders "Opcao 1"/"Opcao 2".

Este design segue o mesmo padrao arquitetural dos modulos ja implementados, garantindo consistencia no codigo.

## Goals / Non-Goals

**Goals:**
- Implementar paginas CRUD para o modulo de clientes (listar, criar, editar, remover)
- Usar o input adequado do Ant Design para cada campo: Nome (Input de texto), CPF/CNPJ (Input de texto), Email (Input com validacao de email), Telefone (Input de texto)
- Manter consistencia com o padrao de codigo dos modulos Produtos, Unidades de Medida e Estoque
- Usar dados mock (hardcoded) sem integracao com API
- Atualizar o menu lateral com subitens funcionais para o dropdown Clientes

**Non-Goals:**
- Integracao com API ou banco de dados
- Persistencia real de dados (tudo e mock)
- Mascara de CPF/CNPJ ou telefone (formatacao automatica de digitacao)
- Paginacao ou ordenacao avancada na tabela
- Responsividade mobile (padrao desktop-first do projeto)

## Decisions

### Roteamento: sub-rotas sob `/clientes`

Paginas criadas como sub-rotas: `/clientes/criar`, `/clientes/listar`, `/clientes/editar`, com a raiz `/clientes` redirecionando para `/clientes/listar` via server-side `redirect()`. Segue o mesmo padrao de `/estoque` e `/unidades-de-medida`.

**Alternativa considerada**: Usar query params (`/clientes?action=create`). Rejeitada porque foge do padrao do projeto e dificulta navegacao por sidebar.

### Pagina de edicao sem parametro de rota

A pagina `/clientes/editar` usa dados mock pre-preenchidos sem receber ID via URL params (query ou path param). O mesmo padrao e usado em `/produtos/editar`, `/unidades-de-medida/editar` e `/estoque/editar`.

**Alternativa considerada**: Receber ID via query string (`/clientes/editar?id=1`). Rejeitada para manter consistencia com os modulos existentes.

### Inputs adequados por campo

Cada campo do formulario usa o componente Ant Design mais adequado ao tipo de dado:

- **Nome**: `Input` de texto simples com placeholder.
- **CPF/CNPJ**: `Input` de texto com placeholder indicando os dois formatos aceitos. Sem mascara (fora do escopo), pois os dados sao mock.
- **Email**: `Input` com `type="email"` e regra de validacao `{ type: "email" }` no `Form.Item`, exibindo erro quando o email for invalido.
- **Telefone**: `Input` de texto com placeholder no formato `(00) 00000-0000`. Sem mascara, consistente com a simplicidade mock.

**Alternativa considerada**: Usar `InputNumber` para telefone/CPF. Rejeitada porque esses campos podem conter caracteres de formatacao e nao sao numericos puros.

### Modal de confirmacao com dados do cliente

A remocao usa `Modal` do Ant Design exibindo os dados do cliente (Nome, CPF/CNPJ, Email, Telefone) com botoes Confirmar/Cancelar. O cliente e removido do array mock local via `useState`.

**Alternativa considerada**: Usar `Modal.confirm` (API imperativa). Rejeitada porque o requisito exige exibir os dados do cliente dentro do modal, o que requer um Modal declarativo com conteudo customizado.

### Cliente removido do estado local

Como os dados sao mock, a remocao e simulada removendo o item do array no estado (`useState`), sem chamada a API. O cliente volta ao recarregar a pagina, o que e esperado para dados mock.

## Risks / Trade-offs

- **Dados volatil**: Recarregar a pagina reverte remocoes e edicoes (dados mock resetam) → Comportamento esperado e documentado. Sera resolvido quando houver integracao com API.
- **Sem mascara de CPF/CNPJ e telefone**: O usuario digita o valor livremente sem formatacao automatica → Mantem a implementacao simples e consistente com o padrao mock; mascara podera ser adicionada futuramente.
- **Valor do CPF/CNPJ nao e validado semanticamente**: Apenas validacao de campo obrigatorio, sem validar se e um CPF/CNPJ valido → Fora do escopo desta iteracao mock.
