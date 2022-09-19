import { octokitInstance } from "../utility";

const getCommits = async (user, repo) =>
  await octokitInstance.request(`GET /repos/${user}/${repo}/commits`, {
    owner: user,
    repo: repo,
  });

export { getCommits };
