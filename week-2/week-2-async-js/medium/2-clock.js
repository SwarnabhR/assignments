const updateClock = () => {
    const now = new Date();

    // Format components
    const pad = (n) => n.toString().padStart(2, "0");

    const hours24 = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    const hours12 = pad((now.getHours() + 11) % 12 + 1);
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);
};

// Only call setInterval once
setInterval(updateClock, 1000);
updateClock(); 