const SubscribeInput = () => {
    return (
        <div className="flex items-center gap-[18px] rounded-[50px] bg-white border border-buttonStroke px-4 py-1">
            <div className="flex items-center gap-2">
                <img src="/icons/gmail.svg" />
                <input
                    type="text"
                    placeholder="Get more Ad inspiration in your inbox every week"
                    className="border-0 outline-none w-[278px]"
                />
            </div>
            <div className="bg-[#FFD400] text-[#201B00] text-sm font-medium rounded-[50px] px-4 py-[9.5px] cursor-pointer">
                Yes Please :D
            </div>
        </div>
    );
};

export default SubscribeInput;
