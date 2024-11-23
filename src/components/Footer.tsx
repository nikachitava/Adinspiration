const Footer = () => {
    return (
        <footer className="bg-grey-900 text-grey-300 px-20 py-16 space-y-8 font-SansJakarta">
            <div className="flex items-center justify-between">
                <h1 className="text-white font-semibold uppercase text-xl">
                    Adinspiration.com
                </h1>
                <ul className="flex items-center gap-12">
                    <li>Blog</li>
                    <li>ROI Calculator</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="flex h-[.5px] bg-grey-700 w-full"></div>
            <div className="flex items-center justify-between">
                <h1>
                    © 2024 Adinspiration. All Rights Reserved.-
                    hello@adinspiration.com
                </h1>
                <ul className="flex items-center gap-12">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
