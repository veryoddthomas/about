{/* The following pads below the last entry so that following
    the link will place the anchor at the top of the screen */}
const PageEndDiv = ({ children, center }) => {
    return (
        <div className={`min-h-screen min-w-full flex flex-grow ${(center) ? 'justify-center items-center' : ''}`}>
            {children}
        </div>
    )
}
export default PageEndDiv;
