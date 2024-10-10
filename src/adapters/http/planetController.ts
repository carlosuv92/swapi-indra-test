const { getPlanet, createPlanet } = require("../../aplications/services/planetService");

export const getPlanetController = async (event: any, context: any) => {
    const { id } = event.pathParameters;
    try {
        const planet = await getPlanet(id);
        return {
            statusCode: 200,
            body: JSON.stringify(planet),
        };
    } catch (error) {
        console.error("Error getting planet:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error getting planet" }),
        };
    }
};

export const createPlanetController = async (event: any, context: any) => {
    const planet = JSON.parse(event.body || "{}");
    try {
        const createdPlanet = await createPlanet(planet);
        return {
            statusCode: 201,
            body: JSON.stringify(createdPlanet),
        };
    } catch (error) {
        console.error("Error creating planet:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error creating planet" }),
        };
    }
};