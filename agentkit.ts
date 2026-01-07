import { z } from "zod";
import { Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";

const TriageRequestSchema = z.object({ classification: z.enum(["compare", "answer_question", "request_upload"]) });
const ApprovalAgentSchema = z.object({ emailFrom: z.string(), defaultTo: z.string(), defaultSubject: z.string(), defaultBody: z.string() });
const triageRequest = new Agent({
  name: "Triage request",
  instructions: `Classify the user's request based on whether two documents have been provided recently in the conversation, and whether the user is asking a particular question.

If two documents are provided and there's no user question , respond with \"compare\".
If two documents are provided and there is a user question , respond with \"answer_question\".
If only one doc has been provided, or no docs have been provided, respond with \"request_upload\"`,
  model: "gpt-4.1",
  outputType: TriageRequestSchema,
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: true
  }
});

const proposeReconciliation = new Agent({
  name: "Propose reconciliation",
  instructions: "Given the differences between the two documents, assemble a single option for how to reconcile the difference. If no order has been described, consider the first document the user's version and the second document the potential set of changes returned back to the user. The proposal you create will be sent to the user for approval.",
  model: "gpt-5",
  modelSettings: {
    reasoning: {
      effort: "minimal"
    },
    store: true
  }
});

const approvalAgent = new Agent({
  name: "Approval agent",
  instructions: `Explain your approval reasoning. Help the user draft a proper response by filling out this data schema:

{
  emailFrom: 'user@test.com',
  defaultTo: 'user@test.com',
  defaultSubject: 'Document comparison proposal',
  defaultBody: \"Hey there, \n\nHope you're doing well! Just wanted to check in and see if there are any updates on the ChatKit roadmap. We're excited to see what's coming next and how we can make the most of the upcoming features.\n\nEspecially curious to see how you support widgets!\n\nBest,\",
}`,
  model: "gpt-5-mini",
  outputType: ApprovalAgentSchema,
  modelSettings: {
    reasoning: {
      effort: "low"
    },
    store: true
  }
});

const rejectionAgent = new Agent({
  name: "Rejection agent",
  instructions: "Explain your rejection reasoning.",
  model: "gpt-5",
  modelSettings: {
    reasoning: {
      effort: "low"
    },
    store: true
  }
});

const retryAgent = new Agent({
  name: "Retry agent",
  instructions: "The user has not uploaded the required two documents for comparison. Suggest that they upload a total of two documents, using the paperclip icon.",
  model: "gpt-5-nano",
  modelSettings: {
    reasoning: {
      effort: "minimal"
    },
    store: true
  }
});

const provideExplanation = new Agent({
  name: "Provide explanation",
  instructions: "Use the information in the uploaded documents to answer the user's question.",
  model: "gpt-5-nano",
  modelSettings: {
    reasoning: {
      effort: "minimal"
    },
    store: true
  }
});

const approvalRequest = (message: string) => {

  // TODO: Implement
  return true;
}

type WorkflowInput = { input_as_text: string };


// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("Agent builder workflow", async () => {
    const state = {

    };
    const conversationHistory: AgentInputItem[] = [
      { role: "user", content: [{ type: "input_text", text: workflow.input_as_text }] }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder"
      }
    });
    const triageRequestResultTemp = await runner.run(
      triageRequest,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...triageRequestResultTemp.newItems.map((item) => item.rawItem));

    if (!triageRequestResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const triageRequestResult = {
      output_text: JSON.stringify(triageRequestResultTemp.finalOutput),
      output_parsed: triageRequestResultTemp.finalOutput
    };
    if (triageRequestResult.output_parsed.classification == "compare") {
      const proposeReconciliationResultTemp = await runner.run(
        proposeReconciliation,
        [
          ...conversationHistory
        ]
      );
      conversationHistory.push(...proposeReconciliationResultTemp.newItems.map((item) => item.rawItem));

      if (!proposeReconciliationResultTemp.finalOutput) {
          throw new Error("Agent result is undefined");
      }

      const proposeReconciliationResult = {
        output_text: proposeReconciliationResultTemp.finalOutput ?? ""
      };
      const approvalMessage = `Please review the proposal ${proposeReconciliationResult.output_text}`;

      if (approvalRequest(approvalMessage)) {
          const approvalAgentResultTemp = await runner.run(
            approvalAgent,
            [
              ...conversationHistory
            ]
          );
          conversationHistory.push(...approvalAgentResultTemp.newItems.map((item) => item.rawItem));

          if (!approvalAgentResultTemp.finalOutput) {
              throw new Error("Agent result is undefined");
          }

          const approvalAgentResult = {
            output_text: JSON.stringify(approvalAgentResultTemp.finalOutput),
            output_parsed: approvalAgentResultTemp.finalOutput
          };
      } else {
          const rejectionAgentResultTemp = await runner.run(
            rejectionAgent,
            [
              ...conversationHistory
            ]
          );
          conversationHistory.push(...rejectionAgentResultTemp.newItems.map((item) => item.rawItem));

          if (!rejectionAgentResultTemp.finalOutput) {
              throw new Error("Agent result is undefined");
          }

          const rejectionAgentResult = {
            output_text: rejectionAgentResultTemp.finalOutput ?? ""
          };
      }
    } else if (triageRequestResult.output_parsed.classification == "answer_question") {
      const provideExplanationResultTemp = await runner.run(
        provideExplanation,
        [
          ...conversationHistory
        ]
      );
      conversationHistory.push(...provideExplanationResultTemp.newItems.map((item) => item.rawItem));

      if (!provideExplanationResultTemp.finalOutput) {
          throw new Error("Agent result is undefined");
      }

      const provideExplanationResult = {
        output_text: provideExplanationResultTemp.finalOutput ?? ""
      };
    } else {
      const retryAgentResultTemp = await runner.run(
        retryAgent,
        [
          ...conversationHistory
        ]
      );
      conversationHistory.push(...retryAgentResultTemp.newItems.map((item) => item.rawItem));

      if (!retryAgentResultTemp.finalOutput) {
          throw new Error("Agent result is undefined");
      }

      const retryAgentResult = {
        output_text: retryAgentResultTemp.finalOutput ?? ""
      };
    }
  });
}
