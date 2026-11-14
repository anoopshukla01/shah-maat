// Shah-Maat Seed Data
// Today reference date: 2026-11-02T19:36:04+05:30 (IST)

import {
  SiteSetting,
  TeamMember,
  CalendarItem,
  Event,
  Topic,
  LearningResource,
  Season,
  Cohort,
  MentorSession,
} from '@/types';

export const siteSetting: SiteSetting = {
  siteName: 'SHAH-MAAT',
  tagline: 'IIT Madras BS Chess Society',
  subTagline: 'CHESS WAS BORN IN INDIA. JOIN THE GAME. MAKE YOUR MOVE.',
  description:
    'The premier competitive and cultural chess collective of the IIT Madras BS Degree program. Fostering grandmasters and grassroots passion alike.',
  foundedYear: 2024,
  joinFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-shah-maat-membership/viewform',
  whatsappCommunityUrl: 'https://chat.whatsapp.com/ShahMaatIITMBSChessCommunity',
  socialLinks: {
    discord: 'https://discord.gg/shah-maat-iitm',
    instagram: 'https://instagram.com/shahmaat.iitmbs',
    youtube: 'https://youtube.com/@shahmaat-chess',
    whatsapp: 'https://chat.whatsapp.com/ShahMaatIITMBSChessCommunity',
    googleSpace: 'https://mail.google.com/chat/u/0/#chat/space/AAAA_shah_maat',
  },
  stats: {
    members: 1480,
    eventsHeld: 48,
    mentorSessions: 112,
    seasonsCompleted: 3,
    isSampleData: true,
  },
  contactEmail: 'chess.society@study.iitm.ac.in',
  mockCurrentTime: '2026-11-02T19:36:04+05:30', // 2 Nov 2026 19:36:04 IST
};

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'President & Arbiter',
    role: 'Society President (Founding Arbiter)',
    tenure: '2026-2027',
    bio: 'FIDE-rated competitive player leading institutional tournaments, inter-IIT coordination, and community coaching.',
    photoUrl: '/art/knight-sunglasses.png',
    house: 'Mandakini',
    links: {
      lichess: 'https://lichess.org/@/ShahMaatPres',
      chesscom: 'https://chess.com/member/ShahMaatPres',
      email: 'mailto:president.chess@study.iitm.ac.in',
    },
  },
  {
    id: 'tm-2',
    name: 'Head of Tournaments',
    role: 'Vice President & Tournament Director',
    tenure: '2026-2027',
    bio: 'Oversees Swiss pairings, blitz arenas, and fair-play inspection protocols for internal and open rapid championships.',
    photoUrl: '/art/queen.png',
    house: 'Sarang',
    links: {
      lichess: 'https://lichess.org/@/ShahMaatTourneys',
      github: 'https://github.com/shah-maat-iitm',
      email: 'mailto:tournaments.chess@study.iitm.ac.in',
    },
  },
  {
    id: 'tm-3',
    name: 'Chief Mentor & Curriculum Lead',
    role: 'Mentorship Program Director',
    tenure: '2026-2027',
    bio: 'Curates opening repertoires, endgame codices, and orchestrates weekly masterclasses for beginner and intermediate cohorts.',
    photoUrl: '/art/book-knight.png',
    house: 'Shaastra',
    links: {
      lichess: 'https://lichess.org/@/ShahMaatMentors',
      email: 'mailto:curriculum.chess@study.iitm.ac.in',
    },
  },
  {
    id: 'tm-4',
    name: 'Technical & Platform Lead',
    role: 'Web & Broadcasting Engineer',
    tenure: '2026-2027',
    bio: 'Builds digital pairing displays, annotated boards, and live broadcast relays for campus-wide spectators.',
    photoUrl: '/art/pawns.png',
    house: 'Bhadra',
    links: {
      github: 'https://github.com/shah-maat-iitm',
      linkedin: 'https://linkedin.com',
    },
  },
  // Previous tenure 2025-2026
  {
    id: 'tm-5',
    name: 'Past President',
    role: 'Advisory Board Member (Ex-President)',
    tenure: '2025-2026',
    bio: 'Spearheaded the inaugural Inter-House Chess League and expanded online community reach to over 1,200 active learners.',
    photoUrl: '/art/king-pawn-cluster.png',
    house: 'Alakananda',
    links: {
      lichess: 'https://lichess.org',
    },
  },
  {
    id: 'tm-6',
    name: 'Community & Events Lead',
    role: 'Events Secretary (2025-2026)',
    tenure: '2025-2026',
    bio: 'Organized the first offline blitz gathering during campus fest and introduced Kaapi & Check weekend review sessions.',
    photoUrl: '/art/kaapi-pour.png',
    house: 'Tamraparni',
    links: {
      email: 'mailto:alumni.chess@study.iitm.ac.in',
    },
  },
  // Founding Tenure 2024-2025
  {
    id: 'tm-7',
    name: 'Founding Convener',
    role: 'Founding Convener',
    tenure: 'Founding 2024-2025',
    bio: 'Drafted the Shah-Maat society constitution and established official affiliation with the IIT Madras Student Affairs Council.',
    photoUrl: '/art/trophy.png',
    house: 'Narmada',
    links: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'tm-8',
    name: 'Founding Technical Lead',
    role: 'Founding Webmaster',
    tenure: 'Founding 2024-2025',
    bio: 'Created the early rating bots and Discord chess ladders that ignited competitive zeal among BS students.',
    photoUrl: '/art/rangoli-wheel.png',
    house: 'Cauvery',
    links: {
      github: 'https://github.com',
    },
  },
];

export const events: Event[] = [
  {
    id: 'evt-1',
    slug: 'chitrakut-open-rapid-2026',
    title: 'Chitrakut Open Rapid Championship',
    type: 'tournament',
    format: '10+5 Rapid · 6 Rounds Swiss · FIDE Rules',
    // Sat 14 Nov 2026, 2:00 PM - 7:00 PM IST (14:00 - 19:00 IST = 08:30 - 13:30 UTC)
    startAt: '2026-11-14T08:30:00Z',
    endAt: '2026-11-14T13:30:00Z',
    opensAt: '2026-11-14T08:00:00Z', // 30 min check-in before
    location: 'Official Lichess Team Arena & IITM BS Virtual Hall A',
    prizePool: '₹25,000 Sample Prize Pool + Society Laurels',
    isSampleData: true,
    highlight: 'Flagship semester championship featuring Swiss pairings and live arbiter review.',
    rules: [
      'Time control is 10 minutes base time with a 5-second increment per move from move 1.',
      'All games must be played on registered Lichess IDs bound to student email addresses.',
      'Webcam check-in mandatory for top 8 board contenders during rounds 4 to 6.',
      'FIDE rapid guidelines for illegal moves and draw claims apply.',
      'Fair-play automated analysis reviewed by three accredited community arbiters.',
    ],
    registrationUrl: 'https://forms.gle/chitrakut-rapid-register',
    status: 'upcoming',
    updates: [
      {
        time: '2026-11-01T12:00:00Z',
        message: 'Registrations officially open across all degree houses.',
      },
      {
        time: '2026-11-02T16:00:00Z',
        message: 'Swiss pairing software calibrated for 250+ concurrent participants.',
      },
    ],
    winners: [],
    resultsTable: [],
    gallery: [],
    lessons: [
      'Time management in 10+5: do not spend more than 2 minutes on opening moves.',
      'Rook endgames with active kings win majority of Swiss round deciders.',
    ],
  },
  {
    id: 'evt-2',
    slug: 'guest-grandmaster-simul-2026',
    title: 'Guest Grandmaster Simul',
    type: 'simul',
    format: '30-Board Simultaneous Exhibition · Rapid 30m',
    // Wed 18 Nov 2026, 6:30 PM IST (18:30 IST = 13:00 UTC)
    startAt: '2026-11-18T13:00:00Z',
    endAt: '2026-11-18T16:30:00Z',
    opensAt: '2026-11-18T12:30:00Z',
    location: 'Main Auditorium Stream & Interactive Boardroom',
    prizePool: 'Sample Merit Certificate & Autographed Board Replica',
    isSampleData: true,
    highlight: 'An International Grandmaster takes on 30 top qualifiers simultaneously.',
    rules: [
      'Qualifying board seats allocated via recent blitz ladders and house tournaments.',
      'Grandmaster plays White on all boards; moves played consecutively on clock pass.',
      'Each board has 30 minutes fixed time; Grandmaster has 90 minutes combined.',
      'Draw offers may only be proposed after move 30.',
    ],
    registrationUrl: 'https://forms.gle/gm-simul-qualifiers',
    status: 'upcoming',
    updates: [
      {
        time: '2026-10-28T10:00:00Z',
        message: 'Simul protocol published; qualifier standings being finalized.',
      },
    ],
    winners: [],
    resultsTable: [],
    gallery: [],
    lessons: [
      'Pawn structure solidity is key when facing titleholders in simuls.',
      'Avoid speculative sacrifices without concrete tactical calculation.',
    ],
  },
  {
    id: 'evt-3',
    slug: 'inter-house-clash-sarang-vs-shaastra-2026',
    title: 'Inter-House Clash: Sarang vs Shaastra',
    type: 'clash',
    format: '5v5 Team Battle · 3+2 Blitz · 5 Rounds Double-Robin',
    // Sun 22 Nov 2026, 8:00 PM IST (20:00 IST = 14:30 UTC)
    startAt: '2026-11-22T14:30:00Z',
    endAt: '2026-11-22T17:00:00Z',
    opensAt: '2026-11-22T14:15:00Z',
    location: 'IITM BS House Arena Discord Live',
    prizePool: 'House Trophy Points (Sample 150 Pts)',
    isSampleData: true,
    highlight: 'Fierce regional rivalry between cultural giant Sarang and tech titan Shaastra.',
    rules: [
      '5 boards per house, matched strictly by board ranking 1 to 5.',
      'Time control is 3 minutes + 2 seconds increment per move.',
      'Total match score calculated from 25 individual games (double-robin).',
      'Team captain coin toss determines initial board colors.',
    ],
    registrationUrl: 'https://forms.gle/inter-house-clash-lineups',
    status: 'upcoming',
    updates: [
      {
        time: '2026-11-02T10:00:00Z',
        message: 'Both house captains confirmed preliminary 7-player rosters.',
      },
    ],
    winners: [],
    resultsTable: [],
    gallery: [],
    lessons: [
      'Board 4 and 5 stability often decides team clashes.',
      'Avoid time trouble in 3+2 blitz; keep the clock above 30 seconds.',
    ],
  },
  // Completed Past Event (October 2026) for Results and "After" state
  {
    id: 'evt-4',
    slug: 'kaveri-autumn-rapid-2026',
    title: 'Kaveri Autumn Open Rapid',
    type: 'tournament',
    format: '15+10 Rapid · 5 Rounds Swiss',
    startAt: '2026-10-18T08:30:00Z',
    endAt: '2026-10-18T13:30:00Z',
    opensAt: '2026-10-18T08:00:00Z',
    location: 'IIT Madras Online Arena',
    prizePool: '₹15,000 Sample Prize Pool',
    isSampleData: true,
    highlight: 'Over 180 competitors clashed across 5 gruelling rounds of rapid tactical combat.',
    rules: ['15 minutes + 10 seconds increment', 'FIDE Swiss pairing system'],
    registrationUrl: '#',
    status: 'completed',
    updates: [
      {
        time: '2026-10-18T14:00:00Z',
        message: 'Tournament concluded. Arbiter validation and fair-play certificates issued.',
      },
    ],
    winners: [
      {
        rank: 1,
        name: 'Grandmaster Aspirant (Sample)',
        house: 'Mandakini',
        prize: '₹7,500 (Sample)',
        score: '5.0 / 5.0',
      },
      {
        rank: 2,
        name: 'Tactical Maestro (Sample)',
        house: 'Shaastra',
        prize: '₹4,500 (Sample)',
        score: '4.5 / 5.0',
      },
      {
        rank: 3,
        name: 'Endgame Virtuoso (Sample)',
        house: 'Sarang',
        prize: '₹3,000 (Sample)',
        score: '4.0 / 5.0',
      },
    ],
    resultsTable: [
      { rank: 1, player: 'Student Candidate Master A', house: 'Mandakini', points: 5.0, buchholz: 16.5 },
      { rank: 2, player: 'Student Expert B', house: 'Shaastra', points: 4.5, buchholz: 15.0 },
      { rank: 3, player: 'Student Contender C', house: 'Sarang', points: 4.0, buchholz: 17.0 },
      { rank: 4, player: 'Student Contender D', house: 'Bhadra', points: 4.0, buchholz: 14.5 },
      { rank: 5, player: 'Student Contender E', house: 'Alakananda', points: 3.5, buchholz: 13.0 },
    ],
    gallery: [
      '/art/cinema-marquee-frame.png',
      '/art/tactical-board.png',
      '/art/chess-crowd.png',
    ],
    report:
      'The Kaveri Autumn Open Rapid 2026 witnessed an unprecedented turnout with 182 registered student arbiters and competitors. Mandakini house secured the overall championship shield following an undefeated 5-round streak by Board 1. The tournament saw high-accuracy games across the French Defense and Catalan setups.',
    lessons: [
      'Precision in knight outposts in the Catalan created decisive endgame advantages.',
      'Rook activity outweighed pawn material deficits in 4 out of 5 top-table clashes.',
    ],
  },
  {
    id: 'evt-5',
    slug: 'mandakini-blitz-cup-oct-2026',
    title: 'Mandakini Blitz Cup: October Edition',
    type: 'tournament',
    format: '3+0 Blitz · 9 Rounds Swiss',
    startAt: '2026-10-25T14:30:00Z',
    endAt: '2026-10-25T17:00:00Z',
    opensAt: '2026-10-25T14:15:00Z',
    location: 'Lichess Blitz Arena',
    prizePool: '₹8,000 Sample Prize Pool',
    isSampleData: true,
    highlight: 'Lightning-fast 3-minute blitz featuring wild tactical sacrifices and queen pins.',
    rules: ['3 minutes flat blitz', 'No increment', 'Sudden death flag falls'],
    registrationUrl: '#',
    status: 'completed',
    updates: [
      { time: '2026-10-25T17:15:00Z', message: 'Final tiebreak calculations validated.' },
    ],
    winners: [
      {
        rank: 1,
        name: 'Rapid Reflexes (Sample)',
        house: 'Sarang',
        prize: '₹4,000 (Sample)',
        score: '8.0 / 9.0',
      },
      {
        rank: 2,
        name: 'Lightning King (Sample)',
        house: 'Mandakini',
        prize: '₹2,500 (Sample)',
        score: '7.5 / 9.0',
      },
    ],
    resultsTable: [
      { rank: 1, player: 'Blitz Demon X', house: 'Sarang', points: 8.0, buchholz: 48.0 },
      { rank: 2, player: 'Counter-Puncher Y', house: 'Mandakini', points: 7.5, buchholz: 47.0 },
      { rank: 3, player: 'Tactician Z', house: 'Shaastra', points: 7.0, buchholz: 45.5 },
    ],
    gallery: [
      '/art/flaming-trophy.png',
      '/art/tactics-book.png',
    ],
    report:
      'A ferocious display of rapid intuition and tactical sight. Over 450 blitz games were completed in 2.5 hours.',
    lessons: [
      'In no-increment blitz, pre-moving safe defensive moves preserves essential clock time.',
      'King safety cannot be compromised for pawn grabs.',
    ],
  },
];

export const calendarItems: CalendarItem[] = [
  {
    id: 'cal-1',
    slug: 'chitrakut-open-rapid-2026',
    title: 'Chitrakut Open Rapid Championship',
    type: 'tournament',
    startAt: '2026-11-14T08:30:00Z',
    endAt: '2026-11-14T13:30:00Z',
    location: 'Lichess & Virtual Hall A',
    description: 'Flagship semester championship, 6 rounds Swiss, 10+5 time control.',
    status: 'upcoming',
    eventSlug: 'chitrakut-open-rapid-2026',
    opensAt: '2026-11-14T08:00:00Z',
  },
  {
    id: 'cal-2',
    slug: 'guest-grandmaster-simul-2026',
    title: 'Guest Grandmaster Simul',
    type: 'simul',
    startAt: '2026-11-18T13:00:00Z',
    endAt: '2026-11-18T16:30:00Z',
    location: 'Main Auditorium Stream',
    description: 'Simultaneous exhibition against 30 qualified society players.',
    status: 'upcoming',
    eventSlug: 'guest-grandmaster-simul-2026',
    opensAt: '2026-11-18T12:30:00Z',
  },
  {
    id: 'cal-3',
    slug: 'inter-house-clash-sarang-vs-shaastra-2026',
    title: 'Inter-House Clash: Sarang vs Shaastra',
    type: 'clash',
    startAt: '2026-11-22T14:30:00Z',
    endAt: '2026-11-22T17:00:00Z',
    location: 'Discord Live Arena',
    description: '5v5 team rivalry battle in 3+2 blitz format over 5 rounds.',
    status: 'upcoming',
    eventSlug: 'inter-house-clash-sarang-vs-shaastra-2026',
    opensAt: '2026-11-22T14:15:00Z',
  },
  {
    id: 'cal-4',
    slug: 'masterclass-rook-endgames',
    title: 'Masterclass: Rook & Pawn Deep Dives',
    type: 'lecture',
    startAt: '2026-11-28T14:30:00Z',
    endAt: '2026-11-28T16:00:00Z',
    location: 'Google Meet Lecture Room',
    description: 'Lucena, Philidor, and Vancura defensive positions broken down step by step.',
    status: 'upcoming',
    opensAt: '2026-11-28T14:15:00Z',
  },
  {
    id: 'cal-5',
    slug: 'weekend-casual-kaapi-arena',
    title: 'Kaapi & Check: Saturday Casual Arena',
    type: 'open-play',
    startAt: '2026-12-05T10:30:00Z',
    endAt: '2026-12-05T12:30:00Z',
    location: 'Open Club Room & Discord Voice',
    description: 'Relaxed unrated games, live game analysis, and banter over filter coffee.',
    status: 'upcoming',
    opensAt: '2026-12-05T10:15:00Z',
  },
  {
    id: 'cal-6',
    slug: 'winter-solstice-marathon-2026',
    title: 'Winter Solstice 12-Hour Marathon',
    type: 'tournament',
    startAt: '2026-12-20T04:30:00Z',
    endAt: '2026-12-20T16:30:00Z',
    location: 'Campus-wide Online Arena',
    description: 'Non-stop blitz and bullet marathon to close the 2026 competitive calendar.',
    status: 'upcoming',
    opensAt: '2026-12-20T04:00:00Z',
  },
];

export const topics: Topic[] = [
  {
    id: 'top-1',
    slug: 'endgame-fundamentals',
    title: 'Endgame Mastery',
    description: 'From fundamental opposition to complex rook and minor piece technical conversion.',
    level: 'Intermediate',
    category: 'Endgames',
    icon: 'crown',
    resourceCount: 4,
  },
  {
    id: 'top-2',
    slug: 'tactical-patterns-motifs',
    title: 'Tactics & Motifs',
    description: 'Forks, skewers, deflection, clearance, and calculating multi-move combinations.',
    level: 'Beginner',
    category: 'Tactics',
    icon: 'swords',
    resourceCount: 5,
  },
  {
    id: 'top-3',
    slug: 'opening-repertoire-foundations',
    title: 'Opening Architectures',
    description: 'Principled pawn play in 1.e4, 1.d4, Sicilian structures, and Indian defenses.',
    level: 'Intermediate',
    category: 'Openings',
    icon: 'book-open',
    resourceCount: 3,
  },
  {
    id: 'top-4',
    slug: 'pawn-structures-strategy',
    title: 'Positional Strategy & Pawns',
    description: 'Isolated queen pawns, pawn chains, minority attacks, and outpost exploitation.',
    level: 'Advanced',
    category: 'Strategy',
    icon: 'shield',
    resourceCount: 3,
  },
  {
    id: 'top-5',
    slug: 'grandmaster-annotated-classics',
    title: 'Classics & Master Games',
    description: 'Detailed move-by-move deconstructions of history-making tactical masterpieces.',
    level: 'Advanced',
    category: 'Analysis',
    icon: 'trophy',
    resourceCount: 2,
  },
];

export const learningResources: LearningResource[] = [
  {
    id: 'res-1',
    slug: 'endgame-mastery-rook-pawn-codex',
    title: 'Endgame Mastery: The Rook & Pawn Codex',
    topicSlug: 'endgame-fundamentals',
    kind: 'lesson',
    level: 'Intermediate',
    summary: 'The ultimate guide to building bridges, cutting kings, and executing the Lucena and Philidor positions.',
    author: 'Curriculum Team',
    readTimeMinutes: 12,
    content: `
# Endgame Mastery: The Rook & Pawn Codex

"All rook endgames are drawn" is a famous grandmaster aphorism, but in tournament practice, nothing separates victors from the vanquished faster than precise rook activity.

### The Sacred Lucena Bridge
When your pawn has reached the 7th rank and your king is situated in front of it, White wins methodically using the bridge maneuver:
1. White plays **Rf4!** (or Rd4 depending on the flank) to establish the cutting rank.
2. The White king steps out to e7 or d7, deflecting enemy checks.
3. Once the black rook checks from behind, White marches the king forward until **Re4!** blocks the final check and queens the pawn.

### The Philidor Fortress
When defending a pawn down, Black must maintain the rook on the 6th rank, preventing the white king from advancing. The instant the pawn pushes to the 6th rank, Black drops the rook to the first rank and delivers unrelenting checks from behind.

### Golden Rules of Rook Play
- **Active Rooks over Passive Defense**: A rook behind an enemy passed pawn generates infinite kinetic counterplay.
- **King Activity**: The king transitions from a protected piece to a lethal attacking piece the moment queens leave the board.
- **Seventh Rank Infiltration**: Two rooks or even a single rook on the 7th rank paralyzes opposing development.
    `,
  },
  {
    id: 'res-2',
    slug: 'kasparov-topalov-immortal-1999',
    title: 'Kasparov vs Topalov (Wijk aan Zee 1999) - The Pearl of Wijk',
    topicSlug: 'grandmaster-annotated-classics',
    kind: 'annotated-game',
    level: 'Advanced',
    summary: 'Step-by-step interactive board analysis of Garry Kasparov’s immortal rook sacrifice on d4 that hunted the Black king across the board.',
    content: 'Full interactive commentary and grandmaster analysis of Garry Kasparov vs Veselin Topalov, Wijk aan Zee 1999.',
    author: 'Shah-Maat Analysis Board',
    readTimeMinutes: 20,
    initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0',
    moves: [
      { san: 'e4', comment: 'Kasparov opens with the king pawn.', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1' },
      { san: 'd6', comment: 'Topalov responds with Pirc Defense setups.', fen: 'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2' },
      { san: 'd4', comment: 'White establishes central occupation.', fen: 'rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2' },
      { san: 'Nf6', comment: 'Attacking the unprotected e4 pawn.', fen: 'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3' },
      { san: 'Nc3', comment: 'White defends e4 and develops comfortably.', fen: 'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3' },
      { san: 'g6', comment: 'Fianchetto preparation for the dark-squared bishop.', fen: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4' },
      { san: 'Be3', comment: 'Developing bishop intending Qd2 and Bh6 battery.', fen: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq - 1 4' },
      { san: 'Bg7', comment: 'Black develops the bishop to the long diagonal.', fen: 'rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N1B3/PPP2PPP/R2QKBNR w KQkq - 2 5' },
      { san: 'Qd2', comment: 'Preparing queenside castling.', fen: 'rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR b KQkq - 3 5' },
      { san: 'c6', comment: 'Controlling d5 and preparing b5 queenside expansion.', fen: 'rnbqk2r/pp2ppbp/2pp1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR w KQkq - 0 6' },
      { san: 'f3', comment: 'Cementing the center and restricting Ng4.', fen: 'rnbqk2r/pp2ppbp/2pp1np1/8/3PP3/2N1BP2/PPPQ2PP/R3KBNR b KQkq - 0 6' },
      { san: 'b5', comment: 'Topalov immediately attacks on the queenside.', fen: 'rnbqk2r/p3ppbp/2pp1np1/1p6/3PP3/2N1BP2/PPPQ2PP/R3KBNR w KQkq - 0 7' },
      { san: 'Nge2', comment: 'Kasparov maintains flexible piece routing.', fen: 'rnbqk2r/p3ppbp/2pp1np1/1p6/3PP3/2N1BP2/PPPQN1PP/R3KB1R b KQkq - 1 7' },
      { san: 'Nbd7', comment: 'Developing the knight to support e5 breaks.', fen: 'r1bqk2r/p2nppbp/2pp1np1/1p6/3PP3/2N1BP2/PPPQN1PP/R3KB1R w KQkq - 2 8' },
      { san: 'Bh6', comment: 'Kasparov immediately challenges Black’s dragon bishop.', fen: 'r1bqk2r/p2nppbp/2pp1npB/1p6/3PP3/2N2P2/PPPQN1PP/R3KB1R b KQkq - 3 8' },
      { san: 'Bxh6', comment: 'Forced exchange to avoid structural paralysis.', fen: 'r1bqk2r/p2npp1p/2pp1npb/1p6/3PP3/2N2P2/PPPQN1PP/R3KB1R w KQkq - 0 9' },
      { san: 'Qxh6', comment: 'White’s queen dominates the dark-squared complex.', fen: 'r1bqk2r/p2npp1p/2pp1npQ/1p6/3PP3/2N2P2/PPP1N1PP/R3KB1R b KQkq - 0 9' },
      { san: 'Bb7', comment: 'Developing the light-squared bishop.', fen: 'r2qk2r/pb1npp1p/2pp1npQ/1p6/3PP3/2N2P2/PPP1N1PP/R3KB1R w KQkq - 1 10' },
      { san: 'a3', comment: 'Prophylaxis against b4.', fen: 'r2qk2r/pb1npp1p/2pp1npQ/1p6/3PP3/P1N2P2/1PP1N1PP/R3KB1R b KQkq - 0 10' },
      { san: 'e5', comment: 'Black counter-strikes in the center.', fen: 'r2qk2r/pb1n1p1p/2pp1npQ/1p2p3/3PP3/P1N2P2/1PP1N1PP/R3KB1R w KQkq - 0 11' },
      { san: 'O-O-O', comment: 'Castling long, placing the rook on the open d-file.', fen: 'r2qk2r/pb1n1p1p/2pp1npQ/1p2p3/3PP3/P1N2P2/1PP1N1PP/2KR1B1R b kq - 1 11' },
      { san: 'Qe7', comment: 'Defending the queen and unpinning the king.', fen: 'r3k2r/pb1nqp1p/2pp1npQ/1p2p3/3PP3/P1N2P2/1PP1N1PP/2KR1B1R w kq - 2 12' },
      { san: 'Kb1', comment: 'Essential safety maneuver on the c1-h7 diagonal.', fen: 'r3k2r/pb1nqp1p/2pp1npQ/1p2p3/3PP3/P1N2P2/1PP1N1PP/1K1R1B1R b kq - 3 12' },
      { san: 'a6', comment: 'Reinforcing b5 before castling.', fen: 'r3k2r/1b1nqp1p/p1pp1npQ/1p2p3/3PP3/P1N2P2/1PP1N1PP/1K1R1B1R w kq - 0 13' },
      { san: 'Nc1', comment: 'Knight re-routing to b3 and a5.', fen: 'r3k2r/1b1nqp1p/p1pp1npQ/1p2p3/3PP3/P1N2P2/1PP3PP/1KNR1B1R b kq - 1 13' },
      { san: 'O-O-O', comment: 'Both kings now reside on the queenside.', fen: '2kr3r/1b1nqp1p/p1pp1npQ/1p2p3/3PP3/P1N2P2/1PP3PP/1KNR1B1R w - - 2 14' },
      { san: 'Nb3', comment: 'Targeting the vulnerable c5 and a5 squares.', fen: '2kr3r/1b1nqp1p/p1pp1npQ/1p2p3/3PP3/PN3P2/1PP3PP/1K1R1B1R b - - 3 14' },
      { san: 'exd4', comment: 'Opening the d-file.', fen: '2kr3r/1b1nqp1p/p1pp1npQ/1p6/3pP3/PN3P2/1PP3PP/1K1R1B1R w - - 0 15' },
      { san: 'Rxd4', comment: 'Recapturing actively with the rook.', fen: '2kr3r/1b1nqp1p/p1pp1npQ/1p6/3RP3/PN3P2/1PP3PP/1K3B1R b - - 0 15' },
      { san: 'c5', comment: 'Gaining space with tempo on the rook.', fen: '2kr3r/1b1nqp1p/p2p1npQ/1pp5/3RP3/PN3P2/1PP3PP/1K3B1R w - - 0 16' },
      { san: 'Rd1', comment: 'Rook retreats to maintain d-file vigilance.', fen: '2kr3r/1b1nqp1p/p2p1npQ/1pp5/4P3/PN3P2/1PP3PP/1K1R1B1R b - - 1 16' },
      { san: 'Nb6', comment: 'Controlling d5 and opening c8 for the king.', fen: '2kr3r/1b2qp1p/pn1p1npQ/1pp5/4P3/PN3P2/1PP3PP/1K1R1B1R w - - 2 17' },
      { san: 'g3', comment: 'Fianchettoing the light-squared bishop toward h3.', fen: '2kr3r/1b2qp1p/pn1p1npQ/1pp5/4P3/PN3PP1/1PP4P/1K1R1B1R b - - 0 17' },
      { san: 'Kb8', comment: 'King tucks in toward safety.', fen: '1k1r3r/1b2qp1p/pn1p1npQ/1pp5/4P3/PN3PP1/1PP4P/1K1R1B1R w - - 1 18' },
      { san: 'Na5', comment: 'Kasparov targets the b7 bishop outpost.', fen: '1k1r3r/1b2qp1p/pn1p1npQ/Npp5/4P3/P4PP1/1PP4P/1K1R1B1R b - - 2 18' },
      { san: 'Ba8', comment: 'Bishop retreats to preserve the long-range battery.', fen: 'bk1r3r/4qp1p/pn1p1npQ/Npp5/4P3/P4PP1/1PP4P/1K1R1B1R w - - 3 19' },
      { san: 'Bh3', comment: 'Controlling the crucial c8 escape square.', fen: 'bk1r3r/4qp1p/pn1p1npQ/Npp5/4P3/P4PPB/1PP4P/1K1R3R b - - 4 19' },
      { san: 'd5', comment: 'Black attempts to blow open the center.', fen: 'bk1r3r/4qp1p/pn3npQ/Npp5/3pP3/P4PPB/1PP4P/1K1R3R w - - 0 20' },
      { san: 'Qf4+', comment: 'Infiltration with check!', fen: 'bk1r3r/4qp1p/pn3np1/Npp5/3pPQ2/P4PPB/1PP4P/1K1R3R b - - 1 20' },
      { san: 'Ka7', comment: 'King forced to the open file.', fen: 'b2r3r/k3qp1p/pn3np1/Npp5/3pPQ2/P4PPB/1PP4P/1K1R3R w - - 2 21' },
      { san: 'Rhe1', comment: 'Kasparov aligns all artillery behind the e-pawn.', fen: 'b2r3r/k3qp1p/pn3np1/Npp5/3pPQ2/P4PPB/1PP4P/1K1RR3 b - - 3 21' },
      { san: 'd4', comment: 'Pushing past to stifle White’s center.', fen: 'b2r3r/k3qp1p/pn3np1/Npp5/4PQ2/P2p1PPB/1PP4P/1K1RR3 w - - 0 22' },
      { san: 'Nd5', comment: 'Knight leaps into the heart of Black’s camp.', fen: 'b2r3r/k3qp1p/pn3np1/1ppN4/4PQ2/P2p1PPB/1PP4P/1K1RR3 b - - 1 22' },
      { san: 'Nbxd5', comment: 'Black exchanges off the intrusive knight.', fen: 'b2r3r/k3qp1p/p4np1/1ppn4/4PQ2/P2p1PPB/1PP4P/1K1RR3 w - - 0 23' },
      { san: 'exd5', comment: 'White opens the e-file directly onto the black queen.', fen: 'b2r3r/k3qp1p/p4np1/1ppP4/5Q2/P2p1PPB/1PP4P/1K1RR3 b - - 0 23' },
      { san: 'Qd6', comment: 'Queen centralizes offering a queen trade.', fen: 'b2r3r/k4p1p/p2q1np1/1ppP4/5Q2/P2p1PPB/1PP4P/1K1RR3 w - - 1 24' },
      { san: 'Rxd4!!', comment: 'THE IMMORTAL SACRIFICE! Kasparov gives up the full rook for the king hunt.', fen: 'b2r3r/k4p1p/p2q1np1/1ppP4/3R1Q2/P2p1PPB/1PP4P/1K2R3 b - - 0 24' },
      { san: 'cxd4', comment: 'Topalov accepts the poisoned gift.', fen: 'b2r3r/k4p1p/p2q1np1/1p1P4/3p1Q2/P4PPB/1PP4P/1K2R3 w - - 0 25' },
      { san: 'Re7+!!', comment: 'The second rook sacrifice! Pure genius.', fen: 'b2r3r/k3R2p/p2q1np1/1p1P4/3p1Q2/P4PPB/1PP4P/1K6 b - - 1 25' },
      { san: 'Kb6', comment: 'King must run forward into the firing line.', fen: 'b2r3r/4R2p/pk1q1np1/1p1P4/3p1Q2/P4PPB/1PP4P/1K6 w - - 2 26' },
      { san: 'Qxd4+', comment: 'White queen begins the lethal net.', fen: 'b2r3r/4R2p/pk1q1np1/1p1P4/3Q4/P4PPB/1PP4P/1K6 b - - 0 26' },
      { san: 'Kxa5', comment: 'King steps forward to the edge of the board.', fen: 'b2r3r/4R2p/p2q1np1/kp1P4/3Q4/P4PPB/1PP4P/1K6 w - - 0 27' },
      { san: 'b4+', comment: 'Driving the king further into a mating cage.', fen: 'b2r3r/4R2p/p2q1np1/kp1P4/1P1Q4/P4PPB/2P4P/1K6 b - - 0 27' },
      { san: 'Ka4', comment: 'The black king is now on a4 on move 27!', fen: 'b2r3r/4R2p/p2q1np1/1p1P4/kP1Q4/P4PPB/2P4P/1K6 w - - 1 28' },
      { san: 'Qc3', comment: 'Threatening Ra7 mate!', fen: 'b2r3r/4R2p/p2q1np1/1p1P4/kP6/P1Q2PPB/2P4P/1K6 b - - 2 28' },
    ],
  },
  {
    id: 'res-3',
    slug: 'tactical-vision-pin-and-skewer-handbook',
    title: 'Tactical Vision: Pin & Skewer Field Manual',
    topicSlug: 'tactical-patterns-motifs',
    kind: 'practice',
    level: 'Beginner',
    summary: 'Drills to spot absolute versus relative pins and skewer alignments before your clock ticks away.',
    author: 'Tactics Division',
    readTimeMinutes: 15,
    content: `
# Pin & Skewer Field Manual

Pins and skewers are the bread and butter of rapid chess tactics.

### The Absolute vs Relative Pin
- **Absolute Pin**: A piece cannot legally move because doing so would expose the king to check. Exploit this by attacking the pinned piece with pawns of lower value.
- **Relative Pin**: A piece can legally move, but doing so abandons a higher-value piece (e.g., queen or rook). Often broken by counter-tactics with check.

### Interactive Rules of Engagement
1. Look for uncoordinated pieces on the same file, rank, or diagonal.
2. Check for unguarded rooks behind active kings.
3. Use decoy sacrifices to force enemy pieces onto aligned coordinates.
    `,
  },
  {
    id: 'res-4',
    slug: 'mastering-catalan-and-indian-setups',
    title: 'Mastering the Catalan & Indian Repertoires',
    topicSlug: 'opening-repertoire-foundations',
    kind: 'video',
    level: 'Intermediate',
    summary: 'A deep lecture on harmonious piece coordination, fianchetto pressure, and long-term positional squeeze.',
    author: 'IITM BS Masterclass',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    readTimeMinutes: 25,
    content: `
# Mastering the Catalan & Indian Repertoires

The Catalan opening combines the strategic space gains of 1.d4 and 2.c4 with the insidious long-diagonal sniper fire of the g2 bishop.

Key themes explored in this lecture:
- Delayed recapture on c4 to induce awkward black queenside weaknesses.
- Central clamping with e4 breaks.
- Transitioning into superior minor piece endgames.
    `,
  },
  {
    id: 'res-5',
    slug: 'my-60-memorable-games-retrospective',
    title: 'The Great Game: Retrospective on Bobby Fischer',
    topicSlug: 'pawn-structures-strategy',
    kind: 'book',
    level: 'Advanced',
    summary: 'A curated review of Fischer’s uncompromising style, dynamic defense, and crystalline clarity in pawn transformations.',
    author: 'Library Editorial',
    bookCover: '/art/tactics-book.png',
    readTimeMinutes: 18,
    content: `
# The Great Game: Retrospective on Bobby Fischer

Bobby Fischer’s games remain the benchmark for clarity, directness, and relentless pursuit of the truth in chess.

In this retrospective, we analyze five seminal encounters highlighting:
1. Converting minimal advantages in the Exchange Ruy Lopez.
2. King’s Indian Defense counter-assaults on the white flank.
3. Unfaltering tactical execution in Sicilian Poisoned Pawn lines.
    `,
  },
];

export const seasons: Season[] = [
  {
    id: 'sea-1',
    slug: 'season-2026-autumn',
    number: 3,
    name: 'Season III: Autumn 2026',
    startAt: '2026-09-01T00:00:00Z',
    endAt: '2026-12-31T23:59:59Z',
    status: 'active',
    description: 'Current competitive term focusing on inter-house rivalry, weekly cohort masterclasses, and open Swiss championships.',
    cohortIds: ['coh-1', 'coh-2', 'coh-3'],
  },
  {
    id: 'sea-2',
    slug: 'season-2026-spring',
    number: 2,
    name: 'Season II: Spring 2026',
    startAt: '2026-01-15T00:00:00Z',
    endAt: '2026-05-30T23:59:59Z',
    status: 'completed',
    description: 'Spring term which witnessed the foundation of the house system and our first 100-player blitz arena.',
    cohortIds: ['coh-past-1'],
  },
];

export const cohorts: Cohort[] = [
  {
    id: 'coh-1',
    name: 'Pawn to Knight Cohort',
    seasonSlug: 'season-2026-autumn',
    level: 'Beginner',
    mentorName: 'Arbiter & Lead Mentor (Candidate Master)',
    mentorRating: 'FIDE 1950',
    schedule: 'Every Saturday · 5:00 PM IST',
    focus: 'Board vision, avoiding one-move blunders, basic checkmating patterns, and basic endgame technique.',
    description: 'Tailored for students stepping into tournament play or moving from casual blitz to disciplined classical calculations.',
  },
  {
    id: 'coh-2',
    name: 'Rook & Bishop Vanguard',
    seasonSlug: 'season-2026-autumn',
    level: 'Intermediate',
    mentorName: 'Tournament Director & Coach',
    mentorRating: 'FIDE 2120',
    schedule: 'Every Sunday · 11:00 AM IST',
    focus: 'Positional planning, pawn structures (IQD, Carlsbad, Hanging Pawns), rook endgames, and calculation discipline.',
    description: 'For rated competitors aiming to break past the 1600-1800 barrier in competitive rapid play.',
  },
  {
    id: 'coh-3',
    name: 'Crown & Grandmaster Circle',
    seasonSlug: 'season-2026-autumn',
    level: 'Advanced',
    mentorName: 'Senior Master Lead',
    mentorRating: 'FIDE 2280',
    schedule: 'Every Tuesday · 8:30 PM IST',
    focus: 'Opening preparation with engines, dynamic piece sacrifices, deep endgame fortresses, and psychological match play.',
    description: 'Exclusive master-level study collective for board representatives representing IIT Madras in inter-collegiate clashes.',
  },
];

export const mentorSessions: MentorSession[] = [
  {
    id: 'sess-1',
    slug: 'sess-rook-endgame-drills',
    cohortId: 'coh-2',
    cohortName: 'Rook & Bishop Vanguard',
    title: 'The Cut-Off King & Lucena Bridge Drills',
    scheduledAt: '2026-11-08T05:30:00Z', // Sun 8 Nov 11:00 AM IST
    summary: 'Comprehensive hands-on breakdown of rook endgame fundamentals with practical sparring rounds.',
    notes: 'Please review chapter 4 of the Rook & Pawn Codex before joining the live board room.',
    status: 'upcoming',
  },
  {
    id: 'sess-2',
    slug: 'sess-tactical-blindspots-oct',
    cohortId: 'coh-1',
    cohortName: 'Pawn to Knight Cohort',
    title: 'Recognizing Undefended Pieces & In-Between Moves',
    scheduledAt: '2026-10-31T11:30:00Z', // Completed
    summary: 'Analysis of 12 critical games from the Kaveri Autumn Open where undefended pieces decided the outcome.',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    notes: 'Key rule: "Loose pieces drop off" (LPDO) - John Nunn. Never play a move without scanning enemy piece contacts.',
    status: 'completed',
  },
  {
    id: 'sess-3',
    slug: 'sess-catalan-deep-dive',
    cohortId: 'coh-3',
    cohortName: 'Crown & Grandmaster Circle',
    title: 'Modern Catalan Repertoires vs Early Black c5',
    scheduledAt: '2026-10-27T15:00:00Z', // Completed
    summary: 'High-level engine preparation addressing Black’s open Catalan setups with b5 counter-thrusts.',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    notes: 'PGN files uploaded to cohort study channel on Discord.',
    status: 'completed',
  },
];
