import Header from './Components/Header';
import EventCard from './Components/EventCard';
import './App.css';

function App() {
  const events = [
    { event: "Basketball Tournament 🏀", details: "Join our local teams in a friendly competition.", location: "Community Gym", time: "Sat 10 AM", color: "orange" },
    { event: "Weekly Soccer Game ⚽", details: "Casual soccer games every week.", location: "Field A", time: "Sun 3 PM", color: "green" },
    { event: "Running Club 🏃", details: "Group run for all levels.", location: "City Park", time: "Wed 6 PM", color: "blue" },
    { event: "Pickleball Night 🏓", details: "Fun games for beginners and pros.", location: "Recreation Center", time: "Fri 7 PM", color: "purple" },
    { event: "Swimming Meetup 🏊", details: "Relaxed swim and social time.", location: "Community Pool", time: "Tue 5 PM", color: "cyan" },
    { event: "Rock Climbing Event 🧗", details: "Indoor climbing for all skill levels.", location: "Climbing Gym", time: "Thu 6 PM", color: "brown" },
    { event: "Yoga on the Quad", details: "Morning yoga to start your day.", location: "Campus Quad", time: "Mon 8 AM", color: "pink" },
    { event: "Volleyball Night 🏐", details: "Evening volleyball fun.", location: "Beach Court", time: "Sat 6 PM", color: "yellow" },
    { event: "Gym Membership Discounts 💪", details: "Special offers for members.", location: "City Gym", time: "All week", color: "red" },
    { event: "Intramural Sports Signup", details: "Sign up for various intramural sports.", location: "Sports Office", time: "All week", color: "teal" },
  ];

  return (
    <div>
      <Header />
      <div className="card-grid">
        {events.map((e, index) => (
          <EventCard
            key={index}
            event={e.event}
            details={e.details}
            location={e.location}
            time={e.time}
            color={e.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

