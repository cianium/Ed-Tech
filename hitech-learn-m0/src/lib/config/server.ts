/** Server environment contract. Do not import this from Client Components. */
export type AppEnvironment = "local" | "staging" | "production";
export type ServerConfig = Readonly<{ environment: AppEnvironment; baseUrl: string | null }>;
export type EnvironmentInput = Readonly<Record<string, string | undefined>>;

/** No secrets are read, accepted, logged or returned in M0. */
export function parseServerConfig(env: EnvironmentInput): ServerConfig {
  const environment = env.APP_ENV ?? "local";
  if (environment !== "local" && environment !== "staging" && environment !== "production") {
    throw new Error("APP_ENV must be local, staging or production");
  }
  const rawUrl = env.APP_BASE_URL;
  if (!rawUrl && environment !== "local") {
    throw new Error("APP_BASE_URL is required outside local development");
  }
  if (!rawUrl) return Object.freeze({ environment, baseUrl: null });

  let parsed: URL;
  try { parsed = new URL(rawUrl); }
  catch { throw new Error("APP_BASE_URL must be a valid absolute URL"); }
  if (parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new Error("APP_BASE_URL must not contain credentials, query or fragment");
  }
  if (parsed.pathname !== "/") {
    throw new Error("APP_BASE_URL must be an origin without a path");
  }
  if (environment === "local") {
    if (!(["http:", "https:"].includes(parsed.protocol))) throw new Error("APP_BASE_URL must use HTTP(S)");
  } else if (parsed.protocol !== "https:") {
    throw new Error("APP_BASE_URL must use HTTPS outside local development");
  }
  return Object.freeze({ environment, baseUrl: parsed.origin });
}
