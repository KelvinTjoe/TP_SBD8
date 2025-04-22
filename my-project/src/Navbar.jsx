import Logo from '/Logo.svg'; // Adjust the path as necessary

export default function Navbar() {
    return (
        <nav className="bg-black text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-12 w-12 mr-2 ml-10" />
                    <span className="text-xl font-bold">Network Laboratory</span>
                </div>
                <ul className="flex space-x-4 text-lg font-semibold">
                    <li><a href="#home" className="hover:text-gray-400 cursor-pointer">Home</a></li>
                    <li><a href="#sbd" className="hover:text-gray-400 cursor-pointer">SBD</a></li>
                    <li><a href="#dmj" className="hover:text-gray-400 cursor-pointer">DMJ</a></li>
                    <li><a href="#os" className="hover:text-gray-400 cursor-pointer">OS</a></li>
                    <li><a href="#netlab" className="hover:text-gray-400 cursor-pointer">NETLAB</a></li>
                </ul>
            </div>
        </nav>
    );
}