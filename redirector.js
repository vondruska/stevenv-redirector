addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const redirects = new Map([
  ["linkedin", "https://www.linkedin.com/in/stevenvondruska"],
  ["github", "https://github.com/vondruska"]
]);

const defaultRedirect = "https://stevenvondruska.com";
const responseCode = 302

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log('Got request', request);

  const url = new URL(request.url);
  console.log(url);

  const lookup = url.pathname || "";
  const trimmed = lookup.substring(1);

  const location = redirects.get(trimmed);

  if(location) {
    return Response.redirect(location, responseCode);
  } 

  return Response.redirect(defaultRedirect, responseCode);
}
