import { redirect } from "next/navigation";

import { auth } from "@/auth";

import ProviderLoginButton from "@/components/provider-login-button";


const providers = [
  {
    id: "google",
    name: "Google",
  }
];


const LoginPage = async () => {

  const session = await auth();
  if (session?.user) return redirect("/dashboard");


  return (
    <div className="h-screen flex items-center justify-center">

      <div className="flex flex-col justify-center items-center p-8 rounded shadow-md w-96">

        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

        {providers.map((provider) => (
          <div key={provider.id} className="space-y-4">
            <ProviderLoginButton provider={provider} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginPage;