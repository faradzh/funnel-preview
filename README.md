# Mobile Funnel Preview

A React application that renders previews of mobile funnel JSON files, building blocks to visualize how pages will appear on mobile devices.

## Overview

This application provides developers and designers with a visual representation of mobile funnels directly from JSON configuration files. It helps streamline the development and testing process by allowing stakeholders to preview how the funnel will look and function on mobile devices without deploying to production.

## Features

- **Live JSON Preview**: Instantly visualize mobile funnel layouts from JSON files
- **Block-based Rendering**: View individual funnel blocks and components
- **Responsive Mobile Preview**: Accurately represents how funnels will appear on various mobile devices
- **Page Navigation**: Navigate between different pages of the funnel

## Tech Stack

- **React**: UI library for building the interface
- **Vite**: Fast, modern frontend build tool
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vitest**: Testing framework for unit and integration tests

## Installation

```bash
# Clone the repository
git clone https://github.com/faradzh/funnel-preview.git

# Navigate to the project directory
cd funnel-preview

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

### Basic Usage

1. Start the development server using `npm run dev`
2. Open your browser to the URL displayed in the terminal (typically http://localhost:5173)
3. Upload a funnel JSON for the preview
4. Navigate through the funnel pages using the pagination (if multiple)

### JSON Format

The JSON files should follow this structure:

```json
{
  "name": "My awesome funnel",
  "bgColor": "#F5F5F5",
  "pages": [
    {
      "id": "b6b05e20d3a1486585bb889b3c5b6e9f",
      "blocks": [
        {
          "id": "b5e08d664867419a85c40d333ca4a00e",
          "type": "text",
          "text": "Welcome!",
          "color": "#202020",
          "align": "center"
        },
        {
          "id": "9f2f25ad177843b6b7fc81811b4f0456",
          "type": "image",
          "alt": "Welcome image",
          "src": "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        },
        {
          "id": "b5e08d664867419a85c40d333ca4a123",
          "type": "text",
          "text": "Check out our awesome menu!",
          "color": "#202020",
          "align": "center"
        },
        {
          "id": "6dc5ca19c11d4314bba0905de6c9dc07",
          "type": "list",
          "items": [
            {
              "id": "7dc5ca19c11d4314bba0905de6c9dc08",
              "title": "Drinks",
              "description": "Tshhh... Ahhhhh!",
              "src": "https://img.icons8.com/0076FF/win10/247/kawaii-soda"
            },
            {
              "id": "8dc5ca19c11d4314bba0905de6c9dc09",
              "title": "Icecream",
              "description": "Cool down ...",
              "src": "https://img.icons8.com/0076FF/win10/247/kawaii-cupcake"
            },
            {
              "id": "9dc5ca19c11d4314bba0905de6c9dc10",
              "title": "Taccos",
              "description": "... to heat up",
              "src": "https://img.icons8.com/0076FF/win10/247/kawaii-taco"
            }
          ]
        },
        {
          "id": "218fb0f6146b4728ad0b19e3b1084awd",
          "type": "button",
          "text": "Nice Menu!",
          "color": "white",
          "bgColor": "#0076FF"
        }
      ]
    },
    {
      "id": "5b42cc0dc973441e9c83a1970bbaf810",
      "blocks": [
        {
          "id": "0879f6c1d6b94be7b61d3c99543713a1",
          "type": "text",
          "text": "Thanks for stopping by!",
          "color": "#202020",
          "align": "center"
        },
        {
          "id": "9f2f25ad177843b6b7fc81811b4f090c",
          "type": "image",
          "src": "https://images.unsplash.com/photo-1578986568501-a6c637652d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        },
        {
          "id": "218fb0f6146b4728ad0b19e3b1084a16",
          "type": "button",
          "text": "Visit our website!",
          "color": "white",
          "bgColor": "#0076FF"
        }
      ]
    }
  ]
}
```

## To-Do List

- Improve Accessibility
- Potentially enhance "mobile" experience
- Increase test coverage to 85%
- Use proper theming or design system to unify several arbitrary sizes, spacing and color values

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

### Adding New Block Types

1. Create a new component in `src/components/blocks/`
2. Register the block type in `src/utils/blockRegistry.js`
3. Add appropriate tests in `tests/components/blocks/`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
