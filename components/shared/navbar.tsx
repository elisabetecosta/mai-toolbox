import { MessagesSquareIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

import { auth } from "@/auth";

import MobileSidebar from "@/components/shared/mobile-sidebar";
import DarkModeToggle from "@/components/dark-mode-toggle";
import CreateChatButton from "@/components/create-chat-button";
import UserButton from "@/components/user-button";

const Navbar = async () => {

    const session = await auth();
    if (session === null) return redirect("/login");

    return (
        <div className="flex items-center p-4">
            <MobileSidebar />

            <div className="flex w-full justify-end space-x-4">

                {session ? (
                    <>
                        <Link
                            href={"/chat"}
                            prefetch={false}
                        >
                            <MessagesSquareIcon className="text-black dark:text-white" />
                        </Link>

                        <CreateChatButton />
                    </>
                ) : (
                    <Link href={"/pricing"}>Pricing</Link>
                )}

                <DarkModeToggle />
                <UserButton session={session} />
            </div>
        </div>
    );
}

export default Navbar;