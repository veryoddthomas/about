import Navbar from "../components/Navbar";
import Image from "next/image";
import { languages } from "../data/languages";


const LanguageDescription = ({ index, title, icon, id, desc }) => (
  <div>
    <a id={id} />
    <div className='mt-12 text-2xl'>
      <h2 className='mb-4'>{title}</h2>
      {desc.map((paragraph, index) => (
        <p key={index} className='text-primary pt-4'>{paragraph}</p>
      ))}
    </div>

  </div>
);


export default function Languages() {
  return (
    <main className="bg-primary-dark">
      <div className='page-setup'>
        <h1>Programming Languages</h1>

        <div className='flex flex-row mt-6 text-primary-light font-bold text-2xl '>
          <div className='space-x-8'>
            {languages.map((language, index) => (
              <a href={'#' + language.id} className="link"> {language.title} </a>
            ))}
          </div>
        </div>

        {languages.map((language, index) => (
          <LanguageDescription
            title={language.title}
            icon={language.icon}
            id={language.id}
            desc={language.desc}
            index={index}
            {...language} />
        ))}
      </div>
    </main>
  );
}



