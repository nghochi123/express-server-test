const express = require('express');
const request = require('request')
const router = new express.Router();

const hourlyWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=1.2897&lon=103.8501&appid=38a6f5e17e9bad39fc96ad8c992c017d"

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