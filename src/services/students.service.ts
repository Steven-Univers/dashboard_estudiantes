import api from '@/utils/axios'
import type {
  BurnoutRiskLevel,
  PromptEngineeringSkill,
  StudentMetrics
} from '@/models/student.model'

const PROMPT_LEVELS: PromptEngineeringSkill[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
const BURNOUT_LEVELS: BurnoutRiskLevel[] = ['High', 'Medium', 'Low', 'Very Low']

const normalizePromptSkill = (value: unknown): PromptEngineeringSkill => {
  const raw = String(value ?? '').trim()
  const titleCase = raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()

  if (PROMPT_LEVELS.includes(titleCase as PromptEngineeringSkill)) {
    return titleCase as PromptEngineeringSkill
  }

  return 'Beginner'
}

const normalizeBurnout = (value: unknown): BurnoutRiskLevel => {
  const raw = String(value ?? '').replace(/_/g, ' ').trim().toLowerCase()

  if (raw === 'high') return 'High'
  if (raw === 'medium') return 'Medium'
  if (raw === 'low') return 'Low'
  if (raw === 'very low') return 'Very Low'

  return 'Low'
}

const toNumber = (value: unknown): number => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

export const getStudentsMetrics = async (): Promise<StudentMetrics[]> => {
  const { data } = await api.get<{ data?: unknown[] } | unknown[]>('/api/estudiantes')

  const students = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
      ? data.data
      : []

  return students.map((student) => {
    const item = student as Record<string, unknown>

    return {
      Weekly_GenAI_Hours: toNumber(item.Weekly_GenAI_Hours),
      Prompt_Engineering_Skill: normalizePromptSkill(item.Prompt_Engineering_Skill),
      Burnout_Risk_Level: normalizeBurnout(item.Burnout_Risk_Level)
    }
  })
}
