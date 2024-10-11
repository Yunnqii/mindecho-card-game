import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-8">
      <div className="max-w-3xl text-center">
        <h1
          className={`text-6xl font-bold mb-8 text-[#F9A60F] ${playfair.className}`}
        >
          MindEcho
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-10">
          <p className={`text-xl mb-6 text-[#333] ${montserrat.className}`}>
            Many people crave great conversation, but few know how to start. A
            good question can be the tiny spark that ignites a forest fire of
            thoughts, ideas, and personal revelation.
          </p>
          <p className={`text-lg text-[#F9A60F] ${montserrat.className}`}>
            This deck has 50 questions designed to foster deeper or more
            entertaining discussions than typical small talk. Take turns, take
            your time, and see where one card can take you.
          </p>
        </div>

        <Link href="/game" passHref>
          <Button
            className={`${montserrat.className} bg-[#F9A60F] text-white hover:bg-[#E99600] text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            Start Your Journey
          </Button>
        </Link>
      </div>
    </div>
  );
}
