import { Router } from 'express';
import { registerUser } from './controller/user-controller';
import { asyncRoute } from './util/application/util';

const router = Router();

/**
 * Users
 */
router.post('/user/register', asyncRoute(registerUser));

export default router;
