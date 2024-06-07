import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import JobSubmit2 from "./JobSubmit2";
import { IoClose } from "react-icons/io5";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  borderRadius: "6px",
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  p: 4,
  transition: '1s ease',
};

const JobSubmit1 = ({ open, setOpen, nextFun }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    nextFun(true);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className="resume_applyJob_btn">Apply to this job</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="modal__content">
            <div  className="close_btn" >
              <IoClose onClick={handleClose}/>
            </div>
            <h1>Laravel Developer (Full Time) - Amazon.com</h1>

            <div className="qualification">
              <div>
                <p>Minimum Qualification :</p>
                <span>Bachelor</span>
              </div>
              <div>
                <p>Experience Level :</p>
                <span>Mid Level</span>
              </div>
              <div>
                <p>Location :</p>
                <span>San Francisco, USA</span>
              </div>
              <div>
                <p>Appliance Deadline :</p>
                <span>12/08/2024</span>
              </div>
              <div>
                <p>Salary Range :</p>
                <span>$105,000-150,000</span>
              </div>
            </div>
            <div className="job_description">
              <div className="title">
                <h2>Job Description</h2>
              </div>
              <div>
                <p>
                  We are searching for a Laravel developer to build web
                  applications for our company. In this role, you will design
                  and create projects using, Laravel framework and PHP, and
                  assist the team in delivering high-quality web applications,
                  services, and tools for our business.
                </p>
              </div>
              <div>
                <p>
                  To ensure success as a Laravel developer you should be adept
                  at utilizing Laravel's GUI and be able to design a PHP
                  application from start to finish. A top-notch Laravel
                  developer will be able to leverage their expertise and
                  experience of the framework to independently produce complete
                  solutions in a short turnaround time.
                </p>
              </div>
            </div>
            <div className="view_apply_btn">
              <div className="view_btn">
                <button type="">Update your resume</button>
              </div>
              <div className="apply_btn">
                <button onClick={() => handleSubmit()}>Next</button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default JobSubmit1;
