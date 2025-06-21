# 📦 Rest API Image Uploader using Multer & Cloudinary

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt="Node.js"/>
    <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express.js"/>
    <img src="https://img.shields.io/badge/Multer-FFCA28?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2MtNS4yMyAwLTkgNC4yNy05IDkgMCA1LjIzIDQuMjcgOSA5IDkgNS4yMyAwIDktNC4yNyA5LTkgMC01LjIzLTQuMjctOS05LTl6bTAgMTRjLTMuMzEgMC02LTMuMDktNi02czIuNjktNiA2LTYgNiAzLjA5IDYgNi0yLjY5IDYtNiA2eiIvPjwvc3ZnPg==&logoColor=black&style=for-the-badge" alt="Multer"/>
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white&style=for-the-badge" alt="Cloudinary"/>
    <img src="https://img.shields.io/badge/dotenv-8DD6F9?logo=dotenv&logoColor=black&style=for-the-badge" alt="dotenv"/>
</p>

---

## 🚀 Project Overview

A simple REST API for uploading images, built with **Node.js**, **Express**, **Multer**, and **Cloudinary**.  
Perfect for learning file uploads, cloud storage, and API design.

---

## 🛠️ Tech Stack

| Technology   | Role                      |
|--------------|---------------------------|
| **Node.js**  | Backend runtime           |
| **Express**  | Web framework             |
| **Multer**   | File upload middleware    |
| **Cloudinary** | Image cloud storage     |
| **dotenv**   | Env variable management   |

---

## 🧑‍💻 Key Learnings

- **REST API Design:** Structuring endpoints for file uploads.
- **Multer:** Handling `multipart/form-data` in Express.
- **Cloudinary:** Uploading and managing images in the cloud.
- **Validation:** Restricting uploads to images only.
- **Async/Await:** Managing async uploads with error handling.
- **Environment Variables:** Securing API keys with `.env`.
- **Testing:** Debugging endpoints with Postman.
- **Implemented environment variables** to securely manage and hide sensitive data (such as API keys and secrets) in the backend for the first time, following best practices

---

## 🌟 Challenges & Solutions

- **File Validation:** Ensured only images are accepted.
- **Cloudinary Setup:** Solved API key issues using docs and `dotenv`.
- **Testing:** Used Postman for endpoint verification.

---

## 📸 Screenshots

| Description                                   | Preview                                 |
|-----------------------------------------------|-----------------------------------------|
| 1. Interface without CSS                      | ![No CSS](./screenshots/1.png)          |
| 2. Interface with CSS                         | ![With CSS](./screenshots/2.png)        |
| 3. Files stored in Cloudinary                 | ![Cloudinary](./screenshots/3.png)      |
| 4. Only essentials stored in the database     | ![Database](./screenshots/4.png)        |

---

## 📂 Getting Started

1. **Clone the repo:**  
     `git clone <repo-url>`
2. **Install dependencies:**  
     `npm install`
3. **Configure environment:**  
     Create a `.env` file with your Cloudinary credentials.
4. **Start the server:**  
     `npm start`
5. **Test the API:**  
     Use Postman to send a `POST` request to `/upload` with an image file.

---

## 🙏 Acknowledgements

- [Multer Documentation](https://github.com/expressjs/multer)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

> **Tip:** Screenshots are in the `screenshots/` folder. Replace them with your own if needed!
