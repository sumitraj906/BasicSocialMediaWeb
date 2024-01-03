const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <center>
      <h1 className="welcome-message">There is no Posts</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Fetch Post From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
