// // import React, { useState } from "react";

// // export const PatientProfile = () => {
// //   const [inCall, setInCall] = useState(false);

// //   const handleStartCall = () => {
// //     // This is where you’ll integrate WebRTC or video SDK logic
// //     setInCall(true);
// //   };

// //   const handleEndCall = () => {
// //     // Cleanup call stream, disconnect sockets, etc.
// //     setInCall(false);
// //   };

// //   return (
// //     <div className="container my-5">
// //       <div className="card shadow p-4 text-center">
// //         <h2 className="mb-4">Doctor-Patient Video Consultation</h2>

// //         {!inCall ? (
// //           <>
// //             <p className="lead">Click the button below to start the consultation</p>
// //             <button className="btn btn-success btn-lg mt-3" onClick={handleStartCall}>
// //               Start Video Call
// //             </button>
// //           </>
// //         ) : (
// //           <div>
// //             {/* Video Section */}
// //             <div className="row mb-4">
// //               <div className="col-md-6">
// //                 <div className="bg-dark rounded overflow-hidden position-relative" style={{ height: "300px" }}>
// //                   <p className="text-white position-absolute top-0 start-0 m-2">Doctor</p>
// //                   {/* Replace with <video /> in real implementation */}
// //                 </div>
// //               </div>
// //               <div className="col-md-6">
// //                 <div className="bg-secondary rounded overflow-hidden position-relative" style={{ height: "300px" }}>
// //                   <p className="text-white position-absolute top-0 start-0 m-2">You</p>
// //                   {/* Replace with <video /> in real implementation */}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Buttons */}
// //             <button className="btn btn-danger btn-lg" onClick={handleEndCall}>
// //               End Call
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default VideoCall;

// import React, { useState } from "react";
// import { FaPhone, FaPhoneSlash, FaUserMd, FaUser, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from "react-icons/fa";

// export const PatientProfile = () => {
//   const [inCall, setInCall] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isVideoOff, setIsVideoOff] = useState(false);

//   const handleStartCall = () => {
//     // WebRTC/video SDK integration would go here
//     setInCall(true);
//   };

//   const handleEndCall = () => {
//     // Cleanup call resources
//     setInCall(false);
//     setIsMuted(false);
//     setIsVideoOff(false);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//     // Audio stream control would go here
//   };

//   const toggleVideo = () => {
//     setIsVideoOff(!isVideoOff);
//     // Video stream control would go here
//   };

//   return (
//     <div className="container my-5">
//       <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
//         <div className="card-header bg-primary text-white py-3">
//           <h2 className="mb-0 text-center font-weight-light">
//             <FaUserMd className="me-2" />
//             Telemedicine Consultation
//             <FaUser className="ms-2" />
//           </h2>
//         </div>
        
//         <div className="card-body p-4">
//           {!inCall ? (
//             <div className="text-center py-4">
//               <div className="mb-4">
//                 <div className="d-flex justify-content-center mb-3">
//                   <div className="bg-light rounded-circle p-4 shadow-sm">
//                     <FaUserMd size={48} className="text-primary" />
//                   </div>
//                 </div>
//                 <h3 className="text-dark mb-3">Ready for your consultation?</h3>
//                 <p className="text-muted">Connect with your healthcare provider securely via video</p>
//               </div>
              
//               <button 
//                 className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
//                 onClick={handleStartCall}
//               >
//                 <FaPhone className="me-2" />
//                 Start Video Call
//               </button>
//             </div>
//           ) : (
//             <div>
//               {/* Video Section */}
//               <div className="row g-3 mb-4">
//                 <div className="col-md-6">
//                   <div className="bg-dark rounded-3 overflow-hidden position-relative" style={{ height: "300px" }}>
//                     <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
//                       <span className="badge bg-danger rounded-pill p-2 me-2">
//                         <FaUserMd className="text-white" />
//                       </span>
//                       <span className="text-white">Dr. Smith</span>
//                     </div>
//                     {/* Doctor's video feed would go here */}
//                     <div className="h-100 d-flex align-items-center justify-content-center">
//                       {isVideoOff ? (
//                         <div className="text-center text-white">
//                           <FaUserMd size={64} />
//                           <p className="mt-2">Your video is off</p>
//                         </div>
//                       ) : (
//                         <div className="text-center text-white">
//                           <div className="spinner-border text-primary" role="status">
//                             <span className="visually-hidden">Connecting...</span>
//                           </div>
//                           <p className="mt-2">Connecting to doctor...</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="col-md-6">
//                   <div className={`rounded-3 overflow-hidden position-relative ${isVideoOff ? 'bg-secondary' : 'bg-dark'}`} style={{ height: "300px" }}>
//                     <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
//                       <span className="badge bg-primary rounded-pill p-2 me-2">
//                         <FaUser className="text-white" />
//                       </span>
//                       <span className="text-white">Patient</span>
//                     </div>
//                     {/* Patient's video feed would go here */}
//                     {isVideoOff && (
//                       <div className="h-100 d-flex align-items-center justify-content-center">
//                         <div className="text-center text-white">
//                           <FaUser size={64} />
//                           <p className="mt-2">Your video is off</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Call Controls */}
//               <div className="d-flex justify-content-center gap-3 mb-3">
//                 <button 
//                   className={`btn ${isMuted ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
//                   onClick={toggleMute}
//                   title={isMuted ? "Unmute" : "Mute"}
//                 >
//                   {isMuted ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
//                 </button>
                
//                 <button 
//                   className={`btn ${isVideoOff ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
//                   onClick={toggleVideo}
//                   title={isVideoOff ? "Turn video on" : "Turn video off"}
//                 >
//                   {isVideoOff ? <FaVideoSlash size={20} /> : <FaVideo size={20} />}
//                 </button>
                
//                 <button 
//                   className="btn btn-danger rounded-circle p-3"
//                   onClick={handleEndCall}
//                   title="End call"
//                 >
//                   <FaPhoneSlash size={20} />
//                 </button>
//               </div>
              
//               {/* Call Information */}
//               <div className="text-center text-muted small mt-4">
//                 <p>Secure encrypted connection • {new Date().toLocaleTimeString()}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { 
  FaPhone, FaPhoneSlash, FaUserMd, FaUser, 
  FaMicrophone, FaMicrophoneSlash, FaVideo, 
  FaVideoSlash, FaComment, FaCommentAlt, 
  FaPhoneAlt, FaEllipsisV 
} from "react-icons/fa";
import PatientNavbar from "../layout/PatientNavbar";


export const Telemedicine = () => {
  const [communicationMode, setCommunicationMode] = useState(null); // null, 'video', 'voice', 'chat'
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("consultation"); // consultation, history, prescriptions

  const handleStartCommunication = (mode) => {
    setCommunicationMode(mode);
  };

  const handleEndCommunication = () => {
    setCommunicationMode(null);
    setIsMuted(false);
    setIsVideoOff(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Audio stream control would go here
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    // Video stream control would go here
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        text: newMessage,
        sender: 'patient',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
      // Here you would also send the message to the doctor via your backend
    }
  };
  

  
  const renderCommunicationPanel = () => {
    switch (communicationMode) {
      case 'video':
        return (
          <div> 
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="bg-dark rounded-3 overflow-hidden position-relative" style={{ height: '300px' }}>
                  <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
                    <span className="badge bg-danger rounded-pill p-2 me-2">
                      <FaUserMd className="text-white" />
                    </span>
                    <span className="text-white">Dr. Smith</span>
                  </div>
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {isVideoOff ? (
                      <div className="text-center text-white">
                        <FaUserMd size={64} />
                        <p className="mt-2">Doctor's video is off</p>
                      </div>
                    ) : (
                      <div className="text-center text-white">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Connecting...</span>
                        </div>
                        <p className="mt-2">Connecting to doctor...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className={`rounded-3 overflow-hidden position-relative ${isVideoOff ? 'bg-secondary' : 'bg-dark'}`} style={{ height: '300px' }}>
                  <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center">
                    <span className="badge bg-primary rounded-pill p-2 me-2">
                      <FaUser className="text-white" />
                    </span>
                    <span className="text-white">You</span>
                  </div>
                  {isVideoOff && (
                    <div className="h-100 d-flex align-items-center justify-content-center">
                      <div className="text-center text-white">
                        <FaUser size={64} />
                        <p className="mt-2">Your video is off</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mb-3">
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
            <div className="mb-4">
              <div className="d-flex justify-content-center mb-4">
                <div className="bg-primary rounded-circle p-5 shadow">
                  <FaUserMd size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-dark mb-3">Ongoing Voice Call</h3>
              <p className="text-muted">Connected with Dr. Smith</p>
              <div className="display-4 my-4">12:45</div>
            </div>
            
            <div className="d-flex justify-content-center gap-3 mb-3">
              <button 
                className={`btn ${isMuted ? 'btn-warning' : 'btn-outline-secondary'} rounded-circle p-3`}
                onClick={toggleMute}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
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
      
      case 'chat':
        return (
          <div className="chat-container">
            <div className="chat-messages mb-3" style={{ height: '400px', overflowY: 'auto' }}>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className={`d-flex mb-3 ${msg.sender === 'patient' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`p-3 rounded-3 ${msg.sender === 'patient' ? 'bg-primary text-white' : 'bg-light'}`}>
                      <div className="d-flex align-items-center mb-1">
                        <strong>{msg.sender === 'patient' ? 'You' : 'Dr. Smith'}</strong>
                        <small className="ms-2 text-muted">{msg.time}</small>
                      </div>
                      <div>{msg.text}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted py-5">
                  <FaCommentAlt size={48} className="mb-3" />
                  <p>No messages yet. Start your conversation with the doctor.</p>
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
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="btn btn-primary"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-4">
            <div className="mb-4">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-light rounded-circle p-4 shadow-sm">
                  <FaUserMd size={48} className="text-primary" />
                </div>
              </div>
              <h3 className="text-dark mb-3">Ready for your consultation?</h3>
              <p className="text-muted">Choose your preferred communication method</p>
            </div>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button 
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow d-flex flex-column align-items-center"
                onClick={() => handleStartCommunication('video')}
                style={{ width: '120px' }}
              >
                <FaVideo size={24} className="mb-2" />
                Video Call
              </button>
              
              <button 
                className="btn btn-success btn-lg px-4 py-3 rounded-pill shadow d-flex flex-column align-items-center"
                onClick={() => handleStartCommunication('voice')}
                style={{ width: '120px' }}
              >
                <FaPhoneAlt size={24} className="mb-2" />
                Voice Call
              </button>
              
              <button 
                className="btn btn-info btn-lg px-4 py-3 rounded-pill shadow d-flex flex-column align-items-center"
                onClick={() => handleStartCommunication('chat')}
                style={{ width: '120px' }}
              >
                <FaComment size={24} className="mb-2" />
                Chat
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div><PatientNavbar></PatientNavbar>
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
        <div className="card-header bg-primary text-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0 font-weight-light">
              <FaUserMd className="me-2" />
              Telemedicine Portal
            </h2>
            <div className="dropdown">
              <button 
                className="btn btn-sm btn-outline-light rounded-circle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaEllipsisV />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => setActiveTab("consultation")}>Consultation</button></li>
                <li><button className="dropdown-item" onClick={() => setActiveTab("history")}>History</button></li>
                <li><button className="dropdown-item" onClick={() => setActiveTab("prescriptions")}>Prescriptions</button></li>
              </ul>
            </div>
          </div>
          
          <ul className="nav nav-tabs mt-3 border-bottom-0">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'consultation' ? 'active bg-white text-primary' : 'text-white'}`}
                onClick={() => setActiveTab("consultation")}
              >
                Consultation
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'history' ? 'active bg-white text-primary' : 'text-white'}`}
                onClick={() => setActiveTab("history")}
              >
                History
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'prescriptions' ? 'active bg-white text-primary' : 'text-white'}`}
                onClick={() => setActiveTab("prescriptions")}
              >
                Prescriptions
              </button>
            </li>
          </ul>
        </div>
        
        <div className="card-body p-4">
          {activeTab === "consultation" ? (
            renderCommunicationPanel()
          ) : activeTab === "history" ? (
            <div className="text-center py-5">
              <h4>Consultation History</h4>
              <p className="text-muted">Your past consultations will appear here</p>
            </div>
          ) : (
            <div className="text-center py-5">
              <h4>Prescriptions</h4>
              <p className="text-muted">Your current and past prescriptions will appear here</p>
            </div>
          )}
        </div>
        
        {communicationMode && (
          <div className="card-footer bg-light py-3">
            <div className="text-center text-muted small">
              <p>Secure encrypted connection • {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};