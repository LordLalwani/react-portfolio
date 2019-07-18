# Deep Lalwani Portfolio Website

## Project status
In Progress

TravisCI: [![Build Status](https://travis-ci.com/LordLalwani/react-portfolio.svg?branch=master)](https://travis-ci.com/LordLalwani/react-portfolio)

## Features

- Eslint/Prettier configured
- Desktop & mobile friendly 
- Contact form protected by Google Recaptcha
- Use's Github & Linkdn API to pull data.
- CI/CD configured with TravisCI
- Deployed to AWS S3 & Configured with CloudFront

## Design

COMING SOON

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
└── static                  # Icons, favicon & SVG illustrations
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building for production, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

