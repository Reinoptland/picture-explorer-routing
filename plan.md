## As a person who wants to see some nice pictures I want to see a landingpage that shows me what this app is about

## What do we need

- X Create React App
- X Component
- X Import the component
- X Use it in App.js
- X Content on the page

## As a person who wants to see some nice pictures I want to see a list of pictures so I can choose which picture I wan to see

## What do we need

- Setup React Router

  - X npm install
  - X import the components for React Router
  - X "Wrap" our entire app in a Router
  - X Switch
    - X Route for HomePage
  - X Navigation
    - X Link for each existing Route

- Picture Page

  - X Component
  - X Import component in App
  - X Make a Route for our page -> path etc ..
  - X Link to go the page

- Display some pictures
  - Fetch some data
    - X axios
    - X api (https://picsum.photos/v2/list)
    - X useEffect
    - X async function
    - X useState hook (to store dynamic data)
  - Display the pictures
    - X map the array
    - X Write JSX

DONE!

## As a person who wants to see some nice pictures I want to be able to see one picture full screen so I can admire it in high resolution

## What do we need?

- Routing

  - X Component (Detail Page)
  - X We need a Route (dynamic route, with :pictureId)
  - X A Link for every picture to navigate to detail page for that picture ..??

- Figure out which picture we need to display

  - X useParams to get the id of the picture

- Fetch data (the url of the picture, depends on the api)?
  - X Fetch some data
  - X api (https://picsum.photos/id/0/info)
  - X useEffect
  - X async function
  - X useState hook (to store dynamic data)
- Display the picture

## As a user I want to use this app online

- Add \_redirects folder to public
