export default async function handler(req, res) {
    const { adminPassword, newData } = req.body;
    const BIN_ID = "YOUR_BIN_ID_HERE";
    const MASTER_KEY = "YOUR_MASTER_KEY_HERE";

    if (adminPassword !== "Se.Shahzaib123") return res.status(401).json({ error: "Wrong Password" });

    try {
        await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-Master-Key': MASTER_KEY },
            body: JSON.stringify(newData)
        });
        res.status(200).json({ success: true });
    } catch (e) { res.status(500).json({ error: "Save Failed" }); }
}