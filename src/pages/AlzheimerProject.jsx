import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

function AlzheimerProject() {
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
          <h1>Alzheimer's Neuroimaging Biomarkers</h1>
          <p className="project-detail-subtitle">
            Pioneer Centre for AI – University of Copenhagen | Summer 2024
          </p>
          <div className="project-detail-links">
            <a href="https://github.com/millaenielsen/imaging-biomarkers" target="_blank" rel="noopener noreferrer" className="detail-link">
              <FaGithub /> View on GitHub
            </a>
            <a href="https://doi.org/10.1117/12.3046952" target="_blank" rel="noopener noreferrer" className="detail-link">
              <FaExternalLinkAlt /> Published Paper
            </a>
          </div>
        </div>

        <img src="/imaging_biomarkers_project.png" alt="Alzheimer's Neuroimaging Project" className="project-detail-image" />

        <section className="project-detail-section">
          <h2>Overview</h2>
          <p>
            This research project compares classical and deep learning approaches for identifying neuroimaging
            biomarkers in early Alzheimer's Disease diagnosis. The work was conducted during my internship at
            the Pioneer Centre for AI at the University of Copenhagen and resulted in a publication presented
            at SPIE Medical Imaging 2025 in San Diego, California.
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Research Question</h2>
          <p>
            Can we improve early Alzheimer's Disease detection by combining classical neuroimaging biomarkers
            with deep learning-derived features from 3D CNNs?
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Dataset</h2>
          <div className="detail-grid">
            <div className="detail-card">
              <h3>Source</h3>
              <p>Alzheimer's Disease Neuroimaging Initiative (ADNI)</p>
            </div>
            <div className="detail-card">
              <h3>Subset</h3>
              <p>ADNI1 Screening 1.5T</p>
            </div>
            <div className="detail-card">
              <h3>Sample Size</h3>
              <p>503 subjects at baseline</p>
            </div>
            <div className="detail-card">
              <h3>Imaging Type</h3>
              <p>T1-weighted brain MRIs</p>
            </div>
          </div>
          <p className="detail-note">
            <strong>Preprocessing:</strong> FreeSurfer cross-sectional pipeline including motion correction,
            bias field adjustment, MNI305 registration, resampling to 1mm isotropic resolution, and intensity
            normalization to [0, 255]. Average voxel dimensions: 1×1×1.2 mm³.
          </p>
        </section>

        <section className="project-detail-section">
          <h2>Methodology</h2>

          <h3>Classical Approach</h3>
          <ul>
            <li>XGBoost classification for three Alzheimer's disease stages</li>
            <li>Feature engineering using traditional neuroimaging biomarkers</li>
            <li>Hyperparameter tuning via cross-validation</li>
          </ul>

          <h3>Deep Learning Approaches</h3>
          <ul>
            <li><strong>ResNet18-3D:</strong> Three-dimensional feature extraction from brain MRI scans</li>
            <li><strong>MedicalNet ResNet-50:</strong> Transfer learning using pretrained weights specifically designed for medical imaging</li>
            <li>PyTorch implementation with GPU acceleration</li>
            <li>Feature extraction followed by XGBoost classification</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>Key Results</h2>
          <div className="results-highlight">
            <div className="result-metric">
              <h3>0.84 AUC</h3>
              <p>Overall model performance</p>
            </div>
            <div className="result-metric">
              <h3>503 Subjects</h3>
              <p>Successfully analyzed</p>
            </div>
            <div className="result-metric">
              <h3>Published</h3>
              <p>SPIE Medical Imaging 2025</p>
            </div>
          </div>
          <ul>
            <li>Achieved 0.84 AUC for early Alzheimer's detection, enabling earlier diagnosis</li>
            <li>Successfully compared classical biomarkers with deep learning-derived features</li>
            <li>ROC analysis and statistical validation confirmed model reliability</li>
            <li>Findings contributed to peer-reviewed conference paper</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">PyTorch</span>
            <span className="tech-badge">XGBoost</span>
            <span className="tech-badge">Jupyter Notebook</span>
            <span className="tech-badge">h5py</span>
            <span className="tech-badge">FreeSurfer</span>
            <span className="tech-badge">NumPy</span>
            <span className="tech-badge">3D CNNs</span>
            <span className="tech-badge">Transfer Learning</span>
          </div>
        </section>

        <section className="project-detail-section">
          <h2>Impact & Publication</h2>
          <p>
            This research was presented at SPIE Medical Imaging 2025, one of the premier conferences in
            medical imaging and computer-aided diagnosis. The work demonstrates the potential of combining
            traditional neuroimaging biomarkers with modern deep learning approaches to improve early
            detection of Alzheimer's Disease.
          </p>
          <div className="publication-box">
            <p className="publication-title">
              "Assessing the efficacy of classical and deep neuroimaging biomarkers in early Alzheimer's disease diagnosis"
            </p>
            <p className="publication-authors">Milla E. Nielsen, Mads Nielsen, Mostafa Mehdipour Ghazi</p>
            <p className="publication-venue">
              Proc. SPIE 13407, Medical Imaging 2025: Computer-Aided Diagnosis, 1340722 (4 April 2025)
            </p>
          </div>
          <img src="/Milla_at_SPIE_medical_imaging_with_my_poster.png" alt="Presenting at SPIE 2025" className="project-detail-image" />
        </section>

        <section className="project-detail-section">
          <h2>Key Learnings</h2>
          <ul>
            <li>Gained hands-on experience with medical imaging data and preprocessing pipelines</li>
            <li>Learned to implement and fine-tune 3D CNNs for volumetric medical data</li>
            <li>Developed skills in transfer learning with domain-specific pretrained models</li>
            <li>Practiced rigorous statistical validation and performance assessment</li>
            <li>Contributed to peer-reviewed research and presented at an international conference</li>
          </ul>
        </section>
      </motion.div>
    </div>
  )
}

export default AlzheimerProject
