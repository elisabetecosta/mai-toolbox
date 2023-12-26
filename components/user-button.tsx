"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserAvatar from "./user-avatar";


const UserButton = ({ session }: { session: Session | null }) => {

    return (
        session && (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserAvatar
                        name={session.user?.name}
                        image={session.user?.image}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut({
                        callbackUrl: "/"
                    })}>
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );
}

export default UserButton;