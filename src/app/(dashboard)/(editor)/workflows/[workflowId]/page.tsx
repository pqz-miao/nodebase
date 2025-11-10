import { Suspense } from "react";
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import { requireAuth } from "@/lib/auth-utils";
import { Editor } from "@/features/editor/components/editor";
import { prefetchWorkflow } from "@/features/workflows/server/prefetch";
import { ErrorView, LoadingView } from "@/components/entity-components";
import { EditorHeader } from "@/features/editor/components/editor-header";

interface Props {
    params: Promise<{
        workflowId: string;
    }>;
};

const Page = async ({ params }: Props) => {
    await requireAuth();

    const { workflowId } = await params;
    prefetchWorkflow(workflowId);

    return (
        <HydrateClient>
            <ErrorBoundary fallback={<ErrorView message="Error loading editor" />}>
                <Suspense fallback={<LoadingView message="Loading editor..." />}>
                    <EditorHeader workflowId={workflowId} />
                    <main className="flex-1">
                        <Editor workflowId={workflowId} />
                    </main>
                </Suspense>
            </ErrorBoundary>
        </HydrateClient>
    );
};

export default Page;
