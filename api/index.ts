exports.handler = async function http(req) {
  console.log("Begin API called", req.headers);
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello from Svelte + your Begin API!",
    }),
  };
};
