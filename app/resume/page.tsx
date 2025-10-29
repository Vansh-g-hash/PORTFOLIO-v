import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header with download button */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Resume</h1>
            <p className="mt-2 text-zinc-400">Vansh Gupta — AI/ML Engineer</p>
          </div>
          <a href="#" className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* Resume Content */}
        <div className="space-y-8 text-zinc-300">
          {/* Contact Info */}
          <section>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold text-white">Email:</span> guptavansh28@gmail.com
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> +91 9911900418
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span> New Delhi, India
              </p>
              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/vansh-gupta-62354432a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  linkedin.com/in/vansh-gupta-62354432a
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">GitHub:</span>{" "}
                <a
                  href="https://github.com/Vansh-g-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  github.com/Vansh-g-hash
                </a>
              </p>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Summary</h2>
            <p className="leading-relaxed">
              Final Year B.Tech CSE student at PDM University, Bahadurgarh (2022–2026). Aspiring AI/ML Engineer focusing
              on Python, Machine Learning, and Data Science. Experienced in automation, web apps, and AI-powered
              projects. Passionate about building real-world data-driven solutions.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">B.Tech in Computer Science and Engineering</h3>
                <p className="text-sm text-zinc-400">PDM University, Bahadurgarh, Haryana</p>
                <p className="text-sm text-zinc-400">2022–2026 | Expected Graduation: May 2026</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">12th (CBSE Board)</h3>
                <p className="text-sm text-zinc-400">New Delhi, India</p>
                <p className="text-sm text-zinc-400">2021–2022</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Work Experience</h2>
            <div>
              <h3 className="font-semibold text-white">Freelance Exam Operations Supervisor (BITS Pilani Projects)</h3>
              <p className="text-sm text-zinc-400">Worked with Mercer Mettl & SaberTech — New Delhi | 2024 – Present</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  • Managed ground teams during large-scale university examinations ensuring smooth operations and
                  compliance.
                </li>
                <li>
                  • Coordinated with university staff and invigilators to ensure timely setup and efficient exam
                  execution.
                </li>
                <li>• Oversaw on-site logistics, technical readiness, and process adherence across multiple venues.</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">
                  AI Resume Matcher{" "}
                  <a
                    href="https://github.com/Vansh-g-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    (GitHub Link)
                  </a>
                </h3>
                <p className="text-sm">
                  Built an AI web app using Next.js, Supabase and NLP to analyze resumes and calculate match scores with
                  job descriptions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Spam Email Detector{" "}
                  <a
                    href="https://github.com/Vansh-g-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    (GitHub Link)
                  </a>
                </h3>
                <p className="text-sm">
                  Implemented Naive Bayes, Logistic Regression & SVM models to classify spam emails with high accuracy
                  using Python.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  HealthGuard-AI{" "}
                  <a
                    href="https://github.com/Vansh-g-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    (GitHub Link)
                  </a>
                </h3>
                <p className="text-sm">
                  Created a healthcare dashboard for diabetes prediction using Python, Streamlit and Scikit-learn for
                  visualization and analysis.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Certifications</h2>
            <ul className="space-y-2 text-sm">
              <li>• AI and Machine Learning Full Course – Simplilearn (in progress)</li>
              <li>• Oracle AI Foundations Associate Certification – Oracle Academy</li>
              <li>• Python Development Bootcamp – Boot.dev</li>
              <li>• Energy Literacy Training – Energy Swaraj Foundation</li>
              <li>• Database Programming with SQL – Oracle Academy</li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Technical Skills</h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-white">Programming Languages:</span> Python (Intermediate), C
                (Basic), C++ (Basic), SQL (Intermediate)
              </p>
              <p>
                <span className="font-semibold text-white">Core Concepts:</span> OOPs, Data Structures & Algorithms,
                DBMS, Problem Solving
              </p>
              <p>
                <span className="font-semibold text-white">Libraries/Frameworks:</span> NumPy, Pandas, Matplotlib,
                Scikit-learn, Streamlit
              </p>
              <p>
                <span className="font-semibold text-white">Tools & Platforms:</span> Git/GitHub, VS Code, Jupyter
                Notebook, Google Colab
              </p>
              <p>
                <span className="font-semibold text-white">Domains of Interest:</span> Artificial Intelligence, Machine
                Learning, Data Science, Automation
              </p>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Languages</h2>
            <p className="text-sm">
              <span className="font-semibold text-white">English</span> (Fluent) —{" "}
              <span className="font-semibold text-white">Hindi</span> (Fluent)
            </p>
          </section>

          <p className="border-t border-zinc-700 pt-8 text-xs text-zinc-500">Last updated: October 2025</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
