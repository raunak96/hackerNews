# Getting Started with Create React App

- ## Used useQuery and useQueries (for parallel fetching) hook of [react-query library](https://react-query.tanstack.com/) for fetching data.
- ## Will Add Loader Overlay using ```ReactDOM.createPortal``` which provides a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component in this case our main React Application.
    - In [index.html](public/index.html), **root** is main React Application, **loader** is for Loader component.
    - Using this we can get Loader outside our React Application, so while it is open user won't be able to interact with main Application.

[![Netlify Status](https://api.netlify.com/api/v1/badges/00aa9e91-0b9f-4db3-a625-24a1bc7ea5e0/deploy-status)](https://app.netlify.com/sites/rawnhackernews/deploys)