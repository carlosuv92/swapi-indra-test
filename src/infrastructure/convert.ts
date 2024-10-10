import { PeopleItem } from '@/domain/entities/people';
import { translate } from './translate';

export const convertJson = async (json: any): Promise<any> => {
    try {
        const keys = Object.keys(json);
        const newJson: any = {};
        for (const key of keys) {
            let newKey = await translate(key);
            newJson[newKey] = json[key];
        }
        return newJson;
    } catch (error) {
        console.error('Error converting json:', error);
        throw new Error('Error converting json');
    }
}