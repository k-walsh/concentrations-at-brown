import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function ImgModal(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.path}.png`}
        alt={props.alt}
        className="chart"
        id={props.id}
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={false}
        maxWidth={"xl"}
      >
        <DialogContent>
          <img
            src={`${process.env.PUBLIC_URL}/images/${props.path}.png`}
            alt={props.alt}
            className="modalImg"
            onClick={() => setOpen(true)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ImgModal;
