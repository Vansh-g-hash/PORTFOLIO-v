import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Being Free — E‑commerce",
    description: "A modern e‑commerce storefront built on Base44 with responsive UI and streamlined product browsing.",
    tags: ["E‑commerce", "Base44", "Frontend"],
    href: "https://being-free-af7e58a8.base44.app",
  },
  {
    title: "Expense Flow — Storefront",
    description: "E‑commerce app featuring clean layout and fast navigation, deployed via Base44.",
    tags: ["E‑commerce", "Base44", "Web App"],
    href: "https://app--expense-flow-02990888.base44.app",
  },
  {
    title: "Radhe Krishna Traders — Shop",
    description: "Retail web app for product discovery and checkout, powered by Base44 hosting.",
    tags: ["E‑commerce", "Base44", "Retail"],
    href: "https://app--radhe-krishna-traders-8cdc5c41.base44.app",
  },
  {
    title: "AI Chatbot with OpenAI + Streamlit",
    description:
      "Modern chatbot UI with GPT integration, rule-based fallback, timestamps, and responsive design using Streamlit.",
    tags: ["OpenAI", "Streamlit", "Python", "NLP"],
    href: "https://github.com/VANSH-G-HASH",
  },
  {
    title: "Products Review Scraper",
    description:
      "Python-based scraper to collect and analyze product reviews for insights, enabling sentiment and trend analysis.",
    tags: ["Python", "BeautifulSoup", "Pandas", "Scraping"],
    href: "https://github.com/VANSH-G-HASH",
  },
  {
    title: "Face Mask Detection System",
    description: "CNN-based classifier built in Jupyter to detect mask usage in images with TensorFlow/PyTorch basics.",
    tags: ["CNN", "TensorFlow", "PyTorch", "CV"],
    href: "https://github.com/VANSH-G-HASH",
  },
  {
    title: "Celebrity Images Scraper",
    description: "Automated image scraping pipeline with Python and BeautifulSoup to create datasets for ML tasks.",
    tags: ["Python", "BeautifulSoup", "Automation"],
    href: "https://github.com/VANSH-G-HASH",
  },
  {
    title: "Student Performance EDA",
    description:
      "Exploratory data analysis on student performance dataset to uncover patterns and actionable insights.",
    tags: ["EDA", "Pandas", "Matplotlib", "Seaborn"],
    href: "https://github.com/VANSH-G-HASH",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Classification models (Logistic Regression, Random Forest) to predict churn with interpretable insights.",
    tags: ["scikit-learn", "LogReg", "RandomForest", "Python"],
    href: "https://github.com/VANSH-G-HASH",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-10 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
        <a
          className="text-sm text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
          href="https://github.com/VANSH-G-HASH"
          target="_blank"
          rel="noreferrer"
        >
          View all on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
