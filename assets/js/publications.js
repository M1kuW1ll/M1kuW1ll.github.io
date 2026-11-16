/*
 * Publication list: edit this file to add or change papers.
 * Keep entries newest first; the Research tab groups them by year.
 *
 * Fields
 *   id          unique slug, used for links like  #pub-<id>
 *   title       paper title
 *   authors     list of names; add "*" to mark equal contribution ("Fei Wu*")
 *   alphabetical  true if authors are in alphabetical order
 *   type        "conference" | "journal" | "preprint"
 *   badge       short venue label ("AFT"); conferences get the year appended ("AFT '26")
 *   venue       full venue line
 *   year        publication year
 *   selected    true to also show it under "Selected publications" on the About tab
 *   nonArchival non-archival venues / workshops (optional)
 *   journalOf   ids of the conference papers this journal paper extends (optional)
 *   links       { label: url }; the first link is also used for the title.
 *               Labels with icons: arXiv, Paper, PDF, Post…, Blog, Code, Dashboard, Data…, Talk, Slides, Poster
 */
window.PUBLICATIONS = [
  {
    id: "more-meters",
    title: "More Meters or More Prices? One- vs. Multi-dimensional Fee Mechanisms on Ethereum",
    authors: ["Fei Wu", "Maria Inês Silva", "Stefanos Leonardos", "Carmine Ventre"],
    type: "preprint",
    badge: "Preprint",
    venue: "Preprint",
    year: 2026,
    links: { arXiv: "https://arxiv.org/abs/2610.33455" },
  },
  {
    id: "bidding-incentives-journal",
    title: "Strategic Bidding Incentives in Ethereum Block Building Auctions",
    authors: ["Fei Wu", "Thomas Thiery", "Stefanos Leonardos", "Carmine Ventre"],
    type: "journal",
    badge: "ACM DLT",
    venue: "ACM Distributed Ledger Technologies: Research and Practice (in press)",
    year: 2026,
    journalOf: ["oligopoly", "bidding-wars"],
    links: {
      Paper: "https://dl.acm.org/doi/10.1145/3833393",
      Code: "https://github.com/M1kuW1ll/MMASim",
    },
  },
  {
    id: "wait-or-probe",
    title: "To Wait or To Probe: Arbitrage Competition on High-throughput Blockchains",
    authors: ["Fei Wu", "Burak Öz"],
    type: "conference",
    badge: "AFT",
    venue: "8th International Conference on Advances in Financial Technologies (AFT 2026)",
    year: 2026,
    selected: true,
    links: {
      arXiv: "https://arxiv.org/abs/2606.00720",
      Post: "https://collective.flashbots.net/t/to-wait-or-to-probe-arbitrage-competition-on-high-throughput-blockchains/5759",
    },
  },
  {
    id: "price-of-decentralization",
    title: "The Price of Decentralization in Block Building",
    authors: ["Burak Öz*", "Fei Wu*", "Luis Correia", "Sen Yang", "Bruno Mazorra", "Stefanos Leonardos"],
    type: "conference",
    badge: "AFT",
    venue: "8th International Conference on Advances in Financial Technologies (AFT 2026)",
    year: 2026,
    selected: true,
    links: {
      arXiv: "https://arxiv.org/abs/2606.01874",
      Blog: "https://writings.flashbots.net/why-location-choice-matters",
    },
  },
  {
    id: "geo-centralization",
    title: "Geographical Centralization Resilience in Ethereum's Block-Building Paradigms",
    authors: ["Sen Yang", "Burak Öz", "Fei Wu", "Fan Zhang"],
    type: "conference",
    badge: "SIGMETRICS",
    venue: "ACM SIGMETRICS International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS 2026)",
    year: 2026,
    nonArchival: "Ethereum Zurich 2026; Designing DeFi Conference 2026",
    links: { Paper: "https://dl.acm.org/doi/abs/10.1145/3805637" },
  },
  {
    id: "free-option",
    title: "The Free Option Problem of ePBS",
    authors: ["Bruno Mazorra", "Burak Öz", "Christoph Schlegel", "Fei Wu"],
    alphabetical: true,
    type: "conference",
    badge: "FC",
    venue: "Financial Cryptography and Data Security, 30th International Conference (FC 2026)",
    year: 2026,
    selected: true,
    nonArchival: "Columbia CryptoEconomics Workshop 2025; Futura Camp / ZuBerlin 2026",
    links: {
      arXiv: "https://arxiv.org/abs/2509.24849",
      "Post I": "https://collective.flashbots.net/t/the-free-option-problem-in-epbs/5115",
      "Post II": "https://collective.flashbots.net/t/the-free-option-problem-in-epbs-part-ii/5145",
    },
  },
  {
    id: "cex-dex",
    title: "Measuring CEX-DEX Extracted Value and Searcher Profitability: The Darkest of the MEV Dark Forest",
    authors: ["Fei Wu", "Danning Sui", "Thomas Thiery", "Mallesh Pai"],
    type: "conference",
    badge: "AFT",
    venue: "7th International Conference on Advances in Financial Technologies (AFT 2025)",
    year: 2025,
    selected: true,
    nonArchival: "The Latest in DeFi Research Conference 2025; Columbia CryptoEconomics Workshop 2025",
    links: {
      arXiv: "https://arxiv.org/abs/2507.13023",
      Dashboard: "https://dune.com/rig_ef/cex-dex-dash",
      Dataset: "https://dune.com/queries/4931834",
      Talk: "https://www.youtube.com/watch?v=VjR93reL-OA",
    },
  },
  {
    id: "oligopoly",
    title: "From Competition to Centralization: The Oligopoly in Ethereum Block Building Auctions",
    authors: ["Fei Wu", "Thomas Thiery", "Stefanos Leonardos", "Carmine Ventre"],
    type: "conference",
    badge: "ECAI",
    venue: "28th European Conference on Artificial Intelligence (ECAI 2025)",
    year: 2025,
    selected: true,
    links: {
      arXiv: "https://arxiv.org/abs/2412.18074",
      Code: "https://github.com/M1kuW1ll/MMASim",
    },
  },
  {
    id: "compete-or-collude",
    title: "To Compete or Collude: Bidding Incentives in Ethereum Block Building Auctions",
    authors: ["Fei Wu", "Thomas Thiery", "Stefanos Leonardos", "Carmine Ventre"],
    type: "conference",
    badge: "ICAIF",
    venue: "5th ACM International Conference on AI in Finance (ICAIF 2024)",
    year: 2024,
    nonArchival: "ICML 2024 Agentic Markets Workshop",
    links: {
      Paper: "https://dl.acm.org/doi/10.1145/3677052.3698629",
      Code: "https://github.com/M1kuW1ll/MMASim",
    },
  },
  {
    id: "bidding-wars",
    title: "Strategic Bidding Wars in On-chain Auctions",
    authors: ["Fei Wu", "Thomas Thiery", "Stefanos Leonardos", "Carmine Ventre"],
    type: "conference",
    badge: "ICBC",
    venue: "6th IEEE International Conference on Blockchain and Cryptocurrency (ICBC 2024)",
    year: 2024,
    selected: true,
    nonArchival: "Columbia CryptoEconomics Workshop 2023",
    links: {
      arXiv: "https://arxiv.org/abs/2312.14510",
      Code: "https://github.com/M1kuW1ll/MMASim",
    },
  },
];
