/**
 * Alex Imas — Personal Academic Website (www.aleximas.com)
 * Complete Content Dataset (100% migrated from Squarespace + Local /s/ Asset Backups)
 */

window.ALEX_SITE_DATA = {
  profile: {
    name: "Alex Imas",
    portrait: "s/Small.jpg",
    roles: [
      {
        prominent: true,
        text: "<strong>Director of AGI Economics, <a href=\"https://alexolegimas.github.io/agi-economics-lab/\" target=\"_blank\" rel=\"noopener\">Google DeepMind</a></strong>"
      },
      {
        text: "Roger L. and Rachel M. Goetz Professor of Behavioral Science, Economics, and Applied AI · Vasilou Faculty Scholar, <a href=\"https://www.chicagobooth.edu/faculty/directory/i/alex-imas\" target=\"_blank\" rel=\"noopener\">University of Chicago Booth School of Business</a> <span class=\"leave-tag\">(On Leave)</span>"
      }
    ],
    affiliationsLines: [
      "Co-Director, <a href=\"https://bfi.uchicago.edu/entities/program-in-behavioral-economics-research/\" target=\"_blank\" rel=\"noopener\">Program in Behavioral Economics Research</a> &amp; <a href=\"https://bfi.uchicago.edu/entities/program-in-behavioral-economics-research/\" target=\"_blank\" rel=\"noopener\">Arts and Creative Enterprise Program</a>",
      "NBER Faculty Research Associate &nbsp;·&nbsp; Center for Applied AI &nbsp;·&nbsp; CESifo Research Network Fellow &nbsp;·&nbsp; HCEO Faculty Affiliate"
    ],
    primaryLinks: [
      { label: "CV", url: "s/CV-8.pdf" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=P8EMNvkAAAAJ&hl=en" },
      { label: "Chicago Booth", url: "https://www.chicagobooth.edu/faculty/directory/i/alex-imas" },
      { label: "OSF", url: "http://osf.io/ubvej" }
    ],
    bioParagraphs: [
      "Alex studies the economics of artificial intelligence and technological change. His research explores how AI reshapes productivity, labor markets, and creative work, how people and organizations adopt AI tools, and how agentic systems interact with existing economic and social institutions. He also studies behavioral economics, with a focus on how people understand and mentally represent the choices they are facing — including how they learn and make decisions under risk and uncertainty. Alex's work utilizes a variety of methods, including controlled laboratory experiments, field experiments, analysis of observational data, and theoretical modeling.",
      "Alex Imas is the recipient of the 2023 Alfred P. Sloan Research Fellowship, the Review of Financial Studies Rising Scholar Award, the New Investigator Award from the Behavioral Science and Policy Association, the Hillel Einhorn New Investigator Award from the Society of Judgment and Decision Making, the Distinguished CESifo Affiliate Award, and the NSF Graduate Research Fellowship. He is the co-author, with Richard Thaler, of <em>The Winner’s Curse: Behavioral Economics Anomalies, Then and Now</em>. He is an Associate Editor at the <em>Journal of the European Economic Association</em> and on the editorial board of <em>Psychological Science</em>."
    ],
    featuredBullets: [
      "Alex regularly writes essays on AI, technology, and economics on Substack at <a href=\"https://aleximas.substack.com/\" target=\"_blank\" rel=\"noopener\"><strong>Ghosts of Electricity ↗</strong></a>.",
      "Alex runs the <a href=\"https://alexolegimas.github.io/agi-economics-lab/\" target=\"_blank\" rel=\"noopener\"><strong>AGI Economics Lab at Google DeepMind ↗</strong></a>."
    ]
  },

  sections: [
    {
      id: "books",
      num: "01",
      title: "Books",
      shortLabel: "Books",
      items: [
        {
          id: "B1",
          title: "The Winner's Curse: Behavioral Economics Anomalies, Then and Now",
          coauthors: "with R. Thaler",
          venue: "Book",
          drawerLabel: "Summary",
          abstract:
            "Over thirty years ago, Richard H. Thaler introduced readers to behavioral economics in his seminal Anomalies column, written with collaborators including Daniel Kahneman and Amos Tversky. These provocative articles challenged the fundamental idea at the heart of economics that people are selfish, rational optimizers, and provided the foundation for what became behavioral economics. That was then. Now, three decades later, Thaler has teamed up with economist Alex O. Imas to write a new book with an original and creative format. Each chapter starts with an original Anomaly, retaining the spirit of its time stamp. Then, shifting to the present, the authors provide updates to each, asking how the original findings have held up and how the field has evolved since then. It turns out that the original findings not only hold up well, but they show up almost everywhere. Anomalies pop up in people’s decisions to save for retirement and how they carry outstanding credit card debt. Even experts fail to optimize. The key concept of loss aversion explains missed putts by PGA pros and the selection of which stocks to sell by portfolio managers. In this era of meme stocks and Dogecoin, it is hard to defend the view that financial markets are highly efficient. The good news, however, is that the anomalies have gotten funnier. With both readability and rigor, The Winner’s Curse is for anyone, from those with a cursory understanding of economics to fellow economists. Each chapter provides a key insight into human behavior so readers learn how to better understand the choices made by their friends, colleagues, and customers, and they might just become better at making decisions themselves.\n\nThe book is accompanied with teaching materials, including slides for each chapter and replication materials to run the experiments yourself.",
          links: [
            { label: "Teaching Materials", url: "https://www.thewinnerscurse.org/teaching-slides" },
            { label: "Replication Materials", url: "https://www.thewinnerscurse.org/replication-materials" },
            { label: "Purchase Link", url: "https://a.co/d/fkxmiGj" }
          ]
        }
      ]
    },

    {
      id: "ai-tech",
      num: "02",
      title: "AI and Technology",
      shortLabel: "AI & Technology",
      items: [
        {
          id: "AI1",
          title: "AI and Productivity Tracker (Continuously Updated)",
          coauthors: "",
          venue: "Living Tracker · Ghosts of Electricity",
          links: [
            { label: "Link", url: "https://aleximas.substack.com/p/what-is-the-impact-of-ai-on-productivity" }
          ]
        },
        {
          id: "AI2",
          title: "Who Uses AI and How (Continuously Updated)",
          coauthors: "",
          venue: "Living Tracker · Ghosts of Electricity",
          links: [
            { label: "Link", url: "https://aleximas.substack.com/p/who-uses-ai-and-how" }
          ]
        },
        {
          id: "AI3",
          title: "Agentic Interactions",
          coauthors: "with K. Lee and S. Misra",
          venue: "Working Paper",
          badges: ["New Paper"],
          abstract:
            "Do human differences persist and scale when decisions are delegated to AI agents? We study an experimental marketplace in which individuals author instructions for buyer-and seller-side agents that negotiate on their behalf. We compare these AI agentic interactions to standard human-to-human negotiations in the same setting. First, contrary to predictions of more homogenous outcomes, agentic interactions lead to, if anything, greater dispersion in outcomes compared to human-mediated interactions. Second, crossing agents across counterparties reveals systematic dispersion in outcomes that tracks the identity and characteristics of the human creators; who designs the agent matters as much as, and often more than, shared information or code. Canonical behavioral frictions reappear in agentic form: personality traits shape agent behavior and selection on principal characteristics yields sorting. Despite AI agents not having access to the human principal's characteristics, demographics such as gender and personality variables have substantial explanatory power for outcomes, in ways that are sometimes reversed from human-to-human interactions. Moreover, we uncover significant variation in \"machine fluency\"—the ability to instruct an AI agent to effectively align with one's objective function—that is predicted by principals' individual types, suggesting a new source of heterogeneity and inequality in economic outcomes. These results indicate that the agentic economy inherits, transforms, and may even amplify, human heterogeneity. Finally, we highlight a new type of information asymmetry in principal-agent relationships and the potential for specification hazard, and discuss broader implications for welfare, inequality, and market power in economies increasingly transacted through machines shaped by human intent.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5875162" }
          ]
        },
        {
          id: "AI4",
          title: "Social Dynamics of AI Adoption",
          coauthors: "with L. Bursztyn, R. Jimenez-Duran, A. Leonard and C. Roth",
          venue: "Revision requested at PNAS",
          badges: ["New Paper"],
          abstract:
            "Anxiety about falling behind can drive people to embrace emerging technologies with uncertain consequences. We study how social forces shape demand for AI-based learning tools early in the education pipeline. In incentivized experiments with parents—key gatekeepers for children’s AI adoption—we elicit their demand for unrestricted AI tools for teenagers’ education. Parental demand rises with the share of other teenagers using the technology, with social forces increasing willingness to pay for AI by more than 60%. Providing information about potentially adverse effects of unstructured AI use negatively shifts beliefs about the merits of AI, but does not change individual demand. Instead, this information increases parents’ preference for banning AI in schools. Follow-up experiments show that social information has little effect on beliefs about AI quality, perceived skill priorities, or support for bans, suggesting that effects operate through social pressure rather than social learning. Our evidence highlights social pressure driving individual technology adoption despite widespread support for restricting its use.",
          links: [
            { label: "Working Paper", url: "https://www.nber.org/papers/w34488" }
          ]
        },
        {
          id: "AI5",
          title: "Art and the Machine: Why People Devalue AI-Generated Creative Work",
          coauthors: "with G. Mandel",
          venue: "Working Paper",
          badges: ["New Paper"],
          abstract:
            "GenAI has expanded the possibilities of artistic creation. However, the creative output of AI has both heightened anxieties amongst creative professionals and engendered dislike amongst viewing audiences. How and why do people value human creation versus AI-generated art? We find that the perception of human-generated art as inherently exclusive is a key component of its value. Even some AI involvement is enough to break this perception and devalue the piece. We ran two preregistered incentivized experiments where people bid to receive physical art prints (N = 351). People consistently devalued artwork believed to be AI (vs. human-generated), and this gap in valuations shrunk as the artwork became less exclusive in terms of the number of pieces made/printed. People were sensitive to the scope of AI involvement, such that greater levels of AI involvement decreased the value of the creative work, but this relationship was nonlinear as even trace amounts of AI involvement devalued the piece, consistent with psychological accounts of contamination. Our work expands understanding of the interplay between human and AI creativity and provides an optimistic outlook for the importance of the human hand in creative processes.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6302659" }
          ]
        },
        {
          id: "AI6",
          title: "Artificial Writing and Automated Detection",
          coauthors: "with B. Jabarian",
          venue: "Working Paper",
          badges: ["New Paper"],
          abstract:
            "Artificial intelligence (AI) tools are increasingly used for written deliverables, e.g., ensuring assignments were completed by students, product reviews written by actual customers, etc. This has created demand for distinguishing human-generated text from AI-generated text at scale. A decision-making aiming to implement a detector in practice must consider two key statistics: the False Negative Rate (FNR), which corresponds to the proportion of AI-generated text that is falsely classified as human, and the False Positive Rate (FPR), which corresponds to the proportion of human-written text that is falsely classified as AI-generated. We evaluate four leading detectors—Pangram, OriginalityAI, GPTZero, and RoBERTa—on their performance in minimizing these statistics using a large corpus spanning genres, lengths, and models. Commercial detectors outperform open-source, with Pangram achieving near-zero FNR and FPR rates that remain robust across models, threshold rules, ultra-short passages, \"stubs\" (≤ 50 words) and ’humanizer’ tools. A decision-maker may weight one type of error (Type I vs. Type II) as more important than the other. To account for such a preference, we introduce a framework where the decision-maker sets a policy cap—a detector-independent metric reflecting tolerance for false positives or negatives. We show that Pangram is the only tool to satisfy a strict cap (FPR ≤ 0.005) without sacrificing accuracy. This framework is especially relevant given the uncertainty surrounding how AI may be used at different stages of writing, where certain uses may be encouraged (e.g., grammar correction) but may be difficult to separate from other uses.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5407424" }
          ]
        },
        {
          id: "AI7",
          title: "In Their Shoes: Empathy Through Information",
          coauthors: "with M. Andries, L. Bursztyn, T. Chaney, and M. Djourelova",
          venue: "Accepted, Quarterly Journal of Economics",
          abstract:
            "We explore the mechanics of empathy. We show that information about an outgroup can potentially activate and magnify empathy when presented in conjunction with an experience simulating their struggles. This response increases the willingness to help the struggling group, but it is only activated when the information comes before the experience and not after. We provide evidence for this effect in an immersive virtual reality experiment where participants (“witnesses”) simulate the struggle of unauthorized migrants (“protagonists”). These results are then replicated in a series of controlled lab experiments. We show that this effect operates through an increase in interpersonal similarity, or relatability. If information shifts perceptions of relatability, which changes people’s experience when witnessing the protagonist’s struggles, then it magnifies their empathetic response and drives them to engage in more prosocial behavior. Together, our evidence suggests that the ability to put oneself in the shoes of another person or group can be enhanced by activating empathy through simple information provision.",
          links: [
            { label: "Working Paper", url: "https://www.nber.org/papers/w32569" }
          ]
        },
        {
          id: "AI8",
          title: "Underreporting of AI use: The role of social desirability bias",
          coauthors: "with A. Kale and Y. Ling",
          venue: "CHI'26",
          abstract:
            "Rapid integration of artificial intelligence (AI) into work and educational settings challenges organizations to gauge and respond to adoption rates. However, most measures of AI adoption come from self-reported surveys, producing estimates of AI use that disagree by up to 40 percentage points within the same setting. We investigate whether social desirability bias—the tendency to answer surveys in ways that would be viewed favorably by an outside party—can explain this discrepancy. Surveying 338 university students, we assess potential social desirability bias using a method from psychology, indirect questioning: students report both their own AI use and that of their peers. We find a significant gap, with approximately 60% of students reporting that they use AI compared to 90% of their peers. Through qualitative analysis of student explanations for this gap, we conclude that social desirability bias is a key driver of mis-measurement, causing underestimates of AI adoption in educational settings.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5464215" }
          ]
        },
        {
          id: "AI9",
          title: "The Language of Discrimination: Using Experimental versus Observational Data",
          coauthors: "with J. A. Bohren and M. Rosenberg",
          venue: "American Economic Association: Papers and Proceedings, 2018",
          abstract:
            "We use experimental and observational data to examine whether people respond differently to questions posed by females versus males. We document significant differences in the language of responses, both in terms of the distribution of language utilized, and the sentiment of this language (positive or negative). In the observational data, we also document differences in the language and sentiment of questions posed by gender. This highlights the importance of using experimental data to identify the causal role that gender plays in influencing the language choice of individuals responding to questions from males versus females.",
          links: [
            { label: "Paper", url: "s/BohrenImasRosenberg_Manuscript_20180125.pdf" }
          ]
        }
      ]
    },

    {
      id: "mental-representations",
      num: "03",
      title: "Mental Representations",
      shortLabel: "Mental Representations",
      items: [
        {
          id: "MR1",
          title: "Biases in Belief Updating Within and Across Domains",
          coauthors: "with F. Bastianello",
          venue: "Working Paper",
          badges: ["New Update"],
          abstract:
            "Why do people sometimes overreact to new information and other times underreact? We develop a model in which the strength of a signal—how much one should update their beliefs with new information—depends on multiple features of the information environment. Limited attention to these features leads to misperceptions of signal strength: people approach a problem with an experience-based prior, which they adjust only partially based on how much attention they pay to different features. This mechanism explains a wide range of belief-updating patterns. Insensitivity to a single feature generates underreaction to strong and overreaction to weak signals, and more neglected features amplify this. Insensitivity to multiple features can instead break that pattern: insensitivity to one feature can generate excess sensitivity with respect to another, leading to overreaction to both weak and strong signals. A series of experiments provides support for the model and its underlying mechanism.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5413920" }
          ]
        },
        {
          id: "MR2",
          title: "Mental Models of Information: The Role of Attention and Memory",
          coauthors: "with J. A. Bohren, J. Hascher, M. Ungeheuer, and M. Weber",
          venue: "Revision requested at American Economic Review",
          abstract:
            "How do people form mental models, or representations, of decision environments? We theoretically and empirically show that attention and memory constraints generate predictable distortions depending on how the decision environment taxes cognitive resources. Suppose an agent faces a choice between assets. Constrained attention leads to favoring assets with larger payoff contrasts, while memory constraints lead to favoring assets with frequent payoff differences. Our framework has implications for preference identification and welfare: as we show, decision anomalies previously ascribed to preferences (probability weighting, experience effects) can arise from incorrect representations. It also provides a microfoundation for model misspecification.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4731525" }
          ]
        },
        {
          id: "MR3",
          title: "Over- and Underreaction to Information: Belief Updating with Cognitive Constraints",
          coauthors: "with C. Ba and J. A. Bohren",
          venue: "Revision requested at Quarterly Journal of Economics",
          badges: ["New Update"],
          abstract:
            "This paper explores how cognitive constraints interact with the information environment to determine whether people overreact or underreact to information. In our model of belief updating, limited attention leads people to form a distorted mental model or representation of the information environment, and limited processing capacity generates cognitive imprecision when using this representation to update beliefs. The model predicts overreaction when facing complex environments, noisy or surprising signals, or priors concentrated on moderate states; it predicts underreaction when facing simple environments, precise or confirmatory signals, or priors concentrated on extreme states. A series of pre-registered experiments provide support for these predictions and direct evidence for the proposed cognitive mechanisms. Crucially, the interaction between the cognitive constraints generates the observed pattern of bias: neither constraint on its own can explain the data. These results connect prior disparate findings on whether underreaction versus overreaction arises.",
          links: [
            { label: "Working Paper", url: "s/BaBohrenImas_Over_and_Under_reaction.pdf" },
            { label: "Replication Package", url: "https://zenodo.org/records/18262802" }
          ]
        },
        {
          id: "MR4",
          title: "Selling Fast and Buying Slow: Heuristics and Trading Performance of Institutional Investors",
          coauthors: "with K. Akepanidtaworn, R. Di Mascio, and L. Schmidt",
          venue: "Journal of Finance, 2023 (Lead Article)",
          awards: ["Journal of Finance DFA First Prize"],
          abstract:
            "Are market experts prone to heuristics, and if so, do they transfer across closely related domains — buying and selling? We investigate this question using a unique dataset of institutional investors with portfolios averaging $573 million. A striking finding emerges: while there is clear evidence of skill in buying, selling decisions underperform substantially — even relative to random selling strategies. This holds despite the similarity between the two decisions in frequency, substance and consequences for performance. Evidence suggests that an asymmetric allocation of cognitive resources such as attention can explain the discrepancy: we document a systematic, costly heuristic process when selling but not when buying.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3301277" }
          ],
          mediaLinks: [
            { label: "Bloomberg (Matt Levine)", url: "https://www.bloomberg.com/opinion/articles/2019-01-10/investors-have-to-sell-stocks-too" },
            { label: "Bloomberg (Barry Ritholtz)", url: "https://www.bloomberg.com/opinion/articles/2019-01-15/stock-pickers-know-how-to-buy-but-not-how-to-sell" },
            { label: "Barron's", url: "https://www.barrons.com/articles/even-professional-investors-tend-to-sell-stocks-at-the-wrong-time-51607122523" },
            { label: "The Economist", url: "https://www.economist.com/finance-and-economics/2019/04/27/why-investors-are-careful-buyers-but-careless-sellers" }
          ]
        },
        {
          id: "MR5",
          title: "On the Role of Similarity in Mental Accounting and Hedonic Editing",
          coauthors: "with E. Evers and C. Kang",
          venue: "Psychological Review, 2021",
          abstract:
            "The theory of mental accounting is often used to understand how people evaluate multiple outcomes or events. However, a model predicting which outcomes are associated with the same mental account and evaluated jointly, versus different accounts and evaluated separately, has remained elusive. We develop a framework that incorporates an online, bottom-up process of similarity and categorization into mental accounting operations. In this categorization-based model of mental accounting, outcomes that overlap on salient attributes are automatically categorized and assigned to the same mental account while outcomes that do not overlap on salient attributes are assigned to different accounts. We use this model to derive the hedonic accounting hypothesis, which generates testable behavioral predictions on people’s preferences over the timing of outcomes given similarity-based constraints on mental accounting operations. Six studies provide support for the predictions: People prefer to experience similar losses close together in time and spread dissimilar losses apart; the reverse is true for gains, with a preference for dissimilar gains close together in time and similar gains spread apart across time. Importantly, our model is able to rationalize prior evidence that has found only limited support for the predictions of mental accounting and hedonic editing. Once the psychological process of similarity and categorization is explicitly incorporated into a formal model of mental accounting, its predictions are supported by the data.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3452943" }
          ]
        },
        {
          id: "MR6",
          title: "Waiting to Choose: The Role of Deliberation in Intertemporal Choice",
          coauthors: "with M. A. Kuhn and V. Mironova",
          venue: "American Economic Journal: Microeconomics, 2021",
          abstract:
            "We study the impact of deliberation on intertemporal choices. Using multiple experiments, including a field study in the Democratic Republic of Congo, we show that the introduction of waiting periods—a policy that temporally separate information about choices from choices themselves—cause substantially less myopic decisions. These results cannot be captured by models of exponential discounting nor present bias. Comparing the effects of waiting periods to making planned choices over future time periods, the former has a larger impact on reducing myopia. Our results highlight the role of deliberation in decision-making and have implications for policy and intervention design.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2880386" }
          ]
        },
        {
          id: "MR7",
          title: "Mental Money Laundering: A Motivated Violation of Fungibility",
          coauthors: "with G. Loewenstein and C. K. Morewedge",
          venue: "Journal of the European Economic Association, 2021",
          abstract:
            "People exploit flexibility in mental accounting to relax psychological constraints on spending. Four studies demonstrate this in the context of moral behavior. The first study replicates prior findings that people donate more money to charity when they earned it through unethical versus ethical means. However, when the unethically-earned money is first “laundered”––the cash is physically exchanged for the same amount but from a different arbitrary source—people spent it as if it was earned ethically. This mental money laundering represents an extreme fungibility violation: exchanging “dirty” money for the same sum coming from a “clean” source significantly changed people’s propensity to spend it prosocially. The second study demonstrates that mental money laundering generalizes to cases in which ethically and unethically earned money is mixed. When gains from ethical and unethical sources were pooled, people spent the entire pooled sum as if it was ethically earned. The last two studies provide mixed support for the prediction that people actively seek out laundering opportunities for unethically earned money, suggesting partial sophistication about these effects. These findings provide new evidence for the ease with which people can rationalize misbehavior, and have implications for consumer choice, corporate behavior and public policy.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3662841" }
          ],
          mediaLinks: [
            { label: "Chicago Booth Review", url: "https://review.chicagobooth.edu/behavioral-science/2021/article/mental-money-laundering-lifts-constraints-spending-morally" }
          ]
        },
        {
          id: "MR8",
          title: "Realization Effect: Risk-Taking After Realized versus Paper Outcomes",
          coauthors: "",
          venue: "American Economic Review, 2016",
          awards: [
            "Society of Judgment and Decision-Making Hillel-Einhorn Award",
            "CESifo Distinguished Affiliate Award",
            "INFORMS Decision Analysis Society Best Publication Award, finalist"
          ],
          abstract:
            "Understanding how prior outcomes affect risk attitudes is critical for the study of choice under uncertainty. A large literature documents the significant influence of prior losses on risk attitudes. The findings appear contradictory: some studies find greater risktaking after a loss, whereas others show the opposite – that people take on less risk. I reconcile these seemingly inconsistent findings by distinguishing between realized versus paper losses. Using new and existing data, I replicate prior findings and demonstrate that following a realized loss, individuals avoid risk; if the same loss is not realized, a paper loss, individuals take on greater risk.",
          links: [
            { label: "Paper", url: "s/Realization-Effect.pdf" },
            { label: "Online Appendix", url: "s/Online-Appendix.pdf" },
            { label: "Metadata", url: "s/Metadata11_18.xlsx" }
          ]
        }
      ]
    },

    {
      id: "decision-making",
      num: "04",
      title: "Behavioral Economics of Decision-Making",
      shortLabel: "Decision-Making",
      items: [
        {
          id: "DM1",
          title: "The Impact of Joint Versus Separate Prediction Mode on Forecasting Accuracy: The Role of Mental Models",
          coauthors: "with M. Jung, S. Saccardo, and J. Vosgerau",
          venue: "Revision requested at Management Science",
          abstract:
            "Forecasters predicting how people change their behavior in response to a treatment or participating in the intervention often consider a set of alternatives. In contrast, those who are treated are typically exposed to only one of the treatment alternatives. For example, managers selecting a wage schedule consider a set of alternative wages while employees are hired at a given rate. We show that forecasts made in Joint-prediction mode—which considers a set of alternatives—generate predictions that expect substantially larger behavioral responses than those made in Separate-prediction mode—which considers the response to only one treatment realization in isolation. Results show the latter to be more accurate in matching people’s actual responses to interventions and treatment changes. Our findings suggest that the discrepancy in accuracy is due to a disparity in the mental models used by forecasters and those being treated. We present applications to managerial decision-making and forecasting of scientific results.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4258470" }
          ]
        },
        {
          id: "DM2",
          title: "Time Preferences and Food Choice",
          coauthors: "with A. Brownback and M. Kuhn",
          venue: "Accepted at Journal of Public Economics",
          abstract:
            "Healthy food choices are a canonical example used to illustrate the importance of time preferences in behavioral economics. However, the literature lacks a direct demonstration that they are well-predicted by incentivized time preference measures. We offer direct evidence by combining a novel, two-question, incentivized time preference measurement with data from a field experiment that includes grocery purchases and consumption. Our present-focus measure is highly predictive of food choice, capturing a number of behaviors consistent with self-control problems, which provides direct evidence for the common assumption that important aspects of nutrition are driven by time preferences.",
          links: [
            { label: "Working Paper", url: "https://bfi.uchicago.edu/wp-content/uploads/2023/09/BFI_WP_2023-128.pdf" }
          ]
        },
        {
          id: "DM3",
          title: "Dynamic Inconsistency in Risky Choice: Evidence from the Lab and Field",
          coauthors: "with R. Heimer, Z. Iliewa and M. Weber",
          venue: "American Economic Review, 2024",
          abstract:
            "We document a dynamic inconsistency in risky choice. Using a unique brokerage dataset and two preregistered experiments, we compare people's initial risk-taking plans to their subsequent decisions. In both settings, people accept risk as part of a \"loss-exit\" strategy—planning to continue taking risk after gains and stopping after losses. Actual behavior follows the reverse pattern, deviating from initial strategies by cutting gains early and chasing losses. More individuals accept risk when offered a commitment to their initial strategy. Our results help reconcile seemingly contradictory findings on risk-taking in static versus dynamic contexts. We discuss implications for theory and welfare.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3600583" }
          ]
        },
        {
          id: "DM4",
          title: "Limits on Regret as a Tool for Incentive Design",
          coauthors: "with F. Araujo and A. Wilson",
          venue: "Journal of Political Economy Microeconomics, 2024",
          abstract:
            "We demonstrate the pitfalls when extrapolating behavioral findings across different contexts and decision environments. We focus on regret theory and the use of \"regret lotteries\" for motivating behavior change. Here, findings from one-shot settings have been used to promote regret as a tool to boost incentives in recurrent decisions across many settings. Using theory and experiments, we replicate regret lotteries as the superior one-shot incentive; however, for repeated decisions the comparative static is entirely reversed. Moreover, the effects are extremely sensitive to details of regret implementation. Our results suggest caution should be used when designing incentive schemes that exploit regret.",
          links: [
            { label: "Working Paper", url: "https://www.nber.org/system/files/working_papers/w32759/w32759.pdf" }
          ]
        },
        {
          id: "DM5",
          title: "A Clean Slate: Adapting the Realization Effect to Online Gambling and its Effectiveness in People with Gambling Problems",
          coauthors: "with K. Zhang and L. Clark",
          venue: "Journal of Behavioral Decision Making, 2024",
          abstract:
            "Betting more after losses (i.e. ‘loss chasing’) is a central clinical feature of disordered gambling. According to Prospect Theory, increasing risk-seeking following losses could arise from a failure to ‘re-reference’. By contrast, successful re-referencing between successive decisions closes the mental account, and any losses are regarded as final or realized; gamblers should not chase realized losses. The present study sought to test this ‘realization effect’ among gamblers using an ecologically-valid online gambling task. We were further interested in whether the effectiveness of the loss realization varied as a function of problem gambling severity. Using online recruitment of past-year gamblers stratified on the Problem Gambling Severity Index, we tested a group without gambling problems (n=227), a group with at-risk gambling (n=239), and a group with gambling problems (n=223). Over a sequence of 9 bets, after bet 6, half of the participants underwent a simulated realization procedure that entailed cashing out from the gambling website, and re-depositing their remaining funds on another website. The feedback comparison group were shown their account balance after bet 6 but did not withdraw or transfer their funds. In line with the realization effect, the group with non-problem gambling significantly reduced their bet after cashing out. The realization procedure did not significantly ameliorate loss chasing in the groups with at-risk gambling or gambling problems. We conclude that the realization effect can be elicited in an online gambling context, but that stronger interventions for realizing losses may be required for people experiencing gambling problems.",
          links: [
            { label: "Paper", url: "https://osf.io/preprints/osf/m9kpe" }
          ]
        },
        {
          id: "DM6",
          title: "Can’t Wait to Pay: The Desire for Goal Closure Increases Impatience for Costs",
          coauthors: "with A. Roberts and A. Fishbach",
          venue: "Journal of Personality and Social Psychology, 2023",
          abstract:
            "We explore whether the desire to achieve psychological closure on a goal creates impatience. If so, people should choose an earlier (vs. later) option even when it does not deliver a reward. For example, they may prefer to pay money or complete work earlier rather than later. A choice to incur earlier costs seems to violate the preference for positive discounting (indeed, it may appear like negative time discounting), unless people value earlier goal closure. Across seven studies we consistently find that people preferred to pay more money sooner over less money later (Study 1) and complete more work sooner over less work later (Studies 2-5) more when they had a stronger desire for goal closure, such as when the sooner option allowed them to achieve goal closure and when the goal would otherwise linger on their minds (compared to when it would not). The implications of goal closure extend to impatience for gains (Studies 6-7), as people preferred less money sooner (vs. more later) when it allowed them to achieve goal closure. These findings suggest that the desire to achieve goal closure is an important aspect of time preferences. Taking this desire into account can explain marketplace anomalies and inform interventions to reduce impatience.",
          links: [
            { label: "Paper", url: "s/Closure-and-Impatience-Paper.pdf" }
          ]
        },
        {
          id: "DM7",
          title: "Behavioral Food Subsidies",
          coauthors: "with A. Brownback and M. Kuhn",
          venue: "Review of Economics and Statistics, 2023",
          abstract:
            "We conduct a pre-registered field experiment with low-income grocery shoppers to study how behavioral interventions can improve the effectiveness of healthy food subsidies. Our unique design enables us to elicit choices and deliver subsidies both before and at the point of purchase. We examine the effects of two non-restrictive changes to the choice environment: giving shoppers a choice over the type of subsidy they receive and introducing a waiting period before the shopping trip to prompt deliberation about the food purchase decision. Combined, our interventions substantially improve the effectiveness of subsidies, increasing healthy purchases by 61% relative to a choice-less subsidy restricted to healthy food, and 199% relative to an un-subsidized control group. We discuss how these low-cost, scalable interventions can help mitigate nutritional inequality.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3422272" }
          ]
        },
        {
          id: "DM8",
          title: "Ownership, Learning, and Beliefs",
          coauthors: "with S. Hartzmark and S. Hirshman",
          venue: "Quarterly Journal of Economics, 2021",
          abstract:
            "We examine how owning a good affects learning and beliefs about its quality. We show that people have more extreme reactions to information about a good that they own compared to the same information about a non-owned good: ownership causes more optimistic beliefs after receiving a positive signal and more pessimistic beliefs after receiving a negative signal. Comparing learning to normative benchmarks reveals that people over-extrapolate from signals about goods that they own, which leads to an overreaction to information; in contrast, learning is close to Bayesian for non-owned goods. We provide direct evidence that this effect is driven by ownership channeling greater attention towards associated information, which leads people to overweight recent signals when forming beliefs. The relationship between ownership and beliefs has testable implications for trade and market expectations. In line with these predictions, we show that the endowment effect doubles in response to positive information and disappears with negative information, and demonstrate a significant relationship between ownership and over-extrapolation in survey data about stock market expectations.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3465246" }
          ],
          mediaLinks: [
            { label: "Chicago Booth Review", url: "https://review.chicagobooth.edu/behavioral-science/2021/article/people-overreact-news-about-stocks-and-other-things-they-own" }
          ]
        },
        {
          id: "DM9",
          title: "Biased By Choice: How Financial Constraints Can Reduce Financial Mistakes",
          coauthors: "with R. Heimer",
          venue: "Review of Financial Studies, 2021",
          awards: ["Review of Financial Studies Rising Scholars Award"],
          abstract:
            "We show that constraints can improve financial decision-making by disciplining behavioral biases. In financial markets, restrictions on leverage limit traders' ability to borrow to open new positions. We demonstrate that regulation which restricts the provision of leverage to retail traders increases trading performance. By increasing the opportunity cost of postponing the realization of losses, leverage constraints improve traders' market timing and reduce their disposition effect. We replicate these findings in two distinct experimental settings, further isolating the mechanism and demonstrating generality of the results. The interaction between constraints and behavioral biases has implications for policy and choice architecture.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3300456" }
          ]
        },
        {
          id: "DM10",
          title: "Are Non-Contingent Incentives More Effective in Motivating New Behavior? Evidence from the Field",
          coauthors: "with D. Schwartz and A. Cordova",
          venue: "Games and Economic Behavior, 2021",
          abstract:
            "Companies and policymakers are increasingly relying on economic incentives as a means of promoting new habits and changing people’s behavior. For example, workplace wellness programs use incentives to encourage a healthier lifestyle and municipalities offer financial incentives to fund recycling programs. The goal of these incentives is to motivate previous non-compliers—to prompt participation amongst those that they were not engaged in an activity before. We ran a field experiment with a recycling program to examine which types of incentives are more effective in motivating new behavior—in our context, attracting previous non-recyclers. We compared the effects of standard incentives (payment contingent on recycling) to non-contingent incentives (upfront unconditional payment). We found that a high contingent incentive was as effective as a non-contingent incentive (of any size) in getting people to participate in the program, but this masked substantial differences in who participated. Over 50% of those participating under non-contingent incentives were new recyclers, compared to less than 15% under contingent incentives. This difference was particularly stark when incentives were relatively small: 53% of participants under non-continent incentives had never recycled before, compared to 0 new recyclers under contingent incentives. Follow-up surveys provide suggestive evidence that non-contingent incentives were effective in prompting persistent behavior change. A second experiment conceptually replicated this effect in an online job market, showing that non-contingent incentives were substantially more effective in attracting previous non-compliers.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3691883" }
          ]
        },
        {
          id: "DM11",
          title: "The Impact of Agency on Time and Risk Preferences",
          coauthors: "with A. Gneezy and A. Jaroszewicz",
          venue: "Nature: Communications, 2020",
          abstract:
            "Scholars have long argued for the central role of agency—the size of one’s choice set—in the human experience. We demonstrate the importance of agency in shaping people’s preferences. We first examine the effects of resource scarcity—which has been associated with both impatience and a lack of agency—on patience and risk tolerance, successfully replicating the decrease in patience among those exposed to scarcity. Critically, however, we show that endowing individuals with agency over scarcity fully moderates this effect, increasing patience substantially. We further demonstrate that agency’s impact on patience is partly driven by greater risk tolerance. These results hold even though nearly all individuals with greater agency do not exercise it, suggesting that merely knowing that one could alleviate scarcity is sufficient to change behavior. We then demonstrate that the effects of agency generalize to other adverse states, highlighting the potential for agency-based policy and institutional design.",
          links: [
            { label: "Paper", url: "https://www.nature.com/articles/s41467-020-16440-0" }
          ]
        },
        {
          id: "DM12",
          title: "Opting In to Prosocial Incentives",
          coauthors: "with D. Schwartz, E. A. Keenan and A. Gneezy",
          venue: "Organizational Behavior and Human Decision Processes, 2019",
          abstract:
            "The design of effective incentive schemes that are both successful in motivating employees and keeping down costs is of critical importance. Research has demonstrated that prosocial incentives – where individuals’ effort benefits a charitable organization – can sometimes be more effective than standard monetary incentives. However, most research has focused on the intensive margin, assuming that participation in the activity (whether voluntary or mandatory) is certain. We examine the effect of prosocial incentives on people’s decision to opt-in to an incentivized activity offering an optional prosocial incentive. By not restricting a participant’s choice set, optional prosocial incentives act as a nudge that combines the effectiveness of both standard and prosocial incentives. Across four experiments that vary incentive size, we find that individuals are more likely to avoid activities that involve any prosocial incentive. Our results highlight the importance of considering the environment and conditions necessary for successful design and implementation of nudges.",
          links: [
            { label: "Paper", url: "s/Opting-in-Prosocial-Incentives-646c.pdf" },
            { label: "Online Appendix", url: "s/Online-appendix-Opting-in-Prosocial-zskz.pdf" }
          ]
        },
        {
          id: "DM13",
          title: "Is Altruism Sensitive to Scope? The Role of Tangibility",
          coauthors: "with G. Loewenstein",
          venue: "American Economic Association: Papers and Proceedings, 2018",
          abstract:
            "Prior work has shown that people appear insensitive to the scope of their altruistic acts and prosocial behavior. While they respond positively when their choices lead to increasing rewards for themselves, people do not change their behavior when the outcomes for others increase. We demonstrate that the scope sensitivity of altruism depends critically on its tangibility, and suggest that this relationship operates through mental accounting. We show that by increasing the level of tangibility, people can become just as sensitive to changes in the size of rewards for others as if they were earning the rewards themselves.",
          links: [
            { label: "Paper", url: "s/AltruismTangibility-ey29.pdf" }
          ]
        },
        {
          id: "DM14",
          title: "Do People Anticipate Loss Aversion?",
          coauthors: "with S. Sadoff and A. Samek",
          venue: "Management Science, 2016",
          abstract:
            "There is growing interest in the use of loss contracts that offer performance incentives as upfront payments that employees can lose. Standard behavioral models predict a tradeoff in the use of loss contracts: employees will work harder under loss contracts than under gain contracts; but, anticipating loss aversion, they will prefer gain contracts to loss contracts. In a series of experiments, we test these predictions by measuring performance and preferences for payoff-equivalent gain and loss contracts. We find that people indeed work harder under loss than gain contracts, as the theory predicts. Surprisingly, rather than a preference for the gain contract, we find that people actually prefer loss contracts. In exploring mechanisms for our results, we find suggestive evidence that people do anticipate loss aversion but select into loss contracts as a commitment device to improve performance.",
          links: [
            { label: "Paper", url: "s/SSRN-id2593693-2.pdf" }
          ]
        },
        {
          id: "DM15",
          title: "Working for the 'Warm Glow': On the Benefits and Limits of Prosocial Incentives",
          coauthors: "",
          venue: "Journal of Public Economics, 2013",
          abstract:
            "We study whether using prosocial incentives, where effort is tied directly to charitable contributions, may lead to better performance than standard incentive schemes. In a real-effort task, individuals indeed work harder for charity than for themselves, but only when incentive stakes are low. When stakes are raised, effort increases when individuals work for themselves but not when they work for others and, as a result, the difference in provided effort disappears. Individuals correctly anticipate these effects, choosing to work for charity at low incentives and for themselves at high incentives. The results are consistent with warm glow giving and have implications for optimal incentive design.",
          links: [
            { label: "Paper", url: "s/SSRN-id2343445-1.pdf" }
          ]
        },
        {
          id: "DM16",
          title: "Paying to be Nice: Costly Prosocial Behavior and Consistency",
          coauthors: "with A. Gneezy, L.D. Nelson, M.I. Norton and A. Brown",
          venue: "Management Science, 2012",
          abstract:
            "Building on previous research in economics and psychology, we propose that the costliness of initial prosocial behavior positively influences whether that behavior leads to consistent future behaviors. We suggest that costly prosocial behaviors serve as a signal of prosocial identity and that people subsequently behave in line with that self-perception. In contrast, costless prosocial acts do not signal much about one’s prosocial identity, so subsequent behavior is less likely to be consistent and may even show the reductions in prosocial behavior associated with licensing. The results of a laboratory experiment and a large field experiment converge to support our account.",
          links: [
            { label: "Paper", url: "s/mnsc11101437.pdf" }
          ]
        }
      ]
    },

    {
      id: "market-social",
      num: "05",
      title: "Market Behavior and Social Interactions",
      shortLabel: "Market & Social",
      items: [
        {
          id: "MS1",
          title: "Jealousy of Trade: Exclusionary Preferences and Economic Nationalism",
          coauthors: "with K. Madarasz and H. Sarsons",
          venue: "Working Paper",
          badges: ["New Paper"],
          abstract:
            "This paper presents a new framework for understanding economic nationalism based on an empirically-validated desire for dominance, which generates a preference for exclusionary policies. We incorporate such preferences into a model of international trade. The model predicts that exclusionary preferences lead people to favor tariffs and protectionist policies that harm both their trading partner's and their own consumption. This implies that higher prices caused by exclusionary policies like tariffs will be more acceptable than those caused by non-exclusionary policies. We provide support for these predictions through two survey experiments, which also account for the role of cognitive biases and misinformation.",
          links: [
            { label: "Working Paper", url: "https://www.nber.org/papers/w34351" }
          ]
        },
        {
          id: "MS2",
          title: "Pulling up the ladder: Enduring adversity increases opposition to reform",
          coauthors: "with M. Kim and A. Gneezy",
          venue: "PNAS NEXUS, 2026",
          abstract:
            "A common assumption is that individuals who have previously overcome adversity are more likely to help others facing similar challenges. We identify conditions where prior hardship reduces support for easing others’ obstacles. We propose that this pulling-up-the-ladder effect emerges when individuals experience instrumental adversity—where past adversity is directly tied to a valued achievement—because easing the process for others decreases the perceived value of their own achievement. We provide evidence for this hypothesis through a series of studies. We first demonstrate that recent immigrants are less likely to support easing immigration restrictions compared with a matched group of US-born citizens from the same ethnic background. In controlled experiments, participants whose adverse experience was directly linked to an accomplishment (instrumental adversity) were less willing to reduce similar hardships for future participants compared with those whose adverse experience was not directly linked to an accomplishment (circumstantial adversity). Finally, we provide evidence for the mechanism: people “pull up the ladder” to protect the perceived value of their achievements. Our results have implications for understanding exclusionary attitudes and the limits of shared experience in motivating support for reform.",
          links: [
            { label: "Working Paper", url: "https://academic.oup.com/pnasnexus/article/5/6/pgag128/8698836" }
          ]
        },
        {
          id: "MS3",
          title: "Systemic Discrimination: Theory and Measurement",
          coauthors: "with J. A. Bohren and P. Hull",
          venue: "Accepted at Quarterly Journal of Economics, 2025",
          abstract:
            "Economists often measure discrimination as disparities arising from the direct effects of group identity. We develop new tools to model and measure systemic discrimination, which instead captures how discrimination in other decisions indirectly contributes to disparities. We propose an experimental design, the Iterated Audit, to identify systemic discrimination. We then illustrate these new tools in two field experiments. The first experiment shows how racial discrimination accumulates across multiple rounds of hiring through the interaction of two forces: greater discrimination against inexperienced workers—which affects the opportunity to obtain experience—and high subsequent returns to experience. The second experiment shows how gender-based differences in the language of recommendation letters can translate into systemic gender discrimination in STEM hiring. We discuss how our findings qualify previous results on direct discrimination and outline how our tools can be used to target policy interventions.",
          links: [
            { label: "Working Paper", url: "s/Systemic_Discrimination_Dec13_2024.pdf" }
          ]
        },
        {
          id: "MS4",
          title: "Inaccurate Statistical Discrimination: An Identification Problem",
          coauthors: "with J. A. Bohren, K. Haggag and D. Pope",
          venue: "Review of Economics and Statistics, 2024",
          abstract:
            "Discrimination—differential treatment by group identity—is widely studied in economics. Its source is often categorized as taste-based or statistical (belief-based)—a valuable distinction for policy design and welfare analysis. We argue that in many situations, individuals may have inaccurate beliefs about the relevant characteristics of different groups. This possibility creates an identification problem when isolating the source of discrimination. When not accounted for, we show both theoretically and experimentally that such inaccurate statistical discrimination will be misclassified as taste-based. A review of the empirical discrimination literature in economics reveals the scope of this issue: a small minority of papers—fewer than 7%—consider inaccurate beliefs. We then examine two alternative methodologies for differentiating between these three sources of discrimination—varying the amount of information presented to evaluators and eliciting evaluators’ beliefs. We propose a possible intervention: when presented with accurate information, we show that inaccurate statistical discrimination decreases.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3402134" }
          ]
        },
        {
          id: "MS5",
          title: "How Framing Influences Strategic Interactions",
          coauthors: "with C. Hsee and X. Li",
          venue: "Management Science, 2024",
          abstract:
            "In many settings, a person’s outcome depends not only on her own behavior, but also on her counterpart’s. Such strategic decisions have traditionally been studied using normative game theory, which assumes that people adopt equilibrium strategies and will reach the same decision, regardless of how the problem is described (framed). We examine a potentially important type of framing effect—focusing on how the relationship between players’ actions generates joint outcomes. Any strategic interaction can be described by either spelling out the outcomes of all possible action combinations (which we call “outcome framing,” or simply “O-framing”) or describing what will happen if different players choose the same action or choose different actions (which we call “relation framing,” or simply “R-framing”). O-framing has been the typical way to describe a strategic problem in prior work, whereas R-framing is commonly employed in real-life communications. We propose that these functionally equivalent frames induce different psychological processes and lead to different decisions: Relative to O-framing, R-framing increases players’ beliefs about their counterparts’ likelihood of coordinating on a cooperative option. We demonstrate this effect in the context of classic games such as the Prisoner’s Dilemma and the Stag Hunt. We find that, compared with O-framing, R-framing significantly increases people’s likelihood to choose the action that maximizes collective benefits rather than individual interests, and it does so by increasing beliefs that one’s partner will choose the same action as well. We derive conditions when this effect is likely to emerge and discuss the managerial implications of this research.",
          links: [
            { label: "Paper", url: "s/FramingStrategic.pdf" }
          ]
        },
        {
          id: "MS6",
          title: "Superiority-Seeking and the Preference for Exclusion",
          coauthors: "with K. Madarasz",
          venue: "Review of Economic Studies, 2023",
          abstract:
            "We propose that a person’s desire to consume an object or possess an attribute increases in how much others want but cannot have it. We term this motive superiority-seeking, and show that it generates preferences for exclusion that help explain a host of market anomalies and make novel predictions in a variety of domains. In bilateral exchange, there is a reluctance to trade, leading to an endowment effect. People’s value of consuming a good increases in its scarcity, which generates a motive for firms and organizations to engage in exclusionary policies. A monopolist producing at constant marginal cost can increase profits by randomly excluding buyers relative to the standard optimal mechanism of posting a common price. In the context of auctions, a seller can extract greater revenues by randomly barring a subset of consumers from bidding. Moreover, such non-price-based exclusion leads to higher revenues than the classic optimal sales mechanism. A series of experiments provides direct support for these predictions. In basic exchange, a person’s willingness to pay for a good increases as more people are explicitly barred from the opportunity to acquire it. In auctions, randomly excluding people from the opportunity to bid substantially increases bids amongst those who retain this option. Consistent with our predictions, exclusion leads to bigger gains in expected revenue than increasing competition through inclusion. Our model of superiority-seeking generates ‘Veblen effects,’ rationalizes attitudes against redistribution, and provides a novel motive for social exclusion and discrimination.",
          links: [
            { label: "Working Paper", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4188951" }
          ],
          mediaLinks: [
            { label: "Chicago Booth Review", url: "https://review.chicagobooth.edu/behavioral-science/2021/article/how-human-psychology-explains-exclusive-brands-and-exclusionary" },
            { label: "The Equation", url: "https://review.chicagobooth.edu/behavioral-science/2021/article/equation-how-put-price-people-s-appetite-exclusivity" }
          ]
        },
        {
          id: "MS7",
          title: "The Psychology of Negative-Sum Behavior in Strategic Interactions",
          coauthors: "with C. Hsee, Y. Zeng, and X. Li",
          venue: "Journal of Personality and Social Psychology, 2023",
          abstract:
            "Many real-life examples—from interpersonal rivalries to international conflicts—suggest that people actively engage in competitive behavior even when it is negative-sum (benefiting the self at a greater cost to others). This often leads to loss spirals where everyone—including the winner—ends up losing. Our research seeks to understand the psychology of such negative-sum behavior in a controlled setting. To do so, we introduce an experimental paradigm in which paired participants have the option to repeatedly perform a behavior that causes a relatively small gain for the self and a larger loss to the other. Although they have the freedom not to engage in the behavior, most participants actively do so and incur substantial losses. We propose that an important reason behind the phenomena is shallow-thinking—focusing on the immediate benefit to the self while overlooking the downstream consequences of how the behavior will influence their counterparts’ actions. In support of the proposition, we find that participants are less likely to engage in negative-sum behavior if they are advised to consider the downstream consequences of their actions, or if they are put in a less frenzied decision environment, which facilitates deeper thinking (acting in discrete versus continuous time). We discuss how our results differ from prior findings and the implications of our research for mitigating negative-sum competition and loss spirals in real life.",
          links: [
            { label: "Paper", url: "s/The-Psychology-of-Negative-Sum-Competition-in-Strategic-Interactions.pdf" }
          ]
        },
        {
          id: "MS8",
          title: "Bounded Rationality in Strategic Decisions: Undershooting in a Resource Pool-Choice Dilemma",
          coauthors: "with C. Hsee, Y. Zeng, and X. Li",
          venue: "Management Science, 2021",
          abstract:
            "This research studies a resource pool-choice dilemma, in which a group of resource seekers independently choose between a larger pool containing more resources and a smaller pool containing fewer resources, knowing that the resources in each pool will be divided equally among its choosers, so that the more (fewer) people choose a certain pool, the fewer (more) resources each of them will get. This setting corresponds to many real-world situations, ranging from students choosing majors as a function of job opportunities to entrepreneurs choosing markets as a function of customer bases. Ten studies reveal a systematic undershooting bias: fewer people choose the larger pool relative to both the normative equilibrium benchmark and chance (random choice), thus advantaging those who chose the larger pool and disadvantaging those who chose the smaller pool. We present evidence that the undershooting bias is driven by bounded rationality in strategic thinking, and discuss the relationship of our paradigm with other coordination games.",
          links: [
            { label: "Paper", url: "s/mnsc20203814.pdf" }
          ]
        },
        {
          id: "MS9",
          title: "The Dynamics of Discrimination: Theory and Evidence",
          coauthors: "with J. A. Bohren and M. Rosenberg",
          venue: "American Economic Review, 2019 (Lead Article)",
          awards: [
            "2020 Exeter Prize for the best paper published in Experimental Economics, Behavioural Economics, and Decision Theory"
          ],
          abstract:
            "We model the dynamics of discrimination and show how its evolution can identify the underlying source. We test these theoretical predictions in a field experiment on a large online platform where users post content that is evaluated by other users on the platform. We assign posts to accounts that exogenously vary by gender and evaluation histories. With no prior evaluations, women face significant discrimination. However, following a sequence of positive evaluations, the direction of discrimination reverses: women’s posts are favored over men’s. Interpreting these results through the lens of our model, this dynamic reversal implies discrimination driven by biased beliefs.",
          links: [
            { label: "Paper", url: "s/BohrenImasRosenberg_DynamicsDiscrimination_January2019.pdf" }
          ]
        },
        {
          id: "MS10",
          title: "Conscience Accounting: Emotion Dynamics in Social Behavior",
          coauthors: "with U. Gneezy and K. Madarasz",
          venue: "Management Science, 2014",
          abstract:
            "This paper presents theory and experiments where people's prosocial attitudes fluctuate over time following the violation of an internalized norm. We report the results of two experiments in which people who first made an immoral choice were then more likely to donate to charity than those who did not. In addition, those who knew that a donation opportunity would follow the potentially immoral choice behaved more unethically than those who did not know. We interpret this increase in charitable behavior as being driven by a temporal increase in guilt induced by past immoral actions. We term such behavior conscience accounting and discuss its importance in charitable giving and in the identification of social norms in choice behavior through time inconsistency.",
          links: [
            { label: "Paper", url: "s/mnsc20141942.pdf" }
          ]
        },
        {
          id: "MS11",
          title: "The Materazzi Effect and the Strategic Use of Anger",
          coauthors: "with U. Gneezy",
          venue: "Proceedings of the National Academy of Sciences, 2014",
          abstract:
            "We propose that individuals use anger strategically in interactions. We first show that in some environments angering people makes them more effective in competitions, whereas in others, anger makes them less effective. We then show that individuals anticipate these effects and strategically use the option to anger their opponents. In particular, they are more likely to anger their opponents when anger negatively affects the opponents’ performances. This finding suggests people understand the effects of emotions on behavior and exploit them to their advantage.",
          links: [
            { label: "Paper", url: "s/PNAS-2014-Gneezy-1313789111-1.pdf" }
          ]
        }
      ]
    },

    {
      id: "surveys",
      num: "06",
      title: "Surveys and Book Chapters",
      shortLabel: "Surveys & Chapters",
      items: [
        {
          id: "SC1",
          title: "Lab in the Field: Measuring Preferences in the Wild",
          coauthors: "with U. Gneezy",
          venue: "In Handbook of Field Experiments, Abhijit Banerjee and Esther Duflo, editors, 2017",
          abstract:
            "In this chapter, we discuss the “lab-in-the-field” methodology, which combines elements of both lab and field experiments in using standardized, validated paradigms from the lab in targeting relevant populations in naturalistic settings. We begin by examining how the methodology has been used to test economic models with populations of theoretical interest. Next, we outline how lab-in-the-field studies can be used to complement traditional Randomized Control Trials in collecting covariates to test theoretical predictions and explore behavioral mechanisms. We proceed to discuss how the methodology can be utilized to compare behavior across cultures and contexts, and test for the external validity of results obtained in the lab. The chapter concludes with an overview of lessons on how to use the methodology effectively.",
          links: [
            { label: "Published Paper", url: "s/SSRN-id2811026-1.pdf" }
          ]
        },
        {
          id: "SC2",
          title: "Experimental Methods: Eliciting Risk Preferences",
          coauthors: "with G. Charness and U. Gneezy",
          venue: "Journal of Economic Behavior and Organization, 2013",
          abstract:
            "Economists and psychologists have developed a variety of experimental methodologies to elicit and assess individual risk attitudes. Choosing which to utilize, however, is largely dependent on the question one wants to answer, as well as the characteristics of the sample population. The goal of this paper is to present a series of prevailing methods for eliciting risk preferences and outline the advantages and disadvantages of each. We do not attempt to give a comprehensive account of all the methods or nuances of measuring risk, but rather to outline some advantages and disadvantages of different methods.",
          links: [
            { label: "Paper", url: "s/RiskElicitation.pdf" }
          ]
        }
      ]
    },

    {
      id: "other-research",
      num: "07",
      title: "Other Research",
      shortLabel: "Other Research",
      items: [
        {
          id: "OR1",
          title: "Plasminogen Activator Inhibitor-1 Regulates Integrin αvβ3 Expression and Autocrine TGFβ Signaling",
          coauthors: "with B. S. Pedjora, L. E. Kang, P. Carmeliet and A. M. Bernstein",
          venue: "Journal of Biological Chemistry, 2009",
          links: [
            { label: "Published Paper", url: "s/J-Biol-Chem-2009-Pedroja-20708-17.pdf" }
          ]
        },
        {
          id: "OR2",
          title: "EEG-based Method for Biometric Identity Confirmation",
          coauthors: "with M. Milgramm",
          venue: "U.S. Patent No. 7,594,122",
          links: [
            { label: "Patent Document", url: "https://patents.google.com/patent/US7594122" }
          ]
        },
        {
          id: "OR3",
          title: "EEG-based Method for Real Time Attitude Assessment",
          coauthors: "with M. Milgramm",
          venue: "U.S. Patent No. 7,570,991",
          links: [
            { label: "Patent Document", url: "https://patents.google.com/patent/US7570991" }
          ]
        },
        {
          id: "OR4",
          title: "EEG-based Method for Attention and Productivity Monitoring",
          coauthors: "with M. Milgramm",
          venue: "U.S. Patent No. 7,574,254",
          links: [
            { label: "Patent Document", url: "https://patents.google.com/patent/US7574254" }
          ]
        }
      ]
    }
  ],

  teaching: {
    id: "teaching",
    num: "08",
    title: "Teaching",
    currentClasses: [
      {
        id: "TC1",
        course: "Behavioral Economics (Undergraduate)",
        term: "Spring 2023",
        links: [{ label: "Syllabus", url: "s/Syllabus-dzjp.pdf" }]
      },
      {
        id: "TC2",
        course: "Behavioral Economics (PhD)",
        term: "Spring 2023",
        links: [{ label: "Syllabus", url: "s/Behavioral-Econ-Syllabus-2023.pdf" }]
      }
    ],
    pastClasses: [
      {
        id: "TP1",
        course: "Strategies and Processes of Negotiation (MBA)",
        term: "Winter 2018",
        links: []
      },
      {
        id: "TP2",
        course: "Behavioral Economics (PhD)",
        term: "Spring 2021",
        links: [{ label: "Syllabus", url: "s/Behavioral-Econ-Syllabus-2021.pdf" }]
      },
      {
        id: "TP3",
        course: "Experimental Economics (PhD)",
        term: "Fall 2013",
        links: [{ label: "Syllabus", url: "s/Experimental-Economics-Syllabus.docx" }]
      },
      {
        id: "TP4",
        course: "Behavioral Economics (Undergraduate)",
        term: "Fall 2014, 2015, 2016, 2018, 2020",
        links: [
          { label: "Pre-2017 Syllabus", url: "s/SyllabusBE-mndl.pdf" },
          { label: "Post-2017 Syllabus", url: "s/SyllabusBE-csw8.pdf" }
        ]
      },
      {
        id: "TP5",
        course: "Human Judgment and Decision Making (PhD)",
        term: "Spring 2016",
        links: [{ label: "Syllabus", url: "s/JDM-Imas-Syllabus-V2.pdf" }]
      }
    ],
    footerNoteHtml:
      'Please email me directly if interested in <a href="s/Instructions.pdf" target="_blank" rel="noopener">course</a> <a href="s/Additional.pdf" target="_blank" rel="noopener">material</a>.'
  }
};
