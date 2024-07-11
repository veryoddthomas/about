import Navbar from "../components/Navbar";
import Image from "next/image";
import { domains } from "../data/domains";


const DomainDescription = ({ index, title, icon, id, desc }) => (
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

export default function Domains() {
  return (
    <main className="bg-primary-dark">
      <div className='page-setup'>
        <h1>Technology Domains</h1>

        <div className='flex flex-wrap my-8 '>
          {domains.map((domain, index) => (
            <h2 className='p-2 mx-2 my-1 text-tertiary-light text-base  border-primary border-2 rounded-2xl hover:bg-tertiary-dark'>
              <a href={'#' + domain.id} className=""> {domain.title} </a>
            </h2>
          ))}
        </div>

        {domains.map((domain, index) => (
          <DomainDescription
            title={domain.title}
            icon={domain.icon}
            id={domain.id}
            desc={domain.desc}
            index={index}
            {...domain} />
        ))}
        {/* The following pads below the last entry so that following
            the link will place the anchor at the top of the screen */}
        <div className='min-h-screen flex flex-grow' />
      </div>
    </main >
  );
}



