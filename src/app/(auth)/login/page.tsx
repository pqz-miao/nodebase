import Link from "next/link";
import Image from "next/image";

import { requireUnauth } from "@/lib/auth-utils";
import { LoginForm } from "@/features/auth/components/login-form";

const Page = async () => {
    await requireUnauth();

    return (
        <LoginForm />
    );
};

export default Page;
