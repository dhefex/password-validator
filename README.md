# Password Validator API

A simple REST API built with Node.js and Express that checks whether a password meets basic strength requirements.

## Rules

- At least 8 characters
- At least one lowercase letter
- At least one uppercase letter
- At least one number
- At least one special character

## Getting started

```bash
npm install
node server.js
```

## Example

**Request**

```json
{ "password": "abc" }
```

**Response (400)**

```json
{
  "errors": [
    "Password must be at least 8 characters long",
    "Password must contain at least one uppercase letter",
    "Password must contain at least one number",
    "Password must contain at least one special character"
  ]
}
```

**Response (200)**

```json
{ "message": "Password successfully validated" }
```
