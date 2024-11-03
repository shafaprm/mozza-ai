const express = require('express');
const axios = require('axios');
require('dotenv').config(); 

const Conversation = require('../models/Conversation.js');

const router = express.Router();

router.post('/chat', async (req, res) => {
    const { userId, message, conversationId } = req.body;

    try {
        let conversation;
        let messages = [];

        if (conversationId) {
            conversation = await Conversation.findById(conversationId);

            if (!conversation) {
                return res.status(404).json({ message: 'Conversation not found' });
            }

            messages = conversation.conversation.map(c => [
                { role: 'user', content: c.userMessage },
                { role: 'assistant', content: c.botResponse }
            ]).flat();
        }

        messages.push({ role: 'user', content: message });

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: messages, 
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const responseParsed = response.data.choices[0].message.content;

        if (conversationId) {
            conversation.conversation.push({ userMessage: message, botResponse: responseParsed });
        } else {
            conversation = new Conversation({
                userId,
                conversation: [{ userMessage: message, botResponse: responseParsed }]
            });
        }

        await conversation.save();

        res.json({ conversationId: conversation._id, userMessage: message, botResponse: responseParsed });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error communicating with OpenAI');
    }
});

module.exports = router;
