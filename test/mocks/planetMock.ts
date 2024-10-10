import { Planet } from "../../src/domain/entities/planet";

export const mockPlanetData: Planet = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: [],
    films: [],
    created: new Date(),
    edited: new Date(),
    url: 'https://swapi.dev/api/planets/1/',
};