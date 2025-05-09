
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  "How do I sell my license?",
  "What software licenses do you accept?",
  "How long does payment take?",
];

const predefinedAnswers: Record<string, string> = {
  "How do I sell my license?": 
    "You can sell your license in 3 simple steps: 1) Upload your license details through our secure form, 2) Receive an instant valuation, 3) Get paid through your preferred payment method within 24 hours!",
  "What software licenses do you accept?": 
    "We accept a wide range of software licenses including Microsoft Office, Adobe Creative Cloud, AutoCAD, Windows OS, VMWare, Oracle, SAP, and many more enterprise and consumer software packages. If you're unsure, just ask us!",
  "How long does payment take?": 
    "Most payments are processed within 24 hours after license verification. For popular software titles, payments can be processed as quickly as same-day. We offer multiple payment methods including bank transfer, PayPal, and crypto.",
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([
        {
          text: "Hi there! How can I help you today? You can type your question or choose from the suggestions below.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
    scrollToBottom();
  }, [isOpen, messages.length]);

  const handleSendMessage = (text: string = currentMessage) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseMessage: Message = {
        text: generateResponse(text),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (question: string): string => {
    // Check if the question matches any predefined questions (case-insensitive)
    for (const predefinedQuestion of predefinedQuestions) {
      if (
        question.toLowerCase().includes(predefinedQuestion.toLowerCase()) ||
        predefinedQuestion.toLowerCase().includes(question.toLowerCase())
      ) {
        return predefinedAnswers[predefinedQuestion];
      }
    }

    // Fallback response
    return "I'm sorry, I didn't quite understand that. For more specific inquiries, please contact our support team directly through the contact form above.";
  };

  const handlePredefinedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Chat Support",
        description: "Welcome to SoftSell chat support!",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg mb-4 w-80 sm:w-96 overflow-hidden border border-gray-200 dark:border-slate-700"
          >
            {/* Chat Header */}
            <div className="bg-blue-500 dark:bg-blue-600 p-4 text-white flex justify-between items-center">
              <h3 className="font-bold flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                SoftSell Support
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="text-white hover:bg-blue-600 dark:hover:bg-blue-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 max-h-80 overflow-y-auto bg-gray-50 dark:bg-slate-900">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.isUser
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left mb-3">
                  <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-slate-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions */}
            {messages.length < 3 && (
              <div className="p-3 bg-gray-100 dark:bg-slate-800 border-t dark:border-slate-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handlePredefinedQuestion(question)}
                      className="text-xs bg-white dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 text-blue-500 dark:text-blue-400 px-2 py-1 rounded border border-gray-300 dark:border-slate-600"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-3 border-t border-gray-200 dark:border-slate-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 dark:border-slate-600 rounded-md dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`${
          isOpen ? "bg-gray-500" : "bg-blue-500"
        } rounded-full p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
