# PassOP - Password Manager App

PassOP is a secure and user-friendly password manager that helps you store and manage your passwords safely. It provides features like password generation, storage, and retrieval, ensuring that you never forget your passwords and always keep them secure.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/joy2724/passop.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd passop
    ```

3. **Install dependencies:**

    ```sh
    npm install
    npm install @fortawesome/fontawesome-free@^6.5.2 @fortawesome/free-solid-svg-icons@^6.5.2 @fortawesome/react-fontawesome@^0.2.0 generate-password@^1.7.1 react@^18.2.0 react-dom@^18.2.0 react-toastify@^10.0.5 secure-random-password@^0.2.3 uuid@^9.0.1 uuidv4@^6.2.13

    ```

4. **Start the development server:**

    ```sh
    npm start
    ```

## Usage

After starting the development server, you can use the application in your web browser.

1. **Open your browser and navigate to:**

    ```
    http://localhost:5173
    ```

2. **Create a new entry:**
   - Fill in the website URL, username, and password fields.
   - Click on "Save Password" to store the entry.

3. **Generate a strong password:**
   - Click on the "Generate Password" button to create a strong, random password.
   - The generated password will be filled in the password field automatically.

4. **View stored passwords:**
   - Your saved passwords will be displayed in a table below the form.
   - Click on the eye icon to toggle visibility of the password.
   - Use the edit and delete icons to modify or remove entries.

## Features

- **Secure Storage:** Store your passwords securely using local storage.
- **Password Generation:** Generate strong, random passwords.
- **Visibility Toggle:** Show or hide passwords with a simple toggle.
- **Clipboard Copy:** Copy passwords and other details to the clipboard with one click.
- **Edit and Delete:** Easily update or remove saved passwords.

## Contributing

We welcome contributions to improve PassOP. To contribute, follow these steps:

1. **Fork the repository:**

    ```sh
    git fork https://github.com/joy2724/passop.git
    ```

2. **Create a new branch:**

    ```sh
    git checkout -b feature-branch
    ```

3. **Make your changes and commit them:**

    ```sh
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```sh
    git push origin feature-branch
    ```

5. **Open a pull request:**

    Submit a pull request to the `main` branch of the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact:

- **GitHub:** [@yourusername](https://github.com/joy2724)
- **Email:** jaskamalsingh7872@gmail.com

---

Thank you for using PassOP! We hope it helps you manage your passwords securely and efficiently.
