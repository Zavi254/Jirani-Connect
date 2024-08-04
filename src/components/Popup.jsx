const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="popup-close" onClick={onClose}>
          &#x00D7;
        </button>
      </div>
    </div>
  );
};

export default Popup;
