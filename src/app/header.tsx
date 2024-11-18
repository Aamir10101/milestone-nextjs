import Link from "next/link";
function Header() {
    return (
        <header className="flex justify-between bg-black ">
            {/* logo */}
            <div>
                <h2 className="text-3xl font-semibold text-white">My Portfolio</h2>
            </div>
            {/* links */}
            <nav>
                <ul className="flex gap-x-4 text-white p-4"> 
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header;