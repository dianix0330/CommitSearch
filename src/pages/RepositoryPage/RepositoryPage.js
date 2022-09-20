import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RepositoryItem } from "../../components";
import { getCommits } from "../../service";
import "./style.css";

const RepositoryPage = () => {
  const { user, repo } = useParams();
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  // const loadData = async () => {
  //   try {
  //     const result = await getCommits(user, repo);
  //     if(result.data.length === 0)
  //     {
  //       throw 'Empty Data'
  //     }
  //     setRepos(result.data);
  //   } catch (error) {
  //     console.log(error);
  //     navigate("/does/not/exist");
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const {isLoading, data} = useQuery('data', async () => {
    try {
      const result = await getCommits(user, repo);
      if(result.data.length === 0)
      {
        throw 'Empty Data'
      }
      return result.data;
    } catch (error) {
      console.log(error);
      navigate("/does/not/exist");
    }
  })
  return (
    <div className="repository">
      <div className="repository__title">
        <h1>Commit Feed</h1>
        <h2>
          Showing results for /{user}/{repo}
        </h2>
      </div>
      {isLoading ? (
         <div>Loading...</div>
       ) : (
      <div className={`repository__content ${showMore ? "" : "show-less"}`}>
        {data.map((repo) => (
          <RepositoryItem key={repo.sha} {...repo} />
        ))}
      </div>
       )}
      <div className="repository__button">
        <button className={`button--load ${showMore === true ? 'load-hide' : ''}`} onClick={() => setShowMore(true)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default RepositoryPage;
