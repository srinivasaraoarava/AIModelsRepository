// AI Models Data with Complete Information
const modelsData = [
    {
        id: 1,
        name: "Qwen/Qwen3-VL-30B-A3B-Instruct",
        downloads: "412k",
        likes: "208",
        type: "Vision-Language Model",
        description: "A powerful multimodal model combining vision and language capabilities for advanced AI applications.",
        pros: [
            "Excellent vision capabilities",
            "Strong multilingual support",
            "Open source"
        ],
        cons: [
            "Requires significant compute",
            "Newer model with less community support"
        ],
        trendData: {
            1: [{height: 100, downloads: '412K', growth: 8.5, month: 'Dec 2024'}],
            3: [
                {height: 60, downloads: '1.2M', growth: 12.1, month: 'Oct 2024'},
                {height: 80, downloads: '1.8M', growth: 15.3, month: 'Nov 2024'},
                {height: 100, downloads: '2.5M', growth: 8.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 40, downloads: '800K', growth: 5.2, month: 'Jul 2024'},
                {height: 55, downloads: '1.1M', growth: 7.8, month: 'Aug 2024'},
                {height: 70, downloads: '1.5M', growth: 9.1, month: 'Sep 2024'},
                {height: 85, downloads: '1.9M', growth: 11.5, month: 'Oct 2024'},
                {height: 95, downloads: '2.3M', growth: 10.2, month: 'Nov 2024'},
                {height: 100, downloads: '2.8M', growth: 8.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 2,
        name: "GPT-4",
        downloads: "N/A",
        downloadNote: "(API)",
        likes: "10k+",
        type: "Large Language Model",
        description: "OpenAI's most advanced language model with exceptional reasoning and generation capabilities.",
        pros: [
            "State-of-the-art performance",
            "Extensive capabilities",
            "Reliable API"
        ],
        cons: [
            "Expensive for high volume",
            "Closed source",
            "API dependency"
        ],
        trendData: {
            1: [{height: 100, downloads: 'N/A', growth: 5.1, month: 'Dec 2024'}],
            3: [
                {height: 70, downloads: 'N/A', growth: 8.2, month: 'Oct 2024'},
                {height: 90, downloads: 'N/A', growth: 10.5, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 5.1, month: 'Dec 2024'}
            ],
            6: [
                {height: 50, downloads: 'N/A', growth: 3.5, month: 'Jul 2024'},
                {height: 65, downloads: 'N/A', growth: 6.1, month: 'Aug 2024'},
                {height: 80, downloads: 'N/A', growth: 7.9, month: 'Sep 2024'},
                {height: 90, downloads: 'N/A', growth: 9.8, month: 'Oct 2024'},
                {height: 95, downloads: 'N/A', growth: 8.7, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 5.1, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 3,
        name: "Claude 3.5 Sonnet",
        downloads: "N/A",
        downloadNote: "(API)",
        likes: "8k+",
        type: "Large Language Model",
        description: "Anthropic's flagship model with strong reasoning and extended context window capabilities.",
        pros: [
            "Excellent reasoning",
            "Large context window",
            "Safety-focused"
        ],
        cons: [
            "Proprietary",
            "API only",
            "Limited vision capabilities"
        ],
        trendData: {
            1: [{height: 100, downloads: 'N/A', growth: 7.2, month: 'Dec 2024'}],
            3: [
                {height: 65, downloads: 'N/A', growth: 9.8, month: 'Oct 2024'},
                {height: 85, downloads: 'N/A', growth: 11.2, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 7.2, month: 'Dec 2024'}
            ],
            6: [
                {height: 45, downloads: 'N/A', growth: 4.8, month: 'Jul 2024'},
                {height: 60, downloads: 'N/A', growth: 7.1, month: 'Aug 2024'},
                {height: 75, downloads: 'N/A', growth: 8.5, month: 'Sep 2024'},
                {height: 88, downloads: 'N/A', growth: 10.1, month: 'Oct 2024'},
                {height: 96, downloads: 'N/A', growth: 9.5, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 7.2, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 4,
        name: "Llama 3.1 405B",
        downloads: "3.8M",
        likes: "5k+",
        type: "Large Language Model",
        description: "Meta's largest open-source model with impressive performance across various tasks.",
        pros: [
            "Open source",
            "Competitive performance",
            "Extensive training"
        ],
        cons: [
            "Massive compute requirements",
            "Expensive to host"
        ],
        trendData: {
            1: [{height: 100, downloads: '3.8M', growth: 10.0, month: 'Dec 2024'}],
            3: [
                {height: 75, downloads: '2.5M', growth: 15.0, month: 'Oct 2024'},
                {height: 90, downloads: '3.2M', growth: 12.0, month: 'Nov 2024'},
                {height: 100, downloads: '3.8M', growth: 10.0, month: 'Dec 2024'}
            ],
            6: [
                {height: 50, downloads: '1.5M', growth: 8.0, month: 'Jul 2024'},
                {height: 65, downloads: '2.0M', growth: 10.0, month: 'Aug 2024'},
                {height: 80, downloads: '2.7M', growth: 13.0, month: 'Sep 2024'},
                {height: 90, downloads: '3.3M', growth: 11.0, month: 'Oct 2024'},
                {height: 95, downloads: '3.6M', growth: 9.0, month: 'Nov 2024'},
                {height: 100, downloads: '4.0M', growth: 10.0, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 5,
        name: "Gemini 1.5 Pro",
        downloads: "N/A",
        downloadNote: "(API)",
        likes: "6k+",
        type: "Multimodal",
        description: "Google's multimodal model with an unprecedented 2M token context window.",
        pros: [
            "Huge context window",
            "Multimodal",
            "Cost-effective"
        ],
        cons: [
            "Proprietary",
            "API dependency",
            "Newer platform"
        ],
        trendData: {
            1: [{height: 100, downloads: 'N/A', growth: 6.8, month: 'Dec 2024'}],
            3: [
                {height: 60, downloads: 'N/A', growth: 9.5, month: 'Oct 2024'},
                {height: 80, downloads: 'N/A', growth: 10.8, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 6.8, month: 'Dec 2024'}
            ],
            6: [
                {height: 40, downloads: 'N/A', growth: 4.1, month: 'Jul 2024'},
                {height: 55, downloads: 'N/A', growth: 6.5, month: 'Aug 2024'},
                {height: 70, downloads: 'N/A', growth: 8.0, month: 'Sep 2024'},
                {height: 85, downloads: 'N/A', growth: 9.9, month: 'Oct 2024'},
                {height: 95, downloads: 'N/A', growth: 8.9, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 6.8, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 6,
        name: "Mistral 7B",
        downloads: "5.2M",
        likes: "4k+",
        type: "Language Model",
        description: "Efficient open-source model perfect for edge deployment and cost-sensitive applications.",
        pros: [
            "Efficient",
            "Open source",
            "Easy to deploy"
        ],
        cons: [
            "Lower accuracy vs larger models",
            "Limited capabilities"
        ],
        trendData: {
            1: [{height: 100, downloads: '5.2M', growth: 11.5, month: 'Dec 2024'}],
            3: [
                {height: 70, downloads: '3.5M', growth: 18.0, month: 'Oct 2024'},
                {height: 90, downloads: '4.5M', growth: 14.0, month: 'Nov 2024'},
                {height: 100, downloads: '5.2M', growth: 11.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 45, downloads: '2.0M', growth: 9.0, month: 'Jul 2024'},
                {height: 60, downloads: '2.8M', growth: 12.0, month: 'Aug 2024'},
                {height: 75, downloads: '3.8M', growth: 15.0, month: 'Sep 2024'},
                {height: 88, downloads: '4.7M', growth: 13.0, month: 'Oct 2024'},
                {height: 96, downloads: '5.0M', growth: 10.0, month: 'Nov 2024'},
                {height: 100, downloads: '5.5M', growth: 11.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 7,
        name: "Stable Diffusion XL",
        downloads: "6.8M",
        likes: "12k+",
        type: "Image Generation",
        description: "High-quality image generation model with superior detail and composition capabilities.",
        pros: [
            "High-quality images",
            "Open source",
            "Customizable"
        ],
        cons: [
            "Image-only",
            "NSFW concerns",
            "Hardware intensive"
        ],
        trendData: {
            1: [{height: 100, downloads: '6.8M', growth: 9.2, month: 'Dec 2024'}],
            3: [
                {height: 70, downloads: '4.5M', growth: 13.0, month: 'Oct 2024'},
                {height: 90, downloads: '5.8M', growth: 11.0, month: 'Nov 2024'},
                {height: 100, downloads: '6.8M', growth: 9.2, month: 'Dec 2024'}
            ],
            6: [
                {height: 50, downloads: '3.0M', growth: 7.0, month: 'Jul 2024'},
                {height: 65, downloads: '3.9M', growth: 9.5, month: 'Aug 2024'},
                {height: 80, downloads: '5.0M', growth: 11.5, month: 'Sep 2024'},
                {height: 90, downloads: '6.0M', growth: 10.0, month: 'Oct 2024'},
                {height: 95, downloads: '6.5M', growth: 8.5, month: 'Nov 2024'},
                {height: 100, downloads: '7.0M', growth: 9.2, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 8,
        name: "Whisper Large V3",
        downloads: "4.1M",
        likes: "7k+",
        type: "Speech Recognition",
        description: "State-of-the-art speech recognition with multilingual support and high accuracy.",
        pros: [
            "State-of-the-art accuracy",
            "Multilingual",
            "Open source"
        ],
        cons: [
            "Audio-only",
            "Real-time processing challenges"
        ],
        trendData: {
            1: [{height: 100, downloads: '4.1M', growth: 7.5, month: 'Dec 2024'}],
            3: [
                {height: 65, downloads: '2.8M', growth: 10.0, month: 'Oct 2024'},
                {height: 85, downloads: '3.5M', growth: 9.0, month: 'Nov 2024'},
                {height: 100, downloads: '4.1M', growth: 7.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 40, downloads: '1.8M', growth: 5.0, month: 'Jul 2024'},
                {height: 55, downloads: '2.3M', growth: 7.0, month: 'Aug 2024'},
                {height: 70, downloads: '3.0M', growth: 8.5, month: 'Sep 2024'},
                {height: 85, downloads: '3.7M', growth: 9.5, month: 'Oct 2024'},
                {height: 95, downloads: '4.0M', growth: 8.0, month: 'Nov 2024'},
                {height: 100, downloads: '4.2M', growth: 7.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 9,
        name: "BERT Base",
        downloads: "15M+",
        likes: "20k+",
        type: "Language Understanding",
        description: "Foundation model for NLP tasks with proven reliability and extensive use cases.",
        pros: [
            "Very efficient",
            "Proven architecture",
            "Easy to fine-tune"
        ],
        cons: [
            "Older model",
            "Limited generation",
            "Short context"
        ],
        trendData: {
            1: [{height: 100, downloads: '15M+', growth: 3.0, month: 'Dec 2024'}],
            3: [
                {height: 80, downloads: '14M+', growth: 4.0, month: 'Oct 2024'},
                {height: 90, downloads: '14.5M+', growth: 3.5, month: 'Nov 2024'},
                {height: 100, downloads: '15M+', growth: 3.0, month: 'Dec 2024'}
            ],
            6: [
                {height: 60, downloads: '12M+', growth: 2.0, month: 'Jul 2024'},
                {height: 70, downloads: '12.8M+', growth: 2.5, month: 'Aug 2024'},
                {height: 80, downloads: '13.5M+', growth: 3.0, month: 'Sep 2024'},
                {height: 90, downloads: '14.2M+', growth: 3.8, month: 'Oct 2024'},
                {height: 95, downloads: '14.8M+', growth: 3.2, month: 'Nov 2024'},
                {height: 100, downloads: '15.5M+', growth: 3.0, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 10,
        name: "Llama 3.3 70B",
        downloads: "2.9M",
        likes: "4.5k+",
        type: "Language Model",
        description: "Balanced model offering strong performance with reasonable compute requirements.",
        pros: [
            "Strong performance",
            "Open source",
            "Good community"
        ],
        cons: [
            "High compute needs",
            "Requires optimization for edge"
        ],
        trendData: {
            1: [{height: 100, downloads: '2.9M', growth: 9.8, month: 'Dec 2024'}],
            3: [
                {height: 70, downloads: '2.0M', growth: 14.0, month: 'Oct 2024'},
                {height: 90, downloads: '2.5M', growth: 12.0, month: 'Nov 2024'},
                {height: 100, downloads: '2.9M', growth: 9.8, month: 'Dec 2024'}
            ],
            6: [
                {height: 45, downloads: '1.2M', growth: 6.0, month: 'Jul 2024'},
                {height: 60, downloads: '1.6M', growth: 8.0, month: 'Aug 2024'},
                {height: 75, downloads: '2.1M', growth: 10.0, month: 'Sep 2024'},
                {height: 88, downloads: '2.6M', growth: 11.0, month: 'Oct 2024'},
                {height: 96, downloads: '2.8M', growth: 9.0, month: 'Nov 2024'},
                {height: 100, downloads: '3.0M', growth: 9.8, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 11,
        name: "Falcon 180B",
        downloads: "1.8M",
        likes: "3.2k+",
        type: "Language Model",
        description: "Open-source powerhouse with strong multilingual and reasoning capabilities.",
        pros: [
            "Open source",
            "Strong multilingual",
            "Apache 2.0 license"
        ],
        cons: [
            "Very resource intensive",
            "Slower inference"
        ],
        trendData: {
            1: [{height: 100, downloads: '1.8M', growth: 6.5, month: 'Dec 2024'}],
            3: [
                {height: 65, downloads: '1.2M', growth: 8.0, month: 'Oct 2024'},
                {height: 85, downloads: '1.5M', growth: 7.5, month: 'Nov 2024'},
                {height: 100, downloads: '1.8M', growth: 6.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 45, downloads: '800K', growth: 4.0, month: 'Jul 2024'},
                {height: 58, downloads: '1.0M', growth: 5.5, month: 'Aug 2024'},
                {height: 72, downloads: '1.3M', growth: 6.8, month: 'Sep 2024'},
                {height: 83, downloads: '1.5M', growth: 7.2, month: 'Oct 2024'},
                {height: 93, downloads: '1.7M', growth: 6.8, month: 'Nov 2024'},
                {height: 100, downloads: '1.9M', growth: 6.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 12,
        name: "Phi-3 Mini",
        downloads: "3.5M",
        likes: "5.5k+",
        type: "Small Language Model",
        description: "Compact yet powerful model optimized for edge devices and mobile applications.",
        pros: [
            "Very lightweight",
            "Fast inference",
            "Edge-friendly"
        ],
        cons: [
            "Limited capabilities",
            "Smaller context window"
        ],
        trendData: {
            1: [{height: 100, downloads: '3.5M', growth: 12.5, month: 'Dec 2024'}],
            3: [
                {height: 68, downloads: '2.3M', growth: 16.0, month: 'Oct 2024'},
                {height: 88, downloads: '3.0M', growth: 14.0, month: 'Nov 2024'},
                {height: 100, downloads: '3.5M', growth: 12.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 42, downloads: '1.5M', growth: 8.0, month: 'Jul 2024'},
                {height: 57, downloads: '1.9M', growth: 10.5, month: 'Aug 2024'},
                {height: 71, downloads: '2.5M', growth: 13.0, month: 'Sep 2024'},
                {height: 85, downloads: '3.0M', growth: 14.5, month: 'Oct 2024'},
                {height: 94, downloads: '3.3M', growth: 12.0, month: 'Nov 2024'},
                {height: 100, downloads: '3.7M', growth: 12.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 13,
        name: "DALL-E 3",
        downloads: "N/A",
        downloadNote: "(API)",
        likes: "15k+",
        type: "Image Generation",
        description: "Advanced text-to-image model with superior prompt understanding and detail.",
        pros: [
            "Excellent prompt following",
            "High quality output",
            "Safety features"
        ],
        cons: [
            "API only",
            "Expensive",
            "Closed source"
        ],
        trendData: {
            1: [{height: 100, downloads: 'N/A', growth: 8.0, month: 'Dec 2024'}],
            3: [
                {height: 72, downloads: 'N/A', growth: 11.0, month: 'Oct 2024'},
                {height: 90, downloads: 'N/A', growth: 9.5, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 8.0, month: 'Dec 2024'}
            ],
            6: [
                {height: 48, downloads: 'N/A', growth: 5.5, month: 'Jul 2024'},
                {height: 62, downloads: 'N/A', growth: 7.8, month: 'Aug 2024'},
                {height: 76, downloads: 'N/A', growth: 9.2, month: 'Sep 2024'},
                {height: 87, downloads: 'N/A', growth: 10.5, month: 'Oct 2024'},
                {height: 95, downloads: 'N/A', growth: 9.0, month: 'Nov 2024'},
                {height: 100, downloads: 'N/A', growth: 8.0, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 14,
        name: "CodeLlama 70B",
        downloads: "2.2M",
        likes: "6k+",
        type: "Code Generation",
        description: "Specialized model for code generation, understanding, and debugging tasks.",
        pros: [
            "Code-specialized",
            "Multiple languages",
            "Open source"
        ],
        cons: [
            "Code-only focus",
            "Resource intensive"
        ],
        trendData: {
            1: [{height: 100, downloads: '2.2M', growth: 10.5, month: 'Dec 2024'}],
            3: [
                {height: 70, downloads: '1.5M', growth: 14.0, month: 'Oct 2024'},
                {height: 88, downloads: '1.9M', growth: 12.0, month: 'Nov 2024'},
                {height: 100, downloads: '2.2M', growth: 10.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 44, downloads: '900K', growth: 7.5, month: 'Jul 2024'},
                {height: 59, downloads: '1.2M', growth: 9.5, month: 'Aug 2024'},
                {height: 73, downloads: '1.6M', growth: 12.0, month: 'Sep 2024'},
                {height: 86, downloads: '1.9M', growth: 13.0, month: 'Oct 2024'},
                {height: 94, downloads: '2.1M', growth: 11.0, month: 'Nov 2024'},
                {height: 100, downloads: '2.3M', growth: 10.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 15,
        name: "MPT-30B",
        downloads: "1.5M",
        likes: "2.8k+",
        type: "Language Model",
        description: "Commercially-friendly open model with strong performance on various benchmarks.",
        pros: [
            "Commercial license",
            "Good performance",
            "Long context"
        ],
        cons: [
            "Less popular",
            "Smaller community"
        ],
        trendData: {
            1: [{height: 100, downloads: '1.5M', growth: 5.5, month: 'Dec 2024'}],
            3: [
                {height: 68, downloads: '1.0M', growth: 7.8, month: 'Oct 2024'},
                {height: 86, downloads: '1.3M', growth: 6.5, month: 'Nov 2024'},
                {height: 100, downloads: '1.5M', growth: 5.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 46, downloads: '700K', growth: 3.5, month: 'Jul 2024'},
                {height: 60, downloads: '900K', growth: 5.0, month: 'Aug 2024'},
                {height: 73, downloads: '1.1M', growth: 6.5, month: 'Sep 2024'},
                {height: 84, downloads: '1.3M', growth: 7.2, month: 'Oct 2024'},
                {height: 93, downloads: '1.4M', growth: 6.0, month: 'Nov 2024'},
                {height: 100, downloads: '1.6M', growth: 5.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 16,
        name: "T5-XXL",
        downloads: "8.5M",
        likes: "11k+",
        type: "Text-to-Text",
        description: "Versatile text-to-text model excellent for translation, summarization, and more.",
        pros: [
            "Versatile",
            "Proven architecture",
            "Wide support"
        ],
        cons: [
            "Older architecture",
            "Slower than modern models"
        ],
        trendData: {
            1: [{height: 100, downloads: '8.5M', growth: 4.0, month: 'Dec 2024'}],
            3: [
                {height: 78, downloads: '7.8M', growth: 5.5, month: 'Oct 2024'},
                {height: 91, downloads: '8.2M', growth: 4.5, month: 'Nov 2024'},
                {height: 100, downloads: '8.5M', growth: 4.0, month: 'Dec 2024'}
            ],
            6: [
                {height: 58, downloads: '6.5M', growth: 2.8, month: 'Jul 2024'},
                {height: 68, downloads: '7.0M', growth: 3.5, month: 'Aug 2024'},
                {height: 78, downloads: '7.5M', growth: 4.2, month: 'Sep 2024'},
                {height: 87, downloads: '8.0M', growth: 5.0, month: 'Oct 2024'},
                {height: 94, downloads: '8.3M', growth: 4.3, month: 'Nov 2024'},
                {height: 100, downloads: '8.7M', growth: 4.0, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 17,
        name: "Vicuna 33B",
        downloads: "2.7M",
        likes: "4.2k+",
        type: "Chat Model",
        description: "Fine-tuned chat model with strong conversational abilities and helpfulness.",
        pros: [
            "Excellent chat quality",
            "Open source",
            "Easy to deploy"
        ],
        cons: [
            "Requires fine-tuning data",
            "Medium compute needs"
        ],
        trendData: {
            1: [{height: 100, downloads: '2.7M', growth: 8.5, month: 'Dec 2024'}],
            3: [
                {height: 69, downloads: '1.8M', growth: 11.5, month: 'Oct 2024'},
                {height: 87, downloads: '2.3M', growth: 10.0, month: 'Nov 2024'},
                {height: 100, downloads: '2.7M', growth: 8.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 43, downloads: '1.1M', growth: 6.0, month: 'Jul 2024'},
                {height: 58, downloads: '1.4M', growth: 8.0, month: 'Aug 2024'},
                {height: 72, downloads: '1.9M', growth: 10.0, month: 'Sep 2024'},
                {height: 84, downloads: '2.2M', growth: 11.0, month: 'Oct 2024'},
                {height: 93, downloads: '2.5M', growth: 9.5, month: 'Nov 2024'},
                {height: 100, downloads: '2.8M', growth: 8.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 18,
        name: "Bloom 176B",
        downloads: "1.2M",
        likes: "3.5k+",
        type: "Multilingual Model",
        description: "Massive multilingual model supporting 46+ languages with strong translation.",
        pros: [
            "46+ languages",
            "Open science",
            "Large scale"
        ],
        cons: [
            "Extremely resource heavy",
            "Slow inference"
        ],
        trendData: {
            1: [{height: 100, downloads: '1.2M', growth: 4.5, month: 'Dec 2024'}],
            3: [
                {height: 72, downloads: '850K', growth: 6.0, month: 'Oct 2024'},
                {height: 88, downloads: '1.0M', growth: 5.2, month: 'Nov 2024'},
                {height: 100, downloads: '1.2M', growth: 4.5, month: 'Dec 2024'}
            ],
            6: [
                {height: 50, downloads: '550K', growth: 2.5, month: 'Jul 2024'},
                {height: 62, downloads: '680K', growth: 3.8, month: 'Aug 2024'},
                {height: 74, downloads: '820K', growth: 5.0, month: 'Sep 2024'},
                {height: 85, downloads: '950K', growth: 5.8, month: 'Oct 2024'},
                {height: 93, downloads: '1.1M', growth: 4.8, month: 'Nov 2024'},
                {height: 100, downloads: '1.2M', growth: 4.5, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 19,
        name: "Flan-T5-XL",
        downloads: "6.2M",
        likes: "9k+",
        type: "Instruction Model",
        description: "Instruction-tuned model excellent for following commands and zero-shot tasks.",
        pros: [
            "Strong instruction following",
            "Zero-shot capable",
            "Efficient"
        ],
        cons: [
            "Limited creativity",
            "Shorter responses"
        ],
        trendData: {
            1: [{height: 100, downloads: '6.2M', growth: 7.0, month: 'Dec 2024'}],
            3: [
                {height: 71, downloads: '4.5M', growth: 9.5, month: 'Oct 2024'},
                {height: 89, downloads: '5.5M', growth: 8.2, month: 'Nov 2024'},
                {height: 100, downloads: '6.2M', growth: 7.0, month: 'Dec 2024'}
            ],
            6: [
                {height: 47, downloads: '3.2M', growth: 4.8, month: 'Jul 2024'},
                {height: 61, downloads: '3.9M', growth: 6.5, month: 'Aug 2024'},
                {height: 75, downloads: '4.8M', growth: 8.0, month: 'Sep 2024'},
                {height: 86, downloads: '5.5M', growth: 9.0, month: 'Oct 2024'},
                {height: 94, downloads: '6.0M', growth: 7.8, month: 'Nov 2024'},
                {height: 100, downloads: '6.5M', growth: 7.0, month: 'Dec 2024'}
            ]
        }
    },
    {
        id: 20,
        name: "Alpaca 7B",
        downloads: "4.8M",
        likes: "7.5k+",
        type: "Instruction Model",
        description: "Cost-effective instruction-following model perfect for educational and research use.",
        pros: [
            "Very accessible",
            "Good for learning",
            "Low resource"
        ],
        cons: [
            "Basic capabilities",
            "Not for production"
        ],
        trendData: {
            1: [{height: 100, downloads: '4.8M', growth: 6.2, month: 'Dec 2024'}],
            3: [
                {height: 74, downloads: '3.5M', growth: 8.5, month: 'Oct 2024'},
                {height: 90, downloads: '4.2M', growth: 7.0, month: 'Nov 2024'},
                {height: 100, downloads: '4.8M', growth: 6.2, month: 'Dec 2024'}
            ],
            6: [
                {height: 52, downloads: '2.5M', growth: 4.0, month: 'Jul 2024'},
                {height: 65, downloads: '3.0M', growth: 5.5, month: 'Aug 2024'},
                {height: 77, downloads: '3.7M', growth: 7.0, month: 'Sep 2024'},
                {height: 87, downloads: '4.2M', growth: 8.0, month: 'Oct 2024'},
                {height: 94, downloads: '4.6M', growth: 6.8, month: 'Nov 2024'},
                {height: 100, downloads: '5.0M', growth: 6.2, month: 'Dec 2024'}
            ]
        }
    }
];

// Render model cards with trend charts
function renderModels() {
    const modelsGrid = document.getElementById('modelsGrid');
    
    modelsData.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.innerHTML = `
            <div class="model-header">
                <h2>${model.name}</h2>
                <div class="model-stats">
                    <span class="downloads">${model.downloads}${model.downloadNote ? ' ' + model.downloadNote : ''} downloads</span>
                    <span class="likes">${model.likes} likes</span>
                </div>
            </div>
            <div class="model-type">${model.type}</div>
            
            <div class="trend-chart" data-model="${model.id}">
                <div class="trend-header">
                    <span class="trend-indicator">📈 Trend</span>
                    <div class="date-filter">
                        <button class="filter-btn" data-timeframe="1">1W</button>
                        <button class="filter-btn" data-timeframe="3">1M</button>
                        <button class="filter-btn active" data-timeframe="6">6M</button>
                    </div>
                </div>
                <div class="chart-container"></div>
            </div>

            <p class="model-description">${model.description}</p>

            <div class="pros-cons-matrix">
                <div class="pros">
                    <h3>✅ Pros</h3>
                    <ul>
                        ${model.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons">
                    <h3>❌ Cons</h3>
                    <ul>
                        ${model.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        modelsGrid.appendChild(modelCard);
        
        // Render initial chart (6M by default)
        renderChart(model.id, 6);
    });
    
    // Add event listeners for date filters
    document.querySelectorAll('.date-filter .filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const timeframe = this.dataset.timeframe;
            const trendChart = this.closest('.trend-chart');
            const modelId = parseInt(trendChart.dataset.model);
            
            // Remove active class from all buttons in this filter group
            trendChart.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');
            
            renderChart(modelId, timeframe);
        });
    });
}

// Render chart for a given model
function renderChart(modelId, timeframe) {
    const model = modelsData.find(m => m.id === modelId);
    if (!model) return;
    
    const chartContainers = document.querySelectorAll(`.trend-chart[data-model="${modelId}"] .chart-container`);
    chartContainers.forEach(container => {
        container.innerHTML = ''; // Clear previous bars
        const data = model.trendData[timeframe];
        if (!data) return;

        data.forEach(item => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = `${item.height}%`;
            bar.innerHTML = `
                <div class="chart-tooltip">
                    <span class="tooltip-downloads">${item.downloads} downloads</span>
                    <span class="tooltip-growth">${item.growth > 0 ? '+' : ''}${item.growth}%</span>
                    <span class="tooltip-month">${item.month}</span>
                </div>
            `;
            container.appendChild(bar);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderModels();
});

