class Img extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { alt, src } = this.props;
    return React.createElement(
      "div",
      { className: "imgWrapper" },
      React.createElement("img", { className: "img", alt, src })
    );
  }
}
module.exports = Img;
