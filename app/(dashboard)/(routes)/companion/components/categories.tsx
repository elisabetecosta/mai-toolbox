"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Category } from "@prisma/client";

import { Button } from "@/components/ui/button";

interface CategoryProps {
    data: Category[];
};


const Categories = ({
    data
}: CategoryProps) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const categoryId = searchParams.get("categoryId")?.toString();


    const handleClick = (id: string | undefined) => {

        const params = new URLSearchParams(searchParams);

        if (id) params.set('categoryId', id);
        else params.delete('categoryId');

        replace(`${pathname}?${params.toString()}`);
    }


    return (
        <div className="w-full overflow-x-auto space-x-2 flex justify-center p-4 lg:px-8">
            <Button
                onClick={() => handleClick(undefined)}
                className={!categoryId ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}
            >
                New
            </Button>

            {data.map((item) => (
                <Button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={item.id === categoryId ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}
                >
                    {item.name}
                </Button>
            ))}
        </div>
    );
}

export default Categories;