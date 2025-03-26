# Coding AI Assistant

A web-based coding AI assistant that helps you understand and improve your code using the OpenRouter API.

## Features

- Modern, responsive UI built with Tailwind CSS
- Code input with syntax highlighting
- Real-time AI responses
- Loading states and error handling

## Deployment Instructions

1. Fork this repository to your GitHub account
2. Go to [Netlify](https://www.netlify.com/) and sign in with your GitHub account
3. Click "New site from Git"
4. Select your forked repository
5. Configure the build settings:
   - Build command: leave empty (no build required)
   - Publish directory: `/` (root directory)
6. Add environment variables:
   - Go to Site settings > Build & deploy > Environment
   - Add a new environment variable:
     - Key: `OPENROUTER_API_KEY`
     - Value: Your OpenRouter API key
7. Click "Deploy site"

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. For API functionality, you'll need to set up the environment variable locally or modify the `script.js` file to include your API key directly (not recommended for production)

## Security Note

Never commit your API key to the repository. Always use environment variables for sensitive information. 