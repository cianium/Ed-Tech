/**
 * M0 fail-closed pilot gates. Intentionally NOT controlled by NEXT_PUBLIC_*
 * environment variables. A future change requires review, legal/provider gates,
 * guardian access tests and a new ADR before enabling anything sensitive.
 */
export const PILOT_FEATURES = Object.freeze({
  realMinorActivation: false,
  payments: false,
  aiTutor: false,
  openEndedChildAi: false,
  advertisingTracking: false,
  publicMinorLeaderboards: false,
} as const);

export type PilotFeature = keyof typeof PILOT_FEATURES;
export function isPilotFeatureEnabled(feature: PilotFeature): boolean {
  return PILOT_FEATURES[feature];
}
