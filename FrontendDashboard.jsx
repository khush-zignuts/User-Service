import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5001/api/organizer/event/getAllEventsBySearch', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setEvents(res.data.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
                alert('Failed to fetch events');
            }
        };

        fetchEvents();
    }, []);

    const handleCreateEvent = () => {
        navigate('/create-event');
    };

    const handleBook = (eventId) => {
        navigate(`/book/${eventId}`);
    };

    return (
        <div className="dashboard-container">
            <h2>All Events</h2>
            <div className="event-grid">
                {events.map(event => (
                    <div className="event-card" key={event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <button onClick={() => handleBook(event.id)}>Book</button>
                    </div>
                ))}
            </div>

            {/* Floating + button */}
            <button className="create-event-btn" onClick={handleCreateEvent}>
                +
            </button>
        </div>
    );
};

export default Dashboard;
