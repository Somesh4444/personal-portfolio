import { useState, useRef, useEffect } from 'react';

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Somesh's AI assistant. Ask me anything about his skills, projects, experience, or services."
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  const quickPrompts = [
    "What is Somesh's core stack?",
    "Tell me about his recent projects",
    "Is he available for freelance?",
    "How does he handle performance?"
  ];

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const SYSTEM_PROMPT = `
    You are the personal AI digital twin representing Somesh Behera on his developer portfolio (https://somesh4444.github.io/portfolio/).

    CORE IDENTITY & BACKGROUND:
    - Name: Somesh Behera
    - Title: Full Stack Developer & Creative Technologist
    - Experience: 3+ years building scalable, responsive web applications and end-to-end digital solutions.
    - Philosophy: "I always like to create something on my own that is genuinely helpful for others." Passionate about turning complex real-world logic into clean code and zero-latency user experiences.
    - Core Stack: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS (v4), Docker, Git/GitHub, REST APIs, and modern AI/LLM integration.
    - Architectural Style: Minimalist SaaS aesthetics, dark-mode ergonomics, modular structure, clean separation of concerns.

    CONVERSATIONAL RULES:
    1. Tone: Warm, witty, articulate, and engineering-minded. Speak in the third person ("Somesh focuses on...") or as his digital assistant.
    2. Brevity: Keep responses concise and scannable—maximum 2 to 3 sentences unless explicitly asked for a detailed technical breakdown.
    3. Hiring & Work Availability: Somesh is open to high-impact full-time roles, contracts, and select freelance builds. For inquiries regarding project timelines, rates, or job offers, politely guide the visitor to use the Contact section or form below.
    4. Precision: Never hallucinate skills outside his tech ecosystem. If asked about an unfamiliar topic, clarify that Somesh focuses primarily on modern JavaScript/TypeScript, cloud APIs, and full-stack development.
  `;

  const queryGemini = async (modelName, userQuery, apiKey) => {
    return fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey.trim()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey.trim()
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_PROMPT}\n\nVisitor question: ${userQuery}` }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 250
          }
        })
      }
    );
  };

  const handleSendMessage = async (textOverride) => {
    const userQuery = (textOverride || input).trim();
    if (!userQuery || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userQuery }]);
    setLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "API key is missing in .env.local." }
      ]);
      setLoading(false);
      return;
    }

    try {
      let res = await queryGemini('gemini-3.5-flash-lite', userQuery, apiKey);

      if (!res.ok) {
        console.warn(`Primary model failed with status ${res.status}. Falling back to gemini-3.5-flash...`);
        res = await queryGemini('gemini-3.5-flash', userQuery, apiKey);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || `HTTP ${res.status}`);
      }

      const parts = data.candidates?.[0]?.content?.parts || [];
      const textPart = parts.find((p) => p.text && !p.thought) || parts[0];
      const answer = textPart?.text;

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: answer || "I couldn't process that. Feel free to reach out via the contact form below!" }
      ]);

      // Fire-and-forget Discord alert: logs interaction without impacting UI performance
      const aiWebhook = import.meta.env.VITE_DISCORD_AI_WEBHOOK;
      if (aiWebhook && answer) {
        fetch(aiWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [
              {
                title: "🤖 AI Assistant Interaction",
                color: 0xE5F134,
                fields: [
                  { name: "👤 Visitor Asked", value: userQuery },
                  { name: "⚡ Response", value: answer.slice(0, 1024) }
                ],
                footer: { text: "somesh4444.github.io/portfolio" },
                timestamp: new Date().toISOString()
              }
            ]
          })
        }).catch(() => {});
      }
    } catch (err) {
      console.error("Chat invocation failed:", err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `Error: ${err.message}` }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-8 bg-brandDark2 border-t border-white/[0.06] overflow-hidden" id="agent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] bg-brandYellow/[0.035] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Outer Halo Border Container */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-white/[0.12] via-brandYellow/15 to-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] rounded-3xl bg-[#14141a] overflow-hidden">

            {/* Left Panel: Desktop Sidebar & Mobile Compact Header */}
            <div className="p-5 sm:p-7 lg:p-8 bg-[#101015] border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between lg:justify-start gap-2 mb-3 sm:mb-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-marcellus uppercase tracking-wider text-emerald-400 font-semibold">
                      Online
                    </span>
                  </div>

                  <span className="lg:hidden text-[11px] font-mono text-gray-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    Gemini 3.5
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1.5">
                  Ask My <span className="font-marcellus text-brandYellow font-normal">AI Twin</span>
                </h2>

                <p className="text-brandMuted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Have a question about my skills, projects, experience, or the technologies I work with? Just ask.
                </p>

                {/* Prompts on Desktop */}
                <div className="hidden lg:block space-y-2">
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block mb-2">
                    Suggested Queries
                  </span>
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      disabled={loading}
                      className="w-full text-left text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] hover:border-brandYellow/40 border border-white/[0.06] text-gray-300 hover:text-white transition-all duration-200 cursor-pointer active:scale-[0.99]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Prompts on Mobile */}
                <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      disabled={loading}
                      className="text-xs shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.04] active:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-gray-300 whitespace-nowrap cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Bottom Meta Badge */}
              <div className="hidden lg:flex mt-8 pt-4 border-t border-white/[0.06] items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Model Engine</span>
                <span className="text-gray-400">Gemini 3.5 Flash Lite</span>
              </div>
            </div>

            {/* Right Panel: Chat Stream & Input Deck */}
            <div className="flex flex-col h-[380px] sm:h-[440px] lg:h-[480px] bg-[#14141a]">

              {/* Message Feed */}
              <div
                ref={messagesContainerRef}
                className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-3.5 sm:space-y-4 text-xs sm:text-sm [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brandYellow/30 transition-colors"
              >
                {messages.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2.5 sm:gap-3 items-start ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* Premium AI Icon */}
                    {item.role === 'assistant' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brandYellow/10 border border-brandYellow/30 text-brandYellow flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(229,241,52,0.18)] mt-0.5">
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="3" r="1.5" fill="currentColor" />
                          <path d="M12 4.5V7" />
                          <path d="M5 8h14a2 2 0 0 1 2 2v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a2 2 0 0 1 2-2z" />
                          <circle cx="9" cy="13.5" r="1.5" fill="currentColor" />
                          <circle cx="15" cy="13.5" r="1.5" fill="currentColor" />
                          <path d="M10 18h4" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}

                    <div
                      className={`max-w-[86%] sm:max-w-[80%] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl leading-relaxed text-xs sm:text-sm ${
                        item.role === 'user'
                          ? 'bg-brandYellow text-[#0c0c0e] font-semibold rounded-tr-sm shadow-[0_4px_16px_rgba(229,241,52,0.12)]'
                          : 'bg-white/[0.04] border border-white/[0.07] text-gray-200 rounded-tl-sm'
                      }`}
                    >
                      {item.text}
                    </div>

                    {/* Premium User Avatar Icon */}
                    {item.role === 'user' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/10 border border-white/20 text-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brandYellow/15 border border-brandYellow/40 text-brandYellow flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(229,241,52,0.25)] animate-pulse">
                      <svg
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="3" r="1.5" fill="currentColor" className="animate-ping [transform-origin:12px_3px]" />
                        <circle cx="12" cy="3" r="1.5" fill="currentColor" />
                        <path d="M12 4.5V7" />
                        <path d="M5 8h14a2 2 0 0 1 2 2v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a2 2 0 0 1 2-2z" />
                        <circle cx="9" cy="13.5" r="1.5" fill="currentColor" className="animate-bounce [animation-duration:0.8s]" />
                        <circle cx="15" cy="13.5" r="1.5" fill="currentColor" className="animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]" />
                        <path d="M10 18h4" strokeLinecap="round" className="animate-pulse" />
                      </svg>
                    </div>

                    <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.07] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brandYellow animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brandYellow animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brandYellow animate-bounce"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Deck */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 sm:p-4 lg:p-5 border-t border-white/[0.06] bg-[#111116] flex items-center gap-2 sm:gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about Somesh, his work, or projects...."
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brandYellow/60 transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-brandYellow text-[#0c0c0e] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-brandYellow transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span className="hidden sm:inline">Send</span>
                  <i className="ri-send-plane-fill text-sm"></i>
                </button>
              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}