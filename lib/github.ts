import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const TARGET_REPOS = [
  'serenmind',
  'docpress',
  'shopzone',
  'deepguard',
  // Add more repo keywords here
];

export async function getGitHubRepos() {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: 'Mrinmoy-programmer07',
      sort: 'updated',
      per_page: 100,
    });

    // Filter repos based on keywords and only include public repos
    const filteredRepos = repos
      .filter(repo => 
        !repo.fork && 
        TARGET_REPOS.some(keyword => 
          repo.name.toLowerCase().includes(keyword.toLowerCase())
        )
      )
      .map(repo => ({
        id: repo.id.toString(),
        name: repo.name,
        description: repo.description || 'No description available',
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || '#',
        tags: repo.topics || [],
        image: `/github-${repo.name.toLowerCase()}.png`, // You'll need to add these images
        updatedAt: repo.updated_at,
      }));

    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
} 