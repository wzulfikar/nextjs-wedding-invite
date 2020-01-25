const fallbackHost = "http://localhost:3000";

export default (path, headers) => {
  if (path.startsWith("http")) {
    return path;
  }

  // Use browser's `window` if headers is not provided
  if (!headers && process.browser) {
    if (typeof window === "undefined") {
      throw new Error(
        "could not resolve path without request headers: window is undefined"
      );
    }
    const { protocol, host } = window.location;
    return `${protocol}//${host}${path}`;
  }
  const host = headers
    ? headers["x-now-deployment-url"] ||
      headers["x-forwarded-host"] ||
      headers.host
    : null;
  const scheme =
    headers && headers["x-forwarded-proto"]
      ? headers["x-forwarded-proto"]
      : "http";
  return host ? `${scheme}://${host}${path}` : `${fallbackHost}${path}`;
};
