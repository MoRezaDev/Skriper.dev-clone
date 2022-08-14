import React, { useState, useEffect } from "react";

//styles
import styles from "./Trends.module.css";

//import images...

import TrendCard from "./shared/TrendCard";

//importing Api....
import { TrendCardApi } from "../services/api";
import PaginationTrend from "./shared/PaginationTrend";
const Trends = () => {
  // define posts and posts perPage
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  console.log(posts);

  useEffect(() => {
    setPosts(TrendCardApi);
  }, []);

  //paginate method...
  const paginate = (numberCurrentPage) => setCurrentPage(numberCurrentPage);

  //Get Current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className={styles.container}>
      <PaginationTrend
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        current={currentPage}
      />
      <div className={styles.cardsSlider}>
        {currentPosts.map((post, idx) => (
          <TrendCard key={idx} posts={post} />
        ))}
      </div>
    </div>
  );
};

export default Trends;
