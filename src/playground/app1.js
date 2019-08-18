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
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "There are options" : "No option for you"} </p>
    <ol>
      <li>Item one</li>
      <li>item two</li>
    </ol>
  </div>
);

const user = {
  name: "Nkechinyerem",
  age: 28,
  location: "Copenhagen"
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  return "Unknown";
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"} </h1>
    {user.age && user.age > 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("root");
ReactDOM.render(template, appRoot);
