import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";


const UserAvatar = ({
    name,
    image,
    className
}: {
    name?: string | null;
    image?: string | null;
    className?: string;
}) => {

    return (
        <Avatar className={cn('', className)}>
            {image && (
                <Image
                    src={image || "https://github.com/shadcn.png"}
                    alt={name || "Username"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            )}

            <AvatarFallback 
                delayMs={1000}
                className="text-lg dark:bg-white dark:text-black"
            >
                {/* Elisabete Costa => EC */}
                {name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                }
            </AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;