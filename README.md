# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Commit Feed
Overview
GitHub API
Listing commits for a repository
Authentication
Generating a token
Requirements
Features
Design
Documentation
Organization
Testing
Submission
Overview
Implement a browser app that loads commits from a GitHub repository and displays them in a
table (similar to a Twitter feed).
Time limit: For the take home challenge, we ask that the solution be returned within 2-3 days
and we recommend spending about two to four hours on the solution. We’re expecting you to
write code you’d submit as a pull request to your peers, meaning you’ll want clean code and
include some unit or integration tests.
GitHub API
Listing commits for a repository

- Docs: https://docs.github.com/en/rest/commits/commits#list-commits
- Example: https://api.github.com/repos/m3db/m3/commits
- Tips:
- The date of a commit is nested within commit.author.date in the returned JSON
- The API returns a “Links” header which contains paginated URLs that can be
  used for subsequent commit requests
  Authentication
- To avoid rate limits, API requests should include an API token as the Authorization
  header
  Generating a token
  In the above image, the token “abc123” is an example. You will want to generate your own
  personal access token here:
  https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-per
  sonal-access-token
  Create a token with none of the scopes selected as you will not need any additional capabilities.
  Docs: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
  Requirements
  This project should be written in React and as a bonus, we’d love to see you write it in
  TypeScript. We recommend you start a Create React App to bootstrap your app. After you’re
  done, zip the project (without node_modules) and follow the submission instructions at the
  bottom of this doc.
  Features
- The following paths should render the appropriate content:
- https://{localDevURL}/:user/:repo
- https://{sandboxURL}/m3db/m3 displays commits for
  https://github.com/m3db/m3
- https://{localDevURL}
- The root path should have a form that has two input fields and a submit
  button. One input for entering the Github user/org and the other for
  entering the repo name. Submitting the form should take you to the
  commit list page (above) for that repository.
- https://{localDevURL}/does/not/exist
- The path users are redirected to when a repo doesn’t exist or a user
  navigates to an invalid URL. Should not display any commits
- The table of commits should show the following information:
- Date of commit
- Author of commit
- Message of commit
- URL to commit (example)
- The page must function as a “feed” in that additional pages of commits should be
  fetched and rendered in the table, either
  a. as a button is pressed (e.g. a “Load More” button)
  b. as we’ve scrolled to the bottom of the page (e.g. like a Twitter feed)
  Design
  While we do not expect UI engineers to be designers, we would like to see how you apply some
  minimal styling that’s pleasing to the eye. Below is an example of a mock that you can replicate
  or feel free to express your creativity by going a different direction, just remember to satisfy the
  product requirements!

Documentation
● Include a README that tells the user how to run the project and other assumptions
made about the project
● Include any other documentation you think would be helpful for someone to understand
the project better
Organization
● Organize your code in a way that is easy to understand and navigate. Imagine as if you
are laying the foundation for a larger app, what does that look like?
Testing
● Include unit and integration tests in your repo where it makes sense. What tests are
necessary to make sure the implementation is working as expected and can catch a
regression?
○ Use your own discretion for how many tests you need to write. We understand
not everyone may have as rich of testing experience as others, but do your best
to give a few examples here.
Submission
To submit your solution

1. From your local dev environment, zip your project files
2. Email the zip file to your recruiter and recruiting coordinator
