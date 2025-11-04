import Link from "next/link";
import Image from "next/image";

interface Props {
    children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
    return (
        <div className="bg-muted flex flex-col min-h-svh justify-center items-center gap-6 p-6 md:p-10">
            <div className="flex flex-col w-full max-w-sm gap-6">
                <Link href="/" className="flex items-center gap-2 self-center font-medium">
                    <Image src="/logos/logo.svg" alt="Nodebase" width={30} height={30} />
                    Nodebase
                </Link>
                {children}
            </div>
        </div>
    );
};
