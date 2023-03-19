# game-consgine

## Requirement
- Node.js `>= 14.0.0`
----
### NO 1
1. Clone this repository to your localhost
2. Go to directory `1`.
    ```
    cd 1
    ```
3. Run the scripts
    ```
    node index.js
    ```
----
### NO 2
1. Clone this repository to your localhost
2. Go to directory `2`.
    ```
    cd 2
    ```
3. Run the scripts
    ```
    node index.js
    ```
----
### NO 3
1. Clone this repository to your localhost
2. Go to directory `3`.
    ```
    cd 3
    ```
3. Run the scripts
    ```
    node index.js
    ```
----
### NO 4
1. Clone this repository to your localhost
2. Go to directory `4`.
    ```
    cd 4
    ```
3. create .env file
    ```
    touch .env
    ```
4. Copy `.env.example` to `.env`
5. Install dependency
    ```
    npm install
    ```
6. Run the scripts
   ```bash
   npm run dev
   ```
7. You are ready to go

----

#### API DOCUMENTAION FOR NO 4
**Health Check**

* **URL:**

    http://localhost:3000/
* **Method:**

    `GET`


**Pokemons**
* **URL** 

    http://localhost:3000/pokemons
* **Method:**

    `GET`

* **Headers:**

    ```typescript
    /** REQUIRED */

    APIKEY: string
    ```

* **Params:**

    ```typescript
    page: number | string // Optional. Default value 1
    limit: number | string // Optional. Default value 20
    search: string // search pokemon by name
    order: string // asc | desc. Default value desc
    order_by: string // height | weight | base_experience
    ```

* **Response:**

    ```typescript
    {
        statusCode: number
        success: boolean
        message: string | null
        messageTitle: string | null
        summary: string | null
        data: null | object | object[]
        responseTime: string
    }
    ```
