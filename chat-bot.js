// Q&A Database - 20 Common Questions
const qaDatabase = {
    1: {
        question: "What is this website about?",
        answer: "AI Models is your ultimate AI model discovery platform. We provide comprehensive information about the top trending AI models, including real-time analytics, performance metrics, and expert reviews to help you choose the perfect model for your project."
    },
    2: {
        question: "How do I choose the right AI model?",
        answer: "Consider these factors: 1) Your use case (text, images, multimodal), 2) Hardware requirements, 3) Model size and performance, 4) License type (open-source vs proprietary), 5) Community support. Compare our trend charts and pros/cons for each model."
    },
    3: {
        question: "What are the trending models?",
        answer: "Current top models include Qwen3-VL for multimodal tasks, GPT-4 for language, Claude for reasoning, Llama 3.1 for open-source applications, and Stable Diffusion XL for image generation. Check our models section for detailed trend data."
    },
    4: {
        question: "How often is data updated?",
        answer: "Our platform updates model statistics and trend data in real-time. Download counts, growth percentages, and rankings are refreshed continuously to provide you with the most current information."
    },
    5: {
        question: "What is GPT-4 used for?",
        answer: "GPT-4 excels at natural language processing tasks including text generation, code writing, creative writing, translation, summarization, question answering, and complex reasoning. It's one of the most versatile large language models available."
    },
    6: {
        question: "How do I compare different models?",
        answer: "Use our trend charts to compare download patterns over time. Review the pros/cons matrix for each model, check their parameter counts, examine use cases, and look at growth percentages. Filter by 1W, 1M, or 3M timeframes for detailed insights."
    },
    7: {
        question: "What's the difference between open-source and proprietary models?",
        answer: "Open-source models (like Llama, Mistral) can be downloaded, modified, and run locally with full control. Proprietary models (like GPT-4, Claude) are accessed via APIs, offer more convenience but less control, and may have usage costs."
    },
    8: {
        question: "Can I download these models?",
        answer: "Open-source models can be downloaded from platforms like Hugging Face. Each model card shows download statistics. Proprietary models are accessed through APIs. Check the specific model's license and hosting platform for details."
    },
    9: {
        question: "What hardware do I need to run these models?",
        answer: "Requirements vary by model size. Small models (7B parameters) need 16-32GB RAM and a mid-range GPU. Large models (70B+) require 80GB+ VRAM or multiple GPUs. Cloud services like AWS, Azure, or Google Cloud offer scalable options."
    },
    10: {
        question: "How do the trend charts work?",
        answer: "Trend charts display download activity over three timeframes: 1W (1 week), 1M (1 month), and 3M (3 months). Each bar shows download counts and growth percentages. Hover over bars to see detailed metrics. Use filters to analyze different time periods."
    },
    11: {
        question: "What does the growth percentage mean?",
        answer: "Growth percentage indicates how much a model's downloads have increased compared to the previous period. For example, +45.2% means downloads increased by 45.2% from the last measurement. This helps identify rapidly growing and popular models."
    },
    12: {
        question: "Are these models free to use?",
        answer: "It depends on the model. Open-source models are typically free but may have specific license terms. Proprietary models often have free tiers with usage limits and paid plans for higher volumes. Always check the specific license before use."
    },
    13: {
        question: "What is a multimodal AI model?",
        answer: "Multimodal models can process and understand multiple types of data simultaneously (text, images, audio, video). Examples include Qwen3-VL and GPT-4V, which can analyze images and answer questions about them or generate descriptions."
    },
    14: {
        question: "How can I contact support?",
        answer: "Visit our Contact Us section to send us a message via the contact form. You can also reach us at support@aimodels.com or follow us on Twitter, GitHub, and LinkedIn for updates and community support."
    },
    15: {
        question: "What programming languages are supported?",
        answer: "Most AI models have libraries for Python (primary), JavaScript/TypeScript, Java, C++, and Rust. Python is the most common with libraries like transformers, torch, and tensorflow. Check each model's documentation for specific SDK availability."
    },
    16: {
        question: "Can I use these models commercially?",
        answer: "It depends on the license. Open-source models often allow commercial use with attribution. Some have restrictions on certain use cases. Proprietary models typically require paid licenses for commercial applications. Always review the specific license terms."
    },
    17: {
        question: "What is model fine-tuning?",
        answer: "Fine-tuning is adapting a pre-trained model to your specific use case by training it on your custom dataset. This improves performance for specialized tasks while requiring less data and compute than training from scratch."
    },
    18: {
        question: "How accurate are these models?",
        answer: "Accuracy varies by model and task. Large models (GPT-4, Claude) achieve high accuracy on general tasks. Specialized models excel in specific domains. Check benchmarks, read user reviews, and test with your use case. Our platform shows performance trends to help you evaluate."
    },
    19: {
        question: "What's the difference between parameters and performance?",
        answer: "Parameters are the model's size (learnable weights). More parameters generally mean higher capacity but require more compute. Performance refers to actual task accuracy and speed. Smaller, optimized models can sometimes outperform larger ones on specific tasks."
    },
    20: {
        question: "How do I get started with AI models?",
        answer: "1) Browse our models section to find one matching your needs, 2) Review the documentation and examples, 3) Sign up for API access (proprietary) or download (open-source), 4) Start with simple examples, 5) Join the community for support. Check our setup section for detailed guides."
    }
};

// Initialize chat bot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatWindow = document.getElementById('chatWindow');
    const chatCloseBtn = document.getElementById('chatCloseBtn');
    const chatBody = document.getElementById('chatBody');
    const chatMenuBtn = document.getElementById('chatMenuBtn');
    const chatQuestionsMenu = document.getElementById('chatQuestionsMenu');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const chatNotification = document.getElementById('chatNotification');
    const chatMenuBody = document.getElementById('chatMenuBody');

    // Populate questions menu
    if (chatMenuBody) {
        let questionsHTML = '';
        for (let i = 1; i <= 20; i++) {
            questionsHTML += `
                <div class="question-item" data-question="${i}">
                    <span class="question-number">${i}</span>
                    <span class="question-text">${qaDatabase[i].question}</span>
                </div>
            `;
        }
        chatMenuBody.innerHTML = questionsHTML;
    }

    // Toggle chat window
    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', () => {
            if (chatWindow) chatWindow.classList.toggle('active');
            if (chatQuestionsMenu) chatQuestionsMenu.classList.remove('active');
            if (chatWindow && chatWindow.classList.contains('active') && chatNotification) {
                chatNotification.style.display = 'none';
            }
        });
    }

    // Close chat
    if (chatCloseBtn) {
        chatCloseBtn.addEventListener('click', () => {
            if (chatWindow) chatWindow.classList.remove('active');
        });
    }

    // Show questions menu
    if (chatMenuBtn) {
        chatMenuBtn.addEventListener('click', () => {
            if (chatQuestionsMenu) chatQuestionsMenu.classList.add('active');
            if (chatWindow) chatWindow.classList.remove('active');
        });
    }

    // Close questions menu
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            if (chatQuestionsMenu) chatQuestionsMenu.classList.remove('active');
        });
    }

    // Handle question click
    function handleQuestionClick(questionId) {
        const qa = qaDatabase[questionId];
        if (!qa || !chatBody) return;

        // Clear chat body
        chatBody.innerHTML = '';

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user-message';
        userMsg.innerHTML = `<div class="message-content"><p>${qa.question}</p></div>`;
        chatBody.appendChild(userMsg);

        // Add bot response after delay
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message bot-message';
            botMsg.innerHTML = `<div class="message-content"><p>${qa.answer}</p></div>`;
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;

            // Add quick actions
            setTimeout(() => {
                const quickActions = document.createElement('div');
                quickActions.className = 'quick-questions';
                quickActions.innerHTML = `
                    <p class="quick-questions-title">Ask another question:</p>
                    <button class="quick-question-btn back-to-menu">📋 View All Questions</button>
                `;
                chatBody.appendChild(quickActions);
                chatBody.scrollTop = chatBody.scrollHeight;

                // Handle back to menu
                const backToMenuBtn = document.querySelector('.back-to-menu');
                if (backToMenuBtn) {
                    backToMenuBtn.addEventListener('click', () => {
                        if (chatWindow) chatWindow.classList.remove('active');
                        if (chatQuestionsMenu) chatQuestionsMenu.classList.add('active');
                    });
                }
            }, 500);
        }, 500);

        // Close menu, open chat
        if (chatQuestionsMenu) chatQuestionsMenu.classList.remove('active');
        if (chatWindow) chatWindow.classList.add('active');
    }

    // Add click handlers to quick question buttons
    document.querySelectorAll('.quick-question-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const questionId = e.target.dataset.question;
            if (questionId) handleQuestionClick(questionId);
        });
    });

    // Add click handlers to question items in menu
    document.addEventListener('click', (e) => {
        const questionItem = e.target.closest('.question-item');
        if (questionItem) {
            const questionId = questionItem.dataset.question;
            if (questionId) handleQuestionClick(questionId);
        }
    });

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.chat-widget')) {
            if (chatWindow) chatWindow.classList.remove('active');
            if (chatQuestionsMenu) chatQuestionsMenu.classList.remove('active');
        }
    });
});

