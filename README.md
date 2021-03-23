# udacity-project.
> Welcome to MyReads udacity's React Nanodegree project.

### The main task of this React project are the following:
1.  Display books on the main page based on three categories or shelves. namely, Currently Reading, Want to Read and Read.
2.  Users can search from the library for book(s) he wants to move to the shelves and also he can move books betwen them.

### To get started developing right away:

 1. install all project dependencies with npm install
 2. start the development server with npm start

### Main Page :
> The main page shows 3 shelves for books.
> The main page shows a control that allows users to move books between shelves.

### Search Page :
> the user types into the search field, books that match the query are displayed on the page.
> Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
> The books that was added in the search page will be added to the main page.

### Routing :
>  The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
>  The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
    
### The provided file BooksAPI.js contains the methods you will need it :

 1. getAll
 2. search
 3. update
