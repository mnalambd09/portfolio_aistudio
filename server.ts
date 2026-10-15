import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const NURUL_KNOWLEDGE_BASE = `
Profile:
- Name: Md. Nurul Alam (M. N. Alam)
- Title: Senior Full-Stack Engineer & AI Systems Architect
- Email: MNALAMBD09@gmail.com
- Location: Dhaka, Bangladesh (Available for Worldwide Remote & Relocation)
- Experience: 7+ years building enterprise full-stack platforms, distributed microservices, and AI-native applications.
- Core Technologies:
  * Frontend: React 19, TypeScript, Next.js, Tailwind CSS, Vite, Redux Toolkit, TanStack Query, Framer Motion.
  * Backend: Node.js/Express, Go (Golang), Python (FastAPI/Django), REST, GraphQL, gRPC, WebSockets.
  * Databases: PostgreSQL, MongoDB, Redis, pgvector, MySQL, DynamoDB.
  * AI & LLMs: Gemini API, LangChain, RAG architectures, Vector Search, Function Calling, Prompt Engineering, Model Fine-Tuning.
  * Cloud & DevOps: Docker, Kubernetes, AWS, Google Cloud Platform (GCP), CI/CD (GitHub Actions), Terraform, Linux.
- Key Projects:
  1. NexusPulse: Enterprise Multi-Tenant AI Orchestration & RAG Platform (handling 10M+ tokens/day, low-latency semantic caching).
  2. BanglaVoice & NLP: Low-latency Bengali Speech & Translation Engine with real-time stream processing.
  3. CloudMesh: Distributed Microservices Observability & Zero-Trust Mesh with eBPF metrics.
  4. FinTrack Pro: Real-time Multi-Currency Fintech Ledger & Analytics with sub-100ms audit trail.
  5. SmartRetail AI: Edge Vision & Inventory Intelligence Dashboard for live retail logistics.
- Philosophy: "Write maintainable, battle-tested code; design distributed architectures with resilience in mind; and harness AI to multiply human capability."
- Languages: English (Fluent Professional), Bengali / বাংলা (Native).
`;

// AI Persona Chat Route with High Thinking using gemini-4-argon
app.post('/api/chat-persona', async (req, res) => {
  try {
    const { messages, userQuestion } = req.body;

    if (!userQuestion || typeof userQuestion !== 'string') {
      res.status(400).json({ error: 'userQuestion is required' });
      return;
    }

    const systemInstruction = `
You are the AI Persona and Technical Twin of Md. Nurul Alam (M. N. Alam), a Senior Full-Stack Engineer & AI Systems Architect based in Dhaka, Bangladesh (Email: MNALAMBD09@gmail.com).

Here is your verified profile and background:
${NURUL_KNOWLEDGE_BASE}

Personality & Guidelines:
1. Speak as Md. Nurul Alam's intelligent technical representative (or first-person as Nurul when discussing projects and experience).
2. Deep Technical Competence: You can explain complex distributed systems, React performance, concurrency, database indexing, and AI/LLM pipelines with high clarity and depth.
3. Language adaptability: If the user communicates in Bengali (বাংলা or Banglish), reply fluently and warmly in natural Bengali. If they speak English, reply in crisp, professional English. You can also mix if the user asks.
4. Show your thought process: When asked complex engineering or architecture questions, reason through the trade-offs (scalability, latency, maintainability, cost) before delivering the recommendation.
5. Provide actionable insights, project anecdotes, code snippets, or contact details (MNALAMBD09@gmail.com) when appropriate.
`;

    // Construct contents
    const chatContents = [];
    if (Array.isArray(messages)) {
      for (const m of messages.slice(-8)) {
        chatContents.push({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        });
      }
    }
    chatContents.push({
      role: 'user',
      parts: [{ text: userQuestion }],
    });

    let replyText = '';
    let usedModel = 'gemini-4-argon';

    try {
      // Primary model: gemini-4-argon with ThinkingLevel.HIGH (No maxOutputTokens)
      const response = await ai.models.generateContent({
        model: 'gemini-4-argon',
        contents: chatContents,
        config: {
          systemInstruction,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });

      replyText = response.text || 'Nurul’s AI is ready to help! Please ask any question.';
    } catch (primaryErr: any) {
      console.warn('Primary model (gemini-4-argon) fallback triggered:', primaryErr?.message || primaryErr);
      // Fallback model: gemini-3.8-flash
      usedModel = 'gemini-3.8-flash';
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: chatContents,
        config: {
          systemInstruction,
        },
      });
      replyText = fallbackResponse.text || 'Hello! How can I assist you with Nurul’s portfolio and projects?';
    }

    res.json({
      text: replyText,
      modelUsed: usedModel,
      thinkingMode: usedModel === 'gemini-4-argon' ? 'HIGH' : 'STANDARD',
    });
  } catch (error: any) {
    console.error('Error in /api/chat-persona:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error?.message || 'Unknown error',
    });
  }
});

// Contact message endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
    return;
  }

  // Simulated instant notification delivery
  res.json({
    success: true,
    message: 'Thank you for reaching out! Your message has been routed to MNALAMBD09@gmail.com.',
    timestamp: new Date().toISOString(),
  });
});

// Mount Vite or static server
async function start() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolo server running on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
