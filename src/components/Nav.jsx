const Nav = () => {
    return (
        <nav className="flex items-center justify-center py-3 z-50 fixed left-0 right-0 top-0 bg-[#fefefe]">
            <div className="my_fixed_width">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[0.99rem] text-[#525454]">
                        Treasure 👨‍🍳
                    </h4>
                    <a
                        target="_blank"
                        className="bg-[#525454] text-white px-3 py-2 text-[0.9rem] font-semibold rounded-lg border border-1 border-[#525454] hover:bg-white text-[#525454]"
                        href="https://wa.me/+2349133354993"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
