import  image  from "./images/img.jpeg";
import "./App.css";

function App() {
  return (
    <div class="function">
      <img src={image} alt="images" />
      <h3>Blog post published</h3>
      <p>
        this blog has been published .team members <br />
        will be able to edit post and republish changes.
        <h6 href="#" target="blank">
          link
        </h6>
      </p>
      <div class="div2">
        <button class="b1">
          <b>Cancel</b>
        </button>
        <button class="b2">
          <b>Confirm</b>
        </button>
      </div>
    </div>
  );
}

export default App;