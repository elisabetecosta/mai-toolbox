"use client";

import { useRouter } from "next/navigation";
import { MessageSquarePlusIcon } from "lucide-react";

import { Button } from "./ui/button";


const CreateChatButton = () => {

    const router = useRouter();

    const createNewChat = async () => {

        // ...
        
        router.push("/dashboard/chat/123");
    };

    return (
        <Button variant="ghost" onClick={createNewChat}>
            <MessageSquarePlusIcon />
        </Button>
    );
}

export default CreateChatButton;