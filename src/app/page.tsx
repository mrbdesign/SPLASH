"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20 text-center">
        <Header />

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 mb-8" style={{ marginTop: '50px' }}>
          <a
            href="https://pixel-world-mint.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Mint NFT
          </a>
          <a
            href="https://pixelworld-staking.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Stake NFT
          </a>
        </div>

        {/* Buy PERKS Text */}
        <div className="mt-12 mb-8 text-zinc-300 text-4xl font-bold">
          BUY PERX
        </div>

        {/* IPFS Embed Widget */}
        <div className="w-full mb-12">
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0x77b4Dd848214571D1119AFf3cD34228C6089954b&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=0a1fffa5782fd57917d2a1e074c468f4&theme=dark&primaryColor=purple"
            width="100%"
            height="750px"
            style={{ maxWidth: '100%' }}
            frameBorder="0"
          />
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
              Mina<br />
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
        'LITTLE WORLD PFPs' by Mr.Brian Design
      </p>
    </header>
  );
}
