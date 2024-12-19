import React from 'react';
import Header from '../components/Header';
import DailyInsights from '../components/DailyInsights';
import QuickQuestions from '../components/QuickQuestions';
import Log from '../components/Log';
import BottomNavigation from '../components/BottomNavigation';
//import './HomeScreen.css'; // Optional CSS for styling

const HomeScreen = () => {
  return (
    <div className="home-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="content">
        <DailyInsights />
        <QuickQuestions />
        <Log />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
