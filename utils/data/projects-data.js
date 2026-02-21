import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "AI-Based Sensor Fusion for Aerial Guidance",
    description: "Built multi-modal time-series pipeline processing 800k+ IMU/GPS samples. Implemented quaternion-based strapdown INS and nonlinear EKF with multi-rate synchronization (50Hz IMU / 1Hz GPS).",
    tools: ["Python", "NumPy", "SciPy", "EKF", "Strapdown INS"],
    role: "AI Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Context-Aware Car Assistant (LLM)",
    description: "Developed RAG-powered assistant by indexing vehicle manuals using embeddings and vector search. Implemented LCEL chains, function-calling, and multi-turn memory.",
    tools: ["Python", "LangChain", "FAISS", "OpenAI API", "RAG"],
    role: "AI Engineer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Bitcoin Trading Algorithm",
    description: "Built ML-based crypto trading strategy with automated signal generation and real-time dashboard monitoring.",
    tools: ["Python", "K-Means", "FastAPI", "React Native", "Binance API"],
    role: "ML Engineer",
    code: "",
    demo: "",
    image: realEstate,
  }
];
