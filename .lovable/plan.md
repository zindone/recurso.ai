
## Enviar leads para sua API REST externa

Vamos criar uma Edge Function no backend que funciona como intermediário: quando o formulário é enviado, além de salvar no banco de dados local, os dados também são enviados para a sua API externa.

### Como vai funcionar

1. Você nos informa a URL da sua API REST
2. Criamos uma função backend que recebe os dados do formulário e os encaminha via POST para a sua API
3. O formulário passa a chamar essa função backend em vez de salvar diretamente no banco

### Mudanças técnicas

**1. Nova Edge Function: `forward-lead`**
- Recebe os dados do lead via POST
- Salva no banco de dados local (mantém o comportamento atual)
- Envia os mesmos dados via POST para a URL da sua API externa (configurada como variável secreta)
- Retorna sucesso mesmo se a API externa falhar (para não bloquear o fluxo do usuário)

**2. Configuração de segredo**
- Será solicitado que você informe a URL da sua API como um segredo seguro (`EXTERNAL_API_URL`)
- Isso mantém a URL protegida e fora do código-fonte

**3. Atualização do `FormSection.tsx`**
- O `handleSubmit` passará a chamar a Edge Function via `supabase.functions.invoke("forward-lead", { body: {...} })` em vez de inserir diretamente na tabela

### Fluxo

```text
Formulario
   |
   v
Edge Function "forward-lead"
   |
   +---> Salva no banco local (leads)
   |
   +---> POST para sua API externa
   |
   v
Retorna sucesso ao formulario
```

### Beneficios
- Sua API externa recebe os dados em tempo real
- O banco local continua como backup
- A URL da API fica protegida no servidor (nunca exposta no navegador)
