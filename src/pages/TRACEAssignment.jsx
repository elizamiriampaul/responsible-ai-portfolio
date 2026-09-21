function TRACEAssignment({ onBack }) {
  return (
    <div className="submission-page">

      <header className="submission-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">TRACE TEST · SUBMISSION 05</p>

        <h1>
          Should AI Make This
          <span>Decision?</span>
        </h1>

        <p className="submission-subtitle">
          Delegating Human Judgment to Machines: Where Should Automation Stop?
        </p>
      </header>


      <main className="submission-content">

        {/* Overview */}
        <section className="content-section">
          <p className="section-number">01 · SCENARIO</p>

          <h2>AI-Assisted Clinical Diagnosis</h2>

          <p>
            This submission applies the TRACE framework to AI-assisted
            clinical diagnosis and treatment decision-making. AI systems can
            analyse medical images, laboratory results, and vital signs to
            identify patterns, generate risk scores, and flag possible
            conditions before a clinician makes a final decision.
          </p>

          <div className="info-card">
            <h3>Central Question</h3>

            <p>
              Should AI independently make high-stakes clinical decisions, or
              should it remain a decision-support tool under meaningful human
              oversight?
            </p>
          </div>
        </section>


        {/* TRACE */}
        <section className="content-section">
          <p className="section-number">02 · FRAMEWORK</p>

          <h2>The TRACE Analysis</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>T</span>

              <h3>Task</h3>

              <p>
                AI is well suited for analysing large and structured datasets,
                detecting anomalies, generating risk scores, and prioritising
                cases for review. Automation should stop before final clinical
                interpretation and judgment.
              </p>
            </div>

            <div className="principle-card">
              <span>R</span>

              <h3>Risk</h3>

              <p>
                Misdiagnosis can cause severe or irreversible harm. False
                negatives may delay treatment, while false positives can cause
                unnecessary distress and procedures.
              </p>
            </div>

            <div className="principle-card">
              <span>A</span>

              <h3>Authority</h3>

              <p>
                A licensed clinician must retain authority to review, question,
                override, or halt AI-generated recommendations. Human
                oversight must be meaningful, not symbolic.
              </p>
            </div>

            <div className="principle-card">
              <span>C</span>

              <h3>Contestability</h3>

              <p>
                Patients must have a clear and accessible pathway to understand
                and challenge an AI-supported diagnosis, including review by a
                qualified human professional.
              </p>
            </div>

            <div className="principle-card">
              <span>E</span>

              <h3>Evidence</h3>

              <p>
                Narrow-task AI can perform strongly in areas such as medical
                image analysis, but benchmark accuracy alone cannot replace
                contextual clinical judgment in real-world settings.
              </p>
            </div>

          </div>
        </section>


        {/* Decision boundary */}
        <section className="content-section">
          <p className="section-number">03 · DECISION BOUNDARY</p>

          <h2>Where Should Automation Stop?</h2>

          <div className="process-flow">

            <div>
              <span>AI SUPPORT</span>

              <strong>Analyse</strong>

              <p>
                AI analyses medical images, laboratory data, vital signs, and
                large clinical datasets to identify relevant patterns.
              </p>
            </div>

            <div>
              <span>AI SUPPORT</span>

              <strong>Prioritise</strong>

              <p>
                The system generates risk scores, flags anomalies, and helps
                clinicians prioritise cases requiring urgent attention.
              </p>
            </div>

            <div>
              <span>HUMAN AUTHORITY</span>

              <strong>Decide</strong>

              <p>
                A qualified clinician retains final authority over diagnosis,
                treatment planning, patient communication, and exceptional
                cases.
              </p>
            </div>

          </div>
        </section>


        {/* AI vs Human */}
        <section className="content-section">
          <p className="section-number">04 · ROLE ALLOCATION</p>

          <h2>AI-Assisted vs Human-Led Functions</h2>

          <div className="principles-grid">

            <div className="highlight-section risk">
              <p className="section-number">AI SHOULD ASSIST WITH</p>

              <div className="content-list">
                <div>Image and laboratory-data pattern analysis</div>
                <div>Risk scoring and case triage</div>
                <div>Prioritising urgent cases</div>
                <div>Flagging anomalies for clinician attention</div>
              </div>
            </div>

            <div className="highlight-section mitigation">
              <p className="section-number">MUST REMAIN HUMAN</p>

              <div className="content-list">
                <div>Final diagnosis and treatment planning</div>
                <div>Communication of outcomes to patients</div>
                <div>Judgment in ethically ambiguous cases</div>
                <div>Overriding or rejecting AI recommendations</div>
              </div>
            </div>

          </div>
        </section>


        {/* Safeguard */}
        <section className="content-section">
          <p className="section-number">05 · SAFEGUARD</p>

          <div className="highlight-section mitigation">
            <h2>Mandatory Human Clinician Sign-Off</h2>

            <p>
              No AI-generated diagnosis should be acted upon or communicated to
              a patient without explicit review and approval by a licensed
              clinician. The clinician must retain genuine authority and veto
              power over the AI system.
            </p>
          </div>
        </section>


        {/* Conclusion */}
        <section className="content-section">
          <p className="section-number">06 · CONCLUSION</p>

          <h2>Partially Automated, Human-Accountable</h2>

          <p>
            AI should function as a decision-support tool that accelerates
            detection and reduces clinician workload, while final diagnostic
            and treatment authority remains with a qualified human. The
            severity of potential harm and the current limits of AI's
            contextual judgment mean that full automation is not justified.
          </p>
        </section>


        <div className="page-bottom">
          <button className="back-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
        </div>

      </main>
    </div>
  )
}

export default TRACEAssignment