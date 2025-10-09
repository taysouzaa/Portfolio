/*
  # Tabela de Mensagens de Contato

  1. Nova Tabela
    - `contact_messages`
      - `id` (uuid, chave primária, gerado automaticamente)
      - `name` (text, nome do remetente)
      - `email` (text, e-mail do remetente)
      - `message` (text, mensagem enviada)
      - `created_at` (timestamptz, data/hora de criação)
      - `read` (boolean, indica se a mensagem foi lida)

  2. Segurança
    - Habilitar RLS na tabela `contact_messages`
    - Permitir que qualquer pessoa insira mensagens (formulário público)
    - Apenas usuários autenticados podem ler mensagens
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);