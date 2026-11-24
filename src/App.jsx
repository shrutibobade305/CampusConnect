
import { useState } from "react";
import {
  Home,
  CalendarDays,
  CreditCard,
  ClipboardCheck,
  Bell,
  Search,
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Wallet,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

/* =========================
   ATTENDANCE DATA
========================= */
const attendanceData = [
  { subject: "Data Structures", attended: 28, total: 32, color: "#6366f1" },
  { subject: "Database Management", attended: 22, total: 30, color: "#06b6d4" },
  { subject: "Operating Systems", attended: 26, total: 28, color: "#10b981" },
  { subject: "Computer Networks", attended: 20, total: 25, color: "#f59e0b" },
  { subject: "Web Development", attended: 27, total: 30, color: "#8b5cf6" },
];

/* =========================
   FEE DATA
========================= */
const feeItems = [
  { name: "Tuition Fee", amount: 10000 },
  { name: "Library Fee", amount: 1500 },
  { name: "Other Charges", amount: 1000 },
];

/* =========================
   EVENTS DATA
========================= */
const eventsData = [
  {
    id: 1,
    title: "Hackathon 2026",
    category: "TECHNICAL",
    date: "Nov 28, 2026",
    time: "10:00 AM",
    location: "Innovation Lab",
    emoji: "💡",
    description:
      "Build innovative solutions, collaborate with students, and showcase your creativity.",
  },
  {
    id: 2,
    title: "Campus Fest",
    category: "CULTURAL",
    date: "Dec 05, 2026",
    time: "4:00 PM",
    location: "Main Campus",
    emoji: "🎭",
    description:
      "Celebrate campus life with music, dance, performances, and unforgettable memories.",
  },
  {
    id: 3,
    title: "Sports Tournament",
    category: "SPORTS",
    date: "Dec 10, 2026",
    time: "9:00 AM",
    location: "Sports Ground",
    emoji: "🏆",
    description:
      "Join the campus sports tournament and compete with your fellow students.",
  },
];

/* =========================
   NAVIGATION ITEMS
========================= */
const navItems = [
  { name: "Home", icon: Home },
  { name: "Attendance", icon: ClipboardCheck },
  { name: "Fees", icon: CreditCard },
  { name: "Events", icon: CalendarDays },
];

/* =========================
   ATTENDANCE PAGE
========================= */
function AttendancePage() {
  const totalAttended = attendanceData.reduce(
    (sum, subject) => sum + subject.attended,
    0
  );

  const totalClasses = attendanceData.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const overallPercentage = Math.round(
    (totalAttended / totalClasses) * 100
  );

  return (
    <div className="page-section">
      <div className="page-heading">
        <div>
          <span className="eyebrow-dark">ACADEMIC OVERVIEW</span>
          <h1>Attendance</h1>
          <p>Track your attendance across all subjects.</p>
        </div>
      </div>

      <div className="attendance-summary-grid">
        <div className="attendance-summary-card primary-summary">
          <span>Overall Attendance</span>
          <h2>{overallPercentage}%</h2>
          <p>
            <CheckCircle size={15} />
            You're on track
          </p>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
        </div>

        <div className="attendance-summary-card">
          <span>Classes Attended</span>
          <h2>{totalAttended}</h2>
          <p>Out of {totalClasses} total classes</p>
        </div>

        <div className="attendance-summary-card">
          <span>Attendance Target</span>
          <h2>75%</h2>
          <p>Minimum required attendance</p>
        </div>
      </div>

      <div className="panel attendance-panel">
        <div className="panel-heading">
          <div>
            <h2>Subject-wise Attendance</h2>
            <p>Attendance records for this semester</p>
          </div>
        </div>

        {attendanceData.map((subject) => {
          const percentage = Math.round(
            (subject.attended / subject.total) * 100
          );

          const isLow = percentage < 75;

          return (
            <div className="attendance-subject" key={subject.subject}>
              <div className="attendance-subject-top">
                <div>
                  <h3>{subject.subject}</h3>
                  <p>
                    {subject.attended} of {subject.total} classes attended
                  </p>
                </div>

                <strong className={isLow ? "attendance-low" : "attendance-good"}>
                  {percentage}%
                </strong>
              </div>

              <div className="progress attendance-progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${percentage}%`,
                    background: subject.color,
                  }}
                />
              </div>

              {isLow && (
                <p className="attendance-warning">
                  <AlertCircle size={14} />
                  Attendance is below 75%. Attend upcoming classes.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================
   FEES PAGE
========================= */
function FeesPage({ paymentMessage, setPaymentMessage }) {
  const totalPendingFee = feeItems.reduce(
    (sum, fee) => sum + fee.amount,
    0
  );

  return (
    <div className="page-section">
      <div className="page-heading">
        <div>
          <span className="eyebrow-dark">STUDENT FINANCE</span>
          <h1>Fees & Payments</h1>
          <p>View your fee details and payment status.</p>
        </div>
      </div>

      <div className="fee-summary-grid">
        <div className="fee-summary-card fee-primary">
          <Wallet size={23} />
          <p>Pending Amount</p>
          <h2>₹{totalPendingFee.toLocaleString("en-IN")}</h2>
          <span>Due for this semester</span>
        </div>

        <div className="fee-summary-card">
          <CheckCircle size={23} />
          <p>Amount Paid</p>
          <h2>₹35,000</h2>
          <span>Paid successfully</span>
        </div>
      </div>

      <div className="panel fee-panel">
        <div className="panel-heading">
          <div>
            <h2>Fee Breakdown</h2>
            <p>Semester fee details</p>
          </div>
        </div>

        {feeItems.map((fee) => (
          <div className="fee-item" key={fee.name}>
            <span>{fee.name}</span>
            <strong>₹{fee.amount.toLocaleString("en-IN")}</strong>
          </div>
        ))}

        <div className="fee-total">
          <span>Total Pending</span>
          <strong>₹{totalPendingFee.toLocaleString("en-IN")}</strong>
        </div>

        <button
          className="pay-button"
          onClick={() =>
            setPaymentMessage(
              "Demo payment initiated! No real payment has been made."
            )
          }
        >
          Pay ₹{totalPendingFee.toLocaleString("en-IN")} Now <ArrowUpRight size={18} />
        </button>

        {paymentMessage && (
          <div className="payment-message">
            <CheckCircle size={17} />
            {paymentMessage}
          </div>
        )}
      </div>

      <div className="panel payment-history">
        <div className="panel-heading">
          <div>
            <h2>Payment History</h2>
            <p>Previous transactions</p>
          </div>
        </div>

        <div className="payment-history-row">
          <div className="payment-history-icon">
            <CheckCircle size={19} />
          </div>
          <div>
            <strong>Semester 1 Fees</strong>
            <p>Paid · Aug 12, 2026</p>
          </div>
          <strong className="paid-amount">₹35,000</strong>
        </div>
      </div>
    </div>
  );
}

/* =========================
   EVENTS PAGE
========================= */
function EventsPage({ registeredEvents, toggleRegistration }) {
  return (
    <div className="page-section">
      <div className="page-heading">
        <div>
          <span className="eyebrow-dark">CAMPUS LIFE</span>
          <h1>Campus Events</h1>
          <p>Discover activities, meet people, and get involved.</p>
        </div>
      </div>

      <div className="events-intro">
        <div>
          <h2>What's happening on campus? 🎉</h2>
          <p>Explore upcoming events and join the fun.</p>
        </div>
        <div className="events-intro-icon">🎓</div>
      </div>

      <div className="events-list">
        {eventsData.map((event) => {
          const isRegistered = registeredEvents.includes(event.id);

          return (
            <div className="campus-event-card" key={event.id}>
              <div className="campus-event-emoji">{event.emoji}</div>

              <div className="campus-event-content">
                <span className="event-category">{event.category}</span>
                <h2>{event.title}</h2>
                <p>{event.description}</p>

                <div className="event-meta">
                  <span>
                    <CalendarDays size={15} />
                    {event.date}
                  </span>
                  <span>
                    <Clock size={15} />
                    {event.time}
                  </span>
                  <span>
                    <MapPin size={15} />
                    {event.location}
                  </span>
                </div>

                <button
                  className={`register-button ${isRegistered ? "registered" : ""}`}
                  onClick={() => toggleRegistration(event.id)}
                >
                  {isRegistered ? (
                    <>
                      <CheckCircle size={16} />
                      Registered
                    </>
                  ) : (
                    "Register Now →"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================
   HOME DASHBOARD
========================= */
function HomePage({ setActivePage }) {
  const totalAttended = attendanceData.reduce(
    (sum, subject) => sum + subject.attended,
    0
  );

  const totalClasses = attendanceData.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const overallPercentage = Math.round(
    (totalAttended / totalClasses) * 100
  );

  const totalPendingFee = feeItems.reduce(
    (sum, fee) => sum + fee.amount,
    0
  );

  return (
    <div className="page-section">
      <div className="welcome">
        <div className="welcome-content">
          <p className="eyebrow">YOUR STUDENT PORTAL</p>
          <h1>Good morning, Student! 👋</h1>
          <p>Here's what's happening on your campus today.</p>
        </div>
        <div className="welcome-decoration">🎓</div>
      </div>

      <div className="section-title">
        <h2>Your overview</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span>Attendance</span>
            <div className="stat-icon">
              <ClipboardCheck size={20} />
            </div>
          </div>
          <h3>{overallPercentage}%</h3>
          <p className="positive">↑ You're doing great!</p>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${overallPercentage}%` }} />
          </div>
          <button
            className="card-link"
            onClick={() => setActivePage("Attendance")}
          >
            View attendance →
          </button>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Fee Status</span>
            <div className="stat-icon">
              <CreditCard size={20} />
            </div>
          </div>
          <h3>₹{totalPendingFee.toLocaleString("en-IN")}</h3>
          <p>Pending payment</p>
          <button
            className="small-action"
            onClick={() => setActivePage("Fees")}
          >
            Pay now <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Today's Classes</span>
            <div className="stat-icon">
              <BookOpen size={20} />
            </div>
          </div>
          <h3>4 Classes</h3>
          <p>Next class at 11:00 AM</p>
        </div>
      </div>

      <div className="content-grid">
        <section className="panel schedule-panel">
          <div className="panel-heading">
            <div>
              <h2>Today's Schedule</h2>
              <p>Your classes for today</p>
            </div>
            <button
              className="timetable-link"
              onClick={() => setActivePage("Attendance")}
            >
              <span>View full timetable</span>
              <ArrowRight size={14} className="timetable-arrow" />
            </button>
          </div>

          <div className="schedule-item">
            <div className="time">09:00 AM</div>
            <div className="class-color blue" />
            <div className="class-details">
              <strong>Data Structures</strong>
              <span>Room 204 · Prof. Sharma</span>
            </div>
            <span className="class-tag">Completed</span>
          </div>

          <div className="schedule-item">
            <div className="time">11:00 AM</div>
            <div className="class-color purple" />
            <div className="class-details">
              <strong>Database Management</strong>
              <span>Lab 3 · Prof. Patil</span>
            </div>
            <span className="class-tag upcoming">Upcoming</span>
          </div>

          <div className="schedule-item">
            <div className="time">01:30 PM</div>
            <div className="class-color orange" />
            <div className="class-details">
              <strong>Operating Systems</strong>
              <span>Room 108 · Prof. Deshmukh</span>
            </div>
            <span className="class-tag">Later</span>
          </div>

          <div className="schedule-item">
            <div className="time">03:00 PM</div>
            <div className="class-color green" />
            <div className="class-details">
              <strong>Web Development</strong>
              <span>Lab 2 · Prof. Kulkarni</span>
            </div>
            <span className="class-tag">Later</span>
          </div>
        </section>

        <section className="panel events-panel">
          <div className="panel-heading">
            <div>
              <h2>Campus Events</h2>
              <p>Don't miss out!</p>
            </div>
            <CalendarDays size={20} className="heading-icon" />
          </div>

          <div className="event-card">
            <div className="event-banner">💡</div>
            <div className="event-info">
              <span className="event-label">TECHNICAL</span>
              <h3>Hackathon 2026</h3>
              <p>📅 Nov 28 · 10:00 AM</p>
              <button
                className="event-button"
                onClick={() => setActivePage("Events")}
              >
                Explore event →
              </button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-banner">🎭</div>
            <div className="event-info">
              <span className="event-label cultural">CULTURAL</span>
              <h3>Campus Fest</h3>
              <p>📅 Dec 05 · 4:00 PM</p>
              <button
                className="event-button"
                onClick={() => setActivePage("Events")}
              >
                Explore event →
          </button>
            </div>
          </div>

          <button
            className="view-events-button"
            onClick={() => setActivePage("Events")}
          >
            View all events
          </button>
        </section>
      </div>

      <footer>CampusConnect · Your campus, connected.</footer>
    </div>
  );
}

/* =========================
   MAIN APP
========================= */
function App() {
  const [activePage, setActivePage] = useState("Home");
  const [searchText, setSearchText] = useState("");
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  const toggleRegistration = (eventId) => {
    setRegisteredEvents((previous) =>
      previous.includes(eventId)
        ? previous.filter((id) => id !== eventId)
        : [...previous, eventId]
    );
  };

  const renderPage = () => {
    switch (activePage) {
      case "Attendance":
        return <AttendancePage />;
      case "Fees":
        return (
          <FeesPage
            paymentMessage={paymentMessage}
            setPaymentMessage={setPaymentMessage}
          />
        );
      case "Events":
        return (
          <EventsPage
            registeredEvents={registeredEvents}
            toggleRegistration={toggleRegistration}
          />
        );
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand-header">
          <div
            className="brand"
            onClick={() => setActivePage("Home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("Home");
              }
            }}
            title="Go to Home Dashboard"
          >
            <div className="brand-icon">
              <GraduationCap size={22} />
            </div>
            <div className="brand-text">
              <h2>CampusConnect</h2>
              <span>Student Portal</span>
            </div>
          </div>

          {/* Student profile visible on mobile */}
          <div className="mobile-profile-pill">
            <div className="avatar mobile-avatar">S</div>
            <div className="mobile-profile-meta">
              <strong>Student</strong>
              <span>Comp Eng</span>
            </div>
          </div>
        </div>

        <p className="menu-label">MENU</p>

        <nav className="navigation">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="student-mini">
            <div className="avatar">S</div>
            <div className="student-info">
              <strong>Student</strong>
              <span>Computer Engineering</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="main-content">
        <header className="topbar">
          <div className="search-box">
            <Search size={18} />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search anything..."
            />
            {searchText && (
              <button
                className="search-clear"
                onClick={() => setSearchText("")}
              >
                ×
              </button>
            )}
          </div>

          <div className="notification-wrapper">
            <button
              className="notification"
              aria-label="Notifications"
              onClick={() => setShowNotifications((prev) => !prev)}
            >
              <Bell size={20} />
              {hasUnreadNotifications && <span className="notification-dot" />}
            </button>

            {showNotifications && (
              <div className="notification-popup">
                <div className="notification-popup-header">
                  <div>
                    <h4>Notifications</h4>
                    <p>Recent campus updates</p>
                  </div>
                  <button
                    className="notif-close-btn"
                    onClick={() => setShowNotifications(false)}
                    aria-label="Close notifications"
                  >
                    ×
                  </button>
                </div>

                <div className="notification-popup-list">
                  <div className="notification-popup-item">
                    <span className="notif-bullet success" />
                    <div>
                      <strong>Attendance updated</strong>
                      <p>Data Structures attendance recorded</p>
                    </div>
                  </div>

                  <div className="notification-popup-item">
                    <span className="notif-bullet primary" />
                    <div>
                      <strong>Hackathon 2026</strong>
                      <p>Registrations are now open for Nov 28</p>
                    </div>
                  </div>

                  <div className="notification-popup-item">
                    <span className="notif-bullet warning" />
                    <div>
                      <strong>Semester fee pending</strong>
                      <p>Total pending: ₹12,500 due for this semester</p>
                    </div>
                  </div>
                </div>

                <button
                  className="notification-clear-btn"
                  onClick={() => {
                    setHasUnreadNotifications(false);
                    setShowNotifications(false);
                  }}
                >
                  Mark all as read
                </button>
              </div>
            )}
          </div>
        </header>

        {renderPage()}
      </main>
    </div>
  );
}

export default App;
