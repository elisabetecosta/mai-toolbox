"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";


const SearchInput = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const categoryId = searchParams.get("categoryId")?.toString();
    const name = searchParams.get("name")?.toString();


    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);

        if (term) params.set('name', term);
        else params.delete('name');

        replace(`${pathname}?${params.toString()}`);
    }, 500);


    return (
        <div className="px-4 lg:px-8">
            <Search className="relative h-4 w-4 top-7 left-4 text-muted-foreground" />
            <Input
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={name}
                placeholder="Search..."
                className="pl-10 bg-primary/10 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
            />
        </div>
    );
}

export default SearchInput;