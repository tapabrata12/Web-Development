const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Welcome to React</h2>
      <p>

        <h3>What is React?</h3>

        Imagine you are playing with LEGO blocks.
        Each block is small, but when you connect them, you can build a big house, a car, or even a spaceship!

        React is just like that for building websites and apps.

        Each block in React is called a Component.

        A component can be something small, like a button 🟦, or something bigger, like the whole page 🏠.

        You can reuse these blocks again and again (just like LEGO).

        So instead of building everything from scratch every time, React helps you snap together pieces to build a cool website quickly! <br />
        <h3>📁 The Folder Structure (React’s "Toy Box")</h3>
        Think of a React project like your toy cupboard. Everything has its own place so you don’t lose your toys. Here’s how it usually looks: <br />
        <h4>node_modules →</h4>
        This is like a big toy shop 🏪.
        It has all the extra LEGO pieces you didn’t make yourself but borrowed to play with. So accullay it has all the instaled Node Packages / dependencies. We shouldn.t do anything wrong with that module leave it as it is.<br />
        <h4>public →</h4>
        This is like the front yard 🏡.
        Whatever you put here, people outside can see directly (like the welcome mat or the door). For example, the main index.html file lives here — that’s the house’s front door 🚪. So accullay it has all the static files.
        <h4>src →</h4>
        This is the playroom 🎲 where you keep and build your LEGO sets.
        Inside src, So accully it is the main folder all of my react source code. you’ll find: <br />
        <h5>App.js (or App.jsx) →</h5> 
        The main LEGO model you’re building. So accullay it has all the main coding parts.
        <h5>components folder →</h5>
        We break our folder with components or chunks so all those chunks like [nav bar, main section, footer section] will be stored into the components folder.
        <h5>assets folder →</h5> 
        Your stickers and decorations 🎨 (like pictures, icons, sounds).
        <h5>styles/ folder →</h5>
        All the CSS will go into the folder.
        <h4>eslint.config.js</h4>
        This file helps us to detect the possible errors and also try to give us the suggesstions how to write the efficient code.
        <h4>.gitignore</h4>
        Prevent us to commit certain files.
        <h4>index.html</h4>
        Main file which has been connected with React 
        <h4>package.json</h4>
        Contains all the metadata about Project. Ex: name, version, dependancies used, in project.
        <h4>vite.config.js</h4>
        Vite configaration files it is used to modify the so that we can use more tools in future.
        <h4>package-lock.json</h4>
        It has the metadata about node modules / dependancies.
      </p>
    </div>
  )
}

export default App;