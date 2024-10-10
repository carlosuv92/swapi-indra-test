import { Planet } from "../../domain/entities/planet";
import { get, create } from "../../adapters/db/planetRepository";

export const getPlanet = async (id: string): Promise<Planet> => {
    return await get(id);
};

export const createPlanet = async (planet: Planet): Promise<Planet> => {
    return await create(planet);
};