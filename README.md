# Rela-Task

A Node.js Express application for task management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmoudsabry12/Rela-Task.git
   cd Rela-Task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your configuration variables.

## Usage

Start the development server:
```bash
npm start
```

The server will run on the port specified in your environment variables (default: 3000).

## Scripts

- `npm start`: Run Server 

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js
- [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling CORS
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from .env file

## TypeScript Configuration

This project uses TypeScript for type safety and modern JavaScript features. The TypeScript configuration file (`tsconfig.json`) includes the following settings:

- **target**: ES2020
- **module**: NodeNext
- **rootDir**: `./src`
- **outDir**: `./dist`
- **strict**: Enabled for strict type checking
- **esModuleInterop**: Enabled for compatibility with CommonJS modules

To initialize TypeScript in the project, the following command was used:
```bash
npx tsc --init
```

Ensure that your TypeScript source files are located in the `src` directory, and the compiled JavaScript files will be output to the `dist` directory.

## Environment Variables

This project uses environment variables to configure the application. Follow these steps to set up your environment variables:

1. Create a `.env` file in the root directory of the project.
2. Use the `.env.example` file as a template. Copy its contents into your `.env` file and replace the placeholder values with your actual configuration.

Example `.env` file:
```
PORT=5000
```

The `.env.example` file contains:
```
PORT=

```

Ensure that the `.env` file is not committed to version control to protect sensitive information.

## Project Structure

### `src/app.ts`

This file initializes the Express application and sets up middleware and routes. Key features include:

- Middleware for JSON parsing.
- A sample route at `/` that responds with "Hello, World!".

### `src/server.ts`

This file is responsible for starting the server. Key features include:

- Loading environment variables using `dotenv`.
- Starting the server on the port specified in the `.env` file or defaulting to `5000`.
- Logging the server URL to the console when it starts.

## API Endpoints

### Application Routes

The following routes have been added to the application:

- **`GET /`**: Returns a simple "Hello, World!" message.
- **`/api/hotel`**: Routes for hotel-related operations, handled by `hotelRoutes`.
- **`/supplier-a/hotels`**: Mock supplier A hotel routes, handled by `supplierARoutes`.
- **`/supplier-b/hotels`**: Mock supplier B hotel routes, handled by `supplierBRoutes`.

### Hotels

#### Controller: `src/controller/hotel.controller.ts`

- **Function**: `getHotels`
  - **Description**: Handles requests to retrieve hotel data.
  - **Response**: Returns a JSON object with hotel information.
  - **Example Response**:
    ```json
    {
      "Hotels": "Hotels"
    }
    ```

#### Route: `src/routes/hotel.route.ts`

- **Endpoint**: `GET /`
  - **Description**: Returns a simple response for the hotels endpoint.
  - **Response**: A string message `Hotels`.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.