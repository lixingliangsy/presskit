export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "PressKit Gen",
  slug: "presskit",
  tagline: "A journalist-ready press kit in 2 minutes",
  description: "Answer a few questions and get a clean press kit: boilerplate, key facts, milestones, founder bio and contact block - copy-paste ready for Product Hunt, TechCrunch, or your /press page.",
  toolTitle: "Build your press kit",
  resultLabel: "Your press kit",
  ctaLabel: "Generate press kit",
  features: [
  "Boilerplate & one-liner",
  "Key facts & metrics",
  "Milestones timeline",
  "Founder bio & contact"
],
  inputs: [
  {
    "key": "company",
    "label": "Company name",
    "type": "input",
    "placeholder": "e.g. TaskNinja"
  },
  {
    "key": "what",
    "label": "What do you do? (1-2 sentences)",
    "type": "textarea",
    "placeholder": "e.g. TaskNinja helps remote teams run async standups"
  },
  {
    "key": "founded",
    "label": "Founded / launched",
    "type": "input",
    "placeholder": "e.g. 2025"
  },
  {
    "key": "metrics",
    "label": "Key metrics (users, MRR, etc.)",
    "type": "textarea",
    "placeholder": "e.g. 12k users, $9k MRR"
  },
  {
    "key": "contact",
    "label": "Press contact email",
    "type": "input",
    "placeholder": "press@company.com"
  }
] as InputField[],
  systemPrompt: "You are a PR writer. Given company basics, write a press kit: a one-line description, a 2-sentence boilerplate, 4-6 key facts, a short milestones list, and a founder bio + contact block. Professional, factual, no hype.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "1 press kit"
  },
  {
    "tier": "Pro",
    "price": "$12/mo",
    "desc": "Unlimited kits"
  },
  {
    "tier": "Studio",
    "price": "$29/mo",
    "desc": "Team, export, versions"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const company = inputs['company'] || 'Your Company'
  const what = inputs['what'] || 'what you do'
  const founded = inputs['founded'] || '2026'
  const metrics = inputs['metrics'] || 'key metrics'
  const contact = inputs['contact'] || 'press@company.com'
  return `PRESS KIT - ${company}

ONE-LINER
${company}: ${what}

BOILERPLATE
${company} (founded ${founded}) ${what} The team is focused on shipping a fast, affordable product for its users.

KEY FACTS
- Founded: ${founded}
- Metrics: ${metrics}
- Audience: builders and small teams

MILESTONES
- ${founded}: Launched ${company}
- Today: Serving users worldwide

FOUNDER BIO
The founder started ${company} to solve a problem they hit firsthand. Previously built and shipped software products end to end.

CONTACT
Press: ${contact}

--- (Mock kit from your inputs. Add OPENAI_API_KEY for a polished, journalist-ready version.)`
}
}
