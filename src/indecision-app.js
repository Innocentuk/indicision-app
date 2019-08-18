console.log("App is running!");
/* Ex2. Create an app obj title/subtitle
   use title/subtitle in the template and render template
 */
/* Ex3.  Render only the subtitle (and p tag) if subtitle
   exist - logical and operator.
   render new p tag - if options.length > 0 'Here are your options', 'No options'
*/
const app = {
  title: "Indecision App",
  subtitle: "Decide What's next",
  options: []
};
// JSX
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = 0;
    renderApp();
  }
};

const removeAllOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  //console.log(option);
};
// create 'Remove all' btn above the list
// on click -> wipe the array and - render
const appRoot = document.getElementById("root");
//const numbers = [52, 101, 1000];
/* map over app.options getting back an array of list (set key and
   text) */
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? "There are options" : "No option for you"}{" "}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What shall I do
      </button>
      <button onClick={removeAllOptions}>Remove all </button>
      <ol>
        {app.options.map(option => (
          <li key={option}> {option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
