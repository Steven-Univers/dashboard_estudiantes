export type PromptEngineeringSkill = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export type BurnoutRiskLevel = 'High' | 'Medium' | 'Low' | 'Very Low'

export interface StudentMetrics {
  Weekly_GenAI_Hours: number
  Prompt_Engineering_Skill: PromptEngineeringSkill
  Burnout_Risk_Level: BurnoutRiskLevel
}
