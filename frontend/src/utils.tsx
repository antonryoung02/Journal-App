
export async function sendUserCredentials(url: string, data:{ [key: string]: any } = {}):Promise<{key:string}> {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
});
  return response.json(); // parses JSON response into native JavaScript objects
}
