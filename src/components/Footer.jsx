import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Milla Nielsen</h3>
            <p>Data Scientist passionate about using AI for good</p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://linkedin.com/in/milla-nielsen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/millaenielsen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:millaenielsen@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/Milla_Nielsen_Resume.pdf" download>Resume</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Milla Nielsen. Made with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
