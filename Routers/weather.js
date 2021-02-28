const express = require('express');
const request = require('request')
const router = new express.Router();

const hourlyWeather = process.env.OPENWEATHER_KEY;

router.get('/weather', (req, res)=>{
    request(
        {url: hourlyWeather},
        (error, response, body) =>{
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
        
            res.json(JSON.parse(body));
        }
    )
})

module.exports = router;