## 1. Sidebar

- [x] 1.1 Adicionar subitem "Criar Produto" com rota `/produtos/criar` no array `children` do dropdown "Produtos" em `lib/menu-items.ts`

## 2. Pagina do Formulario

- [x] 2.1 Criar diretorio `app/produtos/criar/` e `page.tsx` como Client Component com estrutura base (Card + titulo)
- [x] 2.2 Definir arrays mock de opcoes para Categoria, Marca e Unidade de Medida como constantes
- [x] 2.3 Implementar campo Nome do Produto (Input, obrigatorio)
- [x] 2.4 Implementar campo Codigo de Barras/QR Code (Upload com preview local, aceita imagens)
- [x] 2.5 Implementar campo Descricao do Produto (Input.TextArea, opcional)
- [x] 2.6 Implementar selects Categoria, Marca e Unidade de Medida com dados hardcoded
- [x] 2.7 Implementar campo Imagem do Produto (Upload com preview local, aceita imagens)
- [x] 2.8 Implementar submissao mock do formulario: validacao, mensagem de sucesso, redirect para `/produtos`
- [x] 2.9 Implementar botao Cancelar com `router.push("/produtos")`
