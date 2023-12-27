import { SmileIcon } from "lucide-react";

import prismadb from "@/lib/prismadb";

import Heading from "@/components/heading";
import SearchInput from "./components/search-input";
import Categories from "./components/categories";


const CompanionPage = async () => {

    const categories = await prismadb.category.findMany();

    return (
        <div>
            <Heading
                title="Companion"
                description="Pick a companion from the list below or create your own"
                icon={SmileIcon}
                iconColor="text-blue-500"
                bgColor="text-blue-500/10"
            />

            <SearchInput />
            <Categories data={categories} />
        </div>
    );
}

export default CompanionPage;