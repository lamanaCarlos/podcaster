const urlBase =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const urlSingleEle =
  "https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=";

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    localStorage.setItem("data", JSON.stringify(data));
    return data;
  });
};

const getList = () => {
  const requestOptions = {
    method: "GET",
  };
  const url = `${urlBase}`;
  console.log("Fetching " + urlBase);
  return fetch(url, requestOptions).then(handleResponse);
};

const getOne = (id) => {
  const url = `${urlSingleEle}` + id;
  console.log("Fetching " + urlSingleEle);
  return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      return JSON.parse(data.contents);
    });
};

const getFeed = (urlFeed) => {
  const requestOptions = {
    method: "GET",
  };
  const url = `${urlFeed}`;
  console.log("Fetching " + urlBase);
  return fetch(url, requestOptions)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      return data;
    });
};

export const podCastService = {
  getList: getList,
  getOne: getOne,
  getFeed: getFeed,
};
