import PlatformHeader from "@/app/components/UI/platformHeader";
import { UserCircle } from "lucide-react";

export default function TeamPage() {
  return (
    <PlatformHeader>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 -mt-20">
        <div className="bg-transparent rounded-lg shadow-xl p-8 w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
            My Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <UserCircle className="w-16 h-16 text-indigo-600 mb-4" />
                  <span className="text-lg font-semibold text-white">
                    User {index + 1}
                  </span>
                  <span className="text-sm text-white mt-2">Team Member</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PlatformHeader>
  );
}
