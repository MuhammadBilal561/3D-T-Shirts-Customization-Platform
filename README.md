# Three.js AI T-Shirt Customizer

This project is a 3D t-shirt customizer built with Three.js and React, featuring AI image generation capabilities.

## Setup and Running Instructions

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)

### Installation

1.  **Extract the project:**

    Unzip the provided `updated_threejs_ai_project.zip` file to your desired location.

2.  **Navigate to the server directory and install dependencies:**

    ```bash
    cd threejs_ai_final_fixed/server
    npm install
    ```

3.  **Set up the Hugging Face API Key:**

    Create a `.env` file in the `server` directory (`threejs_ai_final_fixed/server/.env`) and add your Hugging Face API key:

    ```
    HF_API_KEY=YOUR_HUGGING_FACE_API_KEY
    ```

    Replace `YOUR_HUGGING_FACE_API_KEY` with your actual Hugging Face API key. You can obtain one from [Hugging Face settings](https://huggingface.co/settings/tokens).

4.  **Navigate to the client directory and install dependencies:**

    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the server:**

    Open a new terminal window, navigate to the `server` directory (`threejs_ai_final_fixed/server`), and run:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:8080`.

2.  **Start the client application:**

    Open another terminal window, navigate to the `client` directory (`threejs_ai_final_fixed/client`), and run:

    ```bash
    npm run dev
    ```

    The client application will open in your browser at `http://localhost:5173`.

### AI Image Generation Feature

To use the AI image generation feature:

1.  In the client application, navigate to the AI picker section.
2.  Enter a text prompt describing the image you want to generate.
3.  Click the "Generate" button.

The application will send your prompt to the backend, which will use the Hugging Face API to generate an image. The generated image will then be applied to the t-shirt in the 3D customizer.

### Troubleshooting

*   **`ERR_MODULE_NOT_FOUND` or similar errors:** Ensure all `npm install` commands were run successfully in both `server` and `client` directories.
*   **API Key Issues:** Double-check that your `HF_API_KEY` in the `.env` file is correct and has the necessary permissions.
*   **`Context Lost` error in console:** This might indicate an issue with how the image data is being handled by Three.js. Ensure the base64 image data is correctly formatted and loaded.
*   **Blank white page:** Check the browser console for any JavaScript errors. Ensure both server and client are running without errors.

If you encounter any further issues, please provide the exact error messages from both your terminal (server and client) and your browser's developer console.

