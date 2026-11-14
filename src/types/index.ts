// Shah-Maat Domain Types

export interface SiteStats {
  members: number;
  eventsHeld: number;
  mentorSessions: number;
  seasonsCompleted: number;
  isSampleData: boolean;
}

export interface SiteSetting {
  siteName: string;
  tagline: string;
  subTagline: string;
  description: string;
  foundedYear: number;
  joinFormUrl: string;
  whatsappCommunityUrl: string;
  socialLinks: {
    discord: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
    googleSpace: string;
  };
  stats: SiteStats;
  contactEmail: string;
  mockCurrentTime: string; // ISO 8601 (2026-11-02T19:36:04+05:30)
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tenure: '2026-2027' | '2025-2026' | 'Founding 2024-2025';
  bio: string;
  photoUrl: string;
  house?: string;
  links: {
    lichess?: string;
    chesscom?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export type EventStatus = 'upcoming' | 'live' | 'completed';
export type EventType = 'tournament' | 'simul' | 'clash' | 'lecture' | 'open-play';

export interface CalendarItem {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  startAt: string; // UTC ISO string
  endAt: string;   // UTC ISO string
  location: string;
  description: string;
  status: EventStatus;
  eventSlug?: string;
  opensAt?: string; // when check-in or join button becomes active
}

export interface EventWinner {
  rank: number;
  name: string;
  house?: string;
  prize: string;
  score: string;
}

export interface EventResultRow {
  rank: number;
  player: string;
  house: string;
  points: number;
  buchholz: number;
}

export interface EventUpdate {
  time: string;
  message: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  format: string; // e.g. "10+5 Rapid, 6 rounds Swiss"
  startAt: string; // UTC ISO string
  endAt: string;   // UTC ISO string
  opensAt: string; // UTC ISO string
  location: string;
  bannerImage?: string;
  prizePool?: string; // marked as sample data
  highlight: string;
  rules: string[];
  registrationUrl: string;
  status: EventStatus;
  liveStreamUrl?: string;
  updates: EventUpdate[];
  winners: EventWinner[];
  resultsTable: EventResultRow[];
  gallery: string[];
  report?: string;
  lessons?: string[];
  isSampleData?: boolean;
}

export type ResourceLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ResourceKind = 'lesson' | 'video' | 'book' | 'annotated-game' | 'practice';

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: ResourceLevel;
  category: string;
  icon: string;
  resourceCount: number;
}

export interface ChessMoveCommentary {
  san: string;
  comment?: string;
  fen?: string;
}

export interface LearningResource {
  id: string;
  slug: string;
  title: string;
  topicSlug: string;
  kind: ResourceKind;
  level: ResourceLevel;
  summary: string;
  content?: string;
  videoUrl?: string;
  bookCover?: string;
  pgn?: string;
  moves?: ChessMoveCommentary[];
  initialFen?: string;
  author: string;
  readTimeMinutes: number;
}

export interface Season {
  id: string;
  slug: string;
  number: number;
  name: string;
  startAt: string;
  endAt: string;
  status: 'active' | 'upcoming' | 'completed';
  description: string;
  cohortIds: string[];
}

export interface Cohort {
  id: string;
  name: string;
  seasonSlug: string;
  level: ResourceLevel;
  mentorName: string;
  mentorRating: string;
  schedule: string;
  focus: string;
  description: string;
}

export interface MentorSession {
  id: string;
  slug: string;
  cohortId: string;
  cohortName: string;
  title: string;
  scheduledAt: string; // UTC ISO string
  recordingUrl?: string;
  notes?: string;
  summary: string;
  status: 'upcoming' | 'live' | 'completed';
}
