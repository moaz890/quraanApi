import express from "express";
import needle from "needle";


const router = express.Router();


router.get('/', async (req, res) => {
    try {    
        const response = await needle(`get`, "https://mp3quran.net/api/v3");
        const data = await response.body;
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});
router.get('/reciters', async (req, res) => {
    try {    
        const response = await needle(`get`, `https://mp3quran.net/api/v3/reciters`);
        const data = await response.body;
        
        res.status(200).json(data);
        console.log(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});

router.get('/reciters/:id', async (req, res) => {
    try {    
        const response = await needle(`get`, `https://mp3quran.net/api/v3/reciters?reciter=${req.params.id}`);
        const data = await response.body;
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});

router.get('/riwayat', async (req, res) => {
    try {    
        const response = await needle(`get`, `https://mp3quran.net/api/v3/riwayat`);
        const data = await response.body;
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});
router.get('/riwayat/:id', async (req, res) => {
    try {    
        const response = await needle(`get`, `https://mp3quran.net/api/v3/reciters?rewaya=${req.params.id}`);
        const data = await response.body;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


export default router;