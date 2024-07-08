---
title: Advanced
order: 2
---

# Advanced configuration

## CORS

The `VIEWTUBE_CORS_ORIGIN` environment variable specifies the domains that are allowed to access the resources served by ViewTube.
For example, if you set VIEWTUBE\_CORS\_ORIGIN to <http://example.com>, only requests from <http://example.com> will be allowed to access the api of your ViewTube instance.

By default, CORS is disabled. In Production, it is recommended to set VIEWTUBE\_CORS\_ORIGIN to the domain that you are accessing your instance from.
Read more about CORS here: <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>

## Redis configuration

Create a file called `redis.conf`.

```text [redis.conf]
maxmemory 4GB # Set the maximum memory Redis can use
maxmemory-policy allkeys-lru # Set the eviction policy (Read more here https://redis.io/docs/latest/operate/rs/databases/memory-performance/eviction-policy/)
```

Make the following changes to your docker-compose file.

```yaml [docker-compose.yml]
redis:
  ...
  volumes:
    ...
    - ./config/redis.conf:/redis.conf # Add the redis.conf file to the container
  command: ["redis-server", "/redis.conf"] # Start Redis with the custom configuration
  ...
```

## Rate limiting

YouTube rate-limits and blocks IPs sometimes, if they detect too many requests from the same IP. There are a few ways to circumvent this.

## Use cookies from a real account

You can provide your own cookies to circumvent this issue.

### YouTube cookie

- Navigate to YouTube in a web browser
- Log in, preferrably with a separate account you don't use often
- Open up the dev tools console
- Type `document.cookie`
- Copy the entire response into the `VIEWTUBE_YOUTUBE_COOKIE` environment variable

## Proxy

Another way to circumvent Google's rate-limiting is to use an external proxy. ViewTube already proxies all requests through the server it's running on, but you can also use an external proxy. ViewTube supports http, https and socks proxies.

Set the proxy URL using the `VIEWTUBE_PROXY_URL` environment variable.

For example: VIEWTUBE\_PROXY\_URL="[https://proxy.example.com:8555]()"

With authentication: VIEWTUBE\_PROXY\_URL="[socks://username\:password@proxy.example.com:8555]()"
