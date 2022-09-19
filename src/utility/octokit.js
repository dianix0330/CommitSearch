import { Octokit } from "octokit";

const octokitInstance = new Octokit({
  auth: process.env.REACT_APP_OCTOKIT_KEY,
});

export { octokitInstance };
