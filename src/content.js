

import { Currency } from "lucide-react"

export const SOCIALS = {
  x: 'https://x.com/Bullrun_BWC',
  
  telegram: 'https://t.me/ValhallaBullszn',
  discord: null,
  
}

export const TOKEN_INFO = {
  name: 'Bullrun Will Come',
  ticker: '$BWC',
  chain: null, // e.g. "Solana" — set once confirmed
  contract: null, // set once the token is deployed
}

export const TOKENOMICS = [
  { label: 'Total Supply', value: null },
  { label: 'Liquidity', value: null },
  { label: 'Community', value: null },
  { label: 'Marketing', value: null },
  { label: 'Team', value: null },
]

export const MARKET_STATS = [
  { label: 'Price', value: null },
  { label: 'Market Cap', value: null },
  { label: '24H Volume', value: null },
  { label: 'Liquidity', value: null },
  { label: 'Holders', value: null },
]

// Placeholder posts shown only until the X API / feed is connected.
export const SAMPLE_POSTS = [
  {
    handle: '@Bullrun_BWC',
    text: 'The herd doesn\u2019t chase the run. It\u2019s already there when it starts.',
    time: 'Pinned',
  },
  {
    handle: '@Bullrun_BWC',
    text: 'Patience is the whole strategy. Everything else is noise.',
    time: 'Pinned',
  },
  {
    handle: '@Bullrun_BWC',
    text: 'We wait. We build. We run.',
    time: 'Pinned',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'What is Bullrun Will Come?',
    a: 'Bullrun Will Come is a community-driven meme coin built around one idea: the bullrun isn\u2019t a question of if, it\u2019s a question of when. The project is about building the community and the culture before the moment arrives.',
  },
  {
    q: 'What is $BWC?',
    a: '$BWC is the token behind Bullrun Will Come. Full token details are published in the Token section above as they are confirmed.',
  },
  {
    q: 'Which blockchain is $BWC on?',
    a: 'The official chain will be announced through our verified channels and posted here. Do not trust any chain or contract information from unofficial sources.',
  },
  {
    q: 'Where can I buy $BWC?',
    a: 'Buy links will be published here and on our official X account once the token is live. We will never DM you a link first \u2014 always navigate to official channels yourself.',
  },
  {
    q: 'What is the official contract address?',
    a: 'The contract address will be posted in the Token section and pinned on our official X account. Always cross-check both before trading, and never trust a contract address sent to you directly.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. Nothing on this website or from this project constitutes financial or investment advice. Cryptocurrency carries significant risk, including total loss of funds. Do your own research.',
  },
  {
    q: 'How can I join the community?',
    a: 'Follow @Bullrun_BWC on X for the latest updates. Additional community channels will be linked here as they go live.',
  },
]
