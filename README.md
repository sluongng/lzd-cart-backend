 

# What did you implement:

LZD-Cart-Backend is a solution for an entry test

# How did you implement it:

### 1. Analyzed problem:

Needed to implement a Cart frontend and backend.

Frontend should be able to make dynamic update on price calculation.

### 2. Assumption made:

- Endpoint for Cart Information will be hardcoded

- Some vocabulary(item, order,...) was not clearly defined


### 3. Solution stack:

Suggested solution was GoLang/PHP.

Initially planned to implement backend using Go/Gin but...

NodeJS offer more considering small size demo and easier deployment solution.

**Backend:**
	
`AWS Lambda (with nodeJS) using [Serverless Framework](https://serverless.com/)`

**Frontend:**
	
`ReactJS, React-bootstrap`

`Hosted with AWS S3 and distributed using AWS CloudFront.`
        
### 4. Retrospective:
 
# How can we verify it:

Frontend: Hosted using [AWS CloudFront](https://d2fzxugzl6byi5.cloudfront.net/cart)

Backend: Endpoints available at https://ne2nlvp7ic.execute-api.ap-northeast-2.amazonaws.com/prod/lzd/cart

    /{cartId}
    
    GET
    
    Description: Return hardcoded cart information

---

    /calculate
    
    POST
    
    Description: Return cart information with price and best warehouse source location calculated
    
---

Github repositories for code review:

[Gist](https://gist.github.com/sluongng/e16f3bdb5ce52444a29da56de5e8043c)

[Backend](https://github.com/sluongng/lzd-cart-backend)

[Frontend](https://github.com/sluongng/blog-frontend/blob/master/app/src/containers/Cart.js)

# Todos:

 - [X] Write documentation
 - [X] Fix linting errors
 - [X] Make sure code coverage hasn't dropped
 - [X] Provide verification config/commands/resources
 - [X] Change ready for review message below
 

**Is this ready for review?:** SOON :clap:

**Is it a breaking change?:** YES :ok_hand:
