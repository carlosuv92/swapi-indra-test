import { People } from "../../domain/entities/people";
import { get } from "../../adapters/db/peopleRepository";

export const getPeople = async (id: string): Promise<People> => {
    return await get(id);
};