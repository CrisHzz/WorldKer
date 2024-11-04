"use client";

import BackgroundStars from "@/app/components/UI/backgroundStars";
import Stars from "@/app/components/UI/Stars";
import {
  CalendarDays,
  LogOut,
  Rocket,
  Settings,
  User,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Mariana Velez",
      img: "/wvelez.jpg",
      comment: "Cual es el mejor lenguaje de programacion y porque es racket?",
      likes: 5,
      rockets: 3,
      comments: [
        { name: "Daniel Morales", comment: "Definitivamente no es Racket!" },
      ],
    },
    {
      id: 2,
      name: "Cristian Hernandez",
      img: "/wcris.jpg",
      comment: "David por favor puedes hacer algo en clase?",
      likes: 10,
      rockets: 7,
      comments: [
        {
          name: "Jhonathan G",
          comment: "Alguien que le cancele la materia porfavor",
        },
        { name: "Juliana B", comment: "Pongalo a trabajar solo" },
      ],
    },
    {
      id: 3,
      name: "Daniel Morales",
      img: "/wdani.jpg",
      comment: "Hater N°1 del vallenato",
      likes: 8,
      rockets: 4,
      comments: [{ name: "Phol", comment: "Apoyo el aporte" }],
    },
  ]);

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleRocket = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, rockets: post.rockets + 1 } : post
      )
    );
  };

  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 z-0">
        <BackgroundStars />
        <Stars />
      </div>

      {/* Navbar */}
      <nav className="bg-primary/20 border-b border-primary/20 backdrop-blur-sm absolute top-0 w-full h-16 px-4 flex items-center z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/LogoWorldKer.png" alt="Logo" width={120} height={40} />
            <span className="text-xl font-bold">WorldKer</span>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-primary-foreground transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary-foreground transition"
              >
                About
              </Link>
            </li>

            {/* Rockets Counter - moved to header */}
            <li className="flex items-center space-x-2">
              <Rocket size={24} />
              <span className="font-bold">Rockets: 42</span>
            </li>

            <li>
              <Image
                src="/wvelez.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-primary cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-16 pb-8 z-10">
        <div className="container mx-auto px-4 flex">
          {/* Sidebar */}
          <aside className="w-48 mr-4 hidden md:block">
            <div className="bg-transparent border border-white rounded-lg p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition"
                  >
                    <Rocket size={18} />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition"
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Top Rockets Section */}
            <div className="bg-transparent border border-white rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Top Rockets</h2>
              <div className="space-y-4">
                {[
                  { name: "Mariana Velez ", img: "/wvelez.jpg", number: 5 },
                  { name: "Daniel morales", img: "/wdani.jpg", number: 10 },
                  { name: "Cristian Hernandez", img: "/wcris.jpg", number: 15 },
                ].map((rocket, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Image
                      src={rocket.img}
                      alt={`Rocket ${i + 1}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{rocket.name}</div>
                      <div className="text-sm text-primary-foreground/70">
                        Number: {rocket.number}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed Section */}
            <div className="bg-transparent border border-white rounded-lg p-4 md:col-span-2">
              <h2 className="text-xl font-bold mb-4">Feed</h2>
              <div className="space-y-4">
                {posts.map((post, i) => (
                  <div key={i} className="bg-primary/20 rounded p-4">
                    <div className="flex items-center space-x-4 mb-2">
                      <Image
                        src={post.img}
                        alt={post.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="font-semibold">{post.name}</div>
                    </div>
                    <p className="mb-4">{post.comment}</p>
                    <div className="flex space-x-4 mb-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-1 text-sm"
                      >
                        <ThumbsUp size={16} />
                        <span>{post.likes}</span>
                      </button>
                      <button
                        onClick={() => handleRocket(post.id)}
                        className="flex items-center space-x-1 text-sm"
                      >
                        <Rocket size={16} />
                        <span>{post.rockets}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm">
                        <MessageSquare size={16} />
                        <span>{post.comments.length}</span>
                      </button>
                    </div>
                    {post.comments.map((comment, j) => (
                      <div key={j} className="bg-primary/10 rounded p-2 mb-2">
                        <div className="font-semibold text-sm">
                          {comment.name}
                        </div>
                        <p className="text-sm">{comment.comment}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-transparent border border-white rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Team</h2>
              <div className="space-y-4">
                {[
                  { name: "Cristian Hernandez", img: "/wcris.jpg" },
                  { name: "Daniel Morales", img: "/wdani.jpg" },
                  { name: "Mariana Velez", img: "/wvelez.jpg" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Image
                      src={member.img}
                      alt={`Team Member ${i + 1}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="font-semibold">{member.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-transparent border border-white rounded-lg p-4 md:col-span-2">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CalendarDays className="mr-2" />
                Calendar
              </h2>
              {/* Add calendar component here */}
              <div className="text-center py-8">Calendar Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
