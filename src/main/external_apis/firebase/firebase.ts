import * as admin from 'firebase-admin';
import { UnauthorizedError } from '../../util/application/error';

admin.initializeApp();

/**
 * Method to verify firebase token
 */
const verifyToken = async (token: string): Promise<admin.auth.DecodedIdToken> => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (error: unknown) {
    throw new UnauthorizedError(`Token verification failed ${error}`);
  }
};

export default verifyToken;
