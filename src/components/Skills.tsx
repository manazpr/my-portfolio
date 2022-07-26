import { FC } from 'react';
import { allDataType } from '../shared/types';

interface SkillsProps {
  skills: allDataType['skills'];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-3xl text-center lg:text-4xl"
      >
        Skills
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use on a daily basis.
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-5 gap-y-[10px] md:gap-y-[20px]">
        {skills.map((skill) => (
          <a
            key={skill.link}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-around item group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
