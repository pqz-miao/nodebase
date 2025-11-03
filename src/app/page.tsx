import { caller } from "@/trpc/server";
import { requireAuth } from "@/lib/auth-utils";

import { LogoutButton } from "./logout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getAccounts();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      {JSON.stringify(data, null, 2)}
      <LogoutButton />
    </div>
  );
};

export default Page;
