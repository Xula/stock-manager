## Why

Permitir que usuários cadastrem novos produtos no sistema de gestao de estoque. Atualmente o modal "Produtos" na sidebar possui apenas placeholders, impossibilitando qualquer operacao real com produtos.

## What Changes

- Adiciona o subitem "Criar Produto" no dropdown "Produtos" da sidebar (`lib/menu-items.ts`)
- Cria a pagina `/produtos/criar` com formulario de cadastro de produto contendo:
  - Campo de texto: Nome do Produto
  - Upload de imagem: Codigo de Barras / QR Code
  - Campo de texto longo: Descricao do Produto
  - Select (mock): Categoria (dados hardcoded)
  - Select (mock): Marca (dados hardcoded)
  - Select (mock): Unidade de Medida (dados hardcoded)
  - Upload de imagem: Imagem do Produto
- Submissao mockada: ao clicar "Salvar", exibe mensagem de sucesso e redireciona para `/produtos` (sem POST real)

## Capabilities

### New Capabilities

- `create-product-form`: Tela de formulario para cadastro de novo produto com campos de texto, selects com dados mock e upload de imagens.

### Modified Capabilities

- `sidebar-dropdown-menu`: O dropdown "Produtos" passa a conter o item "Criar Produto" como subitem funcional (nao apenas placeholder).

## Impact

- **Arquivos afetados**: `lib/menu-items.ts` (sidebar), `app/produtos/criar/page.tsx` (nova pagina)
- **Dependencias**: Ant Design (Form, Input, Select, Upload, Button, Card, Typography, message), @ant-design/icons, next/navigation
- **Sem breaking changes**
