const GITHUB_OWNER = "lalankumar99";
const GITHUB_REPO = "Electrical-Circuits";
const GITHUB_BRANCH = "main";

const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

const BLOCKED_PATHS = [
  "app",
  "icons"
];

const BLOCKED_FILE_NAMES = [
  "app"
];

function getHeaders() {
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(process.env.GITHUB_TOKEN
      ? {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      : {})
  };
}

async function githubFetch(url) {
  const response = await fetch(url, {
    headers: getHeaders(),
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export function isBlockedPath(filePath) {
  const normalizedPath = filePath
    .replace(/\\/g, "/")
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  const parts = normalizedPath.split("/");
  const fileName = parts[parts.length - 1];

  if (parts.some((part) => BLOCKED_PATHS.includes(part))) {
    return true;
  }

  if (fileName.startsWith("app.")) {
    return true;
  }

  if (BLOCKED_FILE_NAMES.includes(fileName)) {
    return true;
  }

  return false;
}

export async function getGithubTree() {
  const data = await githubFetch(
    `${API_BASE}/git/trees/${GITHUB_BRANCH}?recursive=1`
  );

  return (data.tree || []).filter(
    (item) => !isBlockedPath(item.path)
  );
}

export async function getGithubFolders() {
  const tree = await getGithubTree();

  return tree.filter(
    (item) => item.type === "tree"
  );
}

export async function getGithubMarkdownFiles() {
  const tree = await getGithubTree();

  return tree.filter(
    (item) =>
      item.type === "blob" &&
      item.path.toLowerCase().endsWith(".md")
  );
}

export async function getGithubMarkdownFilesInFolder(
  folderPath
) {
  const files = await getGithubMarkdownFiles();

  return files.filter((file) => {
    const directory = file.path.substring(
      0,
      file.path.lastIndexOf("/")
    );

    return directory === folderPath;
  });
}

export function getGithubRawUrl(filePath) {
  const encodedPath = filePath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${encodedPath}`;
}

export async function getGithubMarkdownContent(
  filePath
) {
  if (isBlockedPath(filePath)) {
    throw new Error(
      "This file is blocked from the study website."
    );
  }

  const response = await fetch(
    getGithubRawUrl(filePath),
    {
      headers: {
        Accept: "text/plain"
      },
      next: {
        revalidate: 60
      }
    }
  );

  if (!response.ok) {
    throw new Error(
      `Unable to load Markdown file: ${response.status}`
    );
  }

  return response.text();
}

export function formatTitle(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function pathToSlug(filePath) {
  return filePath
    .replace(/\.md$/i, "")
    .split("/")
    .map((part) =>
      encodeURIComponent(
        part
          .toLowerCase()
          .replace(/[-_]+/g, " ")
          .trim()
          .replace(/\s+/g, "-")
      )
    )
    .join("/");
}

export function removeMarkdownExtension(filePath) {
  return filePath.replace(/\.md$/i, "");
}

export const githubConfig = {
  owner: GITHUB_OWNER,
  repo: GITHUB_REPO,
  branch: GITHUB_BRANCH
};