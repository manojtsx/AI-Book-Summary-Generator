# Book Summary Generator

This project is a Book Summary Generator built with React and OpenAI's GPT-3.5-turbo model. It allows users to input the name of a book and generates a summary using OpenAI's API.

## Features

- Input the name of a book to generate a summary.
- Uses OpenAI's GPT-3.5-turbo model for generating summaries.
- Simple and user-friendly interface.

## Installation

1. Clone the repository:
	```sh
	git clone https://github.com/manojtsx/AI-Book-Summary-Generator.git
	```
2. Navigate to the project directory:
	```sh
	cd Book-Summary-Generator
	```
3. Install the dependencies:
	```sh
	npm install
	```

## Usage

1. Create a `.env` file in the root directory and add your OpenAI API key:
	```env
	VITE_OPENAI_API_KEY=your_openai_api_key
	```
2. Start the development server:
	```sh
	npm run dev
	```
3. Open your browser and navigate to `http://localhost:3000`.

## File Structure

- `src/`
  - `App.tsx`: Main React component.
  - `styles.css`: CSS file for styling the application.
  - `index.tsx`: Entry point for the React application.

## Dependencies

- React
- OpenAI API
- Vite

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [OpenAI](https://openai.com/) for providing the GPT-3.5-turbo model.
- [React](https://reactjs.org/) for the front-end framework.
