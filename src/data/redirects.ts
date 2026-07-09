// service+city combo pages that 301-redirect to the general /services/[slug] page
// because the city duplicates the geo-target already covered there (see next.config.mjs).
export const redirectedServiceCityCombos = ['concrete-driveways/dallas']

export function isRedirectedServiceCityCombo(serviceSlug: string, citySlug: string) {
  return redirectedServiceCityCombos.includes(`${serviceSlug}/${citySlug}`)
}
