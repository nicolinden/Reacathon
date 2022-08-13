// Import modules
const express = require('express');
const router = express.Router();

const axios = require('axios');

router.use(express.json({limit: '2mb'}));

/*
    Working calls:
    http://localhost:4004/spacex/v4/launchpads/
    http://localhost:4004/spacex/v4/landpads/
    http://localhost:4004/spacex/v5/launches/
    http://localhost:4004/spacex/v5/launches/latest/
    http://localhost:4004/spacex/v4/company/

*/

/**
 * Get path from request and append to call to spacex api
 */
router.use('/', async (req, res,next) => {
    const path = req.path;
    console.log(path);
    try{
        const response = await axios({
            url: `https://api.spacexdata.com${path}`,
            method: 'GET'
        });
        res.send(response.data);
    }catch(e){
        next(e);
    }
	return;
});


module.exports = router;
