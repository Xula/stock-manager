## Context

O projeto e um sistema de gestao de estoque (stock-manager) construido com Next.js 16 (App Router), Ant Design v6 e Tailwind CSS v4. Atualmente a sidebar exibe apenas placeholders para todos os 11 modulos, incluindo "Produtos", que possui dois subitens genericos ("Opcao 1", "Opcao 2") sem funcionalidade real. Nenhuma rota de API ou formulario existe ainda — o projeto esta em fase inicial de frontend.

## Goals / Non-Goals

**Goals:**
- Adicionar "Criar Produto" como subitem navegavel no dropdown "Produtos" da sidebar
- Criar um formulario completo de cadastro de produto em `/produtos/criar` com dados mock inline
- Selects de Categoria, Marca e Unidade de Medida usam arrays hardcoded no componente
- Submissao mockada: mensagem de sucesso e redirect sem chamada de API real
- Usar exclusivamente componentes Ant Design, seguindo o padrao visual existente

**Non-Goals:**
- Qualquer rota de API (`app/api/*`) — nao serao criadas
- Integracao com banco de dados real
- Persistencia real de dados ou arquivos
- Paginas de listagem, edicao ou exclusao de produtos
- Autenticacao/autorizacao

## Decisions

### 1. Dados mock hardcoded no componente
**Decisao**: Arrays estaticos de opcoes definidos como constantes no proprio arquivo `page.tsx`, sem fetch ou API routes.

**Alternativa considerada**: Criar API Routes para simular backend. Rejeitada por simplicidade — sem banco de dados, API routes adicionam complexidade desnecessaria neste momento.

### 2. Estrutura do formulario com Ant Design Form
**Decisao**: Usar `Form` + `Form.Item` do Ant Design com `layout="vertical"` para o formulario. Todos os campos dentro de um `Card` para consistencia visual com as outras paginas.

**Alternativa considerada**: HTML forms nativos. Rejeitados porque o projeto ja usa Ant Design e o Form oferece validacao integrada, estados de loading e mensagens de erro.

### 3. Upload de imagem com Ant Design Upload
**Decisao**: Usar o componente `Upload` do Ant Design com `listType="picture-card"` e `beforeUpload` para preview local em base64. A imagem fica armazenada no estado do formulario para preview.

**Alternativa considerada**: Input file nativo. Rejeitado porque o Upload do Ant Design oferece preview, drag-and-drop e melhor UX.

### 4. Selects com dados hardcoded
**Decisao**: Arrays de `{ value, label }` definidos como constantes fora do componente. Nao ha fetch nem estado de loading — as opcoes estao disponiveis imediatamente.

**Alternativa considerada**: Fetch com useEffect. Rejeitado pois sem backend real, nao ha ganho em simular latencia de rede com setTimeout.

### 5. Sidebar — novo subitem no dropdown Produtos
**Decisao**: Adicionar `{ label: "Criar Produto", key: "/produtos/criar" }` ao array `children` do item "Produtos" em `lib/menu-items.ts`. O `getOpenKeys` no Sidebar.tsx ja trata sub-rotas automaticamente.

### 6. Pagina como Client Component
**Decisao**: A pagina `/produtos/criar` sera um Client Component (`"use client"`) pois usa hooks (`useState`, `useRouter`) e componentes interativos do Ant Design.

## Risks / Trade-offs

- **Dados mock podem confundir usuarios**: As opcoes nos selects sao fixas e nao refletem dados reais. → Tratado como placeholder temporario ate integracao com backend.
- **Upload sem persistencia real**: Imagens sao mantidas apenas como preview local (base64). → Migracao futura para storage real requerera adicionar endpoint de upload e alterar o handler do Upload.
- **Submissao sem validacao de backend**: Nome do produto nao e validado contra duplicatas. → Escopo futuro; apos integracao com banco de dados a validacao sera implementada.
