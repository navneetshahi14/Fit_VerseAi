import Vapi from "@vapi-ai/web";

// TEMPORARY DEBUGGING: Hardcode the API key
const apiKey = "39ef379e-2bf5-4158-b6c3-f7f1b3c32815"; // <--- MAKE SURE THIS IS YOUR KEY
console.log("[vapi.ts] Initializing Vapi. Using hardcoded API Key:", apiKey);
// console.log("[vapi.ts] Initializing Vapi. NEXT_PUBLIC_VAPI_API_KEY present:", !!process.env.NEXT_PUBLIC_VAPI_API_KEY);

// export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
export const vapi = new Vapi(apiKey);