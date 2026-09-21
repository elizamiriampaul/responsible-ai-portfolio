function AIEthicsAirCanada({ onBack }) {
  return (
    <div className="submission-page">

      {/* Header */}
      <header className="submission-header">

        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">
          CIA 3 · COMPONENT 1
        </p>

        <h1>
          Delegated Judgment,
          <span>Retained Responsibility</span>
        </h1>

        <p className="submission-subtitle">
          AI Ethics Canvas · Moffatt v. Air Canada, 2024 BCCRT 149
        </p>

      </header>


      {/* Main Content */}
      <main className="submission-content">


        {/* Ethical Question */}
        <section className="highlight-section">

          <p className="section-number">
            CORE ETHICAL QUESTION
          </p>

          <h2>
            Who remains responsible when AI causes harm?
          </h2>

          <p>
            When an organization delegates customer-facing information
            to an AI system, who remains responsible when the AI provides
            inaccurate information that causes harm?
          </p>

        </section>


        {/* System Under Review */}
        <section className="content-section">

          <p className="section-number">
            01 · SYSTEM UNDER REVIEW
          </p>

          <h2>
            AI Customer-Service Chatbot
          </h2>

          <p>
            The system under review is an AI-driven customer-service
            chatbot used by Air Canada. It was automated and
            task-specific rather than a fully autonomous agent in the
            strict technical sense.
          </p>

        </section>


        {/* Ethical Issues */}
        <section className="content-section">

          <p className="section-number">
            02 · ETHICAL ISSUES
          </p>

          <h2>
            Key Ethical Concerns
          </h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>ACCOUNTABILITY</span>
              <h3>Accountability Displacement</h3>
              <p>
                Responsibility cannot simply be detached from the
                organization that deployed and benefited from the AI
                system.
              </p>
            </div>

            <div className="principle-card">
              <span>RELIABILITY</span>
              <h3>Accuracy & Reliability</h3>
              <p>
                An inaccurate bereavement-fare policy was presented
                as fact, creating a risk of customers acting on
                unreliable information.
              </p>
            </div>

            <div className="principle-card">
              <span>TRANSPARENCY</span>
              <h3>Transparency & Trust</h3>
              <p>
                Customers interacting with an official company channel
                can reasonably trust the information provided to them.
              </p>
            </div>

            <div className="principle-card">
              <span>OVERSIGHT</span>
              <h3>Human Oversight</h3>
              <p>
                No meaningful escalation path existed for a
                consequential fare-exception query.
              </p>
            </div>

            <div className="principle-card">
              <span>FAIRNESS</span>
              <h3>Responsible Delegation</h3>
              <p>
                Automating customer service shifts the labour involved,
                but it does not remove the organization's duty of care.
              </p>
            </div>

            <div className="principle-card">
              <span>TRUST</span>
              <h3>Consistent Treatment</h3>
              <p>
                Unmonitored AI systems can provide different answers
                to different customers, undermining fairness and trust.
              </p>
            </div>

          </div>

        </section>


        {/* Stakeholders */}
        <section className="content-section">

          <p className="section-number">
            03 · STAKEHOLDER ANALYSIS
          </p>

          <h2>
            Who Is Affected?
          </h2>

          <div className="content-list">

            <div>
              <strong>Jake Moffatt — Customer</strong>
              <br />
              Relied in good faith on an official channel and experienced
              financial loss and the burden of seeking redress.
            </div>

            <div>
              <strong>Other Air Canada Customers</strong>
              <br />
              Remain exposed to the same class of chatbot error and
              require consistent, verifiable information.
            </div>

            <div>
              <strong>Air Canada</strong>
              <br />
              Faced legal and reputational consequences from its
              automation decision.
            </div>

            <div>
              <strong>Management / Decision-Makers</strong>
              <br />
              Responsible for approving deployment without adequate
              content-verification safeguards.
            </div>

            <div>
              <strong>AI Developers / Technical Team</strong>
              <br />
              Responsible for designing a system capable of presenting
              an unfounded policy claim as fact.
            </div>

            <div>
              <strong>Regulators / Civil Resolution Tribunal</strong>
              <br />
              Establish a consumer-protection precedent for
              AI-mediated statements.
            </div>

          </div>

        </section>


        {/* Risk */}
        <section className="highlight-section risk">

          <p className="section-number">
            04 · HARM & RISK ASSESSMENT
          </p>

          <h2>
            Actual and Systemic Harm
          </h2>

          <p>
            <strong>Actual harm:</strong> The case involved direct
            financial loss, stress, time, and the cost of pursuing
            a formal tribunal claim.
          </p>

          <div className="content-list">

            <div>
              <strong>Scalable misinformation</strong>
              <br />
              One defective answer can potentially misinform many
              customers. Impact: High · Likelihood: Medium
            </div>

            <div>
              <strong>Over-reliance on AI</strong>
              <br />
              Repeated dependence on AI-generated information can
              weaken routine verification habits.
            </div>

            <div>
              <strong>Accountability gaps</strong>
              <br />
              Unclear responsibility can slow redress for future
              customers.
            </div>

            <div>
              <strong>Inconsistent treatment</strong>
              <br />
              Different chatbot responses can undermine consistent
              treatment of customers.
            </div>

          </div>

        </section>


        {/* Accountability */}
        <section className="content-section">

          <p className="section-number">
            05 · RESPONSIBILITY & ACCOUNTABILITY
          </p>

          <h2>
            Responsibility Cannot Be Delegated Away
          </h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>PRIMARY</span>
              <h3>Air Canada</h3>
              <p>
                As the organization deploying the chatbot as an
                official customer channel, Air Canada retained
                primary accountability.
              </p>
            </div>

            <div className="principle-card">
              <span>OPERATIONAL</span>
              <h3>Management</h3>
              <p>
                Responsible for approving deployment without adequate
                escalation and content-verification controls.
              </p>
            </div>

            <div className="principle-card">
              <span>TECHNICAL</span>
              <h3>Developers & Provider</h3>
              <p>
                Responsible for building and supplying a system that
                could present unsupported claims as factual information.
              </p>
            </div>

            <div className="principle-card">
              <span>OVERSIGHT</span>
              <h3>Regulators / CRT</h3>
              <p>
                Establish the wider precedent that AI-mediated
                statements can carry the same responsibility as
                human-provided information.
              </p>
            </div>

          </div>

        </section>


        {/* Recommendations */}
        <section className="content-section">

          <p className="section-number">
            06 · RECOMMENDATIONS
          </p>

          <h2>
            Designing for Responsible AI
          </h2>

          <div className="content-list">

            <div>
              <strong>01 — Verified Knowledge Base</strong>
              <br />
              Synchronise chatbot information with current,
              controlled company policies.
            </div>

            <div>
              <strong>02 — Human Escalation</strong>
              <br />
              Route high-impact, legal, or financial queries to
              human representatives.
            </div>

            <div>
              <strong>03 — Continuous Testing</strong>
              <br />
              Regularly audit chatbot responses against live policy.
            </div>

            <div>
              <strong>04 — Named Accountability Owner</strong>
              <br />
              Assign responsibility for chatbot content accuracy.
            </div>

            <div>
              <strong>05 — Incident Logging</strong>
              <br />
              Maintain audit trails for significant chatbot responses.
            </div>

            <div>
              <strong>06 — Transparent AI Disclosure</strong>
              <br />
              Clearly disclose when users are interacting with an AI
              system.
            </div>

            <div>
              <strong>07 — Easy Error Reporting</strong>
              <br />
              Give users a simple mechanism for reporting incorrect
              information.
            </div>

            <div>
              <strong>08 — High-Risk Topic Review</strong>
              <br />
              Periodically assess whether sensitive topics are
              appropriate for chatbot handling.
            </div>

          </div>

        </section>


        {/* Timeline */}
        <section className="content-section">

          <p className="section-number">
            07 · TIMELINE
          </p>

          <h2>
            From Chatbot Error to Tribunal Decision
          </h2>

          <div className="process-flow">

            <div>
              <span>NOV 2022</span>
              <strong>Chatbot Interaction</strong>
              <p>
                Customer interacts with Air Canada's chatbot.
              </p>
            </div>

            <div>
              <span>INCIDENT</span>
              <strong>Incorrect Information</strong>
              <p>
                Incorrect bereavement-fare information is provided.
              </p>
            </div>

            <div>
              <span>RELIANCE</span>
              <strong>Customer Acts</strong>
              <p>
                Customer relies on the information and travels.
              </p>
            </div>

            <div>
              <span>DISPUTE</span>
              <strong>Refund Denied</strong>
              <p>
                The customer's refund request is denied.
              </p>
            </div>

            <div>
              <span>2024</span>
              <strong>Tribunal Decision</strong>
              <p>
                The BC Civil Resolution Tribunal rules on the case.
              </p>
            </div>

            <div>
              <span>OUTCOME</span>
              <strong>Air Canada Responsible</strong>
              <p>
                The organization is held responsible for the
                chatbot's misleading information.
              </p>
            </div>

          </div>

        </section>


        {/* Conclusion */}
        <section className="highlight-section mitigation">

          <p className="section-number">
            08 · ETHICAL JUDGMENT
          </p>

          <h2>
            Organizations May Delegate Tasks —
            <br />
            Not Accountability.
          </h2>

          <p>
            AI-driven customer service is ethically acceptable only
            when organizations maintain reliable information controls,
            meaningful human oversight, transparency, and clear
            accountability for harms caused by AI-generated information.
          </p>

        </section>


        <div className="page-bottom">

          <button className="back-button" onClick={onBack}>
            ← Back to Portfolio
          </button>

        </div>

      </main>


      {/* Footer */}
      <footer className="footer">

        <p>
          Responsible AI Academic Portfolio
        </p>

        <p>
          Eliza Miriam Paul · 2026–2027
        </p>

      </footer>

    </div>
  )
}

export default AIEthicsAirCanada