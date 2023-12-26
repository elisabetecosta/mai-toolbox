"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";

import Heading from "@/components/heading";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required",
    }),
});


const ConversationPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


    return (
        <div>
            <Heading
                title="Conversation"
                description="A generic conversation model that you can ask anything you want"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="text-violet-500/10"
            />

            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="grid grid-cols-12 gap-2 rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                disabled={isLoading}
                                                placeholder="How do I calculate the radius of a circle?"
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button 
                                disabled={isLoading}
                                className="col-span-12 lg:col-span-2 w-full"
                            >
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="space-y-4 mt-4">
                    Messages
                </div>
            </div>
        </div>
    );
}

export default ConversationPage;