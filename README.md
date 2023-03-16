# An image fetcher

This is a test task for a company that I applied to for a job. My main task was to create mozaic layout with CSS grid. When the button is clicked, next seven images should be loaded.

### How does it look like?

<img src="https://i.ibb.co/nnzw2bk/screencapture-localhost-3000-2023-03-16-09-58-56.png" width="200" alt="demo">

### How to run this app?

1. clone the repo
2. Install dependencies using `npm install`
3. Run project with `npm start`
4. Open `localhost:3000`

### What technologies are used here?

1. React
2. Typescript
3. Scss
4. Axios

### What are some known issues?

Well, the button has a weird position. I mean, it could not be part of the grid, since it would mess up the whole layout, it would be then on of the grid's children. It also could not be positioned absolute, because it would be hard to make it responsive. So I just left it below the `grid-container`.

There is not any real image data, so I just show image author on hover. I hope that is ok.

### What would be nice to have?

Testing would something useful here. I would test it with `react-testing-library`.
