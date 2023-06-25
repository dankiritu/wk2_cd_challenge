# Flatacuties Web App

This is a simple web application called Flatacuties, where users can vote for their favorite animals and view their details. The web app utilizes array iteration, DOM manipulation, event handling, and server communications.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd flatacuties`
3. Install dependencies: `npm install`

## Usage

1. Start the JSON DB server: `npm run server`
2. Open the `index.html` file in a web browser.

## Features

- View a list of all animal names.
- Click on an animal's name to see its details including image and number of votes.
- Add votes for each animal.
- Reset votes back to 0.
- Add new animals using the form.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

- `index.html`: The main HTML file for the web app.
- `styles.css`: The CSS file for styling the web app.
- `index.js`: The JavaScript file for handling DOM manipulation and event handling.
- `README.md`: Documentation file.

## API Endpoints

- `GET /characters`: Retrieve all character data.
- `GET /characters/:id`: Retrieve a specific character's details.
- `PATCH /characters/:id`: Update a character's votes.

## Server-Side Implementation

The web app relies on a local API implemented using the JSON DB server. The server-side code handles the HTTP requests and interacts with the database to fetch and update character data. Make sure the JSON DB server is running on port 3000 for the web app to function correctly.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to add, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [JSON DB](https://github.com/typicode/json-server) for the local API server.

---

Thank you for using Flatacuties! If you have any questions or need further assistance
