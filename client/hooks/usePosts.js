import { useState } from 'react';
import { postService } from '../src/services/api';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await postService.getAllPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message || 'Error fetching posts');
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, fetchPosts };
};
