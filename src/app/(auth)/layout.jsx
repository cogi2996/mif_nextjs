import Background from "@/app/(auth)/bg-film/background";
import FilmStrip from "@/app/(root)/text/page";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <main className="relative w-full lg:min-h-screen xl:min-h-screen bg-black h-screen">
      {/* Background FilmStrip */}
      <div className="absolute inset-0 z-0 h">
        <Background />
      </div>

      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blu-none z-10 h-screen"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center items-center lg:min-h-screen xl:min-h-screen">
        <div className="bg-background p-6 rounded-lg shadow-lg border-2 border-background w-fit mx-auto flex justify-center opacity-100">
          {children}
        </div>
      </div>
    </main>
  );
}
