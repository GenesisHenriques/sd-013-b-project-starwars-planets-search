export function compareNameAsc(nomeA, nomeB) {
  const POSITIONARRAY = -1;
  if (nomeA.name < nomeB.name) return POSITIONARRAY;
  if (nomeA.name > nomeB.name) return 1;
  return 0;
}

export function compareNameDesc(nomeA, nomeB) {
  const POSITIONARRAY = -1;
  if (nomeA.name > nomeB.name) return POSITIONARRAY;
  if (nomeA.name < nomeB.name) return 1;
  return 0;
}

export function comparePopulationAsc(populationA, populationB) {
  const POSITIONARRAY = -1;
  if (Number(populationA.population)
  < Number(populationB.population)) return POSITIONARRAY;
  if (Number(populationA.population)
    > Number(populationB.population)) return 1;
  return 0;
}

export function comparePopulationDesc(populationA, populationB) {
  const POSITIONARRAY = -1;
  if (Number(populationA.population)
    > Number(populationB.population)) return POSITIONARRAY;
  if (Number(populationA.population)
      < Number(populationB.population)) return 1;
  return 0;
}

export function compareOrbitalAsc(orbitalPeriodA, orbitalPeriodB) {
  const POSITIONARRAY = -1;
  if (Number(orbitalPeriodA.orbital_period)
  < Number(orbitalPeriodB.orbital_period)) return POSITIONARRAY;
  if (Number(orbitalPeriodA.orbital_period)
      > Number(orbitalPeriodB.orbital_period)) return 1;
  return 0;
}

export function compareOrbitalDesc(orbitalPeriodA, orbitalPeriodB) {
  const POSITIONARRAY = -1;
  if (Number(orbitalPeriodA.orbital_period)
    > Number(orbitalPeriodB.orbital_period)) return POSITIONARRAY;
  if (Number(orbitalPeriodA.orbital_period)
        < Number(orbitalPeriodB.orbital_period)) return 1;
  return 0;
}
