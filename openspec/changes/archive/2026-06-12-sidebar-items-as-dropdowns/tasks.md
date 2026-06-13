## 1. Atualizar estrutura de menuItems

- [x] 1.1 Refatorar `lib/menu-items.ts` para adicionar `children` com dois subitens placeholder em cada item
- [x] 1.2 Garantir que as chaves dos subitens sigam o padrão `<modulo>/opcao-1` e `<modulo>/opcao-2`

## 2. Atualizar componente Sidebar

- [x] 2.1 Adicionar estado `openKeys` para controlar dropdowns expandidos
- [x] 2.2 Derivar `openKeys` iniciais do `pathname` atual (abrir dropdown pai se estiver em sub-rota)
- [x] 2.3 Adicionar handler `onOpenChange` no `Menu` para sincronizar `openKeys`
- [x] 2.4 Ajustar `onClick` para navegar apenas quando o item clicado não possui `children`
- [x] 2.5 Ajustar `selectedKeys` para funcionar com sub-rotas (destacar subitem em vez do item pai)

## 3. Verificação

- [ ] 3.1 Verificar visualmente que cada item da sidebar exibe indicador de dropdown
- [ ] 3.2 Verificar que expandir/recolher funciona para todos os módulos
- [ ] 3.3 Verificar que clicar em subitens navega para a rota correta
- [ ] 3.4 Verificar que o dropdown pai fica aberto e subitem destacado ao recarregar em sub-rota
- [ ] 3.5 Verificar que o toggle de collapse da sidebar continua funcionando
