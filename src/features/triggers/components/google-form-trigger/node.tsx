import { memo, useState } from "react";
import { NodeProps } from "@xyflow/react";

import { useNodeStatus } from "@/features/executions/hooks/use-node-status";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";

import { GoogleFormTriggerDialog } from "./dialog";
import { BaseTriggerNode } from "../base-trigger-node";
import { fetchGoogleFormTriggerRealtimeToken } from "./actions";

export const GoogleFormTriggerNode = memo((props: NodeProps) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const nodeStatus = useNodeStatus({
        nodeId: props.id,
        channel: googleFormTriggerChannel().name,
        topic: "status",
        refreshToken: fetchGoogleFormTriggerRealtimeToken,
    });

    const handleOpenSettings = () => setDialogOpen(true);

    return (
        <>
            <GoogleFormTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
            <BaseTriggerNode
                {...props}
                icon="/logos/googleform.svg"
                name="Google Form"
                description="When form is submitted"
                status={nodeStatus}
                onSettings={handleOpenSettings}
                onDoubleClick={handleOpenSettings}
            />
        </>
    );
});
