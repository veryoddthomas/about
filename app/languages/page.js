import Navbar from "../components/Navbar";
import Image from "next/image";
import { languages } from "../data/languages";


const LanguageDescription = ({ index, title, icon, id, desc }) => (
  <div>
    <a id={id} />
    {/* pt-20 below is to count the navbar.  If the navbar hides, remove it*/}

    {/* <div className='mt-4 flex flex-wrap gap-4'>
      <div className='w-40'>
        <Image src={icon} alt={title} className='w-24 h-24 object-contain justify-start' />
      </div>
      <div className='w-96 text-2xl'>
        <h2>{title}</h2>
        {desc.map((paragraph, index) => (
          <p key={index} className='pt-4'>{paragraph}</p>
        ))}
      </div>
    </div> */}

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
          {/* <div className='flex flex-row'> */}
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



