function SpotifyAudit({ onBack }) {
  return (
    <div className="submission-page">

      {/* Header */}
      <header className="submission-header">

        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <p className="eyebrow">
          SUBMISSION 03 · CIA 1 COMPONENT 2
        </p>

        <h1>
          Responsible AI Data Audit
        </h1>

        <p className="submission-subtitle">
          Spotify · Privacy, Consent & Data Power
        </p>

      </header>


      <main className="submission-content">

        {/* Introduction */}
        <section className="content-section">

          <p className="section-number">01</p>

          <h2>Introduction</h2>

          <p>
            Spotify was selected for this Responsible Data Audit because
            its personalised recommendation system relies heavily on
            user data and behavioural information.
          </p>

          <p>
            The audit examines how Spotify collects and processes
            personal data, how consent is obtained, and what ethical
            concerns arise from privacy, data power, digital inequality,
            and AI-driven personalisation.
          </p>

        </section>


        {/* Data Collection */}
        <section className="content-section">

          <p className="section-number">02</p>

          <h2>Privacy & Consent Analysis</h2>

          <div className="info-card">

            <h3>Data Collected</h3>

            <p>
              Spotify's data practices include account information,
              usage information such as search queries, streaming
              history, playlists and browsing activity, interactions
              with the service, technical information, and other
              information used to personalise the experience.
            </p>

          </div>


          <div className="info-card">

            <h3>Purpose of Collection</h3>

            <p>
              Data is used to provide and personalise the Spotify
              service, improve recommendations, support advertising
              where applicable, diagnose issues, develop new features,
              and meet legal obligations.
            </p>

          </div>

        </section>


        {/* Consent */}
        <section className="content-section">

          <p className="section-number">03</p>

          <h2>Consent Mechanisms</h2>

          <p>
            Spotify requires users to accept its Terms of Service and
            Privacy Policy when creating an account. Additional
            permissions, such as microphone or location access, may
            be requested separately when users use specific features.
          </p>

          <div className="highlight-section risk">

            <p className="section-number">
              RESPONSIBLE AI INSIGHT
            </p>

            <h2>Legal Consent ≠ Informed Consent</h2>

            <p>
              The audit found that Spotify provides transparency through
              its publicly available Privacy Policy and privacy controls.
              However, the policy is lengthy and uses legal terminology,
              which can make it difficult for users to fully understand
              how their information is processed.
            </p>

            <p>
              Responsible consent therefore requires more than obtaining
              agreement. Users should receive information that is clear,
              accessible, understandable, and accompanied by meaningful
              choices.
            </p>

          </div>

        </section>


        {/* User Rights */}
        <section className="content-section">

          <p className="section-number">04</p>

          <h2>User Rights & Privacy Controls</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>01</span>
              <h3>Access</h3>
              <p>
                Users can access personal information held by Spotify.
              </p>
            </div>

            <div className="principle-card">
              <span>02</span>
              <h3>Rectification</h3>
              <p>
                Users can correct inaccurate personal information.
              </p>
            </div>

            <div className="principle-card">
              <span>03</span>
              <h3>Data Portability</h3>
              <p>
                Users can download a copy of their personal data.
              </p>
            </div>

            <div className="principle-card">
              <span>04</span>
              <h3>Erasure</h3>
              <p>
                Users can request deletion of their account and
                associated personal information.
              </p>
            </div>

            <div className="principle-card">
              <span>05</span>
              <h3>Permission Management</h3>
              <p>
                Users can manage optional permissions such as
                location and microphone access.
              </p>
            </div>

            <div className="principle-card">
              <span>06</span>
              <h3>Privacy Preferences</h3>
              <p>
                Certain advertising and privacy preferences can
                be managed through available controls.
              </p>
            </div>

          </div>

        </section>


        {/* Ethical Data Audit */}
        <section className="content-section">

          <p className="section-number">05</p>

          <h2>Ethical Data Audit</h2>

          <div className="principles-grid">

            <div className="principle-card">
              <span>01</span>
              <h3>Privacy Concerns</h3>
              <p>
                Continuous collection of listening history, searches,
                playlists and interactions can create detailed
                behavioural profiles revealing preferences, habits,
                moods and routines.
              </p>
            </div>


            <div className="principle-card">
              <span>02</span>
              <h3>Dark Patterns</h3>
              <p>
                The audit did not conclude that Spotify explicitly
                uses deceptive practices. However, lengthy privacy
                policies and complex legal language can reduce
                meaningful awareness and choice.
              </p>
            </div>


            <div className="principle-card">
              <span>03</span>
              <h3>Data Power</h3>
              <p>
                Long-term analysis of listening history, searches,
                playlists, skipped songs and interactions creates
                an information imbalance between the platform and
                its users.
              </p>
            </div>


            <div className="principle-card">
              <span>04</span>
              <h3>Digital Inequality</h3>
              <p>
                Free and Premium users receive different levels of
                access and functionality. Recommendation quality
                may also initially differ for new or less active users.
              </p>
            </div>


            <div className="principle-card">
              <span>05</span>
              <h3>Representational Harm</h3>
              <p>
                Recommendation systems may favour popular artists
                and mainstream content, potentially reducing visibility
                for emerging artists, regional music and minority-language
                content.
              </p>
            </div>


            <div className="principle-card">
              <span>06</span>
              <h3>Personalisation & Autonomy</h3>
              <p>
                Repeated recommendations can reinforce existing
                preferences and reduce exposure to diverse music,
                cultures and independent creators.
              </p>
            </div>

          </div>

        </section>


        {/* Data Power */}
        <section className="content-section">

          <p className="section-number">06</p>

          <h2>Data Power & Surveillance</h2>

          <p>
            Spotify's recommendation system continuously analyses
            behavioural information to personalise content and
            improve engagement.
          </p>

          <p>
            This creates an information asymmetry: Spotify can develop
            detailed insights into user preferences while users may
            have limited understanding of how recommendation systems
            transform their everyday behaviour into data-driven
            profiles.
          </p>

          <div className="highlight-section mitigation">

            <p className="section-number">
              RESPONSIBLE AI PRINCIPLE
            </p>

            <h2>Reduce Information Asymmetry</h2>

            <p>
              Users should be given clear explanations of how their
              behavioural data contributes to recommendations and
              meaningful controls over personalised experiences.
            </p>

          </div>

        </section>


        {/* Digital Inequality */}
        <section className="content-section">

          <p className="section-number">07</p>

          <h2>Digital Inequality</h2>

          <p>
            Spotify's free and Premium services provide different
            levels of access. Premium users receive benefits such as
            ad-free listening, offline downloads, higher audio quality,
            and greater playback control, while free users experience
            advertisements and feature limitations.
          </p>

          <p>
            The audit treats this primarily as an access inequality
            arising from the platform's commercial model rather than
            as direct discrimination.
          </p>

        </section>


        {/* Representational Harm */}
        <section className="content-section">

          <p className="section-number">08</p>

          <h2>Representational Harm</h2>

          <p>
            Recommendation systems can unintentionally favour popular
            artists, mainstream genres, or frequently streamed content
            because these generate larger volumes of interaction data.
          </p>

          <p>
            This may reduce visibility for emerging artists, regional
            music and minority-language content.
          </p>

          <div className="info-card">

            <h3>Responsible Recommendation Design</h3>

            <p>
              Personalisation should be balanced with diversity.
              Recommendation systems should avoid reinforcing
              popularity bias and should provide opportunities for
              broader cultural representation and emerging creators.
            </p>

          </div>

        </section>


        {/* AI Evaluation */}
        <section className="content-section">

          <p className="section-number">09</p>

          <h2>Critical Evaluation of Generative AI</h2>

          <p>
            Generative AI was used to analyse Spotify's Privacy Policy
            through five prompts addressing data collection, consent,
            privacy concerns, digital inequality, and Responsible AI.
          </p>

          <div className="process-flow">

            <div>
              <span>01</span>
              <strong>AI Analysis</strong>
              <p>
                Generated initial observations and summaries of
                Spotify's privacy practices.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Human Verification</strong>
              <p>
                Compared AI responses against Spotify's official
                Privacy Policy and credible sources.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Critical Evaluation</strong>
              <p>
                Identified missing ethical issues, assumptions,
                limitations and contextual gaps.
              </p>
            </div>

          </div>

        </section>


        {/* AI Findings */}
        <section className="content-section">

          <p className="section-number">10</p>

          <h2>What Did the AI Get Right?</h2>

          <div className="content-list">

            <div>
              Most major categories of personal data were identified
              correctly.
            </div>

            <div>
              The AI correctly identified several purposes of data
              processing and user privacy controls.
            </div>

            <div>
              Several privacy and informed-consent concerns were
              identified accurately.
            </div>

            <div>
              The responses provided a useful starting point and
              reduced the time required to review a lengthy policy.
            </div>

          </div>

        </section>


        {/* AI Limitations */}
        <section className="highlight-section risk">

          <p className="section-number">11</p>

          <h2>AI Limitations & Human Judgement</h2>

          <p>
            The AI primarily summarised Spotify's Privacy Policy rather
            than deeply evaluating its ethical implications.
          </p>

          <p>
            Important concepts such as behavioural profiling,
            information asymmetry, data power, and the distinction
            between legal compliance and ethical responsibility required
            additional human analysis.
          </p>

          <p>
            Some general observations also required verification because
            they were not explicitly stated in Spotify's Privacy Policy.
          </p>

          <p>
            The audit therefore concluded that Generative AI should
            support — not replace — human judgement in ethical auditing.
          </p>

        </section>


        {/* Reflection */}
        <section className="content-section">

          <p className="section-number">12</p>

          <h2>Ethical Reflection</h2>

          <p>
            This audit demonstrated that privacy policies are more than
            legal documents. They reveal how digital platforms collect,
            process and use personal data to provide AI-driven services.
          </p>

          <p>
            It also raised the question of whether users can truly
            provide informed consent online. Although Spotify provides
            a public Privacy Policy and privacy controls, its length and
            legal language can make it difficult for users to understand
            the full implications of data processing.
          </p>

          <p>
            Organisations therefore have a responsibility to make data
            practices transparent, proportionate and respectful of
            user rights, while providing meaningful and accessible
            choices.
          </p>

        </section>


        {/* Conclusion */}
        <section className="content-section">

          <p className="section-number">13</p>

          <h2>Conclusion</h2>

          <p>
            Spotify demonstrates how AI-driven personalisation can
            provide valuable services while also creating ethical
            questions surrounding privacy, consent, autonomy, data
            power, inequality and representation.
          </p>

          <p>
            The audit highlights the importance of combining
            technological capability with human judgement, evidence
            verification and Responsible AI principles.
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

export default SpotifyAudit