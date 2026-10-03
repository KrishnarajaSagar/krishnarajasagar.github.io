export type GhRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
};

const USER = "KrishnarajaSagar";

// Single page for all projects — 4 repos (sage-os ignored)
export const ALLOWLIST: string[] = [
  "terminal-sequence",
  "NotesAppCompose",
  "basic_notes",
  "news_app_krs",
];

export async function getGithubRepos(): Promise<GhRepo[]> {
  if (ALLOWLIST.length === 0) return [];

  const token = (import.meta as unknown as { env: Record<string, string> }).env?.GITHUB_TOKEN ?? (typeof process !== "undefined" ? (process.env as Record<string, string | undefined>).GITHUB_TOKEN : undefined);

  try {
    const res = await fetch(
      `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          "User-Agent": "krishnarajasagar.github.io",
        },
      }
    );
    if (!res.ok) {
      console.warn(`[github] fetch failed: ${res.status} ${await res.text()}`);
      return [];
    }
    let repos: GhRepo[] = await res.json();
    repos = repos
      .filter((r) => !r.fork && !r.archived && !r.disabled)
      .filter((r) => ALLOWLIST.includes(r.name));
    // preserve allowlist order
    repos.sort((a, b) => ALLOWLIST.indexOf(a.name) - ALLOWLIST.indexOf(b.name));
    return repos;
  } catch (err) {
    console.warn("[github] fetch error, returning empty:", err);
    return [];
  }
}
