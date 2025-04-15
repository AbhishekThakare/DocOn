import React, { useState } from "react";
import {
  FaPhone, FaPhoneSlash, FaUserMd, FaUser,
  FaMicrophone, FaMicrophoneSlash, FaVideo,
  FaVideoSlash, FaComment, FaCommentAlt,
  FaPhoneAlt, FaEllipsisV
} from "react-icons/fa";
import DoctorNavbar from "../layout/DoctorNavbar";

export const DocTelemedicine = () => {
  const [communicationMode, setCommunicationMode] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("consultation");

  const handleStartCommunication = (mode) => setCommunicationMode(mode);
  const handleEndCommunication = () => {
    setCommunicationMode(null);
    setIsMuted(false);
    setIsVideoOff(false);
  };
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        text: newMessage,
        sender: 'doctor',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  const renderCommunicationPanel = () => {
    switch (communicationMode) {
      case 'video':
        return (
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="bg-dark rounded-3 overflow-hidden position-relative" style={{ height: '300px' }}>
                <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
                  <span className="badge bg-primary rounded-pill p-2 me-2">
                    <FaUser className="text-white" />
                  </span>
                  <span className="text-white">Patient</span>
                </div>
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <div className="text-center text-white">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Connecting...</span>
                    </div>
                    <p className="mt-2">Waiting for patient...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={`rounded-3 overflow-hidden position-relative ${isVideoOff ? 'bg-secondary' : 'bg-dark'}`} style={{ height: '300px' }}>
                <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
                  <span className="badge bg-success rounded-pill p-2 me-2">
                    <FaUserMd className="text-white" />
                  </span>
                  <span className="text-white">You</span>
                </div>
                {isVideoOff && (
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center text-white">
                      <FaUserMd size={64} />
                      <p className="mt-2">Your video is off</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button
                className={`btn ${isMuted ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
                onClick={toggleMute}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
              </button>
              <button
                className={`btn ${isVideoOff ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
                onClick={toggleVideo}
                title={isVideoOff ? "Turn video on" : "Turn video off"}
              >
                {isVideoOff ? <FaVideoSlash size={20} /> : <FaVideo size={20} />}
              </button>
              <button
                className="btn btn-danger rounded-circle p-3"
                onClick={handleEndCommunication}
                title="End call"
              >
                <FaPhoneSlash size={20} />
              </button>
            </div>
          </div>
        );

      case 'voice':
        return (
          <div className="text-center py-4">
            <h3 className="text-dark mb-3">Voice Call with Patient</h3>
            <div className="display-4 mb-4">12:45</div>
            <div className="d-flex justify-content-center gap-3">
              <button
                className={`btn ${isMuted ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
                onClick={toggleMute}
              >
                {isMuted ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
              </button>
              <button
                className="btn btn-danger rounded-circle p-3"
                onClick={handleEndCommunication}
              >
                <FaPhoneSlash size={20} />
              </button>
            </div>
          </div>
        );

      case 'chat':
        return (
          <div>
            <div className="chat-messages mb-3" style={{ height: '400px', overflowY: 'auto' }}>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className={`d-flex mb-3 ${msg.sender === 'doctor' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`p-3 rounded-3 ${msg.sender === 'doctor' ? 'bg-success text-white' : 'bg-light'}`}>
                      <div className="d-flex align-items-center mb-1">
                        <strong>{msg.sender === 'doctor' ? 'You' : 'Patient'}</strong>
                        <small className="ms-2 text-muted">{msg.time}</small>
                      </div>
                      <div>{msg.text}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted py-5">
                  <FaCommentAlt size={48} className="mb-3" />
                  <p>No messages yet. Start the conversation.</p>
                </div>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="btn btn-success" onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-4">
            <h3 className="text-dark mb-3">Available for Consultation</h3>
            <p className="text-muted">Select how you want to connect with the patient.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button className="btn btn-primary px-4 py-3" onClick={() => handleStartCommunication('video')}>
                <FaVideo className="me-2" /> Video
              </button>
              <button className="btn btn-success px-4 py-3" onClick={() => handleStartCommunication('voice')}>
                <FaPhoneAlt className="me-2" /> Voice
              </button>
              <button className="btn btn-info px-4 py-3" onClick={() => handleStartCommunication('chat')}>
                <FaComment className="me-2" /> Chat
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <DoctorNavbar />
      <div className="container my-5" >
        <div className="card shadow-lg">
          <div className="card-header bg-success text-white d-flex justify-content-between align-items-center" style={{background: 'linear-gradient(90deg, #00695c, #004d40)'}}>
            <h2 className="mb-0">
              <FaUserMd className="me-2" />
              Doctor Telemedicine
            </h2>
            {/* <div className="dropdown">
              <button className="btn btn-outline-light" data-bs-toggle="dropdown">
                <FaEllipsisV />
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => setActiveTab("consultation")}>Consultation</button></li>
                <li><button className="dropdown-item" onClick={() => setActiveTab("history")}>History</button></li>
                <li><button className="dropdown-item" onClick={() => setActiveTab("prescriptions")}>Prescriptions</button></li>
              </ul>
            </div> */}
          </div>
          <div className="card-body">
            {activeTab === "consultation"
              ? renderCommunicationPanel()
              : activeTab === "history"
              ? <p className="text-muted text-center">Patient history will appear here.</p>
              : <p className="text-muted text-center">Prescriptions will appear here.</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocTelemedicine;
