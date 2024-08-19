import { domains } from "../../data/domains";
import PageEndDiv from "../../components/PageEndDiv";


const DomainDescription = ({ title, id, desc, icon, index }) => (
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


export default function Domains() {
  return (
    <main className="bg-primary-dark">
      <div className='page-setup'>
        <h1>Technology Domains</h1>

        <div className='flex flex-wrap my-8 '>
          {domains.map((domain, index) => (
            <h2 key={domain.id} className='p-2 mx-2 my-1 text-tertiary-light text-base  border-primary border-2 rounded-2xl hover:bg-tertiary-dark'>
              <a href={'#' + domain.id} className=""> {domain.title} </a>
            </h2>
          ))}
        </div>

        {domains.map((domain, index) => (
          <DomainDescription
            index={index}
            {...domain} />
        ))}
        <PageEndDiv center={false} />
      </div>
    </main >
  );
}



