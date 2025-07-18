import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';

const PostList = lazy(() => import('../components/PostList'));

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Navbar />
    <Suspense fallback={<div className="text-center mt-20">Loading posts...</div>}>
      <PostList />
    </Suspense>
  </div>
);

export default HomePage;