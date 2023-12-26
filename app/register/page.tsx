import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";


const RegisterPage = async () => {

  const session = await auth();
  if (session?.user) return redirect("/dashboard");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center p-8 rounded shadow-md w-96">

        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

        <div className="flex flex-col items-center justify-center space-y-4">
          <p>Already have an account?</p>
          <Button>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;