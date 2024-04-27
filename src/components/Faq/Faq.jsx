
const Faq = () => {
    return (
        <div className="mt-20 px-7 mb-24">
            <p className="bg-gradient-to-b from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold text-2xl">FAQ</p>
            <div className="p-3">
                <div tabIndex={0} className=" collapse collapse-arrow border border-blue-500 ">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Can education flashcards be used for all age groups?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.</p>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div tabIndex={0} className=" collapse collapse-arrow border border-blue-500">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How do education flashcards work?                    </div>
                    <div className="collapse-content">
                        <p>
                            Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.                        </p>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div tabIndex={0} className=" collapse collapse-arrow border border-blue-500 ">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Can education flashcards be used for test preparation?                    </div>
                    <div className="collapse-content">
                        <p>
                            Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;