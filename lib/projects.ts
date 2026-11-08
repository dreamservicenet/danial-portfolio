export type ProjectStatus = "In Development" | "Research & Development";

export interface Project {
  id: "llm" | "churn" | "automation";
  number: string;
  category: string;
  status: ProjectStatus;
  name: string;
  description: string;
  objective?: string;
  areas: string[];
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "llm",
    number: "01",
    category: "LLM Engineering / Research",
    status: "In Development",
    name: "Building an LLM from Scratch",
    description:
      "An exploration of the fundamental components behind large language models, with the goal of understanding and implementing the core mechanisms behind modern transformer-based language models.",
    objective:
      "Build a small language model step by step to understand how its components work together, from raw text to autoregressive text generation.",
    areas: [
      "Text tokenization", "Vocabulary and token IDs", "Token embeddings", "Positional information",
      "Self-attention", "Transformer blocks", "Training loops", "Loss calculation and optimization", "Text generation",
    ],
    tags: ["Python", "Tokenization", "Embeddings", "Self-Attention", "Transformers"],
    featured: true,
  },
  {
    id: "churn",
    number: "02",
    category: "Machine Learning / Classification",
    status: "Research & Development",
    name: "Customer Churn Prediction",
    description:
      "An applied machine learning project exploring customer churn prediction through supervised classification and comparative model evaluation.",
    areas: ["Data preparation", "Feature engineering", "Classification", "Model comparison", "Evaluation metrics", "Understanding predictive performance"],
    tags: ["Logistic Regression", "Random Forest", "XGBoost", "LightGBM"],
  },
  {
    id: "automation",
    number: "03",
    category: "Workflow Automation",
    status: "In Development",
    name: "DreamService Content Automation",
    description:
      "An automated content workflow designed to discover technology trends, process source material, prepare SEO-oriented article drafts, evaluate content quality, and organize articles for human review.",
    areas: ["RSS feeds", "XML processing", "JSON transformation", "AI-assisted content generation", "Quality review", "Status tracking"],
    tags: ["n8n", "RSS", "XML", "JSON", "AI-assisted"],
  },
];
