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

        <div className='flex flex-wrap my-8   '>
          {languages.map((language, index) => (
            <h2 className='p-2 mx-2 my-1 text-tertiary-light text-base  border-primary border-2 rounded-2xl hover:bg-tertiary-dark'>
              <a href={'#' + language.id} className=""> {language.title} </a>
            </h2>
          ))}
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



