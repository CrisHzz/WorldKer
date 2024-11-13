"use client";

import React, { useEffect, useState } from "react";
import PlatformHeader from "@/app/components/UI/platformHeader";
import { Loader, ThumbsUp, Rocket, Trash } from "lucide-react";

interface Post {
  likesCount: string;
  createdAt: string;
  mediaUrl: string;
  id: string;
  userId: string;
  content: string;
  commentCount: string;
  updatedAt: string;
}

export default function Page() {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch("https://worlderk.onrender.com/post")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.filter(
            (post: Post) => post.content && post.content.trim() !== ""
          )
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLike = (postId: string) => {
    if (data) {
      const updatedData = data.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likesCount: (parseInt(post.likesCount) + 1).toString(),
          };
        }
        return post;
      });
      setData(updatedData);
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      const response = await fetch(`https://worlderk.onrender.com/post/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setData((prevData) => prevData?.filter((post) => post.id !== postId) || null);
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <PlatformHeader>
        <div className="p-4 flex flex-wrap gap-4">
          {data ? (
            data.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-md w-full md:w-1/3"
              >
                <div className="flex flex-col gap-2">
                  {post.mediaUrl && (
                    <img
                      src={post.mediaUrl}
                      alt="Post media"
                      className="w-full h-48 object-cover rounded"
                    />
                  )}
                  <p className="text-black">User ID: {post.userId}</p>
                  <p className="text-black">Likes: {post.likesCount}</p>
                  <p className="text-black">Comments: {post.commentCount}</p>
                  <p className="text-black">Content: {post.content}</p>
                  <p className="text-black text-sm">
                    Created: {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like
                  </button>
                  <button
                    onClick={() => {
                      alert("Se ha enviado un rocket a ese usuario");
                      handleLike(post.id);
                    }}
                    className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Send a rocket
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full">
              <Loader className="animate-spin text-black" />
              <span className="ml-2 text-black">Loading...</span>
            </div>
          )}
        </div>
      </PlatformHeader>
    </div>
  );
}
