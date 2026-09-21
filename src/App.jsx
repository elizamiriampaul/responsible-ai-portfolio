import { useState } from 'react'
import './App.css'

import AIEthicalSolution from './pages/AIEthicalSolution'
import EthicalCaseStudy from './pages/EthicalCaseStudy'
import SpotifyAudit from './pages/SpotifyAudit'
import VotingDesignChallenge from './pages/VotingDesignChallenge'
import TRACEAssignment from './pages/TRACEAssignment'
import AIEthicsAirCanada from './pages/AIEthicsAirCanada'
import GenerativeAIEthicsPortfolio from './pages/GenerativeAIEthicsPortfolio'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  /* =================================
     SUBMISSION PAGE NAVIGATION
  ================================= */

  if (currentPage === 'ai-ethical-solution') {
    return (
      <AIEthicalSolution
        onBack={() => setCurrentPage('home')}
      />
    )
  }

  if (currentPage === 'ethical-case-study') {
    return (
      <EthicalCaseStudy
        onBack={() => setCurrentPage('home')}
      />
    )
  }

  if (currentPage === 'spotify-audit') {
    return (
      <SpotifyAudit
        onBack={() => setCurrentPage('home')}
      />
    )
  }

  if (currentPage === 'voting-design-challenge') {
    return (
      <VotingDesignChallenge
        onBack={() => setCurrentPage('home')}
      />
    )
  }

  if (currentPage === 'trace-assignment') {
    return (
      <TRACEAssignment
        onBack={() => setCurrentPage('home')}
      />
    )
  }

  if (currentPage === 'ai-ethics-air-canada') {
    return (
      <AIEthicsAirCanada
        onBack={() => setCurrentPage('home')}
      />
    )
  }
  if (currentPage === 'generative-ai-ethics') {
  return (
    <GenerativeAIEthicsPortfolio
      onBack={() => setCurrentPage('home')}
    />
  )
}

  /* =================================
     HOMEPAGE
  ================================= */

  return (
    <div className="portfolio">

      {/* =================================
          NAVIGATION
      ================================= */}

      <nav className="navbar">

        <div className="nav-logo">
          Responsible AI
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#submissions">Submissions</a>
          <a href="#themes">Ethical Themes</a>
          <a href="#about">About</a>
        </div>

      </nav>


      {/* =================================
          HERO
      ================================= */}

      <section
        id="home"
        className="hero-section"
      >

        <div className="hero-content">

          <div className="hero-badge">
            ACADEMIC PORTFOLIO · 2026–2027
          </div>

          <p className="eyebrow">
            RESPONSIBLE ARTIFICIAL INTELLIGENCE
          </p>

          <h1>
            Responsible AI
            <span>Academic Portfolio</span>
          </h1>

          <p className="hero-description">
            Exploring how artificial intelligence can be designed,
            evaluated, and governed responsibly through ethical
            analysis, real-world case studies, data audits,
            and human-centred AI design.
          </p>

          <div className="hero-actions">

            <a
              href="#submissions"
              className="hero-button"
            >
              Explore My Work →
            </a>

            <a
              href="#about"
              className="hero-secondary-button"
            >
              About This Portfolio
            </a>

          </div>

        </div>

      </section>


      {/* =================================
          PORTFOLIO STATS
      ================================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-item">
            <strong>07</strong>
            <span>Academic Submissions</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>05+</strong>
            <span>Ethical Dimensions</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>04</strong>
            <span>AI Analysis Approaches</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>01</strong>
            <span>Responsible AI Portfolio</span>
          </div>

        </div>

      </section>


      {/* =================================
          PORTFOLIO OVERVIEW
      ================================= */}

      <section className="overview-section">

        <div className="overview-content">

          <div className="overview-label">
            <span>01</span>
            PORTFOLIO OVERVIEW
          </div>

          <div className="overview-text">

            <h2>
              Understanding AI beyond
              <span> the technology.</span>
            </h2>

            <p>
              Responsible AI requires more than building systems
              that work. It requires understanding how those systems
              affect people, organisations, and society.
            </p>

            <p>
              This portfolio brings together my academic work
              examining ethical challenges in artificial intelligence,
              from algorithmic decision-making and behavioural data
              to accessibility, accountability, transparency,
              and human oversight.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          SUBMISSIONS
      ================================= */}

      <section
        id="submissions"
        className="submissions-section"
      >

        <div className="section-heading">

          <div className="section-label">
            <span>02</span>
            SELECTED ACADEMIC WORK
          </div>

          <h2>
            My Submissions
          </h2>

          <p>
            A collection of assignments, case studies, audits,
            and design challenges developed throughout the course.
          </p>

        </div>


        <div className="submission-grid">


          {/* =================================
              SUBMISSION 1
          ================================= */}

          <div className="submission-card">

            <div className="card-top">
              <div className="card-number">01</div>

              <span className="card-status">
                AI ETHICS
              </span>
            </div>

            <p className="card-type">
              ETHICAL SOLUTION DESIGN
            </p>

            <h3>
              Designing an AI Ethical Solution
            </h3>

            <p>
              AI Driver Fatigue Detection System with ethical
              considerations for fairness, privacy, transparency,
              accountability, and safety.
            </p>

            <div className="card-tags">
              <span>Fairness</span>
              <span>Privacy</span>
              <span>Safety</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('ai-ethical-solution')
              }
            >
              View Submission →
            </button>

          </div>


          {/* =================================
              SUBMISSION 2
          ================================= */}

          <div className="submission-card">

            <div className="card-top">
              <div className="card-number">02</div>

              <span className="card-status">
                CIA 1 · COMPONENT 1
              </span>
            </div>

            <p className="card-type">
              CASE STUDY
            </p>

            <h3>
              Ethical Case Study Analysis
            </h3>

            <p>
              A Responsible AI case study analysing the Netherlands
              Child Benefits Scandal and the ethical failures of
              algorithmic decision-making.
            </p>

            <div className="card-tags">
              <span>Fairness</span>
              <span>Bias</span>
              <span>Accountability</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('ethical-case-study')
              }
            >
              View Submission →
            </button>

          </div>


          {/* =================================
              SUBMISSION 3
          ================================= */}

          <div className="submission-card">

            <div className="card-top">
              <div className="card-number">03</div>

              <span className="card-status">
                CIA 1 · COMPONENT 2
              </span>
            </div>

            <p className="card-type">
              DATA AUDIT
            </p>

            <h3>
              Responsible AI Data Audit of Spotify
            </h3>

            <p>
              A critical analysis of Spotify's privacy, consent,
              behavioural data practices, and ethical implications
              of AI-driven personalisation.
            </p>

            <div className="card-tags">
              <span>Privacy</span>
              <span>Consent</span>
              <span>Data Ethics</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('spotify-audit')
              }
            >
              View Submission →
            </button>

          </div>


          {/* =================================
              SUBMISSION 4
          ================================= */}

          <div className="submission-card">

            <div className="card-top">
              <div className="card-number">04</div>

              <span className="card-status">
                DESIGN CHALLENGE
              </span>
            </div>

            <p className="card-type">
              HUMAN-CENTRED AI
            </p>

            <h3>
              AI-Powered Accessible Voting Assistant
            </h3>

            <p>
              An ethical AI solution designed to improve voting
              accessibility while preserving fairness, privacy,
              transparency, and voter autonomy.
            </p>

            <div className="card-tags">
              <span>Accessibility</span>
              <span>Autonomy</span>
              <span>Fairness</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('voting-design-challenge')
              }
            >
              View Submission →
            </button>

          </div>


          {/* =================================
              SUBMISSION 5
          ================================= */}

          <div className="submission-card">

            <div className="card-top">
              <div className="card-number">05</div>

              <span className="card-status">
                TRACE TEST
              </span>
            </div>

            <p className="card-type">
              DECISION ANALYSIS
            </p>

            <h3>
              Should AI Make This Decision?
            </h3>

            <p>
              An analysis of AI-assisted clinical diagnosis using
              the TRACE framework to evaluate Task, Risk, Authority,
              Contestability, and Evidence.
            </p>

            <div className="card-tags">
              <span>Authority</span>
              <span>Risk</span>
              <span>Evidence</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('trace-assignment')
              }
            >
              View Submission →
            </button>

          </div>


          {/* =================================
              SUBMISSION 6
          ================================= */}

          <div className="submission-card featured-card">

            <div className="card-top">
              <div className="card-number">06</div>

              <span className="card-status">
                CIA 3 · COMPONENT 1
              </span>
            </div>

            <p className="card-type">
              AI ETHICS CANVAS
            </p>

            <h3>
              Delegated Judgment, Retained Responsibility
            </h3>

            <p>
              An AI Ethics Canvas analysis of the Air Canada
              chatbot case, examining accountability, transparency,
              reliability, human oversight, stakeholder impact,
              and responsible AI governance.
            </p>

            <div className="card-tags">
              <span>Accountability</span>
              <span>Transparency</span>
              <span>Oversight</span>
            </div>

            <button
              onClick={() =>
                setCurrentPage('ai-ethics-air-canada')
              }
            >
              View Submission →
            </button>

          </div>
{/* =================================
    SUBMISSION 7
================================= */}

<div className="submission-card featured-card">

  <div className="card-top">
    <div className="card-number">
      07
    </div>

    <span className="card-status">
      CIA 3 · COMPONENT 2
    </span>
  </div>

  <p className="card-type">
    DIGITAL ETHICS PORTFOLIO
  </p>

  <h3>
    When AI Creates Reality
  </h3>

  <p>
    A digital ethics portfolio exploring Generative AI,
    synthetic reality, misinformation, creativity, propaganda,
    global governance, cultural pluralism, and responsible AI use.
  </p>

  <div className="card-tags">
    <span>Generative AI</span>
    <span>Truth</span>
    <span>Creativity</span>
  </div>

  <button
    onClick={() =>
      setCurrentPage('generative-ai-ethics')
    }
  >
    Explore Portfolio →
  </button>

</div>
        </div>

      </section>


      {/* =================================
          ETHICAL THEMES
      ================================= */}

      <section
        id="themes"
        className="themes-section"
      >

        <div className="section-heading">

          <div className="section-label">
            <span>03</span>
            CORE AREAS OF REFLECTION
          </div>

          <h2>
            Ethical Themes
          </h2>

          <p>
            Recurring principles explored across my Responsible AI work.
          </p>

        </div>


        <div className="themes-grid">

          <div className="theme-card">
            <span className="theme-number">01</span>
            <h3>Accountability</h3>
            <p>
              Identifying who remains responsible when AI systems
              make or influence consequential decisions.
            </p>
          </div>

          <div className="theme-card">
            <span className="theme-number">02</span>
            <h3>Fairness</h3>
            <p>
              Examining bias, equal treatment, and the impact of
              automated systems on different groups.
            </p>
          </div>

          <div className="theme-card">
            <span className="theme-number">03</span>
            <h3>Transparency</h3>
            <p>
              Considering whether people can understand, question,
              and meaningfully interact with AI-driven decisions.
            </p>
          </div>

          <div className="theme-card">
            <span className="theme-number">04</span>
            <h3>Privacy</h3>
            <p>
              Evaluating how personal and behavioural data is
              collected, processed, and used by AI systems.
            </p>
          </div>

          <div className="theme-card">
            <span className="theme-number">05</span>
            <h3>Human Oversight</h3>
            <p>
              Exploring when humans should review, supervise,
              challenge, or override automated outputs.
            </p>
          </div>

          <div className="theme-card">
            <span className="theme-number">06</span>
            <h3>Human-Centred Design</h3>
            <p>
              Designing AI systems around human needs, autonomy,
              accessibility, safety, and meaningful participation.
            </p>
          </div>

        </div>

      </section>


      {/* =================================
          ABOUT
      ================================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="section-label">
          <span>04</span>
          ABOUT THIS PORTFOLIO
        </div>

        <h2>
          Responsible AI in Practice
        </h2>

        <p>
          This portfolio documents my learning and academic work
          in Responsible Artificial Intelligence, focusing on the
          ethical design, evaluation, and governance of AI systems.
        </p>

        <p>
          Through case analysis, data audits, ethical frameworks,
          and solution design, the portfolio demonstrates an
          approach to AI that considers not only what technology
          can do, but also what it should do and who should remain
          responsible for its consequences.
        </p>

      </section>


      {/* =================================
          FOOTER
      ================================= */}

      <footer className="footer">

        <div>
          <strong>
            Responsible AI
          </strong>

          <p>
            Academic Portfolio
          </p>
        </div>

        <div className="footer-right">
          <p>
            Eliza Miriam Paul
          </p>

          <p>
            2026–2027
          </p>
        </div>

      </footer>

    </div>
  )
}

export default App