import Navbar from "../components/Navbar";
import Image from "next/image";
import { c_and_cpp, python, lua, rust, mojo, code } from "../assets";
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
        <h1>Programming Languages!</h1>

        <div className='flex flex-row gap-10 mt-6 text-secondary-light text-2xl '>
          <a href='#c-and-cpp' className="link"> C and C++ </a>
          <a href='#rust' className="link"> Rust </a>
          <a href='#python' className="link"> Python </a>
          <a href='#lua' className="link"> Lua </a>
          <a href='#mojo' className="link"> Mojo 🔥 </a>
          <a href='#other' className="link"> Others </a>
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



