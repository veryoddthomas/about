export default function Developer() {
    return (
        <main className="bg-primary-dark">
            <div className='page-setup'>

                <h1 className='title-size'>Title</h1>
                <br />
                <h1>Heading 1 (h1)</h1>

                <p> Regular paragraph text. </p>

                <div className='text-tertiary-light font-black font-mono text-left my-6'>
                    <div className='hidden xs:max-sm:flex'>screen size is xs</div>
                    <div className='hidden sm:max-md:flex'>screen size is sm</div>
                    <div className='hidden md:max-lg:flex'>screen size is md</div>
                    <div className='hidden lg:max-xl:flex'>screen size is lg</div>
                    <div className='hidden xl:max-2xl:flex'>screen size is xl</div>
                    <div className='hidden 2xl:flex'>screen size is 2xl</div>
                </div>

                <h2>Heading 2 (h2)</h2>
                <p> Regular paragraph text. </p>
                <h3>Heading 3 (h3)</h3>
                <p> Regular paragraph text. </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Sed euismod nisi porta lorem mollis aliquam.
                </p><p>
                    Quam pellentesque nec nam aliquam sem et. Sit amet est
                    placerat in. Viverra tellus in hac habitasse platea
                    dictumst vestibulum rhoncus est. Sollicitudin nibh sit
                    amet commodo nulla facilisi nullam. Faucibus pulvinar.
                </p>

                {/* The following pads below the last entry so that following
                    the link will place the anchor at the top of the screen */}
                <div className='min-h-screen flex flex-grow' />
            </div>
        </main >
    );
}



