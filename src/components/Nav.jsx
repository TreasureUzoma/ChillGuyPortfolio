import GetStarted from "./ui/GetStarted";

const Nav = () => {
    return (
        <nav className="flex items-center justify-center py-3 z-50 fixed left-0 right-0 top-0 bg-[#fefefe]">
            <div className="my_fixed_width">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[0.99rem] text-[#525454]">
                        Treasure 👨‍🍳
                    </h4>{" "}
                    <GetStarted />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
