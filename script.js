class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "0",
      num2: "377",
      blackWhite: "#000",
      whiteBlack: "#FFF" };

    this.changecolor = this.changecolor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  changecolor() {
    this.setState(state => {
      if (this.state.blackWhite == "#000") {
        return { blackWhite: "#FFF", whiteBlack: "#000" };
      } else {
        return { blackWhite: "#000", whiteBlack: "#FFF" };
      }
    });
  }
  handleChange() {
    this.setState({
      num1: Math.floor(Math.random() * 6),
      num2: Math.floor(Math.random() * 1642) });

  }
  render() {
    let num45 = this.state.num2;
    console.log(num45);
    var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

    var objects;
    var quote;
    var author;
    var req = new XMLHttpRequest();
    req.open("GET", "https://type.fit/api/quotes", true);

    req.onload = function () {
      if (this.status == 200) {
        objects = JSON.parse(this.responseText);}
      quote = objects[num45].text;
      author = objects[num45].author;
      document.getElementById("quote").innerHTML = '"' + quote + '"';
      document.getElementById("author").innerHTML = '- ' + author;
      console.log(quote, author);
      console.info(objects);
    };
    req.send();
    console.log(this.state);
    return React.createElement("div", { id: "quote-page", style: { backgroundColor: colors[this.state.num1] } },
    React.createElement("div", { id: "quote-box", style: { backgroundColor: this.state.blackWhite } },
    React.createElement("h2", { id: "quote", style: { color: colors[this.state.num1] } }, "\"\""),


    React.createElement("h3", { id: "author", style: { color: colors[this.state.num1] } }, "-"),


    React.createElement("div", { id: "button-box" },
    React.createElement("button", { onClick: this.changecolor },
    React.createElement("i", { className: "fa fa-circle", style: { color: this.state.whiteBlack } })),

    React.createElement("button", { onClick: this.handleChange, style: { color: colors[this.state.num1] }, id: "button2" }, "Next Quote"),


    React.createElement("button", { style: { color: colors[this.state.num1] } },
    React.createElement("a", { style: { color: colors[this.state.num1] }, className: "fa fa-twitter", href: "https://publish.twitter.com/" })))));




  }}
;
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));