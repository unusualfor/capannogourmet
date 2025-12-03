
# Il Capanno Gourmet

**Il Capanno Gourmet** is a playful, themed web app for a home restaurant event, built with React. It features a multi-section landing page, interactive RSVP (currently disabled), a structured menu, and a cocktail list, all styled for a unique and fun experience.

## Features

- Modern React single-page application
- Themed sections: restaurant intro, chef bios, event invitation, menu, cocktails, reviews, and RSVP
- Interactive RSVP and user list (with backend API integration) - this is currently disabled, but logic is still available
- Custom styles and playful design
- Containerized with Docker and ready for Kubernetes via Helm

## Getting Started

### Local Development

1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm start
	```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```
The optimized build will be in the `build/` folder.


## Docker

You can build and run the app locally, or use the pre-built image from GitHub Container Registry.

### Build Locally
```bash
docker build -t capannogourmet .
docker run -p 80:80 capannogourmet
```

### Use the GitHub Container Registry Image
```bash
docker run -p 80:80 ghcr.io/unusualfor/capannogourmet
```

## Kubernetes & Helm

Deploy with Helm:

```bash
helm install capannogourmet ./helm/capannogourmet
```


## Customization

- Edit `src/App.js` to change event details, menu, cocktails, and sections.
- Update styles in `src/App.css` and `src/colors.css`.
- Replace images in `public/` for your own theme.

## License

MIT License. See LICENSE file for details.
