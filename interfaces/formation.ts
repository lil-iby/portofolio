export type Formation = {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
  highlight?: boolean;
};

export default Formation;

export type Experience = {
  type: "stage" | "projet" | "emploi";
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];
  color: string;
};

export type Skill = {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
  category: string;
};
