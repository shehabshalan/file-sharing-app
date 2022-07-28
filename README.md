# What is this?
The application is a document library intended to give its users a web based solution to store and share their documents with others.

**Demo**: https://document-library-api.herokuapp.com/

*Please allow for 20 seconds or so for the demo. it uses Heroku's free plan and it could take time to boot up.*

### Requirements
- Node v16
- React v18

## How to run?
**Clone the repo**. 

  ```
  git clone https://github.com/shehabshalan/document-library
  ```
Navigate to the document-library
  ```
  cd document-library
  ```
<details close>
<summary>**Backend**:</summary>
 Navigate to backend folder
<pre>
  cd backend
</pre>
- Install packages using  npm 
<pre>
  npm install
</pre>
- Create .env file in the root folder (below command uses windows cmd)
<pre>
  type . > .env
</pre>
- Run the backend
  ```
  npm start
  ```
</details>

**Frontend**:
- Navigate to frontend folder
  ```
  cd frontend
  ```
- Install packages using npm
    ```
  npm install
  ```
- Run the frontend
  ```
  npm start
  ```

## How to test?
- if both backend and frontend are running correctly, then you can navigate to localhost:3000.
- upload a file or files using the upload area. 
- you will instantlly get the uploaded file/files in the document area. 
- set the expiration duration as you wish from the date and time picker. For example, 12 December at 8:00 pm.
- click upload and a newly generated link will be shown which you can copy and send to someone. 
- use the generated share link to access the files. File or files will be shown in cards with their metadata.

## Architecture

![architecture](https://user-images.githubusercontent.com/30008865/177472581-72341a49-766b-4f94-8c52-30bc97840223.png)

## Improvements
- File validation such as type, size etc.

## Inside look:


## Core Tech Stack:
| Tech stack  | Version |
| ------------- | ------------- |
| React.js  | 18.2.0  |
| Node.js  | 16.13.2  |
| Express.js  | 4.18.1  |
| MongoDB using mongoose  | 6.4.2  |
| Cloudinary  | 1.30.0  |
| MUI  | 5.8.6  |
