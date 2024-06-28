import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen m-5 font-sans max-lg:flex max-lg:flex-col max-lg:bg-red-400 max-lg:rounded-[40px] max-lg:justify-center max-lg:items-center">
      <div className="lg:absolute flex justify-center max-lg:my-auto items-center gap-10 h-full w-full bg-red-400 md:rounded-[75px]">
        <div className="my-auto text-center lg:text-end lg:w-[25%] space-y-5">
          <p className="text-3xl font-black text-white">Witt.</p>
          <p className="text-7xl font-black text-white">Your second brain</p>
          <p className="text-white font-medium">
            a personal assistant to organize, track and document your work
          </p>
        </div>
        <Image
          src={"/social.svg"}
          alt="social"
          height={400}
          width={400}
          className="justify-start items-start hidden lg:flex"
        />
      </div>
      <div className="absolute hidden lg:block left-0 m-10 bg-red-300 h-56 w-56 rounded-[65px] z-20">
        <Image
          src={"/travel.svg"}
          height={150}
          width={150}
          alt="travel"
          className="flex justify-start items-center w-full mt-10"
        />
      </div>
      <div className="absolute hidden lg:block right-0 m-10 bg-black h-20 w-20 rounded-full z-20">
        <Image
          src={"/play.svg"}
          height={30}
          width={30}
          alt="play"
          className="flex justify-start items-center mx-7 my-5"
        />
      </div>
      <div className="lg:absolute flex justify-center max-lg:my-auto items-center text-white lg:left-0 lg:m-10 lg:bottom-0 bg-black h-16 w-56 rounded-full z-20">
        Download For Free
      </div>
    </div>
  );
}
