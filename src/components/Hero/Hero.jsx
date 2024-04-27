import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { GoUnmute } from "react-icons/go";
import { RxReload } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import { FaPlus } from "react-icons/fa";



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
            <div className="w-[40vw] max-sm:mx-0 mx-auto ">
                <label className="swap swap-flip sm:m-5">
                    <input type="checkbox" />
                    <div className="swap-on bg-card-front-gradient p-5 max-sm:w-64  w-[35vw]  rounded-3xl  flex flex-col  ">
                        <div className="flex justify-between">
                            <p className="text-white text-2xl"><MdOutlineLightbulb /></p>
                            <p className="text-white text-2xl"><GoUnmute /></p>
                        </div>
                        <p className="py-28 text-white text-4xl text-center  flex items-center justify-center h-full">
                            9 + 6 + 7x - 2x - 3
                        </p>
                    </div>
                    <div className="swap-off bg-card-back-gradient p-5 max-sm:w-64  w-[35vw]  rounded-3xl  flex flex-col  ">
                        <div className="flex justify-between">
                            <p className="text-white text-2xl"><MdOutlineLightbulb /></p>
                            <p className="text-white text-2xl"><GoUnmute /></p>
                        </div>
                        <p className="py-28     text-white text-4xl text-center  flex items-center justify-center h-full">
                            5x + 12
                        </p>
                    </div>
                </label>
                <div className="flex items-center sm:gap-3 py-4 justify-around">
                    <p className="text-primary font-bold text-3xl"><RxReload /></p>
                    <p className="text-3xl bg-gradient-to-b from-primaryColor to-secondaryColor p-4 rounded-full text-white">
                        <IoIosArrowForward />
                    </p>
                    <p className="text-2xl font-bold">
                        01/10
                    </p>
                    <p className="text-3xl bg-gradient-to-b from-primaryColor to-secondaryColor p-4 rounded-full text-white">
                        <IoIosArrowBack />
                    </p>
                    <p className="text-primary font-bold text-3xl"><MdFullscreen /></p>
                </div>
            </div >
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div className="max-sm:w-3 max-sm:h-3">
                        <p className=" inline-block shadow-xl shadow-cyan-900 text-3xl sm:p-5 rounded-full ">
                            <IoIosArrowForward />
                        </p>
                    </div>
                    <div>
                        <p>Published by</p>
                        <p className="bg-gradient-to-b from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold max-sm:text-sm text-2xl">Hygge<span className="font-bold">X</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="max-sm:w-5 max-sm:h-5">
                        <p className="inline-block max-sm:text-xl text-3xl bg-gradient-to-b from-primaryColor to-secondaryColor sm:p-4 rounded-full text-white">
                            <FaPlus />
                        </p>
                    </div>
                    <p className="max-sm:text-sm bg-gradient-to-b from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold text-2xl">Create Flashcard</p>
                </div>
            </div>
        </div >
    )
}

export default Hero;