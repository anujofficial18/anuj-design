import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User } from 'lucide-react';

export default function Chatbot() {
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState([]);
const [isTyping, setIsTyping] = useState(false);
const messagesEndRef = useRef(null);

// Setup initial message when bot opens
useEffect(() => {
if (isOpen && messages.length === 0) {
triggerBotResponse('welcome');
}
}, [isOpen]);

// Autoscroll to bottom of chat
useEffect(() => {
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages, isTyping]);

const dialogTree = {
welcome: {
text: "Hey! 👋 I'm Anuj's assistant. What can I help you find today?",
options: [
{ label: "💼 Hiring & Experience", next: "hiring" },
{ label: "🚀 Top Projects", next: "projects" },
{ label: "📬 Contact Details", next: "contact" }
]
},
hiring: {
text: "Anuj has 4+ years of experience designing fintech, AI, and SaaS products. He is currently a Product Designer at Pixela UX Studio and is open to full-time roles or contract projects!",
options: [
{ label: "What are his key skills?", next: "skills" },
{ label: "View portfolio projects", next: "projects" },
{ label: "Get in touch", next: "contact" }
]
},
skills: {
text: "His core expertise lies in UX/UI Design, Design Systems, Mobile App Design, and Usability Testing. He specialises in translating complex financial/AI workflows into simple, user-friendly layouts.",
options: [
{ label: "Show top projects", next: "projects" },
{ label: "Get in touch", next: "contact" },
{ label: "Back to main menu", next: "welcome" }
]
},
projects: {
text: "His featured work includes ZET (Fintech Application Journeys & Credit Builders) and Moneyview (UX Research & Privacy Controls). You can scroll to the 'Work' section or click any project card to see detailed case studies!",
options: [
{ label: "How to contact him?", next: "contact" },
{ label: "Back to main menu", next: "welcome" }
]
},
contact: {
text: "You can email him directly at anuj@example.com, connect on LinkedIn, or schedule a quick meeting! Let me know if you would like to copy his email or if you're ready to start a project.",
options: [
{ label: "Copy Email Address", next: "copy_email" },
{ label: "Back to main menu", next: "welcome" }
]
},
copy_email: {
text: "Email copied: anuj@example.com! 📬 Feel free to shoot over a brief description of what you're building, and he will get back to you within 24 hours.",
options: [
{ label: "Awesome, thanks!", next: "welcome" },
{ label: "No further questions", next: "close" }
]
},
close: {
text: "Glad I could help! Have a wonderful day. Fell free to reopen the chat window if you need anything else.",
options: [
{ label: "Restart Conversation", next: "welcome" }
]
}
};

const triggerBotResponse = (key) => {
setIsTyping(true);

// Simulate natural typing delay
setTimeout(() => {
setIsTyping(false);
const node = dialogTree[key];
if (node) {
setMessages(prev => [
...prev,
{ sender: 'bot', text: node.text, options: node.options }
]);

if (key === 'copy_email') {
navigator.clipboard.writeText('anuj@example.com');
}
}
}, 900);
};

const handleOptionClick = (option) => {
// Add user's selection to chat log
setMessages(prev => [
...prev,
{ sender: 'user', text: option.label }
]);

// Trigger bot's next node
triggerBotResponse(option.next);
};

return (
<>
{/* Floating Chat Trigger Bubble Button */}
<motion.button
style={styles.chatTrigger}
onClick={() => setIsOpen(!isOpen)}
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
>
<AnimatePresence mode="wait">
{isOpen ? (
<motion.div
key="close"
initial={{ rotate: -90, opacity: 0 }}
animate={{ rotate: 0, opacity: 1 }}
exit={{ rotate: 90, opacity: 0 }}
transition={{ duration: 0.2 }}
>
<X size={24} />
</motion.div>
) : (
<motion.div
key="chat"
initial={{ rotate: 90, opacity: 0 }}
animate={{ rotate: 0, opacity: 1 }}
exit={{ rotate: -90, opacity: 0 }}
transition={{ duration: 0.2 }}
>
<MessageSquare size={24} />
</motion.div>
)}
</AnimatePresence>
</motion.button>

{/* Collapsible Chat Window */}
<AnimatePresence>
{isOpen && (
<motion.div
style={styles.chatWindow}
initial={{ opacity: 0, y: 40, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 40, scale: 0.95 }}
transition={{ type: 'spring', stiffness: 350, damping: 28 }}
>
{/* Header */}
<div style={styles.chatHeader}>
<div style={styles.avatar}>A</div>
<div>
<h4 style={styles.headerTitle}>Anuj's Assistant</h4>
<p style={styles.headerSubtitle}>• Online & Ready</p>
</div>
</div>

{/* Message History */}
<div style={styles.messageHistory}>
{messages.map((msg, index) => (
<div key={index} style={styles.messageWrapper}>
<div 
style={{
...styles.bubble,
alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
background: msg.sender === 'user' ? '#dedffc' : '#fff',
color: 'var(--text-primary)',
borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
border: msg.sender === 'user' ? 'none' : '1px solid var(--border-light)'
}}
>
{msg.text}
</div>

{/* Option Chips for user response selection */}
{msg.sender === 'bot' && msg.options && index === messages.length - 1 && !isTyping && (
<div style={styles.optionsWrapper}>
{msg.options.map((opt, i) => (
<button
key={i}
onClick={() => handleOptionClick(opt)}
style={styles.optionChip}
>
{opt.label}
</button>
))}
</div>
)}
</div>
))}

{/* Simulated Bouncing Dots Typing State */}
{isTyping && (
<div style={styles.typingContainer}>
<div style={styles.bubbleMuted}>
<div style={styles.typingDots}>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>
</div>
</div>
)}
<div ref={messagesEndRef} />
</div>
</motion.div>
)}
</AnimatePresence>

{/* Global CSS injection for Bouncing Dots Animation */}
<style>{`
.dot {
width: 6px;
height: 6px;
background: #747474;
border-radius: 50%;
display: inline-block;
animation: bounce 1.4s infinite ease-in-out both;
}
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounce {
0%, 80%, 100% { transform: scale(0); }
40% { transform: scale(1.0); }
}
`}</style>
</>
);
}

const styles = {
chatTrigger: {
position: 'fixed',
bottom: '24px',
right: '24px',
width: '56px',
height: '56px',
borderRadius: '50%',
backgroundColor: 'var(--text-primary)',
color: '#fff',
border: 'none',
outline: 'none',
cursor: 'pointer',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
zIndex: 9999,
},
chatWindow: {
position: 'fixed',
bottom: '96px',
right: '24px',
width: '360px',
height: '480px',
borderRadius: '20px',
backgroundColor: 'var(--bg-primary)',
border: '1px solid var(--border-light)',
boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
display: 'flex',
flexDirection: 'column',
overflow: 'hidden',
zIndex: 9998,
},
chatHeader: {
padding: '16px',
backgroundColor: '#fff',
borderBottom: '1px solid var(--border-light)',
display: 'flex',
alignItems: 'center',
gap: '12px',
},
avatar: {
width: '36px',
height: '36px',
borderRadius: '50%',
backgroundColor: '#dedffc',
color: '#4f46e5',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontWeight: '700',
fontSize: '0.95rem',
},
headerTitle: {
fontSize: '0.95rem',
fontWeight: '700',
},
headerSubtitle: {
fontSize: '0.75rem',
color: 'var(--accent-green)',
fontWeight: '500',
},
messageHistory: {
flex: 1,
padding: '16px',
overflowY: 'auto',
display: 'flex',
flexDirection: 'column',
gap: '16px',
backgroundColor: 'var(--bg-primary)',
},
messageWrapper: {
display: 'flex',
flexDirection: 'column',
width: '100%',
},
bubble: {
maxWidth: '85%',
padding: '10px 14px',
fontSize: '0.85rem',
lineHeight: '1.4',
boxShadow: '0 2px 6px rgba(0, 0, 0, 0.01)',
},
bubbleMuted: {
maxWidth: '85%',
padding: '12px 16px',
fontSize: '0.85rem',
lineHeight: '1.4',
background: '#fff',
border: '1px solid var(--border-light)',
borderRadius: '16px 16px 16px 4px',
alignSelf: 'flex-start',
},
typingContainer: {
display: 'flex',
alignSelf: 'flex-start',
},
typingDots: {
display: 'flex',
gap: '4px',
alignItems: 'center',
height: '8px',
},
optionsWrapper: {
display: 'flex',
flexWrap: 'wrap',
gap: '8px',
marginTop: '10px',
alignSelf: 'flex-start',
maxWidth: '90%',
},
optionChip: {
background: '#fff',
border: '1px solid var(--border-light)',
color: 'var(--text-secondary)',
padding: '6px 12px',
borderRadius: '100px',
fontSize: '0.8rem',
fontWeight: '500',
cursor: 'pointer',
boxShadow: '0 2px 6px rgba(0, 0, 0, 0.01)',
transition: 'var(--transition-smooth)',
'&:hover': {
borderColor: 'var(--accent-purple)',
color: 'var(--text-primary)',
}
}
};