'use client';

import Profile from '@components/Profile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handelEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handelDelete = async (post) => {
    const hasConfirm = confirm('Are you sure you want to delete this post?');

    if (hasConfirm) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <Profile
      name={session?.user.username}
      desc="Welcome to your personalized profile page"
      data={posts}
      handelEdit={handelEdit}
      handelDelete={handelDelete}
    />
  );
};
export default ProfilePage;
