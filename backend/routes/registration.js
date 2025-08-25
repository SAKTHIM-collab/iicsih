const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const nodemailer = require('nodemailer');

// CORRECTED LINE: createTransport (not createTransporter)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, team, idea } = req.body;
        
        const existingRegistration = await Registration.findOne({ 
            $or: [{ email }, { phone }] 
        });
        
        if (existingRegistration) {
            return res.json({ 
                success: false, 
                message: 'Email or phone number already registered' 
            });
        }
        
        const newRegistration = new Registration({
            name,
            email,
            phone,
            team,
            idea
        });
        
        await newRegistration.save();
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Registration Confirmation - Genesis 2025',
            html: `
                <h2>Thank you for registering for Genesis 2025!</h2>
                <p>Hello ${name},</p>
                <p>We have received your registration for Genesis 2025. Your team "${team}" has been successfully registered.</p>
                <p>We will review your idea and get back to you soon with further details.</p>
                <br>
                <p>Best regards,</p>
                <p>Genesis Team</p>
            `
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Email error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
        
        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.json({ success: false, message: 'Server error. Please try again later.' });
    }
});

router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ registrationDate: -1 });
        res.json({ success: true, data: registrations });
    } catch (error) {
        console.error('Fetch error:', error);
        res.json({ success: false, message: 'Failed to fetch registrations' });
    }
});

module.exports = router;