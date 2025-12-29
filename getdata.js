export default async function handler(req, res) {
    const BIN_ID = "YOUR_BIN_ID_HERE";
    const MASTER_KEY = "YOUR_MASTER_KEY_HERE";
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': MASTER_KEY }
        });
        const data = await response.json();
        res.status(200).json(data.record);
    } catch (e) { res.status(500).json({ error: "Read Failed" }); }
}