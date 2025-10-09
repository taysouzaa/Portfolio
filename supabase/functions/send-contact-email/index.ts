import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada");
      return new Response(
        JSON.stringify({ error: "Configuração de e-mail ausente" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .info { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb; }
            .label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
            .value { color: #4b5563; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 Nova Mensagem de Contato</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Recebida do seu portfólio</p>
            </div>
            <div class="content">
              <div class="info">
                <div class="label">Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="info">
                <div class="label">E-mail:</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></div>
              </div>
              <div class="message-box">
                <div class="label" style="margin-bottom: 10px;">Mensagem:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
                <p>Responda diretamente para o e-mail: ${email}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfólio <onboarding@resend.dev>",
        to: ["taynara.souza.dev@gmail.com"],
        reply_to: email,
        subject: `Nova mensagem de ${name} - Portfólio`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Erro ao enviar e-mail:", error);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar e-mail" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erro na função:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});