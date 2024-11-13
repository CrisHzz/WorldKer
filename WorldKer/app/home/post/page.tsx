"use client"

import { useState } from 'react'
import { UserCircle, FileText, MessageSquare, ThumbsUp, Loader, AlertCircle, Upload } from 'lucide-react'
import PlatformHeader from '@/app/components/UI/platformHeader'

interface PostData {
  file: File | null;
  userId: string;
  content: string;
  commentCount: number;
  likesCount: number;
}

const PostForm = () => {
  const [postData, setPostData] = useState<PostData>({
    file: null,
    userId: "",
    content: "",
    commentCount: 0,
    likesCount: 0,
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      if (postData.file) formData.append("file", postData.file);
      formData.append("userId", postData.userId);
      formData.append("content", postData.content);
      formData.append("commentCount", postData.commentCount.toString());
      formData.append("likesCount", postData.likesCount.toString());

      const response = await fetch("https://worlderk.onrender.com/post/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create post");

      const result = await response.json();
      setPostData({
        file: null,
        userId: "",
        content: "",
        commentCount: 0,
        likesCount: 0,
      });
      
      alert("Post created successfully!");
    } catch (error) {
      setError("There was an error creating your post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1;

  const handleRandomizeCommentCount = () => {
    setPostData({ ...postData, commentCount: generateRandomNumber() });
  };

  const handleRandomizeLikesCount = () => {
    setPostData({ ...postData, likesCount: generateRandomNumber() });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Comparte tus ideas!</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Upload className="h-5 w-5 text-gray-500" />
              Sube un archivo
            </label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileText className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => 
                    setPostData({ ...postData, file: e.target.files?.[0] || null })
                  }
                />
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <UserCircle className="h-5 w-5 text-gray-500" />
              User ID
            </label>
            <input
              type="text"
              value={postData.userId}
              onChange={(e) => 
                setPostData({ ...postData, userId: e.target.value })
              }
              placeholder="Enter your user ID"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                      text-gray-700 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              Content
            </label>
            <textarea
              value={postData.content}
              onChange={(e) => 
                setPostData({ ...postData, content: e.target.value })
              }
              placeholder="What's on your mind?"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                      text-gray-700 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                Comment Count
              </label>
              <button
                type="button"
                onClick={handleRandomizeCommentCount}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md
                        hover:bg-gray-300 focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {postData.commentCount || "Randomize Comment Count"}
              </button>
            </div>

            <div className="space-y-2 flex-1">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <ThumbsUp className="h-5 w-5 text-gray-500" />
                Likes Count
              </label>
              <button
                type="button"
                onClick={handleRandomizeLikesCount}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md
                        hover:bg-gray-300 focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {postData.likesCount || "Randomize Likes Count"}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md
                    hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50
                    disabled:cursor-not-allowed transition-colors
                    flex items-center justify-center gap-2 text-lg font-semibold"
          >
            {isLoading && <Loader className="h-5 w-5 animate-spin" />}
            {isLoading ? "Creating Post..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <PlatformHeader>
      <div className="min-h-screen">
        <div className="py-17 px-4 sm:px-6 lg:px-8">
          <PostForm />
        </div>
      </div>
    </PlatformHeader>
  );
}