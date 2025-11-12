"use client";

import { memo, useState } from "react";
import { GlobeIcon } from "lucide-react";
import { useReactFlow } from "@xyflow/react";
import type { Node, NodeProps } from "@xyflow/react";

import { BaseExecutionNode } from "../base-execution-node";
import { HttpRequestDialog, type HttpRequestFormType } from "./dialog";

type HttpRequestNodeData = {
    endpoint?: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: string;
    [key: string]: unknown;
};

type HttpRequestNodeType = Node<HttpRequestNodeData>;

export const HttpRequestNode = memo((props: NodeProps<HttpRequestNodeType>) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { setNodes } = useReactFlow();

    const status = "initial";

    const handleOpenSettings = () => setDialogOpen(true);

    const handleSubmit = (values: HttpRequestFormType) => {
        setNodes((nodes) => nodes.map((node) => {
            if (node.id === props.id) {
                return {
                    ...node,
                    data: {
                        ...node.data,
                        endpoint: values.endpoint,
                        method: values.method,
                        body: values.body,
                    },
                };
            }

            return node;
        }));
    };

    const nodeData = props.data;
    const description = nodeData?.endpoint
        ? `${nodeData.method || "GET"} ${nodeData.endpoint}`
        : "Not configured";
    
    return (
        <>
            <HttpRequestDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onSubmit={handleSubmit}
                // TODO: Check if it can be improved by just sending initialValues={nodeData}
                defaultEndpoint={nodeData.endpoint}
                defaultMethod={nodeData.method}
                defaultBody={nodeData.body}
            />
            <BaseExecutionNode
                {...props}
                id={props.id}
                icon={GlobeIcon}
                name="HTTP Request"
                description={description}
                status={status}
                onSettings={handleOpenSettings}
                onDoubleClick={handleOpenSettings}
            />
        </>
    );
});

HttpRequestNode.displayName = "HttpRequestNode";
