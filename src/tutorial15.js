var CommentForm = React.createClass({
  render: function() {
            return (
              <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say Something...." />
                <input type="submit" value="Post" />
              </form>
              );
          }
});
