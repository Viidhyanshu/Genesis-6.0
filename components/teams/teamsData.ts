// ─── Team Types and Interfaces ────────────────────────────────────────────────

export type MemberType = "executive" | "core" | "faculty";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string | null; // path relative to /public e.g. "/teams/events/john.jpg"
  linkedin?: string;
  github?: string;
  instagram?: string;
  type?: MemberType;
}

export interface Team {
  id: string;
  label: string;
  members: TeamMember[];
}
