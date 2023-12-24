import { 
    Code,
    ImageIcon,
    LayoutDashboard, 
    MessageSquare, 
    Music, 
    Settings, 
    VideoIcon
} from "lucide-react";


const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-emerald-500",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-pink-700",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-gray-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "",
    },
];

export default routes;