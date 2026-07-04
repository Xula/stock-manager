## Context

O projeto é um gerenciador de estoque em Next.js 16 (App Router) com Ant Design 6 e Tailwind CSS 4. Atualmente usa dados mock (hardcoded), sem backend ou banco de dados. O módulo `produtos` é o único com CRUD funcional e serve como referência de padrão para os demais módulos.

O módulo "Unidades de Medida" (`/unidades-de-medida`) existe no menu lateral com itens placeholder e uma página placeholder. As unidades de medida (`UN, KG, L, M, CX`) são referenciadas como constantes mock nos formulários de produto.

O objetivo é transformar esse módulo placeholder em um módulo funcional com criar e editar, seguindo exatamente o mesmo padrão já estabelecido pelo módulo `produtos`.

## Goals / Non-Goals

**Goals:**

- Página "Criar Unidade de Medida" com formulário de nome (campo texto) e botão salvar
- Página "Editar Unidade de Medida" com formulário de nome pré-preenchido e botão salvar
- Atualizar o menu lateral com itens "Criar Unidade de Medida" e "Editar Unidade de Medida" apontando para as rotas corretas
- Seguir o padrão visual e de código do módulo `produtos`

**Non-Goals:**

- Listagem de unidades de medida (tabela)
- Exclusão de unidades de medida
- Backend, banco de dados ou API
- Validação de duplicidade
- Autenticação/autorização
- Relacionamento com outros módulos (ex: sincronizar com `UNIDADES_MEDIDA` em produtos)

## Decisions

1. **Seguir o padrão do módulo `produtos`**: Componentes cliente (`"use client"`), Ant Design `Form` + `Input` + `Button`, layout `Card` centralizado, mock data para testes, `message.success()` ao salvar, `router.push()` para navegação. Este padrão já existe e é consistente — não há razão para divergir.

2. **Formulário com apenas um campo `nome`**: O campo "nome" é suficiente para identificar uma unidade de medida (ex: "Unidade", "Quilograma"). Sigla/abreviação pode ser adicionada posteriormente.

3. **Mock data para edição**: Como não há backend, a página de editar usará um objeto mock com valores fixos (ex: `{ nome: "Unidade" }`), assim como `produtos/editar` usa `PRODUTO_MOCK`.

## Risks / Trade-offs

- **Sem persistência real** → Dados são perdidos ao recarregar a página. Mitigado pelo escopo atual do projeto (frontend mock).
- **Nomes duplicados não validados** → Usuário pode criar unidades com nomes iguais. Mitigado: backend/validação será adicionado quando o banco de dados for implementado.
