import { auth } from "@/auth";

import LandingNavbar from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";
import LandingContent from "@/components/landing-content";


const LandingPage = async () => {

    const session = await auth();

    return (
        <div className="h-full ">
            <LandingNavbar session={session} />
            <LandingHero session={session} />
            <LandingContent />
        </div>
    );
}

export default LandingPage;