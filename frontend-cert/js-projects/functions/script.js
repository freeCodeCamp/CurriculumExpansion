const generatePassword = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

const runPasswordGenerator = () => {
    const length = parseInt(prompt("Enter the desired length for the password:"), 10);
    const password = generatePassword(length);
    console.log(`Generated password: ${password}`);
}

runPasswordGenerator();