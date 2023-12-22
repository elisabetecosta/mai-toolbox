import DarkModeToggle from "./dark-mode-toggle";
import UserButton from "./user-button";

const Header = () => {

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
                {/* LOGO */}
                <h1 className="text-purple-500 text-xl">mAI Toolbox</h1>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <DarkModeToggle />
                    <UserButton />
                </div>
            </nav>
        </header>
    );
}

export default Header;