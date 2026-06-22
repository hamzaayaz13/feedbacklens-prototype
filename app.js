const state = {
  route: "login",
  workspaceView: "overview",
  modal: null,
  toast: "",
  selfCheckSummary: null,
  processingStep: 0,
  isLoggedIn: false,
  currentAnalysisId: "june-onboarding",
  selectedThemeId: "checkout",
  selectedComparisonMode: "compare",
  briefQuoteMode: true,
  allowEvidence: false,
  shareExpiry: "30 days",
  publicLinkState: "live",
  actionStatuses: {
    checkout: "Draft",
    delivery: "Draft",
    setup: "Edited",
    support: "Dismissed",
  },
  briefSelections: {
    checkout: true,
    delivery: true,
    selection: true,
    account: true,
    search: false,
    comparison: true,
  },
  importConfig: {
    includeDates: true,
    includeRatings: true,
    maskPII: true,
    feedbackColumn: "comment_text",
  },
  uploadDraft: {
    text: "",
    files: [],
  },
  splitSelection: {
    deliveryDelays: true,
    trackingConfusion: true,
    addressIssues: false,
  },
};

const demo = {
  user: {
    name: "Hamza Ayaz",
    initials: "HA",
    workspace: "Northstar Commerce",
  },
  analyses: [
    {
      id: "june-onboarding",
      name: "June onboarding feedback",
      source: "NPS survey",
      count: 2301,
      updated: "Updated today",
      status: "Ready",
      period: "1–30 June 2026",
    },
    {
      id: "post-purchase",
      name: "Post-purchase survey — May",
      source: "Post-purchase survey",
      count: 1184,
      updated: "Updated 5 Jun",
      status: "Needs review",
      period: "1–31 May 2026",
    },
    {
      id: "delivery-issues",
      name: "Support tickets — Delivery issues",
      source: "Support tickets",
      count: 786,
      updated: "Updated 29 May",
      status: "Processing",
      period: "17–29 May 2026",
    },
  ],
  themes: [
    {
      id: "checkout",
      name: "Checkout reliability",
      mentions: 642,
      share: "28%",
      emotion: "Frustrated",
      priority: "High priority",
      explanation:
        "Payments fail or take too long, leaving customers unsure whether their order was placed.",
      quote:
        "I tried paying three times and every time it sent me back to the cart.",
      owner: "Product + Engineering",
      action:
        "Review payment failure events and add a clear retry and confirmation state for interrupted checkout.",
      confidence:
        "Strong evidence: this theme is based on 642 related responses across 4 feedback sources.",
      subtopics: ["Failed payment", "Payment retry", "Cart reset", "Charge uncertainty"],
      emotions: ["Frustrated", "Anxious", "Confused"],
      productArea: "Checkout / payment",
    },
    {
      id: "delivery",
      name: "Delivery tracking",
      mentions: 417,
      share: "18%",
      emotion: "Confused",
      priority: "High priority",
      explanation:
        "Customers cannot easily tell where their order is after purchase.",
      quote: "The order shipped but I never knew when it would actually arrive.",
      owner: "CX + Fulfillment",
      action:
        "Improve post-purchase tracking updates and make ETA language clearer across email and app touchpoints.",
      confidence:
        "Needs review: some responses overlap with Delivery delays.",
      subtopics: ["Tracking confusion", "No ETA", "Missing updates"],
      emotions: ["Confused", "Anxious"],
      productArea: "Post-purchase / delivery",
    },
    {
      id: "selection",
      name: "Product selection",
      mentions: 361,
      share: "16%",
      emotion: "Positive",
      priority: "Positive signal",
      explanation:
        "Customers value the breadth of products and ease of discovery.",
      quote: "You actually have the variations I need without making me hunt.",
      owner: "Merchandising",
      action: "Preserve broad product selection as a clear product advantage.",
      confidence:
        "Strong evidence: this theme is repeated across all major sources.",
      subtopics: ["Breadth", "Availability", "Discovery"],
      emotions: ["Positive", "Excited"],
      productArea: "Catalog",
    },
    {
      id: "account",
      name: "Account setup",
      mentions: 278,
      share: "12%",
      emotion: "Confused",
      priority: "Medium priority",
      explanation:
        "Users struggle to verify their account and understand setup requirements.",
      quote: "The verification step felt like guesswork and I gave up twice.",
      owner: "Growth",
      action:
        "Simplify account verification and explain each setup requirement clearly.",
      confidence:
        "Moderate evidence based on repeated setup and verification complaints.",
      subtopics: ["Verification", "Password reset", "Email delay"],
      emotions: ["Confused", "Frustrated"],
      productArea: "Authentication",
    },
  ],
  evidence: [
    {
      id: 1,
      quote:
        "I tried paying three times and every time it sent me back to the cart.",
      source: "App Store review",
      date: "12 Jun",
      language: "English",
      emotion: "Frustrated",
      why: "Included because it describes repeated payment failure and cart reset.",
    },
    {
      id: 2,
      quote:
        "After I entered my card details, I had no idea if the order actually went through.",
      source: "NPS survey",
      date: "16 Jun",
      language: "English",
      emotion: "Anxious",
      why: "Included because it points to charge uncertainty after checkout.",
    },
    {
      id: 3,
      quote:
        "The payment failed twice, and then the basket was empty when I came back.",
      source: "Support ticket",
      date: "18 Jun",
      language: "English",
      emotion: "Frustrated",
      why: "Included because it combines failed payment with cart reset behavior.",
    },
    {
      id: 4,
      quote:
        "Mera payment ho gaya ya nahi samajh nahi aaya, koi confirmation nazar nahi aayi.",
      source: "WhatsApp feedback",
      date: "21 Jun",
      language: "Urdu",
      emotion: "Confused",
      why: "Included because it describes missing confirmation after payment.",
    },
  ],
  responses: [
    {
      text: "I love the product range but checkout kept freezing at the final step.",
      themes: ["Checkout reliability", "Product selection"],
      emotion: "Mixed",
      source: "NPS survey",
      date: "7 Jun",
      language: "English",
      why: "Tagged for both positive product selection and negative checkout friction.",
    },
    {
      text: "Shipping was quick, but I had no clue where the parcel was for two days.",
      themes: ["Delivery tracking"],
      emotion: "Confused",
      source: "Support ticket",
      date: "11 Jun",
      language: "English",
      why: "Mentions lack of visibility after purchase.",
    },
    {
      text: "App slow ho jati hai jab filters use karta hoon.",
      themes: ["Search and filtering", "Mobile performance"],
      emotion: "Frustrated",
      source: "In-app survey",
      date: "13 Jun",
      language: "Urdu",
      why: "Tagged for filter flow friction and app slowness.",
    },
  ],
  comparison: [
    {
      theme: "Checkout frustration",
      delta: "+10 pts",
      note: "Payment-related frustration grew from 18% to 28% after the latest gateway update.",
    },
    {
      theme: "Delivery tracking confusion",
      delta: "-7 pts",
      note: "Order-status updates reduced confusion after the ETA refresh.",
    },
    {
      theme: "Saved favourites",
      delta: "New signal",
      note: "Customers now ask for cross-device favourites across mobile and desktop.",
    },
  ],
};

const processingSteps = [
  "Preparing feedback",
  "Detecting languages and duplicate entries",
  "Grouping related feedback into themes",
  "Identifying emotions, pain points, and opportunities",
  "Drafting recommended actions",
  "Creating your decision brief",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setToast(message) {
  state.toast = message;
  renderApp();
  window.clearTimeout(setToast.timer);
  setToast.timer = window.setTimeout(() => {
    state.toast = "";
    renderApp();
  }, 2400);
}

function updateHomeComposerState() {
  const textArea = document.getElementById("home-feedback-input");
  const analyzeButton = document.querySelector('[data-action="go-import"]');
  if (!analyzeButton) return;
  const hasInput = Boolean((textArea && textArea.value.trim()) || state.uploadDraft.files.length);
  analyzeButton.disabled = !hasInput;
}

function setRoute(route) {
  state.route = route;
  if (route === "processing") {
    state.processingStep = 0;
    tickProcessing();
  }
  renderApp();
}

function tickProcessing() {
  if (state.route !== "processing") return;
  if (state.processingStep >= processingSteps.length) return;
  window.setTimeout(() => {
    if (state.route !== "processing") return;
    state.processingStep += 1;
    renderApp();
    if (state.processingStep < processingSteps.length) {
      tickProcessing();
    }
  }, 700);
}

function currentAnalysis() {
  return demo.analyses.find((item) => item.id === state.currentAnalysisId) || demo.analyses[0];
}

function currentTheme() {
  return demo.themes.find((item) => item.id === state.selectedThemeId) || demo.themes[0];
}

function renderTopNav() {
  return `
    <div class="top-nav">
      <div class="brand">
        <span class="brand-mark"></span>
        <span>FeedbackLens</span>
      </div>
      <div class="button-row">
        <span class="tiny">${escapeHtml(demo.user.workspace)}</span>
        <button class="ghost-btn">Sign in</button>
        <span class="chip">${escapeHtml(demo.user.initials)}</span>
      </div>
    </div>
  `;
}

function renderLogin() {
  return `
    <section class="login-screen">
      <div class="login-card">
        ${renderTopNav()}
        <div class="login-copy">
          <span class="eyebrow">Welcome</span>
          <h2>Welcome to FeedbackLens</h2>
          <p>Turn customer feedback into evidence-backed next steps.</p>
          <p class="tiny">Use your company account to access your analyses and shared workspaces.</p>
        </div>
        <div class="stack">
          <button class="primary-btn" data-action="login-sso">Continue with SSO</button>
          <div class="divider">or</div>
          <input class="field" value="hamza@northstarcommerce.com" aria-label="Email" />
          <button class="ghost-btn" data-action="login-email">Continue with email</button>
          <p class="tiny">Mocked enterprise sign-in. Unauthorized domains show a compact error state in the prototype.</p>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const hasInput = state.uploadDraft.text.trim() || state.uploadDraft.files.length;
  return `
    <section class="home-screen">
      <div class="home-wrap">
        ${renderTopNav()}
        <section class="hero">
          <div class="hero-copy">
            <span class="eyebrow">New analysis</span>
            <h1>Turn customer feedback into clear next steps.</h1>
            <p>Upload raw responses or paste feedback. FeedbackLens finds themes, pain points, opportunities, and evidence-backed actions for your team.</p>
          </div>
          <div class="upload-composer">
            <div class="upload-head">
              <div>
                <h3>Paste feedback or upload a file</h3>
                <p>CSV, XLSX, TXT, DOCX, or text-based PDF</p>
                <p class="tiny">FeedbackLens will only analyze written response content.</p>
              </div>
              <button class="soft-btn" data-action="mock-file">Attach demo files</button>
            </div>
            <div class="upload-drop">
              <div class="chip-row">
                <span class="chip">Drag and drop</span>
                <span class="chip">Multiple files supported</span>
                <span class="chip">Scanned PDFs warn before analysis</span>
              </div>
              <textarea class="textarea" id="home-feedback-input" placeholder="Paste customer feedback here...">${escapeHtml(
                state.uploadDraft.text
              )}</textarea>
            </div>
            ${
              state.uploadDraft.files.length
                ? `<div class="chip-row">${state.uploadDraft.files
                    .map(
                      (file, index) =>
                        `<span class="chip">${escapeHtml(file)} <button class="icon-btn" data-action="remove-file" data-index="${index}" aria-label="Remove file">×</button></span>`
                    )
                    .join("")}</div>`
                : ""
            }
            <div class="button-row" style="justify-content: space-between;">
              <p class="tiny">Empty input, damaged files, and scanned PDFs surface inline warnings in later steps.</p>
              <button class="primary-btn" data-action="go-import" ${hasInput ? "" : "disabled"}>Analyze feedback</button>
            </div>
          </div>
        </section>
        <section class="section-card">
          <div class="stack" style="margin-bottom:16px;">
            <h3>Recent analyses</h3>
            <p>Revisit an earlier analysis, add new feedback, or compare feedback over time.</p>
          </div>
          <div class="recent-list">
            ${demo.analyses
              .map(
                (analysis) => `
                <button class="analysis-row" data-action="open-analysis" data-analysis="${analysis.id}">
                  <div class="stack">
                    <strong>${escapeHtml(analysis.name)}</strong>
                    <span class="muted tiny">${analysis.count.toLocaleString()} responses · ${escapeHtml(
                  analysis.source
                )}</span>
                  </div>
                  <div class="stack hidden-mobile">
                    <span class="muted tiny">${escapeHtml(analysis.period)}</span>
                    <span class="muted tiny">${escapeHtml(analysis.updated)}</span>
                  </div>
                  <div><span class="status-pill">${escapeHtml(analysis.status)}</span></div>
                </button>
              `
              )
              .join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderImportReview() {
  return `
    <section class="home-screen">
      <div class="home-wrap">
        ${renderTopNav()}
        <section class="section-card">
          <div class="button-row" style="justify-content:space-between; align-items:flex-end; margin-bottom: 20px;">
            <div class="stack">
              <span class="eyebrow">Import review</span>
              <h2>Confirm what FeedbackLens should analyze.</h2>
              <p>We found 2,301 usable feedback responses.</p>
            </div>
            <div class="chip-row">
              <span class="chip">78 blank rows ignored</span>
              <span class="chip">39 duplicates detected</span>
              <span class="chip">English, Arabic, Urdu</span>
            </div>
          </div>
          <div class="two-col">
            <div class="left-panel">
              <div class="mini-panel">
                <h3>Import summary</h3>
                <div class="stack" style="margin-top:14px;">
                  <span class="muted tiny">Source name</span>
                  <strong>Onboarding_June_2026.xlsx</strong>
                  <span class="muted tiny">Feedback text column</span>
                  <select class="select" id="feedback-column">
                    <option value="comment_text" ${
                      state.importConfig.feedbackColumn === "comment_text" ? "selected" : ""
                    }>comment_text</option>
                    <option value="open_response">open_response</option>
                    <option value="review_body">review_body</option>
                  </select>
                </div>
              </div>
              <div class="mini-panel">
                <h3>Metadata detected</h3>
                <div class="chip-row" style="margin-top:14px;">
                  <span class="chip">Date</span>
                  <span class="chip">Source</span>
                  <span class="chip">Rating</span>
                  <span class="chip">Country / market</span>
                  <span class="chip">Product area</span>
                </div>
              </div>
              <div class="mini-panel stack">
                <label class="toggle-row"><input type="checkbox" data-toggle="includeDates" ${
                  state.importConfig.includeDates ? "checked" : ""
                } /> Include dates for trend analysis</label>
                <label class="toggle-row"><input type="checkbox" data-toggle="includeRatings" ${
                  state.importConfig.includeRatings ? "checked" : ""
                } /> Include ratings as supporting context</label>
                <label class="toggle-row"><input type="checkbox" data-toggle="maskPII" ${
                  state.importConfig.maskPII ? "checked" : ""
                } /> Mask possible personal information</label>
              </div>
              <div class="mini-panel stack">
                <p>Possible names and email addresses were detected and will be masked in shared briefs by default.</p>
                <p>This upload uses different column names. FeedbackLens will map the text column, but some filters may not be available across both sources.</p>
              </div>
            </div>
            <div class="right-panel">
              <div class="mini-panel">
                <h3>Feedback preview</h3>
                <div class="preview-table" style="margin-top:14px;">
                  ${demo.evidence
                    .slice(0, 4)
                    .map(
                      (row) => `
                      <div class="table-row">
                        <strong class="tiny">Highlighted column: ${escapeHtml(
                          state.importConfig.feedbackColumn
                        )}</strong>
                        <div class="quote">${escapeHtml(row.quote)}</div>
                        <div class="chip-row">
                          <span class="chip">${escapeHtml(row.source)}</span>
                          <span class="chip">${escapeHtml(row.date)}</span>
                          <span class="chip">${escapeHtml(row.language)}</span>
                        </div>
                      </div>`
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
          <div class="button-row" style="justify-content:space-between; margin-top:20px;">
            <button class="ghost-btn" data-action="back-home">Back</button>
            <button class="primary-btn" data-action="start-processing">Analyze 2,301 responses</button>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderProcessing() {
  const done = state.processingStep >= processingSteps.length;
  return `
    <section class="processing-screen">
      <div class="processing-card" style="width:min(760px,100%); padding:36px; border-radius:32px;">
        <div class="stack" style="margin-bottom: 22px;">
          <span class="eyebrow">AI processing</span>
          <h2>${done ? "Your analysis is ready." : "Reading your feedback and finding what matters."}</h2>
          <p>${
            done
              ? "We found 8 themes, 3 high-priority pain points, and 5 opportunities."
              : "This usually takes a few moments. We are preparing the data, identifying patterns, and drafting evidence-backed actions."
          }</p>
        </div>
        <div class="progress-list">
          ${processingSteps
            .map((step, index) => {
              const status =
                index + 1 < state.processingStep ? "done" : index + 1 === state.processingStep ? "active" : "";
              const label =
                index + 1 < state.processingStep
                  ? "Complete"
                  : index + 1 === state.processingStep
                  ? index === 0
                    ? "1,847 of 2,301 responses reviewed"
                    : index === 2
                    ? "8 early themes found"
                    : index === 3
                    ? "Potential issue detected: checkout reliability"
                    : "In progress"
                  : "Waiting";
              return `
                <div class="progress-item">
                  <span class="dot ${status}"></span>
                  <span>${escapeHtml(step)}</span>
                  <span class="muted tiny">${escapeHtml(label)}</span>
                </div>
              `;
            })
            .join("")}
        </div>
        <p style="margin-top:18px;">Original feedback remains available as evidence behind every insight.</p>
        <div class="button-row" style="justify-content:space-between; margin-top:20px;">
          <button class="ghost-btn" data-action="pause-analysis">Resume analysis</button>
          <button class="primary-btn" data-action="view-insights" ${done ? "" : "disabled"}>View insights</button>
        </div>
      </div>
    </section>
  `;
}

function renderSidebar() {
  const items = [
    ["overview", "Overview"],
    ["themes", "Themes"],
    ["pain-points", "Pain points"],
    ["opportunities", "Opportunities"],
    ["responses", "Responses"],
    ["brief", "Brief"],
    ["comparison", "Comparison"],
  ];
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark"></span>
        <span>FeedbackLens</span>
      </div>
      <div class="nav-list">
        ${items
          .map(
            ([id, label]) =>
              `<button class="nav-item ${state.workspaceView === id ? "active" : ""}" data-action="switch-view" data-view="${id}">${label}</button>`
          )
          .join("")}
      </div>
      <div class="sidebar-footer">
        <button class="ghost-btn" data-action="new-analysis">New analysis</button>
        <button class="ghost-btn">${escapeHtml(demo.user.name)} · Workspace</button>
      </div>
    </aside>
  `;
}

function renderWorkspaceTopbar() {
  const analysis = currentAnalysis();
  return `
    <div class="workspace-topbar">
      <div class="stack">
        <span class="eyebrow">${escapeHtml(analysis.source)}</span>
        <div>
          <h2>${escapeHtml(analysis.name)}</h2>
          <p>${analysis.count.toLocaleString()} responses · ${escapeHtml(analysis.period)} · Updated just now</p>
        </div>
      </div>
      <div class="header-actions">
        <span class="status-pill" data-self-check-chip>Checking UI…</span>
        <button class="ghost-btn" data-action="open-add-feedback">Add feedback</button>
        <button class="primary-btn" data-action="open-share">Share brief</button>
        <span class="chip">${escapeHtml(demo.user.initials)}</span>
      </div>
    </div>
  `;
}

function renderOverview() {
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <section class="summary-hero">
        <span class="eyebrow">AI summary</span>
        <h2>Checkout reliability is the biggest risk in this feedback.</h2>
        <p>It appears in 28% of responses and is strongly associated with frustration. Customers describe failed payments, long waits, and uncertainty about whether an order went through.</p>
        <div class="chip-row">
          <span class="status-pill">642 mentions</span>
          <span class="status-pill">High priority</span>
          <span class="status-pill">Mostly frustrated</span>
          <span class="status-pill">Based on 642 source responses</span>
        </div>
        <div><button class="soft-btn" data-action="open-theme" data-theme="checkout">Review evidence →</button></div>
      </section>
      <section class="summary-grid">
        <div class="section-card">
          <div class="stack" style="margin-bottom:14px;">
            <h3>Overall feedback mood</h3>
            <p>Feedback is mixed: customers value product selection, but frustration is concentrated around checkout and delivery visibility.</p>
          </div>
          <div class="mood-bars">
            ${[
              ["Positive", 41],
              ["Neutral / informational", 29],
              ["Frustrated", 21],
              ["Confused", 6],
              ["Excited", 3],
            ]
              .map(
                ([label, value]) => `
                <div class="bar-row">
                  <div class="button-row" style="justify-content:space-between;">
                    <span>${label}</span><span class="muted tiny">${value}%</span>
                  </div>
                  <div class="bar-track"><div class="bar-fill" style="width:${value}%;"></div></div>
                </div>`
              )
              .join("")}
          </div>
        </div>
        <div class="section-card">
          <div class="stack" style="margin-bottom:14px;">
            <h3>Suggested next steps</h3>
            <p>AI drafts are editable and trace back to source responses.</p>
          </div>
          <div class="action-list">
            ${demo.themes
              .slice(0, 4)
              .map(
                (theme) => `
                <div class="action-row">
                  <div class="button-row" style="justify-content:space-between;">
                    <strong>${escapeHtml(theme.name)}</strong>
                    <span class="status-pill">${escapeHtml(state.actionStatuses[theme.id] || "Draft")}</span>
                  </div>
                  <p>${escapeHtml(theme.action)}</p>
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section-card">
        <div class="stack" style="margin-bottom:14px;">
          <h3>What customers are talking about</h3>
          <p>Ranked themes focus on explanation and evidence rather than dashboard-style metrics.</p>
        </div>
        <div class="theme-list">
          ${demo.themes
            .map(
              (theme, index) => `
              <button class="theme-row" data-action="open-theme" data-theme="${theme.id}">
                <div class="stack">
                  <strong>${index + 1}. ${escapeHtml(theme.name)} — ${theme.mentions} mentions · ${escapeHtml(
                theme.share
              )}</strong>
                  <span>${escapeHtml(theme.explanation)}</span>
                  <span class="muted tiny">“${escapeHtml(theme.quote)}”</span>
                </div>
                <div class="stack hidden-mobile">
                  <span class="status-pill">${escapeHtml(theme.emotion)}</span>
                  <span class="muted tiny">${escapeHtml(theme.priority)}</span>
                </div>
                <div><span class="status-pill">${escapeHtml(state.actionStatuses[theme.id] || "Draft action")}</span></div>
              </button>`
            )
            .join("")}
        </div>
      </section>
      <section class="grid-2">
        <div class="section-card">
          <h3>Highest-priority pain points</h3>
          <div class="editorial-row">
            <strong>Payment failures during checkout</strong>
            <span class="muted">High severity · 642 customers · Mostly frustrated</span>
            <p class="quote">“My payment failed twice, then the cart disappeared.”</p>
            <p><strong>Suggested action:</strong> Product and Engineering should review failed-payment events and add a clear recovery path for interrupted checkout.</p>
            <div class="button-row">
              <button class="soft-btn" data-action="set-action" data-theme="checkout" data-status="Accepted">Accept</button>
              <button class="ghost-btn" data-action="set-action" data-theme="checkout" data-status="Edited">Edit</button>
              <button class="danger-btn" data-action="set-action" data-theme="checkout" data-status="Dismissed">Dismiss</button>
              <button class="ghost-btn" data-action="open-theme" data-theme="checkout">View evidence</button>
            </div>
          </div>
          <div class="editorial-row">
            <strong>Delivery visibility after purchase</strong>
            <span class="muted">High severity · 417 customers · Mostly confused</span>
            <p class="quote">“I never knew if the package was on the way or still stuck at dispatch.”</p>
            <p><strong>Suggested action:</strong> Clarify tracking milestones and tighten ETA communication.</p>
          </div>
        </div>
        <div class="section-card">
          <h3>Opportunities</h3>
          <div class="editorial-row">
            <strong>What customers love</strong>
            <p>Product selection stands out as a clear strength and should be protected as a competitive advantage.</p>
            <span class="chip">361 mentions</span>
          </div>
          <div class="editorial-row">
            <strong>What customers are asking for</strong>
            <p>Saved favourites across devices appears as a repeat request and a plausible retention opportunity.</p>
            <span class="chip">184 requests</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderThemeDetail() {
  const theme = currentTheme();
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <section class="section-card">
        <div class="button-row" style="justify-content:space-between; align-items:flex-start;">
          <div class="stack">
            <button class="ghost-btn" data-action="switch-view" data-view="overview">Back to Overview</button>
            <h2>${escapeHtml(theme.name)}</h2>
            <p>${theme.mentions} mentions · ${escapeHtml(theme.share)} of feedback · ${escapeHtml(theme.priority)} · ${escapeHtml(
        theme.emotion
      )}</p>
            <p>${escapeHtml(theme.confidence)}</p>
          </div>
          <div class="button-row">
            <button class="ghost-btn" data-action="open-merge">Merge theme</button>
            <button class="ghost-btn" data-action="open-split">Split theme</button>
            <button class="ghost-btn">Re-run analysis</button>
          </div>
        </div>
      </section>
      <section class="grid-2">
        <div class="section-card">
          <div class="stack" style="margin-bottom:14px;">
            <h3>What this theme means</h3>
            <p>Customers are not only frustrated by payment failures. They are especially concerned when failure happens after entering payment details because they do not know whether they were charged or whether the order was placed.</p>
          </div>
          <div class="chip-row">
            ${theme.subtopics.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="chip-row" style="margin-top:10px;">
            ${theme.emotions.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
            <span class="chip">${escapeHtml(theme.productArea)}</span>
          </div>
        </div>
        <div class="section-card">
          <div class="stack" style="margin-bottom:14px;">
            <h3>Suggested action</h3>
            <p><strong>Suggested team:</strong> ${escapeHtml(theme.owner)}</p>
            <p>${escapeHtml(theme.action)}</p>
            <p class="tiny">A large share of related responses describe repeated retries and uncertainty after entering payment details.</p>
          </div>
          <div class="button-row">
            <button class="soft-btn" data-action="set-action" data-theme="${theme.id}" data-status="Accepted">Accept action</button>
            <button class="ghost-btn" data-action="set-action" data-theme="${theme.id}" data-status="Edited">Edit action</button>
            <button class="danger-btn" data-action="set-action" data-theme="${theme.id}" data-status="Dismissed">Dismiss</button>
            <button class="primary-btn" data-action="toggle-brief" data-theme="${theme.id}">${
              state.briefSelections[theme.id] ? "Added to brief" : "Add to brief"
            }</button>
          </div>
        </div>
      </section>
      <section class="section-card">
        <div class="button-row" style="justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
          <div class="stack">
            <h3>Customer evidence</h3>
            <p>Original feedback stays visible, multilingual responses keep their original text, and users can challenge the AI classification.</p>
          </div>
          <div class="filter-row">
            <input class="search" placeholder="Search evidence" />
            <button class="ghost-btn">All responses</button>
            <button class="ghost-btn">Frustrated / Confused / Positive</button>
            <button class="ghost-btn">Language</button>
            <button class="ghost-btn">Source</button>
          </div>
        </div>
        <div class="evidence-list">
          ${demo.evidence
            .map(
              (row) => `
              <div class="evidence-card">
                <p class="quote">“${escapeHtml(row.quote)}”</p>
                <div class="chip-row">
                  <span class="chip">${escapeHtml(row.source)}</span>
                  <span class="chip">${escapeHtml(row.date)}</span>
                  <span class="chip">${escapeHtml(row.language)}</span>
                  <span class="chip">${escapeHtml(row.emotion)}</span>
                </div>
                <p class="tiny">${escapeHtml(row.why)}</p>
                <div class="button-row">
                  <button class="ghost-btn">Remove from theme</button>
                  <button class="ghost-btn">View full response</button>
                  <button class="danger-btn">Flag as incorrect</button>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderResponses() {
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <section class="section-card">
        <div class="button-row" style="justify-content:space-between; align-items:flex-start; margin-bottom:18px;">
          <div class="stack">
            <h2>Responses</h2>
            <p>2,301 responses</p>
          </div>
          <input class="search" placeholder="Search feedback" />
        </div>
        <div class="filter-row" style="margin-bottom:16px;">
          <button class="ghost-btn">Theme</button>
          <button class="ghost-btn">Emotion</button>
          <button class="ghost-btn">Source</button>
          <button class="ghost-btn">Language</button>
          <button class="ghost-btn">Date range</button>
          <button class="ghost-btn">Assigned / unassigned</button>
        </div>
        <div class="responses-list">
          ${demo.responses
            .map(
              (row) => `
              <div class="table-row">
                <div class="quote">${escapeHtml(row.text)}</div>
                <div class="theme-tags">${row.themes.map((theme) => `<span class="chip">${escapeHtml(theme)}</span>`).join("")}</div>
                <div class="chip-row">
                  <span class="chip">${escapeHtml(row.emotion)}</span>
                  <span class="chip">${escapeHtml(row.source)}</span>
                  <span class="chip">${escapeHtml(row.date)}</span>
                  <span class="chip">${escapeHtml(row.language)}</span>
                </div>
                <p class="tiny">${escapeHtml(row.why)}</p>
                <div class="button-row">
                  <button class="ghost-btn">Add to theme</button>
                  <button class="ghost-btn">Remove from theme</button>
                  <button class="danger-btn">Flag incorrect classification</button>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderComparison() {
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <section class="summary-hero">
        <span class="eyebrow">Comparison</span>
        <h2>June onboarding feedback vs July onboarding feedback</h2>
        <p>Checkout frustration increased, while delivery tracking confusion improved.</p>
        <p>Payment-related frustration grew from 18% to 28% of feedback. Delivery-tracking confusion fell after the latest order-status update.</p>
      </section>
      <section class="grid-2">
        <div class="section-card">
          <h3>What changed most</h3>
          <div class="action-list" style="margin-top:14px;">
            ${demo.comparison
              .map(
                (item) => `
                <div class="comparison-row">
                  <div class="button-row" style="justify-content:space-between;">
                    <strong>${escapeHtml(item.theme)}</strong>
                    <span class="status-pill">${escapeHtml(item.delta)}</span>
                  </div>
                  <p>${escapeHtml(item.note)}</p>
                </div>`
              )
              .join("")}
          </div>
        </div>
        <div class="section-card">
          <h3>What needs attention now</h3>
          <div class="editorial-row">
            <strong>Stabilize the payment recovery flow</strong>
            <p>The movement is sharp enough to justify immediate investigation rather than waiting for another survey cycle.</p>
          </div>
          <div class="editorial-row">
            <strong>Keep the new delivery-status pattern</strong>
            <p>The ETA refresh appears to be helping and should remain intact while broader fulfillment work continues.</p>
          </div>
          <div class="editorial-row">
            <strong>Validate the new favourites request</strong>
            <p>This is a new request cluster and worth testing for retention impact before broader rollout.</p>
          </div>
          <button class="primary-btn" data-action="toggle-comparison-brief">${
            state.briefSelections.comparison ? "Comparison in brief" : "Add comparison to brief"
          }</button>
        </div>
      </section>
    </div>
  `;
}

function renderBrief() {
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <div class="button-row" style="justify-content:space-between;">
        <div class="stack">
          <span class="eyebrow">Brief</span>
          <h2>Executive decision brief</h2>
          <p>Status: Saved</p>
        </div>
        <div class="button-row">
          <button class="ghost-btn" data-action="public-brief">Preview</button>
          <button class="ghost-btn" data-action="open-share">Share</button>
          <button class="primary-btn">Export PDF</button>
        </div>
      </div>
      <section class="section-card">
        <div class="button-row" style="justify-content:space-between;">
          <div class="stack">
            <h3>Brief controls</h3>
            <p>Keep the layout fixed while still letting teams shape the narrative.</p>
          </div>
          <div class="button-row">
            <button class="ghost-btn">Edit report title</button>
            <button class="ghost-btn">Edit executive summary</button>
            <button class="ghost-btn">Reorder themes</button>
            <button class="ghost-btn">Assign owner</button>
          </div>
        </div>
      </section>
      <section class="brief-canvas">
        <div class="brief-block">
          <span class="eyebrow">June onboarding feedback</span>
          <h2>Decision brief</h2>
          <p>1–30 June 2026 · 2,301 responses · Generated 22 June 2026</p>
        </div>
        <div class="brief-block">
          <h3>Executive summary</h3>
          <p>Customer feedback is broadly positive around product selection, but checkout reliability and delivery visibility are creating concentrated frustration and may be affecting conversion and support volume.</p>
        </div>
        <div class="brief-block">
          <h3>Overall mood</h3>
          <p>Feedback is mixed: customers value product selection, but frustration is concentrated around checkout and delivery visibility.</p>
        </div>
        <div class="brief-block">
          <h3>Top themes</h3>
          ${demo.themes
            .filter((theme) => state.briefSelections[theme.id])
            .map(
              (theme) => `
              <div class="editorial-row">
                <strong>${escapeHtml(theme.name)}</strong>
                <p>${escapeHtml(theme.explanation)}</p>
                <p class="tiny">${theme.mentions} mentions · Owner: ${escapeHtml(theme.owner)}</p>
                ${
                  state.briefQuoteMode
                    ? `<p class="tiny">“${escapeHtml(theme.quote)}”</p>`
                    : ""
                }
                <div class="button-row">
                  <button class="ghost-btn" data-action="toggle-brief" data-theme="${theme.id}">Remove theme</button>
                  <button class="ghost-btn">Edit action wording</button>
                </div>
              </div>`
            )
            .join("")}
        </div>
        <div class="brief-block">
          <h3>Biggest pain point</h3>
          <p><strong>Payment failures during checkout.</strong> Customers describe repeated retries, cart resets, and uncertainty after entering payment details.</p>
          <p><strong>Recommendation:</strong> Investigate checkout payment failure events and add a clear recovery flow.</p>
        </div>
        <div class="brief-block">
          <h3>Recommended next steps</h3>
          ${demo.themes
            .slice(0, 4)
            .map(
              (theme) => `
              <div class="button-row" style="justify-content:space-between; border-top:1px solid var(--border); padding-top:12px;">
                <span>${escapeHtml(theme.action)}</span>
                <span class="chip">${escapeHtml(theme.owner)}</span>
              </div>`
            )
            .join("")}
        </div>
        ${
          state.briefSelections.comparison
            ? `<div class="brief-block">
                <h3>Comparison insight</h3>
                <p>Checkout frustration increased from 18% to 28% in the latest period, while delivery-tracking confusion improved after the order-status update.</p>
              </div>`
            : ""
        }
        <div class="brief-block">
          <p class="tiny">Insights are based on 2,301 customer responses. Recommendations can be traced back to original source feedback.</p>
        </div>
      </section>
    </div>
  `;
}

function renderPublicBrief() {
  let stateBlock = "";
  if (state.publicLinkState === "expired") {
    stateBlock = `<div class="section-card"><h3>This shared brief is no longer available.</h3></div>`;
  } else if (state.publicLinkState === "revoked") {
    stateBlock = `<div class="section-card"><h3>The owner has removed access to this brief.</h3></div>`;
  } else if (state.publicLinkState === "restricted") {
    stateBlock = `<div class="section-card"><h3>You need permission from the owner to view this brief.</h3></div>`;
  }
  return `
    <section class="public-screen">
      ${stateBlock || `
      <div class="public-brief">
        <div class="brand">
          <span class="brand-mark"></span>
          <span>FeedbackLens</span>
        </div>
        <div class="stack">
          <span class="eyebrow">Shared brief</span>
          <h2>June onboarding feedback</h2>
          <p>1–30 June 2026</p>
        </div>
        <div class="brief-block">
          <h3>Executive summary</h3>
          <p>Customer feedback is broadly positive around product selection, but checkout reliability and delivery visibility are creating concentrated frustration and may be affecting conversion and support volume.</p>
        </div>
        <div class="brief-block">
          <h3>Overall mood</h3>
          <p>Mixed overall, with concentrated frustration around checkout and delivery visibility.</p>
        </div>
        <div class="brief-block">
          <h3>Top themes</h3>
          <p>Checkout reliability, delivery tracking, product selection, and account setup shape the story most clearly.</p>
        </div>
        <div class="brief-block">
          <h3>Biggest pain point</h3>
          <p>Payment failures during checkout create both frustration and uncertainty after customers enter payment details.</p>
        </div>
        <div class="brief-block">
          <h3>Recommended next steps</h3>
          <p>Review payment failure events, keep the improved delivery-status pattern, and simplify account verification.</p>
        </div>
        ${
          state.allowEvidence
            ? `<div class="brief-block"><h3>Supporting evidence</h3><p>“I tried paying three times and every time it sent me back to the cart.”</p></div>`
            : ""
        }
        <p class="tiny">Generated with FeedbackLens from 2,301 customer responses.</p>
      </div>`}
    </section>
  `;
}

function renderAddFeedbackFlow() {
  const compare = state.selectedComparisonMode === "compare";
  return `
    <div class="main-wrap">
      ${renderWorkspaceTopbar()}
      <section class="section-card stack">
        <span class="eyebrow">Add feedback</span>
        <h2>Add feedback to “June onboarding feedback”</h2>
        <p>Upload new responses to update this analysis or compare a new period with the existing dataset.</p>
        <div class="upload-composer" style="box-shadow:none;">
          <div class="upload-drop">
            <div class="chip-row">
              <span class="chip">684 new responses detected</span>
              <span class="chip">39 possible duplicates</span>
              <span class="chip">Date overlap warning ready</span>
            </div>
            <textarea class="textarea" placeholder="Paste new feedback or keep the demo upload.">July onboarding feedback sample...</textarea>
          </div>
        </div>
      </section>
      <section class="section-card stack">
        <span class="eyebrow">How should we use this feedback?</span>
        <div class="choice-grid">
          <button class="choice-panel ${compare ? "" : "active"}" data-action="choose-add-mode" data-mode="add">
            <strong>Add to existing analysis</strong>
            <p>Combine this feedback with the existing dataset to refresh themes, evidence, and recommended actions.</p>
            <p class="tiny">The analysis will include 2,301 existing + 684 new responses.</p>
          </button>
          <button class="choice-panel ${compare ? "active" : ""}" data-action="choose-add-mode" data-mode="compare">
            <strong>Compare with previous feedback</strong>
            <p>Keep the datasets separate and see what has increased, decreased, appeared, or improved.</p>
            <p class="tiny">Compare June onboarding feedback with July onboarding feedback.</p>
          </button>
        </div>
        ${
          compare
            ? `
            <div class="mini-panel stack">
              <input class="field" value="July onboarding feedback" />
              <input class="field" value="1–31 July 2026" />
              <input class="field" value="Onboarding survey" />
              <button class="primary-btn" data-action="go-comparison">Compare feedback</button>
            </div>`
            : `
            <div class="mini-panel stack">
              <p>FeedbackLens will retain the original upload sources so you can still filter and inspect them separately.</p>
              <p>Some new responses appear to overlap with your existing feedback. We found 39 possible duplicates.</p>
              <div class="button-row">
                <button class="ghost-btn">Exclude duplicates</button>
                <button class="ghost-btn">Review matches</button>
                <button class="primary-btn" data-action="finish-add">Update analysis</button>
              </div>
            </div>`
        }
      </section>
    </div>
  `;
}

function renderShareModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <div class="share-card" onclick="event.stopPropagation()">
        <div class="button-row" style="justify-content:space-between;">
          <div class="stack">
            <span class="eyebrow">Share brief</span>
            <h3>Share brief</h3>
          </div>
          <button class="icon-btn" data-action="close-modal">×</button>
        </div>
        <div class="segmented">
          <button class="tab-btn">Share link</button>
          <button class="ghost-btn">Export PDF</button>
        </div>
        <div class="mini-panel stack">
          <div class="button-row">
            <input class="field" value="https://feedbacklens.app/share/brief-123" />
            <button class="primary-btn" data-action="copy-link">Copy link</button>
          </div>
          <div class="button-row">
            <span class="muted tiny">Link expiry</span>
            ${["Never", "7 days", "30 days", "Custom"]
              .map(
                (item) =>
                  `<button class="${state.shareExpiry === item ? "soft-btn" : "ghost-btn"}" data-action="set-expiry" data-expiry="${item}">${item}</button>`
              )
              .join("")}
          </div>
          <label class="toggle-row"><input type="checkbox" data-action="toggle-quote-mode" ${
            state.briefQuoteMode ? "checked" : ""
          } /> Include supporting quotes</label>
          <label class="toggle-row"><input type="checkbox" data-action="toggle-evidence-view" ${
            state.allowEvidence ? "checked" : ""
          } /> Allow evidence view</label>
          <label class="toggle-row"><input type="checkbox" checked /> Mask customer names and personal details</label>
          <div class="button-row">
            <button class="primary-btn" data-action="create-link">Create share link</button>
            <button class="ghost-btn" data-action="revoke-link">Revoke link</button>
            <button class="ghost-btn" data-action="cycle-public-state">Cycle public state</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMergeModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal-card" onclick="event.stopPropagation()">
        <div class="button-row" style="justify-content:space-between;">
          <div class="stack">
            <span class="eyebrow">Merge related themes</span>
            <h3>Merge related themes</h3>
          </div>
          <button class="icon-btn" data-action="close-modal">×</button>
        </div>
        <p>Current theme: Delivery tracking</p>
        <div class="chip-row">
          <span class="chip">Delivery delays</span>
          <span class="chip">Order status confusion</span>
          <span class="chip">Shipping updates</span>
        </div>
        <div class="mini-panel stack">
          <input class="field" value="Delivery visibility" />
          <p>Combined response count: 588 · Overlapping emotions: Confused, Anxious</p>
          <p>“I knew it shipped, but I still had no real delivery estimate.”</p>
          <p>Merging updates related summaries, recommendations, and any brief content using these themes.</p>
        </div>
        <div class="button-row" style="justify-content:flex-end;">
          <button class="ghost-btn" data-action="close-modal">Cancel</button>
          <button class="primary-btn" data-action="merge-confirm">Merge themes</button>
        </div>
      </div>
    </div>
  `;
}

function renderSplitModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal-card" onclick="event.stopPropagation()">
        <div class="button-row" style="justify-content:space-between;">
          <div class="stack">
            <span class="eyebrow">Split this theme</span>
            <h3>Tell FeedbackLens how this theme should be separated.</h3>
          </div>
          <button class="icon-btn" data-action="close-modal">×</button>
        </div>
        <textarea class="textarea">Separate delivery delays from tracking confusion.</textarea>
        <button class="soft-btn">Suggest groups</button>
        <div class="action-list">
          ${[
            ["deliveryDelays", "Delivery delays", 246, "Packages arrive later than promised."],
            ["trackingConfusion", "Tracking confusion", 171, "Customers cannot tell where the order is."],
            ["addressIssues", "Address / availability issues", 58, "Some problems come from address validation or stock routing."],
          ]
            .map(
              ([key, title, count, quote]) => `
              <label class="choice-panel active">
                <div class="button-row" style="justify-content:space-between;">
                  <strong>${title}</strong>
                  <input type="checkbox" data-split="${key}" ${state.splitSelection[key] ? "checked" : ""} />
                </div>
                <p>${count} responses</p>
                <p class="tiny">“${quote}”</p>
              </label>`
            )
            .join("")}
        </div>
        <div class="button-row" style="justify-content:flex-end;">
          <button class="ghost-btn" data-action="close-modal">Back</button>
          <button class="primary-btn" data-action="split-confirm">Create 2 themes</button>
        </div>
      </div>
    </div>
  `;
}

function renderModal() {
  if (state.modal === "share") return renderShareModal();
  if (state.modal === "merge") return renderMergeModal();
  if (state.modal === "split") return renderSplitModal();
  return "";
}

function expectedRouteSelector() {
  if (state.route === "login") return ".login-card";
  if (state.route === "home") return ".upload-composer";
  if (state.route === "import") return ".two-col";
  if (state.route === "processing") return ".progress-list";
  if (state.route === "workspace" && state.workspaceView === "overview") return ".summary-hero";
  if (state.route === "workspace" && state.workspaceView === "themes") return ".evidence-list";
  if (state.route === "workspace" && state.workspaceView === "responses") return ".responses-list";
  if (state.route === "workspace" && state.workspaceView === "brief") return ".brief-canvas";
  if (state.route === "workspace" && state.workspaceView === "comparison") return ".comparison-row";
  if (state.route === "workspace" && state.workspaceView === "add-feedback") return ".choice-grid";
  if (state.route === "public-brief") return ".public-brief";
  return "#app";
}

function collectSelfChecks() {
  const results = [];
  const app = document.getElementById("app");
  const routeSelector = expectedRouteSelector();
  const overflow = document.documentElement.scrollWidth - window.innerWidth;
  const nestedButtons = Array.from(document.querySelectorAll("button button")).length;

  results.push({
    name: "App root exists",
    passed: Boolean(app),
    detail: app ? "App mounted." : "App root missing.",
  });
  results.push({
    name: "Expected route content present",
    passed: Boolean(document.querySelector(routeSelector)),
    detail: routeSelector,
  });
  results.push({
    name: "No nested buttons",
    passed: nestedButtons === 0,
    detail: `${nestedButtons} nested buttons found.`,
  });
  results.push({
    name: "No horizontal overflow",
    passed: overflow <= 1,
    detail: `${Math.max(0, overflow)}px overflow.`,
  });
  results.push({
    name: "Primary CTA available",
    passed: document.querySelectorAll(".primary-btn").length > 0,
    detail: `${document.querySelectorAll(".primary-btn").length} primary CTA(s).`,
  });

  return results;
}

function refreshSelfChecks() {
  const results = collectSelfChecks();
  state.selfCheckSummary = {
    total: results.length,
    failed: results.filter((item) => !item.passed).length,
    results,
  };
}

function applySelfCheckUI() {
  const chip = document.querySelector("[data-self-check-chip]");
  if (!chip || !state.selfCheckSummary) return;
  chip.className = `status-pill ${state.selfCheckSummary.failed ? "status-warning" : "status-success"}`;
  chip.textContent = state.selfCheckSummary.failed
    ? `${state.selfCheckSummary.failed} self-checks need review`
    : "Self-checks passing";
}

function renderWorkspace() {
  let content = renderOverview();
  if (state.workspaceView === "themes" || state.workspaceView === "pain-points" || state.workspaceView === "opportunities") {
    content = renderThemeDetail();
  } else if (state.workspaceView === "responses") {
    content = renderResponses();
  } else if (state.workspaceView === "brief") {
    content = renderBrief();
  } else if (state.workspaceView === "comparison") {
    content = renderComparison();
  } else if (state.workspaceView === "add-feedback") {
    content = renderAddFeedbackFlow();
  }

  return `
    <div class="workspace">
      ${renderSidebar()}
      <main class="main">${content}</main>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById("app");
  let markup = "";
  if (state.route === "login") markup = renderLogin();
  if (state.route === "home") markup = renderHome();
  if (state.route === "import") markup = renderImportReview();
  if (state.route === "processing") markup = renderProcessing();
  if (state.route === "workspace") markup = renderWorkspace();
  if (state.route === "public-brief") markup = renderPublicBrief();

  app.innerHTML = `
    <div class="app-shell" data-route="${escapeHtml(state.route)}" data-view="${escapeHtml(state.workspaceView)}">
      ${markup}
      ${renderModal()}
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
  bindEvents();
  refreshSelfChecks();
  applySelfCheckUI();
  if (state.route === "home") updateHomeComposerState();
}

function bindEvents() {
  const textArea = document.getElementById("home-feedback-input");
  if (textArea) {
    textArea.addEventListener("input", (event) => {
      state.uploadDraft.text = event.target.value;
      updateHomeComposerState();
    });
  }

  const feedbackColumn = document.getElementById("feedback-column");
  if (feedbackColumn) {
    feedbackColumn.addEventListener("change", (event) => {
      state.importConfig.feedbackColumn = event.target.value;
    });
  }

  document.querySelectorAll("[data-toggle]").forEach((node) => {
    node.addEventListener("change", (event) => {
      const key = event.target.getAttribute("data-toggle");
      state.importConfig[key] = event.target.checked;
    });
  });

  document.querySelectorAll("[data-split]").forEach((node) => {
    node.addEventListener("change", (event) => {
      state.splitSelection[event.target.getAttribute("data-split")] = event.target.checked;
    });
  });

  document.querySelectorAll("[data-action]").forEach((node) => {
    node.addEventListener("click", (event) => {
      const action = event.currentTarget.getAttribute("data-action");
      const themeId = event.currentTarget.getAttribute("data-theme");
      const status = event.currentTarget.getAttribute("data-status");
      const analysisId = event.currentTarget.getAttribute("data-analysis");
      const view = event.currentTarget.getAttribute("data-view");
      const mode = event.currentTarget.getAttribute("data-mode");
      const index = event.currentTarget.getAttribute("data-index");
      const expiry = event.currentTarget.getAttribute("data-expiry");

      if (action === "login-sso" || action === "login-email") setRoute("home");
      if (action === "mock-file") {
        state.uploadDraft.files = ["Onboarding_June_2026.xlsx", "Support_Notes_June.pdf"];
        state.uploadDraft.text = "The checkout failed twice and I wasn't sure if my order was placed.\nTracking updates were also unclear after purchase.";
        renderApp();
      }
      if (action === "remove-file") {
        state.uploadDraft.files.splice(Number(index), 1);
        renderApp();
      }
      if (action === "go-import") setRoute("import");
      if (action === "back-home" || action === "new-analysis") {
        state.workspaceView = "overview";
        setRoute("home");
      }
      if (action === "start-processing") setRoute("processing");
      if (action === "pause-analysis") setToast("Analysis paused at 68%. Your uploaded data is saved.");
      if (action === "view-insights") {
        state.workspaceView = "overview";
        setRoute("workspace");
      }
      if (action === "open-analysis") {
        state.currentAnalysisId = analysisId;
        state.workspaceView = "overview";
        setRoute("workspace");
      }
      if (action === "switch-view") {
        state.workspaceView = view;
        renderApp();
      }
      if (action === "open-theme") {
        state.selectedThemeId = themeId;
        state.workspaceView = "themes";
        renderApp();
      }
      if (action === "set-action") {
        state.actionStatuses[themeId] = status;
        setToast(`${demo.themes.find((item) => item.id === themeId).name} marked ${status}.`);
      }
      if (action === "toggle-brief") {
        state.briefSelections[themeId] = !state.briefSelections[themeId];
        setToast(
          state.briefSelections[themeId]
            ? "Theme added to the brief."
            : "Theme removed from the brief."
        );
      }
      if (action === "toggle-comparison-brief") {
        state.briefSelections.comparison = !state.briefSelections.comparison;
        renderApp();
      }
      if (action === "open-share") {
        state.modal = "share";
        renderApp();
      }
      if (action === "open-merge") {
        state.modal = "merge";
        renderApp();
      }
      if (action === "open-split") {
        state.modal = "split";
        renderApp();
      }
      if (action === "close-modal") {
        state.modal = null;
        renderApp();
      }
      if (action === "merge-confirm") {
        state.modal = null;
        setToast("Merged themes and updated related brief content.");
      }
      if (action === "split-confirm") {
        state.modal = null;
        setToast("Created 2 refined themes from the broader cluster.");
      }
      if (action === "copy-link" || action === "create-link") setToast("Share link copied.");
      if (action === "revoke-link") {
        state.publicLinkState = "revoked";
        setToast("Share link revoked.");
      }
      if (action === "cycle-public-state") {
        const next = { live: "expired", expired: "restricted", restricted: "live", revoked: "live" };
        state.publicLinkState = next[state.publicLinkState];
        renderApp();
      }
      if (action === "set-expiry") {
        state.shareExpiry = expiry;
        renderApp();
      }
      if (action === "toggle-quote-mode") {
        state.briefQuoteMode = !state.briefQuoteMode;
        renderApp();
      }
      if (action === "toggle-evidence-view") {
        state.allowEvidence = !state.allowEvidence;
        renderApp();
      }
      if (action === "public-brief") setRoute("public-brief");
      if (action === "open-add-feedback") {
        state.workspaceView = "add-feedback";
        renderApp();
      }
      if (action === "choose-add-mode") {
        state.selectedComparisonMode = mode;
        renderApp();
      }
      if (action === "finish-add") {
        state.workspaceView = "overview";
        setToast("New feedback added. Themes and recommendations have been refreshed.");
      }
      if (action === "go-comparison") {
        state.workspaceView = "comparison";
        setToast("Comparison analysis generated.");
      }
    });
  });

  document.querySelectorAll(".modal-card, .share-card").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

globalThis.__feedbackLens = {
  get state() {
    return state;
  },
  get demo() {
    return demo;
  },
  setRoute,
  setWorkspaceView(view) {
    state.workspaceView = view;
    renderApp();
  },
  runSelfChecks() {
    refreshSelfChecks();
    return state.selfCheckSummary;
  },
};

renderApp();
