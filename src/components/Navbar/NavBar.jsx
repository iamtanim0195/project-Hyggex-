
const NavBar = () => {
    return (
        <div className="flex max-sm:flex-col  sm:justify-between py-5 px-8">
            {/* logo */}
            <div className="w-36 max-sm:mx-auto my-auto">
                <img src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png" alt="company logo" />
            </div>
            {/* nav links */}
            <div className="flex gap-5 flex-wrap justify-center">
                <p className="p-3">Home</p>
                <p className="p-3">Flashcard</p>
                <p className="p-3">Contact</p>
                <p className="p-3">FAQ</p>
                <p className="bg-gradient-to-b from-primaryColor to-secondaryColor text-white p-3 px-7 rounded-full ">Login</p>
            </div>
        </div>
    )
}

export default NavBar;