
# Deep Lalwani - Portfolio Website 

## Build Status:

[![Build Status](https://travis-ci.com/LordLalwani/react-portfolio.svg?branch=master)](https://travis-ci.com/LordLalwani/react-portfolio)

Future Work & Progress: https://trello.com/b/9FuUSnRq/deeplalwani-gatsby-build

## Features:

- Desktop & mobile friendly.

- Contact form protected by Google Recaptcha

- Use's Graphql & Github API pull project data.

- CI/CD configured with TravisCI.

- Statically hosted on AWS S3.

- Distributed with AWS Cloudfront.

## Configure The Project:

### Setup keys & secrets:
1) Please create a new file `.env.development` and put this env variable with your GitHub token
	> If you're building for production, you will have to create a new file `.env.production` and put the same env variable

	```bash

	GITHUB_TOKEN=xxxxxxxxxx

	```

2) Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key
	```bash

	SITE_RECAPTCHA_KEY=xxxxx

	SITE_RECAPTCHA_SECRET=xxxxx

	```
3) Configure your S3 bucket name and region inside the `.travis.yml` file.
	```bash
	language: node_js
	node_js:
	8.14.0
	install: yarn
	script: gatsby build
	deploy:
	 provider: s3
	 access_key_id: $AWS_KEY
	 secret_access_key: $AWS_SECRET
	 bucket: 'xxxxxxxxxxxx'
	 skip_cleanup: true
	 acl: public_read
	 local_dir: public
	 region: "xxxxxxxxxxxxx"
	```
	>You will also have to create encrypted environment variables inside TravisCI for `AWS_KEY` & `AWS_SECRET`

### Local development Environment: 
1) Run `npm install` to install all packages & dependencies (this might take a few minutes)
2) Run `gatsby develop` from the project root directory to start the local development server
3) View the live project at [localhost:8000](localhost:8000)
