export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.log(error);
    }

    if (res.status < 200 || res.status > 299) {
      const message =
        data && data.message ? data.message : 'Something went wrong.';
      throw new Error(message);
    }
    return data;
  }
}
