"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20 text-center">
        <Header />

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 mb-16" style={{ marginTop: '20px' }}>
          <a
            href="https://pixel-world-mint.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Mint NFT
          </a>
          <a
            href="https://stake-pixel.world"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Stake NFT
          </a>
          <a
            href="https://trade-pixel.world"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Market Place
          </a>
        </div>

        {/* Team Section */}
        <div className="mt-6 mb-10 text-zinc-300 text-4xl font-bold">
          The Team
        </div>

        {/* Wrapper for Images with Captions */}
        <div className="flex flex-col md:flex-row justify-center mb-10 max-w-[500px] mx-auto">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <Image src="/brian.png" alt="Brian" width={100} height={100} className="object-cover" />
            <p className="text-zinc-300 mt-2 text-center">
              Mr.Brian Design<br />
              Artist + Founder<br />
              <a href="https://x.com/mrbriandesign" target="_blank" rel="noopener noreferrer" className="text-blue-500">@mrbriandesign</a>
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-8">
            <Image src="/mina.png" alt="Mina" width={100} height={100} className="object-cover" />
            <p className="text-zinc-300 mt-2 text-center">
              Mina Shirin<br />
              Media Advisor<br />
              <a href="https://x.com/MinaShirinNYC" target="_blank" rel="noopener noreferrer" className="text-blue-500">@MinaShirinNYC</a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/artsabide.png" alt="Arts Abide" width={100} height={100} className="object-cover" />
            <p className="text-zinc-300 mt-2 text-center">
              Arts Abide<br />
              Developer<br />
              <a href="https://x.com/ArtsAbide" target="_blank" rel="noopener noreferrer" className="text-blue-500">@ArtsAbide</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20 bg-black text-white p-4 text-center">
      <Image
        src="/PIXEL-WORLD-TEASER.gif"
        alt="Pixel World Teaser"
        width={512}
        height={512}
        style={{
          filter: "drop-shadow(0px 0px 24px #0)",
        }}
      />
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter">
        PIXEL WORLD
      </h1>
      <div className="mt-[12px]">
        <span className="text-zinc-300 block text-3xl">Minting Nov. 11</span>
      </div>
      <p className="text-zinc-300 text-base mt-6">
        GOOD SMILE is GOOD STYLE
      </p>
      <p className="text-zinc-300 text-base mt-2">
        500 boys + 500 girls, 32 x 32 px format, based on: <br />
        LITTLE WORLD PFPs by Mr.Brian Design
      </p>
    </header>
  );
}
