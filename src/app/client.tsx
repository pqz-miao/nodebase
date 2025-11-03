"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export const Client = () => {
    const trpc = useTRPC();
    // const { data: users } = useQuery(trpc.getUsers.queryOptions());
    const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());

    return (
        <div>
            Client Component: {JSON.stringify(users, null, 2)}
        </div>
    );
};
