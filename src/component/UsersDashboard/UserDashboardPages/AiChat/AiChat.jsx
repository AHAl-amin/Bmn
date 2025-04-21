

import { useState, useRef, useEffect } from "react";
import { PaperclipIcon, SendIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { VscRobot } from "react-icons/vsc";
import { GoPaperAirplane } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import aiIcon from '../../../../assets/image/ai_icon.png'
const AiChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const fileInputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        if (hasUserSentMessage) {
            inputRef.current?.focus();
        }
    }, [messages, hasUserSentMessage]);

    const generateAIResponse = async (userMessage) => {
        setIsLoading(true);
        try {
            let botResponse = "I'm processing your request...";
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
                botResponse = "Hello! How can I assist you today?";
            } else if (userMessage.toLowerCase().includes("help")) {
                botResponse = "I'm here to help! What do you need assistance with?";
            } else if (userMessage.toLowerCase().includes("thank")) {
                botResponse = "You're welcome! Is there anything else I can help with?";
            } else if (userMessage.toLowerCase().includes("bye")) {
                botResponse = "Goodbye! Feel free to return if you have more questions.";
            } else {
                botResponse =
                    "Thank you for your message. I'm an AI assistant here to help answer your questions. Could you provide more details about what you're looking for?";
            }

            setMessages((prev) => [
                ...prev,
                {
                    text: botResponse,
                    isUser: false,
                    timestamp: new Date(),
                },
            ]);
        } catch (error) {
            console.error("Error generating AI response:", error);
            setMessages((prev) => [
                ...prev,
                {
                    text: "Sorry, I encountered an error. Please try again later.",
                    isUser: false,
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setSelectedFileName(file.name);
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() === "" && !selectedImage) return;

        const userMessage = newMessage.trim();
        if (userMessage) {
            setMessages((prev) => [
                ...prev,
                {
                    text: userMessage,
                    isUser: true,
                    timestamp: new Date(),
                },
            ]);
        }

        if (selectedImage) {
            setMessages((prev) => [
                ...prev,
                {
                    image: selectedImage,
                    fileName: selectedFileName,
                    isUser: true,
                    timestamp: new Date(),
                },
            ]);
        }

        setNewMessage("");
        setSelectedImage(null);
        setSelectedFileName("");
        setHasUserSentMessage(true);

        if (userMessage) {
            await generateAIResponse(userMessage);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="p-8 h-full flex flex-col">
            <div className="lora flex items-center justify-between p-4">
                <div className="flex flex-col items-start">
                    <div className="flex gap-10">
                        <h1 className="text-[#004C3F] font-bold text-[35px]">AI Chat</h1>
                        <div className="flex space-x-6">
                            <button className="border border-[#B0BFB6] text-[#004C3F] rounded-xl px-4 flex items-center cursor-pointer font-semibold">
                                Select Recipe
                                <IoIosArrowDown className="ml-2" />
                            </button>
                            <button className="border border-[#B0BFB6] text-[#004C3F] rounded-xl px-4 flex items-center cursor-pointer font-semibold">
                                Recipe Chat
                                <IoIosArrowDown className="ml-2" />
                            </button>

                            <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                Button
                            </button>

                            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-[#A2A2A2] font-medium text-[20px] mt-2">
                        Chat with your culinary AI assistant to get recipe ideas, modifications, and more.
                    </p>
                    <div className="border w-screen mt-4 border-[#E7E7E7] "></div>

                    <div className="py-2">
                        <p className="font-semibold text-[24px] text-[#004C3F]">Dark Chocolate Ganache</p>
                        <p className="text-[#A2A2A2]">Ask questions specific to this recipe</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                {/* <div className="flex items-center space-x-4 p-3">
          <div className="h-[46px] w-11 rounded-full bg-[#2F80A9] flex items-center justify-center">
            <img src={aiIcon} className="h-6 w-6 text-white" />
          </div>
          <h1 className="font-medium text-gray-800">AI Assistant</h1>
        </div> */}

                <div className="flex-1 overflow-y-auto p-4 space-y-6 relative mb-10">
                    {!hasUserSentMessage && (
                        <div className="absolute bottom-4 w-[80%]">
                            <div className="flex items-start space-x-3 ">
                                <div className=" rounded-full  text-white flex items-center justify-center">
                                    <img src={aiIcon} className="h-10 w-10 mt-1 text-white" />
                                </div>
                                <div className="px-5 py-4 rounded-lg bg-gray-200 dark:bg-[#E6EBE8] text-black dark:text-[#595959] lg:text-[16px] shadow-sm w-full">
                                    <ReactMarkdown>Hello! I'm your AI assistant. How can I help you today?</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    )}

                    {messages.map((message, index) => (
                        <div key={index} className="flex w-full  ">
                            {message.isUser ? (
                                <div className="flex flex-col items-end w-full ">
                                    <div className="flex justify-end items-end space-x-3 ">
                                        {message.text ? (
                                            <div className="px-4 py-3 rounded-xl bg-[#004C3F] text-white lg:text-[16px] shadow-md w-full">
                                                <span>{message.text}</span>
                                            </div>
                                        ) : (
                                            <div className="flex justify-end">
                                                <div>
                                                    <img
                                                        src={message.image}
                                                        alt="Uploaded"
                                                        className="rounded-lg shadow-md w-24 h-12"
                                                    />
                                                    {message.fileName && (
                                                        <p className="text-xs text-gray-500 mt-1">{message.fileName}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        <div className="h-10 w-16 rounded-full bg-gray-300 flex items-center justify-center ">
                                            <img
                                                src="https://i.ibb.co.com/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
                                                alt=""
                                                className="  rounded-full h-full w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-start w-full ">
                                    <div className="flex items-start space-x-3 w-[80%] ">
                                        <div className="h-10 w-10 rounded-full bg-[#2F80A9] flex items-center justify-center">
                                            <img src={aiIcon} className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="px-5 py-4 rounded-lg  dark:bg-[#E6EBE8] text-black dark:text-[#595959] lg:text-[16px] max-w-[80%]  ">
                                            <ReactMarkdown>{message.text}</ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex w-full ">
                            <div className="flex flex-col items-start w-full">
                                <div className="flex items-start space-x-3 mb-12">
                                    <div className="h-10 w-10 rounded-full bg-[#E6EBE8]  flex items-center justify-center">
                                        <img src={aiIcon} className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="px-5 py-4 rounded-lg bg-[#E6EBE8] text-black dark:text-gray-200 shadow-sm">
                                        <div className="flex space-x-1">
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "0ms" }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "150ms" }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "300ms" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {selectedImage && (
                    <div className="mb-3 ml-3 flex items-center space-x-3">
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="rounded-lg shadow-md w-24 h-10 object-cover"
                            />
                            <button
                                onClick={() => {
                                    setSelectedImage(null);
                                    setSelectedFileName("");
                                }}
                                className="absolute top-1 right-1 bg-[#2F80A9] text-white rounded-full p-[2px] hover:bg-[#2f6ea9] cursor-pointer"
                            >
                                <GoPaperAirplane />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 truncate max-w-[150px]">{selectedFileName}</p>
                    </div>
                )}


                <div className=" p-3  fixed bottom-0  w-6/7 bg-white  left-[250px] z-50 ">
                    <div className="flex items-center border border-[#004C3F]  rounded-[10px] px-4 py-3 ">
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <PaperclipIcon className="h-5 w-5 cursor-pointer bg" />
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="flex-1 bg-transparent border-none focus:outline-none mx-3 text-sm"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                            disabled={isLoading}
                            ref={inputRef}
                        />
                        <button
                            className={`${isLoading ? "text-gray-400" : "text-blue-500 hover:text-blue-700"}`}
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >
                            <SendIcon className="h-5 w-5 cursor-pointer text-[#004C3F]" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AiChat;



// import { useState, useRef, useEffect } from "react";
// import { PaperclipIcon, SendIcon } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import { IoIosArrowDown } from "react-icons/io";
// import aiIcon from "../../../../assets/image/ai_icon.png"; // Ensure this path is correct

// const AiChat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedFileName, setSelectedFileName] = useState("");
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//     if (hasUserSentMessage) {
//       inputRef.current?.focus();
//     }
//   }, [messages, hasUserSentMessage]);

//   const generateAIResponse = async (userMessage) => {
//     setIsLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       let botResponse =
//         userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")
//           ? "Hello! How can I assist you today?"
//           : userMessage.toLowerCase().includes("help")
//           ? "I'm here to help! What do you need assistance with?"
//           : userMessage.toLowerCase().includes("thank")
//           ? "You're welcome! Is there anything else I can help with?"
//           : userMessage.toLowerCase().includes("bye")
//           ? "Goodbye! Feel free to return if you have more questions."
//           : "Thank you for your message. I'm an AI assistant here to help. Could you provide more details?";

//       setMessages((prev) => [
//         ...prev,
//         { text: botResponse, isUser: false, timestamp: new Date() },
//       ]);
//     } catch (error) {
//       console.error("Error generating AI response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "Sorry, I encountered an error. Please try again.", isUser: false, timestamp: new Date() },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//       setSelectedFileName(file.name);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (!newMessage.trim() && !selectedImage) return;

//     const userMessage = newMessage.trim();
//     if (userMessage) {
//       setMessages((prev) => [
//         ...prev,
//         { text: userMessage, isUser: true, timestamp: new Date() },
//       ]);
//     }

//     if (selectedImage) {
//       setMessages((prev) => [
//         ...prev,
//         { image: selectedImage, fileName: selectedFileName, isUser: true, timestamp: new Date() },
//       ]);
//     }

//     setNewMessage("");
//     setSelectedImage(null);
//     setSelectedFileName("");
//     setHasUserSentMessage(true);

//     if (userMessage) {
//       await generateAIResponse(userMessage);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {/* Header */}
//       <div className="p-4 border-b border-[#E7E7E7]">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-[#004C3F] font-bold text-3xl">AI Chat</h1>
//             <p className="text-[#A2A2A2] text-lg mt-1">
//               Chat with your culinary AI assistant for recipe ideas and more.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <button className="border border-[#B0BFB6] text-[#004C3F] rounded-xl px-4 py-2 flex items-center font-semibold">
//                 Select Recipe <IoIosArrowDown className="ml-2" />
//               </button>
//               <button className="border border-[#B0BFB6] text-[#004C3F] rounded-xl px-4 py-2 flex items-center font-semibold">
//                 Recipe Chat <IoIosArrowDown className="ml-2" />
//               </button>
//             </div>
//             <div className="mt-4">
//               <p className="font-semibold text-xl text-[#004C3F]">Dark Chocolate Ganache</p>
//               <p className="text-[#A2A2A2] text-sm">Ask questions specific to this recipe</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Messages */}
//         <div
//           className="flex-1 overflow-y-auto p-4"
//           style={{ paddingBottom: "100px" }} // Space for input field
//         >
//           {!hasUserSentMessage && (
//             <div className="flex items-start space-x-3">
//               <img src={aiIcon} className="h-10 w-10 rounded-full" alt="AI" />
//               <div className="p-4 rounded-lg bg-[#E6EBE8] text-[#595959] text-base shadow-sm max-w-[80%]">
//                 <ReactMarkdown>Hello! I'm your AI assistant. How can I help you today?</ReactMarkdown>
//               </div>
//             </div>
//           )}

//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-6`}>
//               <div className={`flex items-start ${message.isUser ? "flex-row-reverse" : "flex-row"} space-x-3 max-w-[80%]`}>
//                 {message.isUser ? (
//                   <img
//                     src="https://i.ibb.co.com/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
//                     alt="User"
//                     className="h-10 w-10 rounded-full"
//                   />
//                 ) : (
//                   <img src={aiIcon} className="h-10 w-10 rounded-full" alt="AI" />
//                 )}
//                 {message.text ? (
//                   <div
//                     className={`p-4 rounded-lg text-base shadow-sm ${
//                       message.isUser ? "bg-[#004C3F] text-white" : "bg-[#E6EBE8] text-[#595959]"
//                     }`}
//                   >
//                     <ReactMarkdown>{message.text}</ReactMarkdown>
//                   </div>
//                 ) : (
//                   <div>
//                     <img src={message.image} alt="Uploaded" className="rounded-lg shadow-md w-24 h-12 object-cover" />
//                     {message.fileName && <p className="text-xs text-gray-500 mt-1">{message.fileName}</p>}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}

//           {isLoading && (
//             <div className="flex justify-start mb-6">
//               <div className="flex items-start space-x-3">
//                 <img src={aiIcon} className="h-10 w-10 rounded-full" alt="AI" />
//                 <div className="p-4 rounded-lg bg-[#E6EBE8] shadow-sm">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Image Preview */}
//         {selectedImage && (
//           <div className="p-4 bg-white">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <img src={selectedImage} alt="Selected" className="rounded-lg shadow-md w-24 h-10 object-cover" />
//                 <button
//                   onClick={() => {
//                     setSelectedImage(null);
//                     setSelectedFileName("");
//                   }}
//                   className="absolute top-1 right-1 bg-[#2F80A9] text-white rounded-full p-1 hover:bg-[#2f6ea9]"
//                 >
//                   <SendIcon className="h-4 w-4" />
//                 </button>
//               </div>
//               <p className="text-sm text-gray-600 truncate max-w-[150px]">{selectedFileName}</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Fixed Input Field */}
//       <div className="fixed bottom-0 left-[250px] right-0 bg-white p-4 z-50">
//         <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 max-w-4xl mx-auto">
//           <input
//             type="file"
//             accept="image/*"
//             ref={fileInputRef}
//             onChange={handleImageUpload}
//             className="hidden"
//           />
//           <button onClick={() => fileInputRef.current?.click()} className="text-gray-500 hover:text-gray-700">
//             <PaperclipIcon className="h-5 w-5" />
//           </button>
//           <input
//             type="text"
//             placeholder="Type a message"
//             className="flex-1 bg-transparent border-none focus:outline-none mx-3 text-sm"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={handleKeyPress}
//             disabled={isLoading}
//             ref={inputRef}
//           />
//           <button
//             className={isLoading ? "text-gray-400" : "text-blue-500 hover:text-blue-700"}
//             onClick={handleSendMessage}
//             disabled={isLoading}
//           >
//             <SendIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AiChat;