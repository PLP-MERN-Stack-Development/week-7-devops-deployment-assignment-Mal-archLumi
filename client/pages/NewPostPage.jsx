import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { postService } from '../src/services/api';

const PostForm = lazy(() => import('../components/PostForm'));

const NewPostPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await postService.createPost(data);
      navigate('/');
    } catch (err) {
      console.error("Failed to create post:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Suspense fallback={<div className="text-center">Loading form...</div>}>
          <PostForm onSubmit={handleCreate} />
        </Suspense>
      </div>
    </div>
  );
};

export default NewPostPage;