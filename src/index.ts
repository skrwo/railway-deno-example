const port = parseInt(Deno.env.get("PORT") ?? "8000");

Deno.serve(
  {
    port: port,
    onListen:
      (({ hostname, port }) =>
        console.log(`Listening on http://${hostname}:${port}/`)),
  },
  (req) =>
    new Response(
      `Choo Choo! Welcome to your Deno app on address: ${req.url}\n`,
    ),
);
