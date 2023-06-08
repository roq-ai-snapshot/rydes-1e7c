const mapping: Record<string, string> = {
  companies: 'company',
  teams: 'team',
  'team-employees': 'team_employee',
  'travelling-allowances': 'travelling_allowance',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
