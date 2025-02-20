# Customer App for Uploading Git Public Repositories

This project is designed to provide a simple application for uploading public Git repositories. It includes a service for validating and uploading repositories, and it is built using TypeScript.

## Project Structure

```
customer-app
├── src
│   ├── app.ts
│   └── services
│       └── gitService.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd customer-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will listen for incoming requests related to uploading Git public repositories.

## API Endpoints

- **POST /upload**: Upload a public Git repository.
  - Request Body: 
    ```json
    {
      "repositoryUrl": "https://github.com/user/repo.git"
    }
    ```

## Contributing

Feel free to submit issues or pull requests to improve the application. 

## License

This project is licensed under the MIT License.