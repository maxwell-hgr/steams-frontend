export const api = "http://localhost:8080";

export const requestConfig = (method, data, token = null) => {
  let config;

  if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(config);
  return config;
};

export const getVanityName = (steamUrl) => {
  const parts = steamUrl.split('/');
  return parts[parts.length - 1] || parts[parts.length - 2];
};

export const getSteamId = async (steamUrl) => {
  const vanityName = getVanityName(steamUrl);
  const url = `${api}/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${vanityName}`;
  const res = await fetch(url, steamRequest());
  return res.response.steamid;
};