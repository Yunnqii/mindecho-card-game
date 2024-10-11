import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8E7]">
      <div className="text-center">
        <h1 className={`text-6xl font-bold mb-4 text-[#F9A60F] ${montserrat.className}`}>MindEcho</h1>
        <p className={`text-xl mb-8 text-[#6BC7E9] max-w-md ${montserrat.className}`}>
          Don&apos;t you want to have conversations worth remembering?
        </p>
        <p className={`text-lg mb-8 text-[#6BC7E9] max-w-md ${montserrat.className}`}>
          MindEcho can be fun, deep, awkward, potentially triggering, exciting, interesting and overwhelming.
        </p>
        <Link href="/game" passHref>
          <Button className={`bg-[#F9A60F] text-white hover:bg-[#E99600] ${montserrat.className} text-lg px-8 py-3 rounded-full transition-all duration-300`}>
            Start Now
          </Button>
        </Link>
      </div>
    </div>
  );
}