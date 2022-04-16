## Project Gnome Fetcher

### The goal of this project is to practice working with React, specifically fetching data from an API

We will be using HTML, CSS, JavaScript and React.

The Gnome Fetcher project has three levels of difficulty: 
* starters (challenge: build the page, add specific styling elements, make responsive, only HTML and CSS)
* more advanced (challenge: build a React app, get necessary data from the API and show this in gnome cards on the screen)
* graduates (challenge: add filter and search functionality, error handling, responsiveness)

This repo provides the code for the React app, including filter. Styling is basic.

**Basic functionality:** we want our app to request data from the [Brastlewark API](https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json) and show this in an attractive way.

**Additional functionality:** add a loading message when the app starts; a filter function so that the user can select a specific number of gnomes, and a search function.

This is what the app will look like without added styling. Click on the images to see them enlarged (NB: you can change the text into English if you want).  

<img src="/gnomeFetcherBasic.png" width="315" />  <img src="/gnomeFetcherAdvanced.png" width="315" />  <img src="/gnomeFetcherLoader.png" width="100">

---

### For starters

Please ignore the style.css file; this is used for the next levels of this project.

1. Create a new folder on your local computer with the name: project-gnome-fetcher
1. Track your code with Git by using `git init` in the terminal
1. Create an index.html file with the general template code
1. Create a style.css file and add this to your HTML file as `<link>` (check how to add CSS to an HTML file)
1. Make sure you have *Gnome Fetcher* as the title (this will show in the tab when your app runs in the browser)
1. For the images, you can use whatever pictures or screenshots you like
1. Build the page and improve the example: 
    1. show only three gnome cards per row
    1. add a nice shadow to the cards
    1. put the name title of the gnome on the card in the centre above the image and add space around it
    1. make the name title more attractive
    1. put the card button in the centre under the image and add space around it
    1. make the buttons more attractive
    1. add buttons for filter and search, and add hover effect for these buttons
1. If you want to challenge yourself, try to make the app responsive by adding media queries for mobile, tablet and desktop
1. You can run the app in the browser with LiveServer (a VSC extension)

---

### For more advanced students

1. Create a project folder using `npx create-react-app`
1. Delete all unnecessary code
1. Make sure you have *Gnome Fetcher App* as the title in your HTML (this will show in the tab when your app runs in the browser)
1. The basic CSS code has been created in the `style.css`
1. Use the classNames that are in the index.css file (and save yourself some time!)
1. The API we use can return a huge amount of data so ake sure you send the correct request to the API
1. Create a welcome page component with some styling and an explanation of the app (don't forget to export and import components)
1. Create a Population and a Person component 
1. In Population.js, write the code to get the **Brastlewark** gnomes from the API when the page loads (hint: you can use React's `useEffect()` method to load the gnomes on the page with a `fetch()` request)
1. In Person.js, create a card for each gnome with the details you get from the API (e.g. age, weight, height, hair_color, etc.)
1. The gnomes should show on the screen as in the example image above: a header with the name of the gnome, an image, and a button to see more details.
1. Add any styling you like to make it look better and more professional

---

### For graduates

1. Create a navbar component with a home button and a button **Get the Gnomes**
1. The home button should bring the user to the home page where they are greeted with some kind of welcome and an explanation of the app (hint: you can use React Router if you want to practice this)
1. In Population.js, change the code so that you get all the gnomes from the API when the button in the navbar is clicked
1. Add a Filter button with functionality to load 30, 100, 500 or 1000 gnomes.
1. Add a Search button with functionality to search for a gnome name
1. Add error handling
1. Make the app fully responsive for mobile, tablet and desktop views

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). We can do this together during a CodeWomen coding session: it is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. You will probably see:  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (fetch)`  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (push)`

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.

PS: if you work for a company that has a corporate social responsibility policy and wants to support women in tech, then here is the link to the [fundraising overview of MigraCode](https://docs.google.com/spreadsheets/d/1Zs-Mmi39bcjVw2U-iEQWSHSjkb-EmET-j1WB2oJF45Q/edit#gid=0).

---
