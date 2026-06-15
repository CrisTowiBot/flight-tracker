export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = 'https://opensky-network.org/api/states/all?' + url.search.slice(1);
    const response = await fetch(targetUrl);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      },
    });
  },
};
