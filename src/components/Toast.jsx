const Toast = ({ show, message, type = "success", onClose, color }) => {
  if (!show) return null;

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div className={`toast show text-bg-${type}`}>
        <div className="toast-header">
          <strong className="me-auto">
            {type === "success" ? "Sukses" : "Error"}
          </strong>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>
        <div className={`toast-body bg-${color}`}>{message}</div>
      </div>
    </div>
  );
};

export default Toast;
