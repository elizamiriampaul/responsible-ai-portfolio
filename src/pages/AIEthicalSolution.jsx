function AIEthicalSolution({ onBack }) {
  return (
    <div className="submission-page">

      {/* Header */}
      <header className="submission-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">SUBMISSION 01 · AI ETHICS</p>

        <h1>Designing an AI Ethical Solution</h1>

        <p className="submission-subtitle">
          AI Driver Fatigue Detection System
        </p>
      </header>


      {/* Main Content */}
      <main className="submission-content">

        {/* Problem */}
        <section className="content-section">
          <p className="section-number">01</p>

          <h2>Problem Statement</h2>

          <p>
            Driver fatigue is a major cause of road accidents worldwide.
            An AI Driver Fatigue Detection System can monitor a driver's
            behaviour in real time and provide alerts when signs of
            drowsiness or loss of attention are detected.
          </p>
        </section>


        {/* Data */}
        <section className="content-section">
          <p className="section-number">02</p>

          <h2>Data Required</h2>

          <div className="content-list">
            <div>Camera footage of the driver's face</div>
            <div>Eye movement and blinking patterns</div>
            <div>Head position and facial expressions</div>
            <div>Driving behaviour data</div>
            <div>Vehicle speed and steering information</div>
          </div>
        </section>


        {/* Output */}
        <section className="content-section">
          <p className="section-number">03</p>

          <h2>Expected Output</h2>

          <div className="content-list">
            <div>Detection of driver fatigue levels</div>
            <div>Real-time warning alerts</div>
            <div>Recommendations for rest breaks</div>
          </div>
        </section>


        {/* Ethical Principles */}
        <section className="content-section">
          <p className="section-number">04</p>

          <h2>Ethical Principles</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>01</span>
              <h3>Fairness</h3>
              <p>
                Ensure accurate performance for drivers of different
                ages, genders, and appearances.
              </p>
            </div>

            <div className="principle-card">
              <span>02</span>
              <h3>Privacy</h3>
              <p>
                Protect video recordings and personal driving data.
              </p>
            </div>

            <div className="principle-card">
              <span>03</span>
              <h3>Transparency</h3>
              <p>
                Explain how fatigue is detected and when alerts
                are triggered.
              </p>
            </div>

            <div className="principle-card">
              <span>04</span>
              <h3>Accountability</h3>
              <p>
                Manufacturers and developers should be responsible
                for system performance.
              </p>
            </div>

            <div className="principle-card">
              <span>05</span>
              <h3>Safety & Reliability</h3>
              <p>
                The system must provide accurate and timely alerts
                to prevent accidents.
              </p>
            </div>

          </div>
        </section>


        {/* Risk */}
        <section className="highlight-section risk">
          <p className="section-number">05</p>

          <h2>Ethical Risk</h2>

          <p>
            Continuous monitoring through cameras may violate the
            driver's privacy and create concerns about data misuse.
          </p>
        </section>


        {/* Mitigation */}
        <section className="highlight-section mitigation">
          <p className="section-number">06</p>

          <h2>Mitigation Strategy</h2>

          <p>
            Store only essential data, encrypt all collected
            information, obtain user consent, and delete recordings
            when they are no longer needed.
          </p>
        </section>


        {/* Bottom navigation */}
        <div className="page-bottom">
          <button className="back-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
        </div>

      </main>

    </div>
  )
}

export default AIEthicalSolution