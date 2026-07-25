## Context

O projeto e um sistema de gerenciamento de estoque (Stock Manager) construido com Next.js 16 (App Router), React 19, TypeScript e Ant Design 6. Atualmente, os modulos Produtos e Unidades de Medida possuem paginas CRUD implementadas com dados mock. O modulo Estoque possui apenas uma pagina placeholder.

Este design segue o mesmo padrao arquitetural dos modulos ja implementados, garantindo consistencia no codigo.

## Goals / Non-Goals

**Goals:**
- Implementar paginas CRUD para o modulo de estoque (listar, criar, editar, remover)
- Manter consistencia com o padrao de codigo dos modulos Produtos e Unidades de Medida
- Usar dados mock (hardcoded) sem integracao com API
- Atualizar o menu lateral com subitens funcionais para o dropdown Estoque

**Non-Goals:**
- Integracao com API ou banco de dados
- Persistencia real de dados (tudo e mock)
- Paginacao ou ordenacao avancada na tabela
- Responsividade mobile (padrao desktop-first do projeto)

## Decisions

### Roteamento: sub-rotas sob `/estoque`

Paginas criadas como sub-rotas: `/estoque/criar`, `/estoque/listar`, `/estoque/editar`, com a raiz `/estoque` redirecionando para `/estoque/listar` via server-side `redirect()`. Segue o mesmo padrao de `/unidades-de-medida`.

**Alternativa considerada**: Usar query params (`/estoque?action=create`). Rejeitada porque foge do padrao do projeto e dificulta navegacao por sidebar.

### Pagina de edicao sem parametro de rota

A pagina `/estoque/editar` usa dados mock pre-preenchidos sem receber ID via URL params (query ou path param). O mesmo padrao e usado em `/produtos/editar` e `/unidades-de-medida/editar`.

**Alternativa considerada**: Receber ID via query string (`/estoque/editar?id=1`). Rejeitada para manter consistencia com os modulos existentes.

### Select de produto com busca integrada

O select de Produto usa a propriedade `showSearch` do Ant Design com `filterOption` baseado em `label` para busca textual inline, sem necessidade de componente adicional ou chamada a API.

**Alternativa considerada**: Usar AutoComplete ou Select com `onSearch` e estado de filtro manual. Rejeitada por complexidade desnecessaria - `showSearch` do Ant Design resolve o requisito com menos codigo.

### Modal de confirmacao com dados do item

A remocao usa `Modal` do Ant Design exibindo os dados do item (Produto, Quantidade, Preco de Compra, Preco de Venda) com botoes Confirmar/Cancelar. O item e removido do array mock local via `useState`.

**Alternativa considerada**: Usar `Modal.confirm` (API imperativa) como em unidades-de-medida. Rejeitada porque o requisito exige exibir os dados do item dentro do modal, o que requer um Modal declarativo com conteudo customizado.

### Item removido do estado local

Como os dados sao mock, a remocao e simulada removendo o item do array no estado (`useState`), sem chamada a API. O item volta ao recarregar a pagina, o que e esperado para dados mock.

## Risks / Trade-offs

- **Dados volatil**: Recarregar a pagina reverte remocoes e edicoes (dados mock resetam) → Comportamento esperado e documentado. Sera resolvido quando houver integracao com API.
- **Produto exibido como texto na edicao**: O campo produto e renderizado como texto plano, nao como input desabilitado do Ant Design → Simplifica a UI e evita confusao de campo editavel desabilitado.
- **Sem formatacao de moeda nos inputs**: Inputs de preco sao `InputNumber` com prefixo "R$" e precisao de 2 casas decimais → Sem mascara de input complexa, consistente com a simplicidade mock do projeto.
