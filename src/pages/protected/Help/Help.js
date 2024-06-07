import React from "react";
import { useState } from "react";
import TitleChanger from "../../../TitleChanger/TitleChanger";
import Breadcrumb from "../../../components/Breadcrumb";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Help = () => {

    // const [open, setOpen] = useState('');
    // const toggleContent = (questionId) => {
    //   setOpen(open === questionId ? null : questionId);
    // }
    const [open, setOpen] = useState();
    const handleChange = (panel) => (event, isOpen) => {
      setOpen(isOpen ? panel : null);
    };
  return (
    <>
      <TitleChanger title="Help" />
      <Breadcrumb pageTitle="Help" />
      <div className="help_page">
        <Accordion
          expanded={open === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Getting Starting Guide
          </AccordionSummary>
          <AccordionDetails>
            Welcome to our Learning Management System (LMS)! We're excited to
            have you join our platform and embark on your learning journey.
            Here's a simple guide to help you get started:
            <br />
            <b> 1.</b> Create an Account: Visit our homepage and click on the
            "Sign Up" button to create your account. Fill in your details and
            follow the prompts to set up your profile.
            <br />
            <b>2.</b> Explore Courses: Once you're logged in, browse through our
            catalog of courses to find topics that interest you. Click on a
            course to view more details.
            <br />
            <b> 3.</b> Enroll in a Course: Ready to start learning? Enroll in a
            course by clicking the "Enroll" button on the course page. You'll
            gain access to all course materials and resources.
            <br />
            <b> 4. </b>Navigate the Interface: Familiarize yourself with the
            navigation menu and dashboard. Access your enrolled courses, track
            your progress, and interact with other learners.
            <br />
            <b> 5.</b> Engage with the Community: Don't hesitate to join
            discussions, ask questions, and connect with fellow learners and
            instructors. Learning is more fun when you're part of a supportive
            community!
            <br />
            <b> 6.</b> That's it! You're all set to dive into your learning
            journey. If you have any questions along the way, don't hesitate to
            reach out to our support team.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            FAQ's
          </AccordionSummary>
          <AccordionDetails>
            <b>Q: How do I reset my password?</b> <br />
            <b> A:</b> To reset your password, simply click on the "Forgot
            Password" link on the login page. Follow the instructions sent to
            your email to create a new password.
            <br />
            <br />
            <b>Q: Can I access courses on mobile devices? </b>
            <br />
            <b> A:</b> Yes, our platform is fully responsive, allowing you to
            access courses on your desktop, laptop, tablet, or smartphone.
            <br />
            <br />
            <b> Q: How do I contact my course instructor?</b> <br />
            <b> A:</b> You can communicate with your course instructor through
            the messaging feature within the course interface. Click on the
            instructor's profile to send a message.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b> Account Management</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              {" "}
              Manage your account settings and preferences with ease. Here's
              what you can do:
            </b>
            <br />
            <br />
            <b> • Update Profile:</b> Keep your profile information up to date,
            including your name, email address, and profile picture.
            <br />
            <br />
            <b>• Change Password:</b> Enhance your account security by updating
            your password regularly.
            <br />
            <br />
            <b>• Notification Settings:</b> Customise your notification
            preferences to stay informed about course updates, announcements,
            and messages.
            <br />
            <br />
            <b> •Privacy Settings:</b> Control who can view your profile and
            activity within the platform.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <b>Communication Tool</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              {" "}
              Stay connected with instructors and peers using our built-in
              communication tools:
            </b>
            <br />
            <br />
            <b> • Messaging:</b> Send private messages to instructors or other
            learners to ask questions or collaborate on assignments.
            <br />
            <br />
            <b>• Forums:</b> Participate in course forums to engage in
            discussions, share insights, and seek assistance from the community.
            <br />
            <br />
            <b>• Announcements:</b> Stay informed about important updates,
            deadlines, and announcements from course instructors.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <b>Technical Support</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              Encountering technical difficulties? Our support team is here to
              help:
            </b>
            <br />
            <br />
            <b>• Contact Us:</b> Reach out to our support team via email or
            through the contact form on our website.
            <br />
            <br />
            <b>• Troubleshooting Guides:</b> Check out our troubleshooting guides
            and FAQs for solutions to common technical issues.
            <br />
            <br />
            <b>• Live Chat:</b> Chat with a support representative in real-time
            for immediate assistance during business hours.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <b>System Requirements</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              {" "}
              Make sure your device meets the following system requirements to
              access our platform:
            </b>
            <br />
            <br />
            <b>• Browser:</b> We recommend using the latest versions of Google
            Chrome, Mozilla Firefox, Safari, or Microsoft Edge for optimal
            performance.
            <br />
            <br />
            <b>• Operating System:</b> Our platform is compatible with Windows,
            macOS, iOS, and Android operating systems.
            <br />
            <br />
            <b>• Internet Connection:</b> A stable internet connection is
            required to access course materials, videos, and interactive
            content.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <b>Privacy and Security</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              {" "}
              Protecting your privacy is our top priority. Here's how we ensure
              the security of your data:
            </b>
            <br />
            <br />
            <b>• Data Encryption:</b> All user data is encrypted to prevent
            unauthorised access.
            <br />
            <br />
            <b>• Privacy Policy:</b>Review our comprehensive privacy policy to
            understand how we collect, use, and protect your personal
            information.
            <br />
            <br />
            <b>• GDPR Compliance:</b> We adhere to the General Data Protection
            Regulation (GDPR) guidelines to safeguard your privacy rights.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <b>Accessibility</b>
          </AccordionSummary>
          <AccordionDetails>
            <b>
              {" "}
              We're committed to making our platform accessible to all users.
              Here's how we ensure accessibility:
            </b>
            <br />
            <br />
            <b>• Screen Reader Compatibility:</b> Our platform is compatible with
            screen reader software for visually impaired users.
            <br />
            <br />
            <b>• Keyboard Navigation:</b> Navigate through the platform using
            keyboard shortcuts for users who may have difficulty using a mouse.
            <br />
            <br />
            <b>• Alternative Formats: </b>We provide alternative formats for
            course materials upon request to accommodate different learning
            needs.
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={open === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9-content"
            id="panel9-header"
          >
            <b>Terms of Use</b>
          </AccordionSummary>
          <AccordionDetails>
          <b> By using our platform, you agree to the following terms of use:</b>
            <br />
            <br />
            <b>• Acceptable Use:</b> Use the platform responsibly and refrain from
            engaging in any illegal or abusive activities.
            <br />
            <br />
            <b>• Intellectual Property:</b> Respect the intellectual property rights of
            instructors and other users by not sharing or distributing
            copyrighted materials without permission.
            <br />
            <br />
            <b>• User Conduct:</b> Maintain a respectful and professional demeanor when
            interacting with instructors and peers within the platform.
            <br />
            <br />
            We hope this guide helps you make the most of your learning
            experience on our platform. If you have any further questions or
            need assistance, please don't hesitate to reach out to us. Happy
            learning!
            <br />
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <section className="py-2 mb-5 bg-gray-50 sm:py-16 help_page">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto  space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question1"
                data-state="closed"
                onClick={() => toggleContent("question1")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                Getting Starting Guide
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 ${open === 'question1' ? 'transform rotate-180' : ''}`}
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question1" && (
                <div id="answer1" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question2"
                data-state="closed"
                onClick={() => toggleContent("question2")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                 FAQ's
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question2' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question2" && (
                <div id="answer2" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question3"
                data-state="closed"
                onClick={() => toggleContent("question3")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  Account Management
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question3' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question3" && (
                <div id="answer3" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question4"
                data-state="closed"
                onClick={() => toggleContent("question4")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  Communication Tool
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question4' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question4" && (
                <div id="answer4" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question5"
                data-state="closed"
                onClick={() => toggleContent("question5")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  Technical Support
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question5' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question5" && (
                <div id="answer5" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question6"
                data-state="closed"
                onClick={() => toggleContent("question6")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  System Requirements
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question6' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question6" && (
                <div id="answer6" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question7"
                data-state="closed"
                onClick={() => toggleContent("question7")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
               Privacy and Security
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question7' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question7" && (
                <div id="answer7" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question8"
                data-state="closed"
                onClick={() => toggleContent("question8")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                 Accessibility
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question8' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question8" && (
                <div id="answer8" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question9"
                data-state="closed"
                onClick={() => toggleContent("question9")}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                 Terms of Use
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                 className={`w-6 h-6 text-gray-400 ${open === 'question9' ? 'transform rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === "question9" && (
                <div id="answer9" className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Getting started is easy! Sign up for an account, and you'll
                    have access to our platform's features. No credit card
                    required for the initial signup.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Help;
