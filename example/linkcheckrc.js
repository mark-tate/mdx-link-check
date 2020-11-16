const component = /(<Link\s*to={?'([^']*)'}?[^>]*>([^<]*)<\/Link>)/;

function additionalTokenizer(src) {
  const match = src.match(component, 'A');
  if (match) {
    return {
      type: 'link',
      raw: match[1],
      href: match[2],
      title: match[3] ? match[3] : null,
      text: match[1] ? match[1] : null,
    };
  }
}

module.exports = {
  "additionalTokenizer": additionalTokenizer,
  "retryOn429": true,
  "retryCount": 5,
  "fallbackRetryDelay": "30s",
  "aliveStatusCodes": [200, 206]
};
