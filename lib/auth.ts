export interface TokenCache {
  getToken: (key: string) => Promise<string | undefined | null>;
  savetOKEN: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => void;
}
