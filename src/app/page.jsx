import Student from "@/assets/gambar/student.png";
import Caldr from "@/assets/gambar/calendar.png";
import Teacher from "@/assets/gambar/teacher.png";
import Leader from "@/assets/gambar/lead.png";
import Background from "@/assets/gambar/Background.png";
import Rpl from "@/assets/gambar/rpl.png";
import Hotel from "@/assets/gambar/pin.png";
import Akuntansi from "@/assets/gambar/account.png";
import PlayIcon from "@/assets/svg/play-solid.svg";
import Image from "next/image";
import PPDB1 from "@/assets/gambar/pdb1.jpeg";
import PPDB2 from "@/assets/gambar/pdb2.jpeg";
import PPDB3 from "@/assets/gambar/pdb3.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto relative">
        <Image
          src={Background}
          className="absolute z-[-1] top-10 right-[-5rem] overflow-x-hidden w-[90%]"
        />
        <div className="w-[50%] flex flex-col gap-6 py-44 px-8 min-h-screen">
          <h1 className="text-5xl font-bold">SMK Yadika Soreang</h1>
          <p className="text-sm text-gray-800 tracking-wider">
            Sekolah Menengah Kejuruan yang memiliki 3 jurusan yaitu Perhotelan,
            Pemograman Perangkat Lunak dan Gim, dan Akutansi yang memiliki
            fasilitas mewah dengan harga terjangkau.
          </p>
          <div className="flex gap-8">
            <a
              href="/"
              className="py-2 px-8 rounded-xl text-blue-900 border border-blue-800"
            >
              Contact Us
            </a>
            <a
              href="https://www.youtube.com/watch?v=ubTDTZYQq6I"
              className="py-2 px-6 rounded-xl border bg-blue-900 flex items-center text-white"
            >
              <Image src={PlayIcon} className="w-6 h-6 text-white" />
              <p>Our School</p>
            </a>
          </div>
        </div>
        <div className="border-4 border-blue-800 rounded-xl">
          <div className="grid grid-cols-3 gap-8 p-8">
            <div>
              <Image src={PPDB1} className="" />
            </div>
            <div>
              <Image src={PPDB2} />
            </div>
            <div>
              <Image src={PPDB3} />
            </div>
          </div>
          <div className="text-center my-8">
            <a
              href="/"
              className="bg-blue-700 text-white py-2 px-4 text-2xl rounded-lg"
            >
              Cek Pendaftar!
            </a>
          </div>
        </div>

        {/* Kepala Sekolah */}
        <div className="flex min-h-screen justify-center items-end gap-16 py-24 ">
          <Image src={Leader} className="" />
          <div className="flex flex-col gap-6 w-[40%]">
            <h1 className="font-bold text-4xl">Kepala Sekolah Kita</h1>
            <p className="text-justify">
              Selamat datang di website resmi SMK Yadika Soreang. Saya sangat
              gembira dapat berbicara pada Anda melalui platform ini. Sebagai
              kepala sekolah, saya bertanggung jawab untuk memimpin dan
              memberikan arah bagi sekolah kami. Saya sangat bangga dengan
              prestasi dan keberhasilan yang telah dicapai oleh para siswa,
              guru, dan staf kami. Website ini dirancang untuk memberikan
              informasi tentang sekolah kami, seperti visi, misi, program, dan
              kegiatan. Kami berharap bahwa website ini akan menjadi sumber
              informasi yang berguna bagi para siswa, orang tua, dan masyarakat.
              Sebagai sekolah, kami bertekad untuk terus memperbaiki diri dan
              memberikan pendidikan berkualitas bagi para siswa. Saya berharap
              bahwa Anda akan menemukan informasi yang berguna dan menarik di
              website ini. Terima kasih atas kunjungan Anda.
            </p>
            <p className="my-2">Salam,</p>
            <p>Yetti Nuraini, S,Pd., Gr.</p>
          </div>
        </div>

        {/* Jurusan */}
        <div className="min-h-screen flex items-center">
        <div className="p-8 border-4 border-blue-800 rounded-xl">
          <h1 className="font-bold text-3xl text-center">
            Jurusan Apa Yang Tersedia?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-8 mt-12">
            <div className="flex flex-col gap-4 items-center pt-8 pb-6 px-14 rounded-xl shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-2">
              <Image src={Akuntansi} />
              <h1 className="font-bold text-xl text-center">Akuntansi</h1>
              <p className="text-center">
                Jurusan Akuntansi merupakan bidang studi yang mempelajari
                tentang metode pencatatan serta penyusunan laporan keuangan .
              </p>
              <a
                href="/"
                className="bg-white py-2 px-12 border border-blue-800 rounded-xl my-4 text-blue-800"
              >
                More
              </a>
            </div>
            <div className="flex flex-col gap-4 items-center pt-8 pb-6 px-14 rounded-xl shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-2">
              <Image src={Rpl} />
              <h1 className="font-bold text-xl text-center">Pemograman Perangkat Lunak Dan Gim</h1>
              <p className="text-center">
              Pemograman Perangkat Lunak Dan Gim adalah salah satu jurusan yang berfokus pada produksi dan pengembangan perangkat lunak dan gim .
              </p>
              <a
                href="/"
                className="bg-white py-2 px-12 border border-blue-800 rounded-xl my-4 text-blue-800"
              >
                More
              </a>
            </div>
            <div className="flex flex-col gap-4 items-center pt-8 pb-6 px-14 rounded-xl shadow-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-2">
              <Image src={Hotel} />
              <h1 className="font-bold text-xl text-center">Perhotelan</h1>
              <p className="text-center">
              Jurusan Perhotelan adalah jurusan yang mempelajari pengelolaan hotel serta cara menyeimbangkan aspek wisata dan manajemen bisnis untuk mencapai kesuksesan .
              </p>
              <a
                href="/"
                className="bg-white py-2 px-12 border border-blue-800 rounded-xl my-4 text-blue-800"
              >
                More
              </a>
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}
