import AWS from "aws-sdk";
import { Planet } from "../../domain/entities/planet";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const get = async (id: string): Promise<Planet> => {
    const params = {
        TableName: "Items",
        Key: {
            id: id,
        },
    };

    try {
        const data = await dynamoDb.get(params).promise();
        return data.Item as Planet;
    } catch (error) {
        console.error("Error getting item:", error);
        throw new Error("Error getting item");
    }
};

export const create = async (planet: Planet): Promise<Planet> => {
    const params = {
        TableName: "Items",
        Item: planet
    };

    try {
        await dynamoDb.put(params).promise();
        return planet;
    } catch (error) {
        console.error("Error creating item:", error);
        throw new Error("Error creating item");
    }
};