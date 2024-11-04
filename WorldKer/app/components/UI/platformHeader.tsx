"use client";

import BackgroundStars from "@/app/components/UI/backgroundStars";
import Stars from "@/app/components/UI/Stars";
import { LogOut, Rocket, Settings, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}


export default function DashboardLayout({ children }: DashboardLayoutProps) {

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    rocketsReceived: 0,
    followers: 0,
    following: 0,
    available_rockets: 0,
  });

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      fetch(`https://worlderk.onrender.com/user/get/machetazo/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProfileData({
            name: data.data.name || "",
            email: data.data.email || "",
            bio: data.data.bio || "",
            rocketsReceived: data.data.rockets_received || {},
            followers: data.data.followers || 0,
            following: data.data.following || 0,
            available_rockets: data.data.available_rockets || 0,
          });
        })
        .catch((error) => console.error("Error fetching profile data:", error));
    } else {
      console.error("No email found in localStorage");
    }
  }, []);


  return (
    <div className="relative min-h-screen flex flex-col text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <BackgroundStars />
        <Stars />
      </div>

      {/* Navbar */}
      <nav className="bg-primary/20 border-b border-primary/20 backdrop-blur-sm absolute top-0 left-0 w-full h-16 px-4 flex items-center z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/LogoWorldKer.png" alt="Logo" width={120} height={40} />
            <span className="text-xl font-bold">WorldKer</span>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                href="/home"
                className="hover:text-primary-foreground transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/landing"
                className="hover:text-primary-foreground transition"
              >
                About
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Rocket size={24} />
              <span className="font-bold">Rockets: {profileData.available_rockets}</span>
            </li>
            <li>
              <Link href="/profile">
                <User className="w-10 h-10 text-primary cursor-pointer hover:scale-110 transition-transform duration-200" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Layout with Sidebar and Content */}
      <div className="relative flex-1 pt-16 pb-8 z-10 flex flex-col md:flex-row container mx-auto px-4">
        {/* Sidebar */}
        <aside className="w-full md:w-48 md:mr-4 mb-4 md:mb-0">
          <div className="bg-transparent border border-white rounded-lg p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/home"
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
                  href="/landing"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {children} {/* Dynamic content will be rendered here */}
        </main>
      </div>
    </div>
  );
}
