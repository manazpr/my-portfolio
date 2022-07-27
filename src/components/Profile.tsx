import { FC } from 'react';
import Typed from 'react-typed';

const Who: FC = () => {
  const talkAbout = [
    'React',
    'JavaScript',
    'TypeScript',
    'GraphQL',
    'Next.js',
    'HTML',
    'CSS',
    'Web3',
  ];
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
          Hey, I&apos;m Manaz
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          I am a self-taught web developer/designer specialized in front-end
          development using React and Typescript. I am deeply passionate about
          the Web3 space and my key areas of interests include NFTs,
          play-to-earn gaming and ZK Rollup tech. You can talk to me about {''}
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={talkAbout}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
          .
        </p>
      </div>
    </div>
  );
};

export default Who;
