import Link from 'next/link'
import Image from "next/image";
import { qrcode } from "../../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <main className="bg-primary-dark">
      <div className='page-setup'>
        <h1 className='mb-8'>About This Site</h1>

        {/* <p><span className='text-primary-light font-bold'>Author</span>: Tom Zakrajsek</p> */}
        <h2 className='mt-6 mb-4'>Author</h2>
        <div className="flex flex-row items-center gap-5">Tom Zakrajsek
          <Link rel="noopener noreferrer" href={'https://github.com/veryoddthomas/'}>
            <FontAwesomeIcon icon={faGithub} size="xl" inverse />
          </Link>
          <Link rel="noopener noreferrer" href={'https://www.linkedin.com/in/tom-zakrajsek/'}>
            <FontAwesomeIcon icon={faLinkedin} size="xl" inverse />
          </Link>
        </div>

        <h2 className='mt-6 mb-4'>Source Repo</h2>

        <Link rel="noopener noreferrer" href={'https://github.com/veryoddthomas/about/'}>
          github.com/veryoddthomas/about
        </Link>

        <h2 className='mt-6 mb-4'>Application Hosting</h2>

        {/* <p className='text-tertiary-light mt-2'>veryoddthomas.vercel.app</p> */}

        <Link rel="noopener noreferrer" href={'https://veryoddthomas.vercel.app/'}>
          veryoddthomas.vercel.app
        </Link>
        <div className='flex flex-wrap mt-4'>
          <Image
            src={qrcode}
            alt={'https://veryoddthomas.vercel.app/'}
            // className='w-24 h-12 object-contain inline'
            // className='w-16 h-16 object-contain inline align-left object-left mr-4'
            className='w-64 h-64 object-contain inline align-left object-left mr-4'
          />
        </div>
      </div>
    </main >
  );
}



