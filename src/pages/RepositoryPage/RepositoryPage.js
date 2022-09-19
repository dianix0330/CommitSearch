import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RepositoryItem } from "../../components";
import { getCommits } from "../../service";
import "./style.css";

const RepositoryPage = () => {
  const { user, repo } = useParams();
  const [repos, setRepos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const result = await getCommits(user, repo);
      setRepos(result.data);
    } catch (error) {
      console.log(error);
      navigate("/does/not/exist");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="repository">
      <div className="repository__title">
        <h1>Commit Feed</h1>
        <h2>
          Showing results for /{user}/{repo}
        </h2>
      </div>
      <div className={`repository__content ${showMore ? "" : "show--less"}`}>
        {repos.map((repo) => (
          <RepositoryItem key={repo.sha} {...repo} />
        ))}
      </div>
      <div className="repository__button">
        <button className="button--load" onClick={() => setShowMore(true)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default RepositoryPage;
