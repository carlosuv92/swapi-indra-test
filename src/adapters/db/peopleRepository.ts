import fetch from 'node-fetch';
import { PeopleItem } from '../../domain/entities/people';
import { convertJson } from '@/infrastructure/convert';

export const get = async (id: string): Promise<PeopleItem> => {
    const url = `https://swapi.dev/api/people/${id}/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data: PeopleItem = await response.json() as PeopleItem; // Aserción de tipo aquí
    const translatedData = await convertJson(data);
    return translatedData;
};
