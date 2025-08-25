const h1 = React.createElement('h1', null, "Hello world");

console.dir(h1);

const root = document.querySelector('#root');

const React_Root = ReactDOM.createRoot(root);
React_Root.render(h1);