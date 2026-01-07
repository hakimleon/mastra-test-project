import { scoreTracesWorkflow } from '@mastra/core/evals/scoreTraces';
import { mastra } from 'C:/Users/kimo/Documents/Mastra ai/my-nextjs-agent/src/mastra/index.ts';
import { createNodeServer, getToolExports } from 'C:/Users/kimo/Documents/Mastra ai/my-nextjs-agent/node_modules/.pnpm/@mastra+deployer@1.0.0-beta_b9c95364e2c6afec10e6d4df6966c590/node_modules/@mastra/deployer/dist/server/index.js';
import { tools } from './tools.mjs';

// @ts-ignore
// @ts-ignore
await createNodeServer(mastra, {
  playground: true,
  isDev: true,
  tools: getToolExports(tools),
});

if (mastra.getStorage()) {
  mastra.__registerInternalWorkflow(scoreTracesWorkflow);
}
