function EthicalCaseStudy({ onBack }) {
  return (
    <div className="submission-page">

      {/* Header */}
      <header className="submission-header">

        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">
          SUBMISSION 02 · CIA 1 COMPONENT 1
        </p>

        <h1>
          Ethical Case Study Analysis
        </h1>

        <p className="submission-subtitle">
          The Netherlands Child Benefits Scandal
          <br />
          <span>(Toeslagenaffaire)</span>
        </p>

      </header>


      <main className="submission-content">

        {/* Introduction */}
        <section className="content-section">

          <p className="section-number">01</p>

          <h2>Introduction</h2>

          <p>
            The Netherlands Child Benefits Scandal, also known as the
            Toeslagenaffaire, is a significant example of ethical
            failure involving algorithmic decision-making in the
            public sector.
          </p>

          <p>
            Between 2013 and 2019, the Dutch Tax and Customs
            Administration used automated risk assessment systems
            and fraud detection processes to identify potential
            misuse of childcare benefits. Thousands of families
            were flagged, resulting in severe financial and social
            consequences for many innocent citizens.
          </p>

        </section>


        {/* Background */}
        <section className="content-section">

          <p className="section-number">02</p>

          <h2>Background</h2>

          <div className="info-card">

            <h3>The System</h3>

            <p>
              The Dutch Tax and Customs Administration used
              algorithmic risk assessment to identify potential
              welfare fraud.
            </p>

          </div>

          <div className="info-card">

            <h3>Purpose</h3>

            <p>
              The system was introduced to reduce welfare fraud,
              improve administrative efficiency, and protect
              public funds.
            </p>

          </div>

          <div className="info-card">

            <h3>What Went Wrong</h3>

            <p>
              The system produced harmful outcomes for thousands
              of families, exposing serious weaknesses in fairness,
              transparency, accountability, and human oversight.
            </p>

          </div>

        </section>


        {/* Problem and Impact */}
        <section className="content-section">

          <p className="section-number">03</p>

          <h2>Problem & Impact</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>01</span>
              <h3>Wrongful Flagging</h3>
              <p>
                Thousands of families were classified as high-risk
                and required to repay benefits.
              </p>
            </div>

            <div className="principle-card">
              <span>02</span>
              <h3>Financial & Emotional Harm</h3>
              <p>
                Families experienced financial hardship, debt,
                emotional distress, and disruption to their lives.
              </p>
            </div>

            <div className="principle-card">
              <span>03</span>
              <h3>Institutional Failures</h3>
              <p>
                Lack of transparency, weak appeals, and
                accountability gaps contributed to the harm.
              </p>
            </div>

            <div className="principle-card">
              <span>04</span>
              <h3>Impact on Children</h3>
              <p>
                Children were indirectly affected by the financial
                and psychological pressures placed on their families.
              </p>
            </div>

          </div>

        </section>


        {/* AI System */}
        <section className="content-section">

          <p className="section-number">04</p>

          <h2>AI System Analysis</h2>

          <p>
            The system used automated risk assessment and fraud
            detection processes. Data inputs included benefit
            applications, tax records, employment information,
            and financial data.
          </p>

          <div className="process-flow">

            <div>
              <span>01</span>
              <strong>Data Inputs</strong>
              <p>
                Applications, tax, employment and financial data
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Risk Scoring</strong>
              <p>
                Automated assessment of potential risk
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Enforcement</strong>
              <p>
                Prioritised cases and repayment demands
              </p>
            </div>

          </div>

        </section>


        {/* Ethical Analysis */}
        <section className="content-section">

          <p className="section-number">05</p>

          <h2>Ethical Analysis</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>01</span>
              <h3>Utilitarian Ethics</h3>
              <p>
                Although fraud reduction and administrative
                efficiency could benefit society, the widespread
                financial, emotional, and social harms outweighed
                the intended benefits. The system therefore failed
                the utilitarian test.
              </p>
            </div>

            <div className="principle-card">
              <span>02</span>
              <h3>Deontological Ethics</h3>
              <p>
                Governments have duties of fairness, due process,
                transparency, and justice. These obligations were
                not adequately fulfilled for affected families.
              </p>
            </div>

            <div className="principle-card">
              <span>03</span>
              <h3>Virtue Ethics</h3>
              <p>
                Fairness, responsibility, honesty, and compassion
                were undermined by reliance on automated processes
                and insufficient response to harmful outcomes.
              </p>
            </div>

            <div className="principle-card">
              <span>04</span>
              <h3>Rights-Based Ethics</h3>
              <p>
                The case raised concerns regarding fair treatment,
                equal protection, privacy, and due process.
              </p>
            </div>

            <div className="principle-card">
              <span>05</span>
              <h3>Care Ethics</h3>
              <p>
                The system failed to sufficiently consider the
                well-being and dignity of economically vulnerable
                families and children.
              </p>
            </div>

          </div>

        </section>


        {/* Responsible AI Evaluation */}
        <section className="content-section">

          <p className="section-number">06</p>

          <h2>Responsible AI Evaluation</h2>

          <div className="content-list">

            <div>
              <strong>Fairness</strong>
              <br />
              The system disproportionately affected certain
              groups and contributed to discriminatory treatment.
            </div>

            <div>
              <strong>Accountability</strong>
              <br />
              Responsibility for harmful decisions was unclear,
              creating gaps between technology, administration,
              and policymakers.
            </div>

            <div>
              <strong>Transparency</strong>
              <br />
              Many citizens did not understand why they had been
              flagged or how decisions were made.
            </div>

            <div>
              <strong>Privacy</strong>
              <br />
              Sensitive personal information was used in risk
              assessments, raising data-governance concerns.
            </div>

            <div>
              <strong>Safety</strong>
              <br />
              The system caused severe financial, emotional, and
              social harm to affected families.
            </div>

            <div>
              <strong>Human Oversight</strong>
              <br />
              Human review mechanisms were inadequate and officials
              relied excessively on automated assessments.
            </div>

          </div>

        </section>


        {/* Recommendations */}
        <section className="highlight-section mitigation">

          <p className="section-number">07</p>

          <h2>Recommendations</h2>

          <div className="content-list">

            <div>
              Regular algorithmic audits to identify bias and
              discriminatory outcomes.
            </div>

            <div>
              Clear explanations for automated decisions.
            </div>

            <div>
              Stronger human oversight for high-impact decisions.
            </div>

            <div>
              Fairness and impact assessments before deployment.
            </div>

            <div>
              Independent accountability mechanisms.
            </div>

            <div>
              Stronger data governance and privacy protections.
            </div>

            <div>
              Responsible AI regulations requiring fairness,
              transparency, and explainability.
            </div>

          </div>

        </section>


        {/* Conclusion */}
        <section className="content-section">

          <p className="section-number">08</p>

          <h2>Conclusion</h2>

          <p>
            The Netherlands Child Benefits Scandal demonstrates
            the serious risks of deploying algorithmic decision
            systems without adequate ethical safeguards.
          </p>

          <p>
            The case shows that Responsible AI requires more than
            technical effectiveness. Fairness, accountability,
            transparency, human rights, human oversight, and public
            trust must remain central when AI systems influence
            decisions that affect people's lives.
          </p>

        </section>


        <div className="page-bottom">

          <button
            className="back-button"
            onClick={onBack}
          >
            ← Back to Portfolio
          </button>

        </div>

      </main>

    </div>
  )
}

export default EthicalCaseStudy