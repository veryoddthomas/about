export default function Developer() {
    return (
        <main className="bg-primary-dark">
            <div className='page-setup'>

                <h1>Heading 1 (h1)</h1>
                <h2>Heading 2 (h2)</h2>
                <h3>Heading 3 (h3)</h3>

                <div className='text-yellow-500 mt-6 font-bold text-xl'>
                    <div className='invisible xs:max-sm:visible'>screen is xs</div>
                    <div className='invisible sm:max-md:visible'>screen is sm</div>
                    <div className='invisible md:max-lg:visible'>screen is md</div>
                    <div className='invisible lg:max-xl:visible'>screen is lg</div>
                    <div className='invisible xl:max-2xl:visible'>screen is xl</div>
                    <div className='invisible 2xl:visible'>screen is 2xl</div>
                </div>
                {/* The following pads below the last entry so that following
            the link will place the anchor at the top of the screen */}
                <div className='min-h-screen flex flex-grow' />
            </div>
        </main >
    );
}



