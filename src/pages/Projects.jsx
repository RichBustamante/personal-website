import { useEffect, useState } from "react";

export default function Projects() {
  const [gitlabRepos, setGitlabRepos] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const gitlabUsername = "richBustamante";
  const githubUsername = "RichBustamante";

  useEffect(() => {
    async function fetchRepos() {
      try {
        // GitLab
        const gitlabRes = await fetch(`https://gitlab.com/api/v4/users/${gitlabUsername}/projects`);
        const gitlabData = await gitlabRes.json();
        setGitlabRepos(gitlabData);

        // GitHub
        const githubRes = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const githubData = await githubRes.json();
        setGithubRepos(githubData);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  const renderRepoCard = (repo, platform) => (
    <div key={repo.id || repo.node_id} className="repo-card">
      <h3>
        <a href={repo.web_url || repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <span className="platform">{platform}</span>
      </h3>
      <p className="repo-snippet">{repo.description || "No description available."}</p>
    </div>
  );

  return (
    <section className="page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {gitlabRepos.map((repo) => renderRepoCard(repo, " GitLab"))}
        {githubRepos.map((repo) => renderRepoCard(repo, " GitHub"))}
      </div>
    </section>
  );
}
