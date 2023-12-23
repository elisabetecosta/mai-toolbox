import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

const credential = {
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
};

// Function to initialize Firebase Admin SDK
const initializeFirebaseAdmin = () => {
    if (!admin.apps.length) return admin.initializeApp(credential);
    return admin.app(); // Return existing app if it exists
};

// Initialize Firebase Admin SDK
const app = initializeFirebaseAdmin();

// Initialize Firestore
const adminDb = initFirestore(credential);

// Initialize Firebase Authentication
const adminAuth = admin.auth(app);

export { adminDb, adminAuth };