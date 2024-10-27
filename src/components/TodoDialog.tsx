import { Dialog } from "@mui/material";
import Close from "../assets/close.svg";
import "../styles.css";

interface KadabraDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: JSX.Element;
  anchorHeight?: boolean;
}
const TodoDialog = (props: KadabraDialogProps) => {
  const {
    open,
    handleClose,
    title = "Create New Item",
    anchorHeight = false,
    children,
  } = props;

  const dialogStyle = {
    "& .MuiDialog-paper": {
      display: "flex",
      width: "582px",
      padding: "12px 24px 24px 24px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      borderRadius: "var(--Numeric-values-radius-3, 8px)",
      background: "var(--Base-colours-Light, #FFF)",
      boxShadow: "0px 5px 21px 0px rgba(137, 157, 225, 0.15)",
      height: anchorHeight ? "600px" : "fit-content",
    },
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="alert-dialog"
      sx={dialogStyle}
    >
      <div className="top-main-dialog-container">
        <div className="main-dialog-title-container">
          <label className="main-dialog-title">{title}</label>
        </div>

        <img className="pointer" src={Close} alt="icon" onClick={handleClose} />
      </div>
      {children}
    </Dialog>
  );
};
export default TodoDialog;
