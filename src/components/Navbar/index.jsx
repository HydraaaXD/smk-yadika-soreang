import Logo from "@/assets/gambar/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-300 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="font-bold text-xl">SMK Yadika Soreang</h1>
        </div>
        <div className="flex justify-center items-center gap-8 text-lg">
          <a href="/">Home</a>
          <a href="/">Jurusan</a>
          <a href="/">Profile</a>
          <a href="/">Pendaftar</a>
        </div>
        <div className="flex justify-center items-center gap-6">
          <button className="py-2 px-8 rounded-full bg-blue-900 text-white">PPDB</button>
          <button className="py-2 px-8 rounded-full bg-blue-900 text-white">Login</button>
        </div>
      </div>
    </nav>
  );
}
