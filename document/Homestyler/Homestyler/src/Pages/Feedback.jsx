import React, { useState } from 'react';
import './Feedback.css'; // Kết nối với file CSS

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi feedback (có thể gửi đến API)
        console.log({ name, email, message });
        setSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="feedback-container">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" src="/assets/images/logo/ng1.jpg" alt="logo" />
                        </div>
                        <div className="col-6">
                            <h2>1.David
                                <br />
                            <i className="fas fa-star-half-alt" style={{ color: 'red' }}>100/100</i>
                            </h2>
                            <h5 >
                                The chandelier is very beautiful and luxurious, highlighting my living room space. Modern design, very suitable for my home decoration style. And after a period of use, the light still retains the desired brightness. and shows no signs of damage. Great customer service, they supported me very well, the material is very good, feels very sturdy and durable, fast delivery. The installation instructions are clear, making it easy for me to complete, The light is dimmable, very convenient for various activities, the product arrived to me in perfect condition. Very satisfied with my purchase decision, this chandelier has made the house more luxurious, I will recommend this product to friends and relatives.
                            </h5>

                        </div>
                    </div>

                    {/* Phần khác tương tự như trên */}
                    <div className="row" style={{ marginTop: '70px' }}>
                        <div className="col-6">
                            <h2>2.Jennifer
                                <br />
                                <i className="fas fa-star-half-alt" style={{ color: 'red' }}>80/100</i>
                            </h2>

                            <h5 style={{ textAlign: 'justify' }}>
                                The kitchen design is very modern, the open space makes me feel comfortable when cooking. The drawers and cabinets are very convenient, helping me easily organize and store things. The kitchen appliances are very user-friendly. User-friendly, easy to adjust, I really like the gas stove and oven, they help me save time when cooking, There is plenty of space for the refrigerator and dishwasher, very convenient. Cleaning the surface is easy, it doesn't take much time to keep it clean. I am very satisfied with my new kitchen, it has completely changed my living space.
                            </h5>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid" src="/assets/images/logo/ng2.jpg" alt="logo" />
                        </div>
                    </div>

                    {/* Các phần còn lại của nội dung... */}
                </div>
            </div>


            <div style={{ margin: '60px' }}>
                <h2 className="feedback-title" >Send Feedback</h2>
                {submitted ? (
                    <div className="thank-you-message">Thank you for your feedback!</div>
                ) : (
                    <form className="feedback-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"><h5>Name:</h5></label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><h5>Email:</h5></label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"><h5>Content:</h5></label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Send</button>
                    </form>

                )}
            </div>

        </div>

    );

};

export default Feedback;