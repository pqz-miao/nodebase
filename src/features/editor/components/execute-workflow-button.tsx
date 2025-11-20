import { FlaskConicalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useExecuteWorkflow } from "@/features/workflows/hooks/use-workflows";

interface Props {
    workflowId: string;
};

export const ExecuteWorkflowButton = ({ workflowId }: Props) => {
    const executeWorkflow = useExecuteWorkflow();

    const handleExecute = () => {
        executeWorkflow.mutate({ id: workflowId });
    };

    return (
        <Button
            size="lg"
            onClick={handleExecute}
            disabled={executeWorkflow.isPending}
        >
            <FlaskConicalIcon className="size-4" />
            Execute workflow
        </Button>
    );
};
