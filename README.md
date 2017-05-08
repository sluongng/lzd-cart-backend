 

# What did you implement:

LZD-Cart-Backend is a solution for an entry test

# How did you implement it:

1. Analyzed problem:

2. Assumption made:

3. Solution stack:

4. Retrospective:
 
# How can we verify it:

Frontend: Hosted using [AWS CloudFront](https://d2fzxugzl6byi5.cloudfront.net/cart)

Backend: Endpoints available at https://ne2nlvp7ic.execute-api.ap-northeast-2.amazonaws.com/prod/lzd/cart/

/{cartId}
GET
Description: Return hardcoded cart information

/calculate
POST
Description: Return cart information with price and best warehouse source location calculated

# Todos:

 - [ ] Write tests
 - [X] Write documentation
 - [X] Fix linting errors
 - [x] Make sure code coverage hasn't dropped
 - [ ] Provide verification config/commands/resources
 - [ ] Change ready for review message below
 

**Is this ready for review?:** SOON :clap:

**Is it a breaking change?:** YES :ok_hand:
