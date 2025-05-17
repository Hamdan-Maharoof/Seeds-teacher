import React, { useState } from 'react';
import './TeacherProfile.css';

export default function TeacherProfile() {
  const [course, setCourse] = useState('Quran');
  const handleBook = () => {
    alert(`Session booked for ${course}!`);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="teacher-name">Ustadh Khasu</h1>
        <p className="subject">Subjects: Qur’an & Arabic</p>
        <p className="bio">
          Passionate teacher with 10+ years of experience guiding students in Tajweed,
          reading, and conversational Arabic.
        </p>
        <div className="video-intro">
          <a
            href="https://www.youtube.com/watch?v=XC62pWvw4b0&ab_channel=LearnArabicwithKhasu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/XC62pWvw4b0/hqdefault.jpg"
              alt="Video Intro"
              className="video-thumb"
            />
            <div className="play-overlay">►</div>
          </a>
        </div>
        <h2>Courses Offered</h2>
        <ul className="course-list">
          <li>Beginner Quran Reading</li>
          <li>Intermediate Tajweed</li>
          <li>Conversational Arabic</li>
        </ul>
        <div className="booking">
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="course-select"
          >
            <option value="Quran">Quran</option>
            <option value="Arabic">Arabic</option>
          </select>
          <button className="book-btn" onClick={handleBook}>
            Book a session
          </button>
        </div>
      </div>
    </div>
  );
}
