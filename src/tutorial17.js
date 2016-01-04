var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
                            $.ajax({
                              url: this.props.url,
                              dataType: 'json',
                              cache: false,
                              success: function(data){
                                  this.setState({data: data});
                              }.bind(this),
                              error: function8xhr, status, err) {
                                console.error(this.props.url, status, err.toString());
                            }.bind(this)
                            });
                          },
  handleCommentSubmit: function(comment) {
                       },
  getInitialState: function() {
                     return {data: []};
                   },
  componentDidMount: function() {
                       this.loadCommentsFromServer();
                       setInterval(this.loadCommentsFromServer, this.props.pollInterval);
                     },
  render: function() {
            return (
                <div className="commentBox">
                  <h1>Comments</h1>
                  <CommentList data={this.state.data} />
                  <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </div>
                );
          }
});
