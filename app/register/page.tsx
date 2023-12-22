import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

const RegisterPage = async () => {

    const session = await getServerSession(authOptions);

  return (
    <div>RegisterPage</div>
  );
}

export default RegisterPage;