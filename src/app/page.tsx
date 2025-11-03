import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { caller, getQueryClient, trpc } from "@/trpc/server";

import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const users = await caller.getUsers();
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div>
        {JSON.stringify(users, null, 2)}
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
