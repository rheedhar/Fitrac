import logger from "../util/application/logger";
import {findUserQuery, RegisterUserQuery} from "../model/queries/user/create-user";
import pool from "../model/connection/db-connect";

const insertNewUser = async (query:RegisterUserQuery, userId:string): Promise<void> => {
    try {
        await pool.query(query);
        logger.info(`Query successfully executed`);
    } catch (error: unknown) {
        logger.error(`An error has occurred while trying to save user ${userId}`);
        throw error;
    }
}

const findUser = async (userId: string, emailAddress: string): Promise<boolean> => {
    try {
        const result = await pool.query(findUserQuery, [userId, emailAddress])
        return result.rows.length > 0;
    } catch (error) {
        logger.error(`An error has occurred while trying to find user ${userId}`);
        throw error;
    }

}

export { insertNewUser, findUser };