import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPython, FaDatabase, FaCloud } from 'react-icons/fa'
import { SiPytorch, SiTensorflow, SiR } from 'react-icons/si'
import { motion } from 'framer-motion'
import '../App.css'

function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/Milla_graduation_photo.jpeg" alt="Milla Nielsen" className="profile-pic" />
        <h1>Hi, I'm Milla Nielsen!</h1>
        <p className="tagline">Data Scientist Passionate About Using AI for Good</p>
        <p className="intro">
          UCLA graduate specializing in machine learning, computer vision, and statistical analysis.
          Published researcher with experience in medical AI and deep learning applications.
        </p>
        <a href="/Milla_Nielsen_Resume.pdf" download className="resume-download-btn">
          <FaDownload /> Download Resume
        </a>
      </motion.section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I was born in 2003 in New York. At 3 months old, I moved to Denmark with my family, where I spent my early childhood.
          At age 4 we moved back to the US, settling in California. Growing up, I developed a strong interest in technology and
          data science, which has driven my academic and professional pursuits.
        </p>
        <p>
          In 2021, I enrolled at UCLA to pursue a BS in Statistics and Data Science with a minor in Data Science Engineering,
          graduating in June 2025 with a 3.86 GPA. During my time at UCLA, I won awards at the UCLA ASA DataFest competitions,
          including finalist in 2024 and Best Use of External Data (Honorable Mention) in 2023.
        </p>
        <p>
          In the summer of 2024, I interned at the Pioneer Centre for AI at the University of Copenhagen, where I developed
          an MRI-based machine learning pipeline for Alzheimer's detection, achieving 0.84 AUC. This work led to a publication
          presented at SPIE Medical Imaging 2025 in San Diego, California. Most recently, I completed an internship at Prenaital,
          a prenatal AI start-up in Copenhagen, where I developed preprocessing components for medical image pipelines achieving
          95%+ accuracy in artifact removal.
        </p>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>University of California, Los Angeles</h3>
            <span className="date">Sept 2021 – June 2025</span>
          </div>
          <p className="degree">BS in Statistics and Data Science</p>
          <p className="minor">Minor in Data Science Engineering | GPA: 3.86/4.0</p>
          <p className="coursework">
            <strong>Relevant Coursework:</strong> Algorithms, Data Mining, Applied Advanced Statistics, Computational Statistics,
            Probability Theory, Linear Algebra, Multivariable Calculus, Machine Learning in Python, Linear Models, Generative AI,
            Markov Chain Monte Carlo, Deep Learning
          </p>
          <p className="awards">
            <strong>Awards:</strong> UCLA ASA DataFest 2024 Finalist, UCLA ASA DataFest 2023 Best Use of External Data (Honorable Mention)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <img src="/datafest_2024_group_selfie.jpeg" alt="DataFest 2024 team" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', minHeight: '300px', maxHeight: '350px' }} />
            <img src="/Datafest_2023_picture.png" alt="DataFest 2023" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', minHeight: '300px', maxHeight: '350px' }} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Computer Vision Data Science Intern</h3>
              <p className="company">Prenaital (prenatal AI start-up) – Copenhagen, Denmark</p>
            </div>
            <span className="date">July 2025 – Sept 2025</span>
          </div>
          <ul>
            <li>Developed preprocessing components for medical image pipeline, achieving 95%+ accuracy in artifact removal and improving model reliability</li>
            <li>Applied computer vision and OCR methods, using statistical testing to select optimal algorithms for large-scale deployment</li>
            <li>Delivered production code for deep learning pipeline with Git version control for research team</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Research Intern</h3>
              <p className="company">Pioneer Centre for AI – University of Copenhagen</p>
            </div>
            <span className="date">July 2024 – Aug 2024</span>
          </div>
          <ul>
            <li>Developed MRI-based machine learning pipeline for Alzheimer's detection, achieving 0.84 AUC to enable earlier diagnosis</li>
            <li>Engineered biomarker features with 3D CNN (PyTorch, transfer learning) and optimized XGBoost via cross-validation + hyperparameter tuning</li>
            <li>Assessed performance with ROC analysis and statistical validation, contributing findings to conference paper</li>
          </ul>
          <img src="/Milla_at_SPIE_medical_imaging_with_my_poster.png" alt="Presenting at SPIE Medical Imaging 2025" style={{ width: '100%', borderRadius: '8px', marginTop: '1rem', maxHeight: '400px', objectFit: 'contain' }} />
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Communications Data Science Lab Assistant</h3>
              <p className="company">UCLA – Los Angeles, CA</p>
            </div>
            <span className="date">Aug 2023 – June 2024</span>
          </div>
          <ul>
            <li>Enhanced Russian speech-to-text via OpenAI Whisper fine-tuning for media bias research applications</li>
            <li>Benchmarked Whisper variants using BLEU score + WER, visualizing results with R (ggplot2) and Python (Matplotlib)</li>
            <li>Scaled GPU-accelerated pipeline on UCLA's Linux cluster, transcribing 1,000+ multi-hour audio files</li>
          </ul>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership">
        <h2>Leadership</h2>

        <div className="leadership-item">
          <div className="leadership-header">
            <div>
              <h3>Co-President</h3>
              <p className="organization">National Student Data Corps - UCLA</p>
            </div>
            <span className="date">Feb 2023 - June 2025</span>
          </div>
          <p>Scaled UCLA's NSDC chapter from 200 → 900+ members through 50+ workshops, hackathons, and training programs
          providing hands-on experience in Python, Tableau, NLP, and ML</p>
          <a href="https://nsdcucla.com" target="_blank" rel="noopener noreferrer" className="nsdc-website-link">
            Visit NSDC UCLA Website →
          </a>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/nsdc_board_group_photo.png" alt="NSDC Board Group Photo" style={{ width: '70%', maxWidth: '600px', borderRadius: '8px', maxHeight: '300px', objectFit: 'cover' }} />
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>NSDC Winter 2024 board trip to Getty Museum</p>
          </div>
        </div>

        <div className="leadership-item">
          <div className="leadership-header">
            <div>
              <h3>Head of Consulting</h3>
              <p className="organization">UCLA Data Resolutions</p>
            </div>
            <span className="date">March 2024 - March 2025</span>
          </div>
          <p>Managed 5+ consulting teams (35+ analysts total) serving 15 startup clients, building scalable processes to
          deliver data-driven solutions across quarterly project cycles</p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ color: '#14b8a6', fontSize: '1.1rem', marginBottom: '1rem' }}>Notable Projects Led:</h4>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.7', color: '#d4d4d4' }}>
              <li><strong>Zeitios:</strong> Led NLP team building AI tutoring platform for software instruction using curriculum generation and dialogue systems</li>
              <li><strong>Kickback:</strong> Analyzed Shopify user journey data to identify conversion drop-off points and designed improvement experiments</li>
              <li><strong>Jazz Hands for Autism:</strong> Built optimization model for student-to-class matching using performance data, preferences, and instructor availability</li>
              <li><strong>Orsulic Lab:</strong> Created database-backed platform linking front-end and back-end workflows for medical research operations</li>
              <li><strong>UCLA Housing/BruinShack:</strong> Web scraped housing listings and conducted survey analysis to improve off-campus student housing discovery</li>
              <li><strong>Achievable:</strong> Examined student usage data to identify actions correlated with learning outcomes</li>
            </ul>
          </div>

          <a href="https://ucladatares.com/teams/consulting/" target="_blank" rel="noopener noreferrer" className="nsdc-website-link" style={{ marginTop: '1.5rem' }}>
            View DataRes Consulting →
          </a>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/datares.jpeg" alt="DataRes Consulting Team" style={{ width: '70%', maxWidth: '600px', borderRadius: '8px', maxHeight: '200px', objectFit: 'cover' }} />
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>DataRes Consulting Team</p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications">
        <h2>Publications</h2>
        <div className="publication-item">
          <p className="publication-title">
            "Assessing the efficacy of classical and deep neuroimaging biomarkers in early Alzheimer's disease diagnosis"
          </p>
          <p className="publication-authors">Milla E. Nielsen, Mads Nielsen, Mostafa Mehdipour Ghazi</p>
          <p className="publication-venue">
            Proc. SPIE 13407, Medical Imaging 2025: Computer-Aided Diagnosis, 1340722 (4 April 2025)
          </p>
          <a href="https://doi.org/10.1117/12.3046952" target="_blank" rel="noopener noreferrer" className="publication-link">
            View Publication →
          </a>
          <img src="/picture_of_my_poster_at_SPIE.jpeg" alt="Research poster at SPIE Medical Imaging" style={{ width: '100%', borderRadius: '8px', marginTop: '1rem', maxHeight: '500px', objectFit: 'contain' }} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="skill-icon-header">
              <FaPython />
              <SiR />
              <FaDatabase />
            </div>
            <h3>Languages</h3>
            <p>Python, R, C++, SQL</p>
          </motion.div>
          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="skill-icon-header">
              <SiPytorch />
              <SiTensorflow />
            </div>
            <h3>ML & Data Science</h3>
            <p>PyTorch, TensorFlow, NumPy, Pandas, Scikit-learn, Hugging Face, OpenCV, ggplot2, Matplotlib</p>
          </motion.div>
          <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="skill-icon-header">
              <FaCloud />
            </div>
            <h3>Cloud & Tools</h3>
            <p>GCP (Cloud Storage, BigQuery), Git/GitHub, Tableau, Jupyter, RStudio, Linux, LaTeX, Unix Bash</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p className="contact-email">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:millaenielsen@gmail.com">millaenielsen@gmail.com</a>
        </p>
        <div className="social-links">
          <a href="https://linkedin.com/in/milla-nielsen" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/millaenielsen" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub /> GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
