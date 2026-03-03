import { anxietyFlow } from "./chat/anxietyFlow";
import { moodPatternsFlow } from "./chat/moodPatternsFlow";
import { motivationFlow } from "./chat/motivationFlow";
import { todayStressFlow } from "./chat/todayStressFlow";
import { emotionalExhaustionFlow } from "./chat/emotionalExhaustionFlow";
import { calmNowFlow } from "./chat/calmNowFlow";
import { improveSleepFlow } from "./chat/improveSleepFlow";
import { lowProductivityFlow } from "./chat/lowProductivityFlow";
import { breathingExerciseFlow } from "./chat/breathingExerciseFlow";
import { overthinkingFlow } from "./chat/overthinkingFlow";

export const flows = {
  anxiety: anxietyFlow,
  moodPatterns: moodPatternsFlow,
  motivation: motivationFlow,
  todayStress: todayStressFlow,
  emotionalExhaustion: emotionalExhaustionFlow,
  calmNow: calmNowFlow,
  improveSleep: improveSleepFlow,
  lowProductivity: lowProductivityFlow,
  breathingExercise: breathingExerciseFlow,
  overthinking: overthinkingFlow
};