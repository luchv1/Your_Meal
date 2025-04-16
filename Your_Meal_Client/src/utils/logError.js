export function logError(msg, error) {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.error(`[${formattedDate}] ${msg}`, error);
}
