import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra || Constants.manifest?.extra;

if (!extra) {
    throw new Error("Brak konfiguracji extra w app.json");
}

export const APPWRITE_PROJECT_ID = extra.appwriteProjectId;
export const APPWRITE_DATABASE_ID = extra.appwriteDatabaseId;
export const APPWRITE_COLLECTION_ID = extra.appwriteCollectionId;
