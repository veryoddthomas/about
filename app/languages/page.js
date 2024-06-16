import Navbar from "../components/Navbar";
import Image from "next/image";
import { languages } from "../data/languages";


const LanguageDescription = ({ index, title, icon, id, desc }) => (
  <div>
    <a id={id} />
    <div className='min-h-64 pt-12'>
      <h2>{title}</h2>
      <Image src={icon} alt={title} className='w-24 h-24 object-contain justify-start' />
      {desc.map((paragraph, index) => (
        <p key={index} className='pt-4'>{paragraph}</p>
      ))}
    </div>
  </div>
);


export default function Languages() {
  return (
    <main className="bg-primary-dark">
      <Navbar />
      <div className='page-setup'>
        <h1>Programming Languages</h1>

        {/* <p className='mt-6 text-2xl'>
        My philosphy is that there is not one 'best' programming
        language for every job.  As a result, it's important to
        be familiar with a variety, and understand the tradeoffs.
        </p>

        <p className='mt-6 text-2xl'>
        The same is true for technology stacks in general.
        </p> */}

        <div className='flex flex-row gap-10 mt-6 text-secondary-light text-2xl '>
          {languages.map((language, index) => (
            <a href={'#' + language.id} className="link"> {language.title} </a>
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



