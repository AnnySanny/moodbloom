import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { getAssistantReply } from "../../data/chatResponses";
import { flows } from "../../data/flowRouter";
export default function ChatBox({ externalMessage }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "ua";

  const STORAGE_KEY = "moodbloom_chat";

  const messagesEndRef = useRef(null);
  const lastExternalMessageRef = useRef(null);

  const getInitialMessage = () => ({
    role: "assistant",
    text:
      lang === "en"
        ? "Hello! I'm your MoodBloom companion..."
        : "Привіт! Я ваш помічник MoodBloom...",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return [getInitialMessage()];
  });

  const [input, setInput] = useState("");

  const [activeFlow, setActiveFlow] = useState(null);
  const [flowStep, setFlowStep] = useState(null);
  const generateId = () =>
    Date.now().toString() + Math.random().toString(36).substring(2, 9);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const clearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([getInitialMessage()]);
    setActiveFlow(null);
    setFlowStep(null);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

const showFlowInterruptMessage = () => {
  const timeNow = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  setMessages(prev => [
    ...prev,
    {
      id: generateId(),
      role: "assistant",
      text:
        lang === "en"
          ? "It seems you didn’t select the next step. Would you like to continue the dialog?"
          : "Здається, ви не обрали наступний крок. Бажаєте продовжити діалог?",
      options: [
        {
          key: "resume_flow",
          label: {
            en: "Continue",
            ua: "Продовжити"
          }
        },
        {
          key: "end_flow",
          label: {
            en: "Finish",
            ua: "Завершити"
          }
        }
      ],
      time: timeNow
    }
  ]);
};


  const startFlow = useCallback(
    (flowKey) => {
      const flow = flows[flowKey];
      if (!flow) return;

      setActiveFlow(flowKey);
      setFlowStep("start");

      const stepData = flow.start?.[lang];
      if (!stepData) return;

      const timeNow = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          text: stepData.text,
          options: stepData.options || null,
          time: timeNow,
        },
      ]);
    },
    [lang],
  );
  const handleOptionClick = (option) => {
    const timeNow = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: generateId(),
        role: "user",
        text: option.label[lang],
        time: timeNow,
      },
    ]);

    handleFlowStep(option.key);
  };
const handleFlowStep = (selectedKey) => {

if (selectedKey === "resume_flow") {
  const currentStepData = flows[activeFlow]?.[flowStep]?.[lang];
  if (!currentStepData) return;

  const timeNow = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  setMessages(prev => [
    ...prev,
    {
      id: generateId(),
      role: "assistant",
      text: currentStepData.text,
      options: currentStepData.options || null,
      time: timeNow
    }
  ]);

  return;
}

  if (selectedKey === "end_flow") {
    setActiveFlow(null);
    setFlowStep(null);

    const timeNow = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages(prev => [
      ...prev,
      {
        id: generateId(),
        role: "assistant",
        text:
          lang === "en"
            ? "The dialog has been завершено. If you'd like to start again, choose a topic."
            : "Діалог завершено. Якщо бажаєте — оберіть нову тему.",
        time: timeNow
      }
    ]);

    return;
  }

  if (!activeFlow) return;

  const flow = flows[activeFlow];
  if (!flow?.[selectedKey]?.[lang]) return;

  const nextStep = flow[selectedKey][lang];

  const timeNow = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  setFlowStep(selectedKey);

  setTimeout(() => {
    setMessages(prev => [
      ...prev,
      {
        id: generateId(),
        role: "assistant",
        text: nextStep.text,
        options: nextStep.options || null,
        time: timeNow,
      }
    ]);

    if (!nextStep.options) {
      setActiveFlow(null);
      setFlowStep(null);
    }
  }, 400);
};
  const handleSend = useCallback(
  (textParam) => {
    const textToSend = textParam ?? input;
    if (!textToSend?.trim()) return;

    const isFlowActive =
      activeFlow &&
      flowStep &&
      flows[activeFlow]?.[flowStep]?.[lang]?.options;

    if (isFlowActive) {
      showFlowInterruptMessage();
      return;
    }

    const timeNow = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage = {
      id: generateId(),
      role: "user",
      text: textToSend,
      time: timeNow,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const result = getAssistantReply(textToSend, lang);

      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          text: result.text,
          options: result.options || null,
          time: timeNow,
        },
      ]);
    }, 400);
  },
  [input, lang, activeFlow, flowStep]
);
  useEffect(() => {
    if (!externalMessage?.key) return;

    startFlow(externalMessage.key);
  }, [externalMessage, startFlow]);

  return (
    <div
      className="
    w-full max-w-[1000px]
    rounded-[40px]
    border-2 border-[var(--accent)]/15
    bg-slate-50 dark:bg-slate-900
    text-slate-800 dark:text-slate-100
    px-4 sm:px-8 py-6 sm:py-10
    flex flex-col
    shadow-sm dark:shadow-black/30
    transition-colors duration-300
  "
    >
      <div
        className="
          flex flex-col gap-5
          mb-6
          max-h-[400px] sm:max-h-[500px]
          overflow-y-auto
          pr-2
        "
      >
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={
              msg.role === "user"
                ? `
                  self-end
                  max-w-[85%] sm:max-w-[60%]
                  text-right
                  bg-accent text-white
                  px-3 sm:px-4 py-2 sm:py-3
                  rounded-[18px] sm:rounded-[20px]
                `
                : "max-w-[85%] sm:max-w-[70%]"
            }
          >
            <p className="text-[14px] sm:text-[15px] leading-relaxed">
              {msg.text}
            </p>

            {msg.options && (
              <div className="mt-3 flex flex-wrap gap-2">
                {msg.options.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => handleOptionClick(option)}
                    className="px-3 py-1 text-xs sm:text-sm rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
                  >
                    {option.label[lang]}
                  </button>
                ))}
              </div>
            )}

            <span className="text-[11px] sm:text-[12px] opacity-60">
              {msg.time}
            </span>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div
        className="
          flex items-center gap-3
          border border-gray-300 dark:border-gray-700
          rounded-full px-4 sm:px-6 py-2 sm:py-3
          focus-within:border-accent
          transition
        "
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={
            lang === "en" ? "Type your message" : "Введіть повідомлення"
          }
          className="
            flex-1 bg-transparent
            outline-none
            text-[13px] sm:text-[14px]
            placeholder:opacity-50
          "
        />

        <Send
          size={18}
          onClick={() => handleSend()}
          className="
            cursor-pointer
            text-accent
            hover:scale-110
            transition
          "
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={clearChat}
          className="
            text-[12px] sm:text-[13px]
            font-medium
            text-gray-500
            hover:text-accent
            transition
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-[1px] after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {lang === "en" ? "Clear chat" : "Очистити чат"}
        </button>
      </div>
    </div>
  );
}
