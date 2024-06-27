import Bg from "@/assets/gambar/bg2.png";
import Logo from "@/assets/gambar/logo.png";
import Email from "@/assets/svg/envelope-solid.svg";
import Phone from "@/assets/svg/phone-solid.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-96">
      <div className="relative container mx-auto">
        <Image src={Bg} className="absolute z-10 right-[-5rem] top-[-25rem]" />
      </div>
      <div className="w-full bg-blue-900 py-12 px-16 text-white">
        <div className="container mx-auto flex items-center gap-4 ">
          <h1 className="font-bold text-3xl">Ayo Daftar Sekarang Juga!</h1>
          <a href="/" className="bg-white rounded-full py-2 px-8 text-blue-800">
            PPDB
          </a>
        </div>
      </div>
      <div className="container mx-auto py-24 px-12 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-6">
            <Image src={Logo} className="w-20 h-20" />
            <div className="space-y-2">
              <h1 className="font-bold text-2xl">SMK Yadika Soreang</h1>
              <p className="w-[75%] font-extralight">
                Jl. Raya Soreang, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa
                Barat 40921
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-24">
            <div className="flex items-center gap-2">
              <Image src={Email} className="w-4 h-4" />
              <p>unityadikasoreang@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Phone} className="w-4 h-4" />
              <p>082130354353</p>
            </div>
          </div>
        </div>
        <div className="flex gap-24 mr-12">
          <div>
            <h1 className="font-bold text-xl">Link Helper</h1>
            <div className="flex flex-col mt-2 font-extralight">
              <a href="/">Home</a>
              <a href="/">Jurusan</a>
              <a href="/">Profile</a>
              <a href="/">Pendaftar</a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl">Need Help?</h1>
            <div className="flex flex-col mt-2 font-extralight">
              <a href="/">Contact Us</a>
              <a href="/">Help</a>
              <a href="/">FAQ's</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-900 py-4 text-center">
        <h1 className="text-white">
          All rights reserve to SMK YADIKA SOREANG 2022 Ltd.
        </h1>
      </div>
    </footer>
  );
}
