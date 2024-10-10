import { getPeople } from "../../aplications/services/peopleService";

export const getPeopleController = async (event: any, context: any) => {
    const { id } = event.pathParameters;
    try {
        const people = await getPeople(id);
        return {
            statusCode: 200,
            body: JSON.stringify(people),
        };
    } catch (error) {
        console.error("Error getting people:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error getting people" }),
        };
    }
};