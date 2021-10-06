# UCLA TGIF Website [![Netlify Status](https://api.netlify.com/api/v1/badges/69c20537-cd35-42a8-9073-012879e0ec00/deploy-status)](https://app.netlify.com/sites/tgif-ucla/deploys)

Source code for the official TGIF website, built with [Eleventy](https://www.11ty.dev/).

## Development

No documentation has been written yet. However, this repo is heavily based on the [USAC website](https://github.com/usacwebmaster/usac), so please see that README. The main technical differences are:

- Use of EJS embedded in HTML as the templating engine (as opposed to Nunjucks in Markdown for USAC).
- A simplified version of the custom navigation plugin from USAC.
- SASS is built via an Eleventy plugin instead of a concurrent NPM script.
