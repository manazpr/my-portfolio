import { FC } from 'react';

const Who: FC = () => {
  return (
    <div
      id="profile"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.png"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          gm!
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          I am Manaz, a self-taught web developer/designer with interest in
          NFTs, Gaming and Layer 2 Scaling solutions. I am deeply passionate
          about working in Web3 and my key areas of interests include NFTs,
          play-to-earn gaming and ZK Rollup tech. Currently I&apos;m learning
          Three.js and Cairo.
        </p>
      </div>
    </div>
  );
};

export default Who;
