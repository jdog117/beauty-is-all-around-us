import Image from "next/image";
import Boosh from "@/public/142595010033.jpg";

// set up blob storage and pull images from it
// checkout a few other storages/backends like supa base

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Image src={Boosh} alt=""></Image>
            </div>
        </main>
    );
}
