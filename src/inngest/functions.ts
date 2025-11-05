import { generateText } from "ai";

import { google } from "@/lib/gemini";

import { inngest } from "./client";

export const execute = inngest.createFunction(
    { id: "execute-ai" },
    { event: "execute/ai" },
    async ({ event, step }) => {
        await step.sleep("pretend", "5s");

        const { steps } = await step.ai.wrap(
            "gemini-generate-text",
            generateText,
            {
                model: google("gemini-2.0-flash"),
                system: "You are a helpful assistant.",
                prompt: "What is 2 + 2 ?",
            },
        );

        return steps;
    },
);
