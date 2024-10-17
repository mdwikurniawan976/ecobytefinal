import React, { useState, useEffect } from 'react';
import { notification } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setFormData((prevData) => ({ ...prevData, name: storedName }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openNotification = (type, message) => {
        notification[type]({
            message: message,
            placement: 'topRight',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_9jeqcig', 'template_i5fc8ep', formData, 'uDrGdZq3YtivAG574')
            .then(() => {
                openNotification('success', 'Pesan berhasil dikirim!');
                setFormData({ name: '', email: '', message: '' });
            }, () => {
                openNotification('error', 'Terjadi kesalahan. Silakan coba lagi.');
            });
    };

    return (
        <div>
            <Navbar display={'true'} />
            <div className="container" style={{ marginTop: '7rem', marginBottom: '7rem' }}>
                <div className="card p-5 rounded-4 bg-dark-emphasis">
                    <img src={logo} alt="" style={{ width: '5rem' }} />
                    <p>EcoByte's</p>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactPage;
