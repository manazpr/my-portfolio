import { FC } from 'react';

const Who: FC = () => {
  return (
    <div
      id="who"
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
          Hi there!
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Manaz P Ray. I&apos;m a frontend developer from India. I
          have made a lot of projects, from basic HTML pages to complex projects
          like Web3 Dapps with streaming payments. I hope to be a great
          developer and get my dream job in the future. Besides coding, I also
          like 3d Graphic Designing and Video Editing.
        </p>
      </div>
    </div>
  );
};

export default Who;