import { motion } from 'framer-motion'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

function WhisperProject() {
  return (
    <div className="App">
      <Link to="/projects" className="back-link">
        <FaArrowLeft /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-detail-header">
          <h1>Russian Speech Recognition Benchmarking</h1>
          <p className="project-detail-subtitle">
            UCLA Communications Data Science Lab | 2023-2024
          </p>
          <div className="project-detail-links">
            <a href="https://github.com/millaenielsen/whisper_rose" target="_blank" rel="noopener noreferrer" className="detail-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>

        <img src="/whisper_project.png" alt="Whisper Speech Recognition Project" className="project-detail-image" />

        <section className="project-detail-section">
          <h2>Overview</h2>
          <p>
            This project benchmarks OpenAI's Whisper model on Russian speech recognition and translation tasks
            to support media bias research at UCLA's Communications Lab. The work involved evaluating multiple
            Whisper model sizes and optimizing transcription accuracy for analyzing Russian media content.
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Research Objective</h2>
          <p>
            Identify the optimal Whisper model variant for Russian speech-to-text transcription in media analysis,
            balancing accuracy with computational efficiency for processing large-scale audio datasets.
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Methodology</h2>

          <h3>Model Evaluation</h3>
          <ul>
            <li>Systematic testing of multiple Whisper model sizes (tiny, base, small, medium, large)</li>
            <li>Comparison across Russian speech recognition and translation tasks</li>
            <li>Performance tracking across different audio quality and content types</li>
          </ul>

          <h3>Evaluation Metrics</h3>
          <ul>
            <li><strong>WER (Word Error Rate):</strong> Measures transcription accuracy at word level</li>
            <li><strong>BLEU Scores:</strong> Assesses translation quality and semantic preservation</li>
            <li><strong>Semantic Similarity:</strong> Evaluates meaning preservation in transcriptions</li>
            <li><strong>Runtime Performance:</strong> Tracks computational efficiency for each model size</li>
          </ul>

          <h3>Visualization & Analysis</h3>
          <ul>
            <li>R (ggplot2) and Python (Matplotlib) for comparative visualizations</li>
            <li>Statistical analysis of performance across model variants</li>
            <li>JSON export for reproducible results and further analysis</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>Technical Implementation</h2>

          <h3>Pipeline Components</h3>
          <div className="detail-grid">
            <div className="detail-card">
              <h3>Transcription</h3>
              <p>OpenAI Whisper model variants for Russian speech-to-text</p>
            </div>
            <div className="detail-card">
              <h3>Translation</h3>
              <p>Russian-to-English translation processing</p>
            </div>
            <div className="detail-card">
              <h3>Metrics</h3>
              <p>WER, BLEU, semantic similarity calculation</p>
            </div>
            <div className="detail-card">
              <h3>Visualization</h3>
              <p>Comparative charts and statistical analysis</p>
            </div>
          </div>

          <h3>Infrastructure</h3>
          <ul>
            <li>GPU-accelerated pipeline on UCLA's Linux cluster</li>
            <li>Scaled to process 1,000+ multi-hour audio files</li>
            <li>Automated batch processing for large-scale transcription</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>Key Results</h2>
          <ul>
            <li>Successfully benchmarked all Whisper model variants on Russian language tasks</li>
            <li>Identified optimal model size for balancing accuracy and computational cost</li>
            <li>Processed 1,000+ hours of Russian media content for bias research</li>
            <li>Created reproducible evaluation framework with JSON exports</li>
            <li>Provided actionable insights for choosing models based on use case requirements</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">OpenAI Whisper</span>
            <span className="tech-badge">R</span>
            <span className="tech-badge">ggplot2</span>
            <span className="tech-badge">Matplotlib</span>
            <span className="tech-badge">Linux HPC</span>
            <span className="tech-badge">GPU Computing</span>
            <span className="tech-badge">NLP</span>
            <span className="tech-badge">Speech-to-Text</span>
          </div>
        </section>

        <section className="project-detail-section">
          <h2>Impact</h2>
          <p>
            This benchmarking work directly supported UCLA's Communications Lab in analyzing Russian media
            content for bias research. The optimized pipeline enabled large-scale transcription that would
            have been impractical with manual approaches, accelerating research timelines and improving
            data quality for downstream analysis.
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Key Learnings</h2>
          <ul>
            <li>Gained experience with state-of-the-art speech recognition models</li>
            <li>Learned to design and implement comprehensive benchmarking frameworks</li>
            <li>Developed skills in high-performance computing and GPU acceleration</li>
            <li>Practiced evaluating trade-offs between model performance and computational cost</li>
            <li>Enhanced data visualization skills for communicating technical results</li>
          </ul>
        </section>
      </motion.div>
    </div>
  )
}

export default WhisperProject
