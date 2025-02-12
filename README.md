# Tarfin Javascript Developer Task

Your task is to build a basic table component with search, pagination, and sort features.

This project was created with [Vite](https://github.com/vitejs/vite).
- Use `npm run dev` to run the development server.

Receive events from Ticketmaster API (https://developer.ticketmaster.com/products-and-docs/apis/getting-started/) with search keyword (cinema, football, etc.) (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2) and show API results on your table component. Create event detail page with event details including title, price, place, etc. Then add show detail button or icon to the table component for routing to the event detail page. 

**Project requirements**

* Build your table component from scratch. You can't use any existing React component for this project.
* The component must have search capabilities. (Split your components into smaller components.) 
* The component must have pagination.
* You should add an event detail page. Don't forget to add a show detail action to the table component.
* You must write tests for your code. (We recommend to use Jest for tests)
* You can add sorting feature for the table component. This feature is not a must but it is a big bonus. (If you decide to implement the sorting feature, make sure that the sorting mechanism doesn't need any other API requests.)
* You can use `bootstrap` or `tailwindcss` as CSS framework.
* Axios or any other alternatives can be used for HTTP requests.

**Submitting the finished task**   

When you are done, invite me to your project as a collaborator. (@frkcn)

We will get back to you as soon as possible.

Thanks! 🚀


notes
* npm run dev & npm run test
* Default list shown on screen is search results without keyword
* Every change on search text input make new request and screen will be updated
* Pagination is developed on front end not make new API call
* details button on table cell direct user to details page about that event
* Buttons under classification section of each event direct user to main page with search results via selected classification keyword
* Clicking tarfin logo direct user to main page
* Table titles are given as dummy data
* By setting titles and searchResults different table data might be shown on the screen
* Table data is sortable by clicking table titles