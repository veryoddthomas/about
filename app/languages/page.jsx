import { languages, proficiency_ratings } from "../data/languages";


const LanguageDescription = ({ title, id, desc, proficiency }) => (
  <div>
    <a id={id} />
    <div className='mt-12 text-lg'>
      <h2>{title}
        <span className='group relative'>
          <span className='text-lg text-tertiary-light'> &nbsp;({proficiency})</span>
          <span className="absolute flex min-w-60 top-16  ml-8 scale-0 z-10 transition-all rounded bg-tertiary-dark p-4 text-xl font-normal text-white group-hover:scale-100">
            {proficiency_ratings[proficiency]}
          </span>
        </span>
      </h2>

      <div className='space-y-4'>
        {desc.map((paragraph, paragraph_index) => (
          <p key={`${id}-${paragraph_index}`} className='text-primary'>{paragraph}</p>
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
              <a href={'#' + language.id} className=""> {language.title} </a>
            </h2>
          ))}
        </div>

        {languages.map((language, index) => (
          <LanguageDescription
            {...language} />
        ))}
        {/* The following pads below the last entry so that following
            the link will place the anchor at the top of the screen */}
        <div className='min-h-screen flex flex-grow' />
      </div>
    </main>
  );
}



