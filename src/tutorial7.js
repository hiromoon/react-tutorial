var Comment = React.createClass({
  render: function() {
    var rawMarkup = maked(this.props.children.toString(), {sanitize: true});
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
        );
  }
});
