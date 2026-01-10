
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  status: 'active' | 'offline';
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'queue' | 'pending';
  icon: string;
}

export interface BlueprintSuggestion {
  phase: string;
  recommendation: string;
  techStack: string[];
}
