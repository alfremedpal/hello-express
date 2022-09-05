# hello-express

Small express app to learn about the framework and node

## Local setup

In order to start playing with this project on your local machine follow these steps:

1. Clone this repository with `git clone https://github.com/alfremedpal/hello-express.git`
2. Move inside the project using `cd hello-express/`
3. Install any dependencies running `npm install`
4. Start the app with `npm start`

### Docker

1. Build the image with `docker build . -t my-user/my-image-name`
2. Start a container from the image using `docker run --name my-container-name -d -p 5000:5000 --env-file ./.env my-user/my-image-name`

### Requirements

Minimum:

- A PostgreSQL database
  - Connection string defined in `.env` file as `DB_STRING`
  - Table named `products`
  - Identifier column named `id`

- A Redis instance
  - Connection string defined in `.env` file as `REDIS_STRING`

## Tips and reminders

These are some personal tips and reminders on what I should take into consideration when building new projects with node and/or express.

- Don't forget to add `"type": "module"` to your `package.json` to specify all `.js` files are ES modules
- If running with Docker use `host.docker.internal` instead of `localhost` to access resources outside of your container
