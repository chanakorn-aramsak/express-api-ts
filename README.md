# Express TypeScript API

This is a simple Express TypeScript API with endpoints for performing actions on data.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. testing api via `postman` or `curl`

## Oiber Endpoint

### POST `http://localhost:3000/oiber`

Content-Type: application/json

```json
{
  "url": "http://example.com",
  "data": "your_data_here"
}
```

### GET **`http://localhost:3000/oiber?url={your_url}`**

Use this endpoint to retrieve data from the Oiber service based on the provided URL.

**Request:**

```bash

GET http://localhost:3000/oiber?url=http://example.com

```

## **Monic Endpoint**

### POST **`http://localhost:3000/monic`**

Content-Type: application/json

```json
{
"url": "http://example.com",
"data": "your_data_here"
}
```

### GET **`http://localhost:3000/monic?url={your_url}`**

Use this endpoint to retrieve data from the Monic service based on the provided URL.

**Request:**

```bash

GET http://localhost:3000/monic?url=http://example.com

```
