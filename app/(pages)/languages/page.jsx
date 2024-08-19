import { languages, proficiency_ratings } from "../../data/languages";
import Image from "next/image";
import PageEndDiv from "../../components/PageEndDiv";


const LanguageDescription = ({ title, id, desc, proficiency, icon, index }) => (
  <div key={`${id}-${index}`}>
    {/* {console.log(`${id}-${index}`)} */}
    <a id={id} />
    <div className='py-4 text-lg'>
      <h2>
        {/* <Image
          src={icon}
          alt={title}
          // className='w-24 h-12 object-contain inline'
          className='w-16 h-16 object-contain inline align-left object-left mr-4'
        /> */}

        {title}
        <span className='group relative'>
          <span className='text-lg text-tertiary-light'> &nbsp;({proficiency})</span>
          <span className="absolute flex  min-w-40 -left-6 top-8  ml-8 scale-0 z-10 transition-all rounded bg-tertiary-dark p-4 text-xl font-normal text-white group-hover:scale-100">
            {proficiency_ratings[proficiency]}
          </span>
        </span>
      </h2>

      <div className='space-y-4'>
        {desc.map((paragraph, paragraph_index) => (
          <div key={`${id}-${index}-${paragraph_index}`} className='text-primary my-6'>
            {/* {console.log(`${id}-${index}-${paragraph_index}`)} */}
            {paragraph}
          </div>
        ))}
      </div>
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
            <h2 key={language.id} className='p-2 mx-2 my-1 text-tertiary-light text-base  border-primary border-2 rounded-2xl hover:bg-tertiary-dark'>
              {/* {console.log(language.id)} */}
              <a href={'#' + language.id} className=""> {language.title} </a>
            </h2>
          ))}
        </div>

        {languages.map((language, index) => (
          <LanguageDescription
            index={index}
            {...language} />
        ))}
        <PageEndDiv center={false} />
      </div>
    </main>
  );
}



