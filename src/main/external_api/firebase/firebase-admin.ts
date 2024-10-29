import * as admin from 'firebase-admin';
import * as serviceAccount from '../../../../config/firebase-adminsdk.json';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export default admin;