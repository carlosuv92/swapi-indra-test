import { People } from "../../src/domain/entities/people";

export const mockPeopleData: People = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'Tatooine',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date(),
    edited: new Date(),
    url: 'https://swapi.dev/api/people/1/',
};
