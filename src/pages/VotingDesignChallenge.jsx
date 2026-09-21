function VotingDesignChallenge({ onBack }) {
  return (
    <div className="submission-page">

      {/* Header */}
      <header className="submission-header">

        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">
          SUBMISSION 04 · RESPONSIBLE AI DESIGN CHALLENGE
        </p>

        <h1>
          AI-Powered Accessible
          <span>Voting Assistant</span>
        </h1>

        <p className="submission-subtitle">
          An AI solution designed to improve accessibility in voting
          while preserving fairness, privacy, transparency, human
          oversight, and voter autonomy.
        </p>

      </header>


      <main className="submission-content">

        {/* 01 — Problem */}
        <section className="content-section">

          <p className="section-number">01</p>

          <h2>The Problem</h2>

          <p>
            Accessible voting remains difficult for people with visual
            impairments, mobility limitations, low literacy, and
            language barriers.
          </p>

          <p>
            The proposed AI-powered voting assistant is designed to
            help voters understand and navigate ballots while
            maintaining election integrity and voter autonomy.
          </p>

          <div className="highlight-section mitigation">

            <p className="section-number">
              CORE PRINCIPLE
            </p>

            <h2>
              Assist the voter — never influence the voter.
            </h2>

            <p>
              The AI provides accessibility support and information
              but does not recommend candidates, influence choices,
              or make electoral decisions on behalf of the voter.
            </p>

          </div>

        </section>


        {/* 02 — System Design */}
        <section className="content-section">

          <p className="section-number">02</p>

          <h2>How the AI Assistant Works</h2>

          <div className="principles-grid">

            <div className="principle-card">

              <span>01</span>

              <h3>Present Ballot</h3>

              <p>
                The system presents official ballot information using
                accessible interfaces.
              </p>

            </div>


            <div className="principle-card">

              <span>02</span>

              <h3>Accessible Input</h3>

              <p>
                Voters can interact through voice commands and other
                accessibility controls.
              </p>

            </div>


            <div className="principle-card">

              <span>03</span>

              <h3>Confirmation</h3>

              <p>
                The system asks the voter to confirm their selection
                before submission.
              </p>

            </div>


            <div className="principle-card">

              <span>04</span>

              <h3>Secure Vote</h3>

              <p>
                The confirmed vote is securely and confidentially
                transmitted.
              </p>

            </div>

          </div>

        </section>


        {/* 03 — Data */}
        <section className="content-section">

          <p className="section-number">03</p>

          <h2>Data Required</h2>

          <div className="content-list">

            <div>
              <strong>Official ballot information</strong>
              <br />
              Official election and ballot information required
              to present the voting interface.
            </div>

            <div>
              <strong>Candidate names and symbols</strong>
              <br />
              Official candidate information displayed to voters.
            </div>

            <div>
              <strong>Multilingual speech datasets</strong>
              <br />
              Data required to support accessible voice interaction
              across different languages.
            </div>

            <div>
              <strong>Accessibility preferences</strong>
              <br />
              User-selected accessibility settings used to adapt
              the interface.
            </div>

            <div>
              <strong>Election rules</strong>
              <br />
              Rules and constraints required for correct ballot
              presentation and validation.
            </div>

            <div>
              <strong>Anonymous performance logs</strong>
              <br />
              Limited system-performance information used for
              monitoring and improvement.
            </div>

          </div>


          <div className="highlight-section mitigation">

            <p className="section-number">
              PRIVACY BY DESIGN
            </p>

            <h2>
              Personal voting choices are never stored.
            </h2>

            <p>
              Privacy is treated as a core requirement rather than
              an additional feature of the system.
            </p>

          </div>

        </section>


        {/* 04 — Ethical Risks */}
        <section className="content-section">

          <p className="section-number">04</p>

          <h2>Ethical Risks</h2>

          <div className="principles-grid">

            <div className="principle-card">

              <span>01</span>

              <h3>Speech Recognition Errors</h3>

              <p>
                An incorrect interpretation of a voter's voice
                command could result in an unintended candidate
                being selected.
              </p>

            </div>


            <div className="principle-card">

              <span>02</span>

              <h3>Language Bias</h3>

              <p>
                Speech recognition or language models could perform
                differently across languages or demographic groups.
              </p>

            </div>


            <div className="principle-card">

              <span>03</span>

              <h3>Automation Bias</h3>

              <p>
                Voters might trust an AI system without carefully
                reviewing their selections.
              </p>

            </div>


            <div className="principle-card">

              <span>04</span>

              <h3>Unintentional Influence</h3>

              <p>
                Voice emphasis, interface design, or response timing
                could unintentionally influence voter decisions.
              </p>

            </div>

          </div>

        </section>


        {/* 05 — Responsible AI Safeguards */}
        <section className="content-section">

          <p className="section-number">05</p>

          <h2>Responsible AI Safeguards</h2>

          <div className="principles-grid">

            <div className="principle-card">

              <span>01</span>

              <h3>Fairness</h3>

              <p>
                Test recognition accuracy across different
                languages, disabilities, ages, and demographic
                groups.
              </p>

            </div>


            <div className="principle-card">

              <span>02</span>

              <h3>Transparency</h3>

              <p>
                Clearly communicate that the AI provides accessibility
                support and never recommends candidates.
              </p>

            </div>


            <div className="principle-card">

              <span>03</span>

              <h3>Human Oversight</h3>

              <p>
                The voter makes every final decision while appropriate
                human oversight is maintained over system functionality.
              </p>

            </div>


            <div className="principle-card">

              <span>04</span>

              <h3>Privacy</h3>

              <p>
                Process voice commands locally whenever possible and
                delete temporary voice data after confirmation.
              </p>

            </div>


            <div className="principle-card">

              <span>05</span>

              <h3>Security</h3>

              <p>
                Use strong encryption when communicating between
                voting devices and election servers.
              </p>

            </div>


            <div className="principle-card">

              <span>06</span>

              <h3>Accessibility</h3>

              <p>
                Support multilingual, voice-enabled, and adaptive
                interfaces for diverse voters.
              </p>

            </div>

          </div>

        </section>


        {/* 06 — Sustainability */}
        <section className="content-section">

          <p className="section-number">06</p>

          <h2>Sustainability</h2>

          <div className="content-list">

            <div>
              <strong>Existing Infrastructure</strong>
              <br />
              Use existing voting infrastructure where possible.
            </div>

            <div>
              <strong>Energy Efficiency</strong>
              <br />
              Optimise AI models for lower energy consumption.
            </div>

            <div>
              <strong>Reduced Physical Materials</strong>
              <br />
              Reduce printed accessibility materials where
              appropriate.
            </div>

            <div>
              <strong>Long-Term Maintenance</strong>
              <br />
              Extend system longevity through responsible software
              updates and maintenance.
            </div>

          </div>

        </section>


        {/* 07 — Ethical Design Principles */}
        <section className="content-section">

          <p className="section-number">07</p>

          <h2>Responsible AI in the Design</h2>

          <p>
            The proposed system applies Responsible AI principles
            throughout its design rather than treating ethics as a
            final-stage consideration.
          </p>

          <div className="content-list">

            <div>
              <strong>Fairness</strong>
              <br />
              The system should provide reliable accessibility across
              different groups and languages.
            </div>

            <div>
              <strong>Privacy</strong>
              <br />
              Sensitive voter information should be minimised,
              protected, and deleted when no longer required.
            </div>

            <div>
              <strong>Transparency</strong>
              <br />
              Users should understand what the AI does and what it
              does not do.
            </div>

            <div>
              <strong>Accountability</strong>
              <br />
              Clear responsibility should exist for system design,
              deployment, monitoring, and failures.
            </div>

            <div>
              <strong>Human Autonomy</strong>
              <br />
              The voter remains the sole decision-maker.
            </div>

          </div>

        </section>


        {/* 08 — Conclusion */}
        <section className="content-section">

          <p className="section-number">08</p>

          <h2>Conclusion</h2>

          <p>
            An AI-powered voting accessibility assistant can improve
            democratic participation when designed around fairness,
            transparency, privacy, accountability, accessibility,
            and human oversight.
          </p>

          <p>
            The system should remain a facilitator of inclusive
            democracy rather than an influence on electoral outcomes.
          </p>

          <div className="highlight-section mitigation">

            <p className="section-number">
              FINAL DESIGN PRINCIPLE
            </p>

            <h2>
              AI should facilitate participation,
              not influence it.
            </h2>

            <p>
              Responsible AI design means ensuring that technology
              expands access while preserving the dignity, autonomy,
              privacy, and freedom of every voter.
            </p>

          </div>

        </section>


        {/* Back */}
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

export default VotingDesignChallenge