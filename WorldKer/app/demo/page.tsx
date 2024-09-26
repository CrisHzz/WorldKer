import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

export default function Demo() {
  return (
    <main className="relative flex justify-center items-center min-h-screen bg-gray-100">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-16 rounded-lg shadow-lg text-center w-full max-w-md z-10">
          <h1 className="mb-5 text-4xl font-bold text-purple-900">Solicitar una demo</h1>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 mb-5 border border-gray-300 rounded-xl text-lg"
              required
            />
            <button
              type="submit"
              className="bg-indigo-400 text-white p-3 rounded-xl text-lg hover:bg-indigo-600 transition duration-300"
            >
              Obtener serial
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}