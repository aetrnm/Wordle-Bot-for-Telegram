import { SessionData } from "./SessionData";

export function initializeSessionData(): SessionData {
    return { currentlyInGame: false, lastWord: "" };
}
