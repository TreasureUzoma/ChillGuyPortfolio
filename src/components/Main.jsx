import { motion } from "framer-motion";

const Main = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="flex items-center justify-center min-h-[45rem]">
            <div className="my_fixed_width grid md:grid-cols-2 gap-10 items-center mt-[6.1rem] md:mt-3">
                <div className="flex flex-col gap-6 text-[#525454]">
                    <div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.5 }}
                            className="border border-1 border-[#545454] text-[#525252] rounded-3xl z-40 text-[0.65rem] font-inter inline-flex font-semibold items-center justify-center gap-2 mb-5 md:mb-8"
                        >
                            <span className="bg-[#525252] px-4 py-2 rounded-full text-white">
                                Open
                            </span>
                            <span className="pr-3">for projects 2024</span>
                        </motion.div>
                    </div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.3 }}
                        variants={variants}
                        className="font-semibold text-4xl md:text-7xl"
                    >
                        I’m just a chill developer
                        <sup className="text-sm">™</sup>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={variants}
                        className="text-[0.99rem] font-inter font-medium"
                    >
                        You can hire me to make amazing things or not. I’m chill
                        with that.
                        <br />
                        No hassle, no drama, no buggy code. All chill like that.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.7 }}
                        variants={variants}
                        className="flex items-center justify-start gap-4"
                    >
                        <a
                            target="_blank"
                            className="bg-[#525454] text-white px-3 py-2 text-[0.9rem] font-semibold rounded-lg border border-1 border-[#525454] hover:bg-white text-[#525454]"
                            href="https://wa.me/+2349133354993"
                        >
                            Get Started
                        </a>
                        <a
                            href="https://treasureuzoma.netlify.app"
                            target="_blank"
                            className="bg-white text-[#545454] px-3 py-2 text-[0.9rem] font-semibold border border-1 rounded-lg border-[#525454] hover:bg-[#525454] hover:text-white"
                        >
                            My Portfolio
                        </a>
                    </motion.div>
                </div>
                {/*ignore the extension 😭😂*/}
                <figure>
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.9 }}
                        variants={variants}
                        src="/images/chillguy.png.webp"
                        className="w-[250px] md:w-[500px]"
                    />
                </figure>
            </div>
        </main>
    );
};
export default Main;
