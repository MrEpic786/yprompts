'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handelTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handelClick={handelTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handelSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          name="search-box"
          placeholder="Search for Prompts, #tag, Username"
          value={searchText}
          onChange={handelSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handelTagClick={() => {}} />
    </section>
  );
};
export default Feed;
