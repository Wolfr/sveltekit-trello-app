# Sveltekit Trello App

## What's this?

This is a very basic todo app that uses a Trello board as its backend.

It uses the latest version of Sveltekit (the one close to RC1 ;))

I used it to get to know Sveltekit's form actions and as a way to practice to interact with an API.

The Trello API happens to be very good and well documented, that's why I chose it.

-Wolfr

## How to use

* Create a Trello account
* Go to https://trello.com/app-key , get your key there as well as generate your token
* Create a board with one list
* Add .json to the URL, to find your list id.
* Save the list id, save your API token and key.

Create an .env file with the following content:

    VITE_TRELLO_KEY=[YOURKEY]&token=[YOURSERVERTOKEN]
    VITE_TRELLO_LIST_ID=[YOURLISTID]

Consider this board to be your “database”.

* Now run the project using `npm run dev`