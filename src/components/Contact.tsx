import { FC } from 'react';
import { socialLinks } from '../shared/contants';

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="mb-10 text-4xl text-center mt-14 md:mt-28">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <form
              action={process.env.NEXT_PUBLIC_FORM_URL}
              method="POST"
              className="flex flex-col gap-2"
            >
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required minLength={3} />
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
              <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#3F3FFF] hover:bg-[#3535ff]">
                Send
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h1 className="mb-3 text-xl">Other places</h1>
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 transition duration-300 hover:bg-slate-900"
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
