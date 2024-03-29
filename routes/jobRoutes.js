// routes/jobRoutes.js
const axios = require('axios');
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Jobs endpoints
 */

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get job listings
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: A search term for job description
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: A city name or location for job search
 *       - in: query
 *         name: full_time
 *         schema:
 *           type: string
 *         description: Limit results to full-time positions (true/false)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *     responses:
 *       '200':
 *         description: Successful response with job listings
 *         content:
 *           application/json:
 *             example:
 *               count: 1
 *               rows:
 *                 - id: "32bf67e5-4971-47ce-985c-44b6b3860cdb"
 *                   type: "Full Time"
 *                   url: "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb"
 *                   created_at: "Wed May 19 00:49:17 UTC 2021"
 *                   company: "SweetRush"
 *                   company_url: "https://www.sweetrush.com/"
 *                   location: "Remote"
 *                   title: "Senior Creative Front End Web Developer"
 *                   description: "exmaple description"
 *       '401':
 *         description: Authorization Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Missing Authorization Header.
 *       '403':
 *         description: Authentication Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid token
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Authentication error
 *               error: authentication_error_message
 */
router.get('/', async (req, res) => {
  const { description, location, full_time, page = 0 } = req.query;

  try {
    if (page) {
      const response = await axios.get(`https://dev6.dansmultipro.com/api/recruitment/positions.json?page=${page}`);
      jobs = response.data;

      res.status(200).json({ count: jobs.length, rows: jobs });
    } else {
      const response = await axios.get('https://dev6.dansmultipro.com/api/recruitment/positions.json');
      let jobs = response.data;

      // Filter jobs based on search criteria
      if (description) {
        jobs = jobs.filter(job => job.description.toLowerCase().includes(description.toLowerCase()));
      }
      if (location) {
        jobs = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
      }
      if (full_time && full_time.toLowerCase() === 'true') {
        jobs = jobs.filter(job => job.type.toLowerCase() === 'full time');
      }

      res.status(200).json({ count: jobs.length, rows: jobs });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch job list', error: error.message });
  }
});

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get job detail by ID
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       '200':
 *         description: Successful response with job detail
 *         content:
 *           application/json:
 *             example:
 *                  id: "32bf67e5-4971-47ce-985c-44b6b3860cdb"
 *                  type: "Full Time"
 *                  url: "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb"
 *                  created_at: "Wed May 19 00:49:17 UTC 2021"
 *                  company: "SweetRush"
 *                  company_url: "https://www.sweetrush.com/"
 *                  location: "Remote"
 *                  title: "Senior Creative Front End Web Developer"
 *                  description: "exmaple description"
  *       '204':
 *          description: Successful response but no data
 *       '401':
 *         description: Authorization Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Missing Authorization Header.
 *       '403':
 *         description: Authentication Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid token
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Authentication error
 *               error: authentication_error_message
 */
router.get('/:id', async (req, res) => {
  const jobId = req.params.id; // Get the job ID from the request parameter

  try {
    const response = await axios.get(`https://dev6.dansmultipro.com/api/recruitment/positions/${jobId}`);
    const jobDetail = response.data;

    if (!Object.keys(jobDetail).length) {
      res.status(204).end();
    } else {
      res.status(200).json({ ...jobDetail });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch job detail', error: error.message });
  }
});


module.exports = router;
