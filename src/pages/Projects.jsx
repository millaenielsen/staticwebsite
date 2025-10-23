import { motion } from 'framer-motion'
import '../App.css'

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="App">
      {/* Projects Section */}
      <section className="projects">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Projects</h1>
          <p className="page-description">
            A collection of my data science and machine learning projects, ranging from medical imaging
            to natural language processing. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div className="project-card featured" variants={cardVariants}>
            <div className="project-header">
              <h3>Alzheimer's Neuroimaging Biomarkers</h3>
              <span className="project-language">Python • Jupyter Notebook</span>
            </div>
            <p className="project-description">
              Pioneer Centre for AI internship project evaluating classical and deep neuroimaging biomarkers
              for early Alzheimer's Disease diagnosis. Achieved 0.84 AUC using 3D CNN and XGBoost models.
              This work resulted in a publication at SPIE Medical Imaging 2025.
            </p>
            <div className="project-tags">
              <span className="tag">Deep Learning</span>
              <span className="tag">Medical Imaging</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Computer Vision</span>
            </div>
            <a href="https://github.com/millaenielsen/imaging-biomarkers" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

          <motion.div className="project-card featured" variants={cardVariants}>
            <div className="project-header">
              <h3>Russian Speech Recognition Benchmarking</h3>
              <span className="project-language">Python</span>
            </div>
            <p className="project-description">
              Benchmarks OpenAI Whisper on Russian speech recognition and translation for UCLA Communications
              Lab. Evaluates multiple model sizes using WER, BLEU, and semantic similarity metrics to optimize
              transcription accuracy for media bias research.
            </p>
            <div className="project-tags">
              <span className="tag">NLP</span>
              <span className="tag">Speech-to-Text</span>
              <span className="tag">OpenAI Whisper</span>
              <span className="tag">Evaluation Metrics</span>
            </div>
            <a href="https://github.com/millaenielsen/whisper_rose" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

          <motion.div className="project-card" variants={cardVariants}>
            <div className="project-header">
              <h3>Click-Through Rate Prediction</h3>
              <span className="project-language">Python • Jupyter Notebook</span>
            </div>
            <p className="project-description">
              Data analytics utilizing predictive AI algorithms to synthesize evaluations for ad click-through
              rate prediction. Implements and compares multiple machine learning models for optimal performance.
            </p>
            <div className="project-tags">
              <span className="tag">Machine Learning</span>
              <span className="tag">Predictive Analytics</span>
              <span className="tag">Data Science</span>
            </div>
            <a href="https://github.com/millaenielsen/CTR-prediction" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

          <motion.div className="project-card" variants={cardVariants}>
            <div className="project-header">
              <h3>Formula 1 Statistical Analysis</h3>
              <span className="project-language">R • SQL</span>
            </div>
            <p className="project-description">
              Formula 1 race outcome statistical analysis using SQL and R, examining constructors, drivers,
              and qualifying positions as race win predictors across historical data from 1950-2017.
            </p>
            <div className="project-tags">
              <span className="tag">SQL</span>
              <span className="tag">Statistical Analysis</span>
              <span className="tag">R</span>
              <span className="tag">Data Visualization</span>
            </div>
            <a href="https://github.com/millaenielsen/f1-sql-analysis" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

          <motion.div className="project-card" variants={cardVariants}>
            <div className="project-header">
              <h3>2020 US Election Prediction</h3>
              <span className="project-language">R</span>
            </div>
            <p className="project-description">
              Classification of 2020 U.S. county-level election results using census and economic data.
              Compares multiple classification models to identify key demographic and economic predictors.
            </p>
            <div className="project-tags">
              <span className="tag">Classification</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">R</span>
            </div>
            <a href="https://github.com/millaenielsen/election-predict-2020" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

          <motion.div className="project-card" variants={cardVariants}>
            <div className="project-header">
              <h3>Crab Age Prediction</h3>
              <span className="project-language">R</span>
            </div>
            <p className="project-description">
              Predictive modeling employing multivariate linear regression and feature selection to estimate
              crab age from physical attributes using Kaggle dataset.
            </p>
            <div className="project-tags">
              <span className="tag">Regression</span>
              <span className="tag">Feature Selection</span>
              <span className="tag">R</span>
            </div>
            <a href="https://github.com/millaenielsen/Crab-Prediction-Project" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </motion.div>

        </motion.div>
      </section>
    </div>
  )
}

export default Projects
