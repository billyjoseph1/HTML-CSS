function parseURL(url) {
    const a = document.createElement('a');
    a.href = url;
    return {
      href: a.href,
      host: a.host,
      hostname: a.hostname,
      pathname: a.pathname,
      protocol: a.protocol,
      search: a.search,
      hash: a.hash
    };
  }
  
  console.log(parseURL('http://example.com:8080?search=test#hash'));
  