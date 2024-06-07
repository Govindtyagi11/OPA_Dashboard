import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from "react-icons/io5";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 395,
  bgcolor: "#fff",
  borderRadius: "6px",
  boxShadow: ` rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
  p: 4,
};

const JobSubmit3 = ({open, setOpen }) => {

  const handleClose = ()=>{
    setOpen(false)
  } 


  console.log(open,'2345678');
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={style}>
          <div class="modal__content submission_successfull">
            <div className="close_btn">
              <IoClose onClick={handleClose} />
            </div>
            <h1>Application Submitted Successfully</h1>

            <div className="qualification">
              <div>
                <p>Company Name :</p>
                <span>Amazon.com</span>
              </div>
              <div>
                <p>Position :</p>
                <span>Laravel Developer</span>
              </div>
              <div>
                <p>Experience Level :</p>
                <span>Mid Level</span>
              </div>
              <div>
                <p>Experience Length :</p>
                <span>2 years</span>
              </div>
              <div>
                <p>Location :</p>
                <span>San Francisco, USA</span>
              </div>
              <div>
                <p>Salary Range :</p>
                <span>$105,000-150,000</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default JobSubmit3;
