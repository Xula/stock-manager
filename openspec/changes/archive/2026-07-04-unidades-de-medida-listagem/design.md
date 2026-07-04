## Context

O modulo de unidades de medida ja possui paginas de criar (`/unidades-de-medida/criar`) e editar (`/unidades-de-medida/editar`), mas a pagina raiz (`/unidades-de-medida`) e apenas um placeholder "Em breve...". O modulo de produtos ja possui listagem completa servindo como referencia de padrao.

O sistema usa Next.js App Router, Ant Design como biblioteca de componentes e dados mock hardcoded (sem API). Nao ha componentes compartilhados de modal ou confirmacao no sistema atualmente.

## Goals / Non-Goals

**Goals:**
- Criar pagina de listagem em `/unidades-de-medida/listar` com tabela Ant Design
- Adicionar botoes "Editar" e "Excluir" por linha
- Implementar modal de confirmacao ao excluir (primeiro uso de modal no sistema)
- Adicionar item no menu lateral "Listar Unidades de Medida"
- Redirecionar pagina placeholder `/unidades-de-medida` para `/unidades-de-medida/listar`

**Non-Goals:**
- Nao alterar a estrutura de rotas das paginas de criar/editar existentes
- Nao implementar soft delete ou integracao com API
- Nao criar componente de modal reutilizavel (escopo apenas desta pagina)
- Nao alterar o comportamento do sidebar alem da adicao do novo item

## Decisions

1. **Modal de confirmacao: `Modal.confirm` do Ant Design**
   - Alternativa: Criar componente generico de confirmacao
   - Decisao: Usar `Modal.confirm` diretamente no componente, pois e simples, nativo do Ant Design e nao ha outros casos de uso de modal no sistema que justifiquem abstracao agora

2. **Dados mock inline no componente**
   - Alternativa: Centralizar mocks em arquivo separado
   - Decisao: Manter dados hardcoded no componente, seguindo o padrao do modulo de produtos (`app/produtos/listar/page.tsx`) para consistencia

3. **Redirecionamento da pagina raiz**
   - Alternativa: Manter placeholder ou atualiza-lo in-place
   - Decisao: Usar `redirect()` do Next.js no componente servidor ou `useRouter().replace()` no client para redirecionar `/unidades-de-medida` para `/unidades-de-medida/listar`, evitando duplicacao de codigo

4. **Estrutura do item de menu**
   - Alternativa: Criar submenu separado
   - Decisao: Adicionar "Listar Unidades de Medida" ao submenu "Unidades de Medida" existente, seguindo o mesmo padrao do submenu "Produtos"

5. **Navegacao ao editar: `router.push("/unidades-de-medida/editar")`**
   - Decisao: Seguir o mesmo padrao do modulo de produtos (navegacao com rota fixa, sem ID), ja que a pagina de editar existente tambem usa mock fixo

## Risks / Trade-offs

- [Dados mock nao persistem exclusao] → Como os dados sao hardcoded, excluir um item nao remove permanentemente (recarrega ao navegar). Aceitavel para fase de prototipo/mock.
- [Modal.confirm nao fecha automaticamente apos "Excluir"] → Tratar no handler de `onOk` exibindo `message.success` para feedback ao usuario.
