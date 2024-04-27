import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { GoUnmute } from "react-icons/go";


const Hero = () => {
    return (
        <div className="px-7">
            <div className="flex items-center gap-1">
                <GoHome />
                <p className="text-primaryColor "><IoIosArrowForward /></p>
                <p>Flashcard</p>
                <p className="text-primaryColor"><IoIosArrowForward /></p>
                <p>Mathematics</p>
                <p className="text-primaryColor"><IoIosArrowForward /></p>
                <p className="text-primaryColor font-medium">Relation and Function</p>
            </div>
            <p className="bg-gradient-to-b from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold text-2xl py-10">Relations and Functions ( Mathematics )</p>
            <div className="flex w-72 mx-auto">
                <p className=" text-primaryColor border-b-primaryColor border-b-2 font-bold p-2">Study</p>
                <p className="p-2 text-[#696671]">Quiz</p>
                <p className="p-2 text-[#696671]">Test</p>
                <p className="p-2 text-[#696671]">Game</p>
                <p className="p-2 text-[#696671]">Others</p>
            </div>
            {/* <div className="bg-card-front-gradient max-sm:w-64 w-1/2 h-80 mx-auto m-5 rounded-3xl p-5">
                <div className="flex justify-between">
                    <p className="text-white text-2xl"><MdOutlineLightbulb /></p>
                    <p className="text-white text-2xl"><GoUnmute /></p>
                </div>
            </div> */}
            <div className="w-[40vw] h-80 mx-auto ">
                <label className="swap swap-flip m-5">
                    <input type="checkbox" />
                    <div className="swap-on bg-card-front-gradient p-5 max-sm:w-64  w-[35vw] h-80 rounded-3xl  flex flex-col  ">
                        <div className="flex justify-between">
                            <p className="text-white text-2xl"><MdOutlineLightbulb /></p>
                            <p className="text-white text-2xl"><GoUnmute /></p>
                        </div>
                        <p className="text-white text-4xl text-center  flex items-center justify-center h-full">
                            9 + 6 + 7x - 2x - 3
                        </p>
                    </div>
                    <div className="swap-off bg-card-back-gradient p-5 max-sm:w-64  w-[35vw] h-80 rounded-3xl  flex flex-col  ">
                        <div className="flex justify-between">
                            <p className="text-white text-2xl"><MdOutlineLightbulb /></p>
                            <p className="text-white text-2xl"><GoUnmute /></p>
                        </div>
                        <p className="text-white text-4xl text-center  flex items-center justify-center h-full">
                            5x + 12
                        </p>
                    </div>
                </label>
            </div >
        </div >
    )
}

export default Hero;