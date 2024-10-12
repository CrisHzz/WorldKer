import BackgroundStars from "@/app/components/UI/backgroundStars";
import Stars from "@/app/components/UI/Stars";
import { LogOut, Rocket, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
                        <li><Link href="/" className="hover:text-primary-foreground transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary-foreground transition">About</Link></li>

                        {/* Rockets Counter */}
                        <li className="flex items-center space-x-2">
                            <Rocket size={24} />
                            <span className="font-bold">Rockets: API</span>
                        </li>

                        <li>
                            <Image src="/profile.jpg" alt="Profile" width={40} height={40} className="rounded-full border-2 border-primary cursor-pointer hover:scale-110 transition-transform duration-200" />
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
                                    <Link href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition">
                                        <Rocket size={18} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition">
                                        <Settings size={18} />
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-primary/30 transition">
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {children} {/* This is where the dynamic content will go */}
                    </div>
                </div>
            </div>
        </div>
    );
}
