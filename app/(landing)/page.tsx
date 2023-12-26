import { redirect } from "next/navigation";

import { auth } from "@/auth";

import LandingNavbar from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";
import LandingContent from "@/components/landing-content";


const LandingPage = async () => {

    const session = await auth();
    if (session?.user) return redirect("/dashboard");

    return (
        <div className="h-full ">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
}

export default LandingPage;