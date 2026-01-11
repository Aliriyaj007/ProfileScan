const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const TIMEOUT = 10000; // 10 seconds timeout

// Common user agents to avoid bot detection
const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
];

const getRandomUserAgent = () => USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];

app.get('/check', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': getRandomUserAgent(),
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            },
            timeout: TIMEOUT,
            validateStatus: function (status) {
                return status >= 200 && status < 500; // Resolve promise for 404s too
            }
        });

        const status = response.status;
        let exists = false;

        if (status === 200) {
            // Check for soft 404s (content check)
            const data = typeof response.data === 'string' ? response.data.toLowerCase() : JSON.stringify(response.data).toLowerCase();
            const notFoundPhrases = [
                'page not found',
                'user not found',
                'this account does not exist',
                'content unavailable',
                'profile not found',
                "sorry, we couldn't find that page"
            ];
            
            const isSoft404 = notFoundPhrases.some(phrase => data.includes(phrase));
            exists = !isSoft404;
        } else if (status === 404) {
            exists = false;
        } else if (status === 403 || status === 429) {
            // Rate limited or forbidden - might be bot protection
            // We'll mark as 'unknown' or 'maybe' in a real app, but for now returned as false with specific error
             return res.json({ exists: false, status, error: 'Access Denied/Rate Limited' });
        } else {
            exists = false;
        }

        res.json({ exists, status });

    } catch (error) {
        console.error(`Error checking ${url}:`, error.message);
        res.json({ exists: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
