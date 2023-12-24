import { auth } from "@/auth";

const RegisterPage = async () => {

    const session = await auth();

  return (
    <div>RegisterPage</div>
  );
}

export default RegisterPage;