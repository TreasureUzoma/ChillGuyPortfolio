const Main = () => {
    return (
        <main className="absolute inset-0 z-40 flex items-center justify-center">
            <div className="my_fixed_width">
                <div className="flex flex-col gap-6 text-[#525454]">
                    <div>
                        <div className="border border-1 border-[#545454] text-[#525252] rounded-3xl z-40 text-[0.65rem] font-inter inline-flex font-semibold items-center justify-center gap-2 mb-6">
                            <span className="bg-[#525252] px-4 py-2 rounded-full text-white">Open</span>
                            <span className="pr-3">for projects 2024</span>
                        </div>
                    </div>
                <h1 className="font-semibold text-4xl md:text-7xl">I’m just a chill developer<sup className="text-sm">™</sup></h1>
                <p className="text-[0.99rem] font-inter font-medium">You can hire me to make amazing things or not. I’m chill with that.
                <br />
                No hassle, no drama, no buggy code. All chill like that.
                </p>
                <div className="flex items-center justify-start gap-4">
                  <a className="bg-[#525454] text-white px-3 py-2 text-[0.9rem] font-semibold rounded-lg border border-1 border-[#525454] hover:bg-white text-[#525454]" href="https://wa.me/+2349133354993">Get Started</a>
                  <a href="https://treasureuzoma.netlify.app" target="_blank" className="bg-white text-[#545454] px-3 py-2 text-[0.9rem] font-semibold border border-1 rounded-lg border-[#525454] hover:bg-[#525454] hover:text-white">My Portfolio</a>
                </div>
                </div>
            </div>
        </main>
    );
};
export default Main;
