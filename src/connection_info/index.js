import Twit from "twit";

const twt = new Twit({
  consumer_key: "1hYH5ZKmYyhtEwbgvmNdsuvUV",
  consumer_secret: "1DCMfAx9JwbEPX14GvcwIzTKMLzIUGmBZNc4omR08AjbqfvCZm",
  access_token: "1589706742379814912-ywpjcJQjRyLQOOFow0XOfWcU0pJvze",
  access_token_secret: "LDQSgAk8ZEhwRqbW8a8xNKpCyWIIm4i7jalOTSBRLytCG",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

export default twt;
