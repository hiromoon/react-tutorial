var CommentForm = React.createClass({
  handleSubmit: function(e) {
                  e.preventDefault();
                  var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
                  var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
                  if(!text || !author) {
                    return;
                  }
                  this.props.onCommentSubmit({author: author, text: text});
                  ReactDOM.findDOMNode(this.refs.author).value = '';
                  ReactDOM.findDOMNode(this.refs.text).value = '';
                  return;
                },
    render: function() {
              return (
                <form className="commentForm" onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Your name" ref="author" />
                  <input type="text" placeholder="Say something..." ref="text" />
                  <input type="submit" value="Post" />
                </form>
                );
            }
});
