const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="loader-container">
      <div className="loader spinner"></div>
    </div>
  );
};

export default Loading;
