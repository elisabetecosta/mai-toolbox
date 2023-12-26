"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";


const ProviderLoginButton = ({provider}: {provider: any}) => {

    return (
        <Button
              variant="outline"
              onClick={() => signIn(provider.id, {
                callbackUrl: "/dashboard"
              })}
            >
              Sign in with {provider.name}
            </Button>
    );
}

export default ProviderLoginButton;