"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import UserAvatar from "./user-avatar";


const UserButton = ({ session }: { session: Session | null }) => {

    if (!session) return (
        <Button
            variant="outline"
            onClick={() => signIn()}
        >
            Sign In
        </Button>
    );

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
                    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );
}

export default UserButton;