export function validateEmail(email) {
    if (!email.includes("@")) return "Email must contain '@'";
    if (!email.includes(".")) return "Email must contain '.'";
    if (email.startsWith("@") || email.endsWith("@")) return "'@' cannot be at the start or end";
    if (email.startsWith(".") || email.endsWith(".")) return "'.' cannot be at the start or end";
    if (email.includes("..")) return "Email cannot contain consecutive '..'";
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return "Invalid email format";
    
    return "Email is valid";
}