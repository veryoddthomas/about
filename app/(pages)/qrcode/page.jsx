import Image from "next/image";
import { qrcode } from "../../assets";

export default function QRCode() {
    return (
        <main className="bg-primary-dark">
            <div className='page-setup'>
                <h1>QR Code</h1>

                <div className='flex flex-wrap mt-8   '>
                    <Image
                        src={qrcode}
                        alt={'https://veryoddthomas.vercel.app/'}
                        // className='w-24 h-12 object-contain inline'
                        // className='w-16 h-16 object-contain inline align-left object-left mr-4'
                        className='object-contain inline align-left object-left mr-4'
                    />
                </div>
                <p className='text-primary-light mt-2'>veryoddthomas.vercel.app</p>


                {/* The following pads below the last entry so that following
                    the link will place the anchor at the top of the screen */}
                {/* <div className='min-h-screen flex flex-grow' /> */}
            </div>
        </main>
    );
}


