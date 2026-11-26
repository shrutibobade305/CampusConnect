
import { useState, useRef, useEffect } from "react";
import nehaPhoto from "./assets/neha.png";
import arjunPhoto from "./assets/arjun.jpg.png";
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
  Sparkles,
  MessageSquare,
  Send,
  X,
  RotateCcw,
  Bot,
  Users,
  ThumbsUp,
  Plus,
  UserRound,
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
   TODAY'S SCHEDULE DATA (MY DAY)
========================= */
const todaySchedule = [
  {
    id: 1,
    time: "09:00 AM",
    subject: "Data Structures",
    room: "Room 204",
    faculty: "Prof. Sharma",
    color: "blue",
    status: "completed",
    statusLabel: "Completed",
  },
  {
    id: 2,
    time: "11:00 AM",
    timeWindow: "11:00 AM – 12:30 PM",
    subject: "Database Management",
    room: "Lab 3",
    faculty: "Prof. Patil",
    color: "purple",
    status: "upcoming",
    statusLabel: "Up Next",
    isNext: true,
    badge: "Next class",
    countdown: "Starting soon",
  },
  {
    id: 3,
    time: "01:30 PM",
    subject: "Operating Systems",
    room: "Room 108",
    faculty: "Prof. Deshmukh",
    color: "orange",
    status: "later",
    statusLabel: "Later",
  },
  {
    id: 4,
    time: "03:00 PM",
    subject: "Web Development",
    room: "Lab 2",
    faculty: "Prof. Kulkarni",
    color: "green",
    status: "later",
    statusLabel: "Later",
  },
];

/* =========================
   NAVIGATION ITEMS
========================= */
const navItems = [
  { name: "Home", icon: Home },
  { name: "Academics", icon: GraduationCap },
  { name: "Community", icon: Users },
  { name: "Events", icon: CalendarDays },
  { name: "Profile", icon: UserRound },
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
          <h1>Academics</h1>
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
   STUDENT COMMUNITY
========================= */

function CommunityPage() {
  const [activeTab, setActiveTab] = useState("Discussions");
  const [search, setSearch] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Neha Sharma",
      department: "CSE",
      time: "2h ago",
      message: "Can anyone share the Data Structures notes?",
      likes: 24,
      comments: 12,
      liked: false,
    },
    {
      id: 2,
      name: "Arjun Mehta",
      department: "ECE",
      time: "3h ago",
      message: "Best resources for placement preparation?",
      likes: 18,
      comments: 8,
      liked: false,
    },
  ]);

  const [joinedGroups, setJoinedGroups] = useState([]);

  const groups = [
    {
      id: 1,
      name: "Coding Club",
      description: "Learn programming and participate in coding challenges.",
      members: "120 members",
    },
    {
      id: 2,
      name: "Tech Innovators",
      description: "Share ideas, projects and innovative solutions.",
      members: "85 members",
    },
    {
      id: 3,
      name: "Placement Preparation",
      description: "Prepare together for interviews and placements.",
      members: "200 members",
    },
  ];

  const polls = [
    {
      id: 1,
      question: "Which event would you like next?",
      options: ["Hackathon", "Tech Fest", "Sports Day"],
    },
    {
      id: 2,
      question: "Which programming language do you prefer?",
      options: ["Python", "Java", "C++"],
    },
  ];

  const toggleLike = (id) => {
    setPosts((previous) =>
      previous.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  };

  const createPost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      name: "Student",
      department: "CSE",
      time: "Just now",
      message: newPost,
      likes: 0,
      comments: 0,
      liked: false,
    };

    setPosts((previous) => [post, ...previous]);
    setNewPost("");
    setShowCreatePost(false);
    setActiveTab("Discussions");
  };

  const toggleJoin = (id) => {
    setJoinedGroups((previous) =>
      previous.includes(id)
        ? previous.filter((groupId) => groupId !== id)
        : [...previous, id]
    );
  };

  const filteredPosts = posts.filter((post) =>
    `${post.name} ${post.message} ${post.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="community-page">

      <div className="community-heading">
        <h1>Student Community</h1>

        <div className="community-search">
          <Search size={21} />
          <input
            type="text"
            placeholder="Search community..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="community-tabs">
        {["Discussions", "Groups", "Polls"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Discussions" && (
        <div className="discussion-list">

          {filteredPosts.map((post) => (
            <div className="discussion-card" key={post.id}>

              <div className="discussion-user">
                {post.name === "Neha Sharma" ? (
<img
src={nehaPhoto}
alt="Neha Sharma"
className="community-avatar"
/>
) : post.name === "Arjun Mehta" ? (
<img
src={arjunPhoto}
alt="Arjun Mehta"
className="community-avatar"
/>
) : (
<div className="community-avatar">
{post.name.charAt(0)}
</div>
)}

                <div>
                  <h3>{post.name}</h3>
                  <p>{post.department} · {post.time}</p>
                </div>
              </div>

              <p className="discussion-message">
                {post.message}
              </p>

              <div className="discussion-actions">

                <button
                  className={post.liked ? "liked" : ""}
                  onClick={() => toggleLike(post.id)}
                >
                  <ThumbsUp size={19} />
                  {post.likes}
                </button>

                <button>
                  <MessageSquare size={19} />
                  {post.comments}
                </button>

                <span className="discussion-spacer" />

                <button
                  className="join-button"
                  onClick={() =>
                    alert("You joined the discussion!")
                  }
                >
                  Join
                </button>

              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="community-empty">
              No discussions found.
            </p>
          )}

        </div>
      )}

      {activeTab === "Groups" && (
        <div className="community-groups">

          {groups.map((group) => {
            const joined = joinedGroups.includes(group.id);

            return (
              <div className="community-group-card" key={group.id}>
                <div className="group-icon">
                  <Users size={23} />
                </div>

                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <span>{group.members}</span>

                <button
                  className={`join-button ${joined ? "joined" : ""}`}
                  onClick={() => toggleJoin(group.id)}
                >
                  {joined ? "Joined ✓" : "Join Group"}
                </button>
              </div>
            );
          })}

        </div>
      )}

      {activeTab === "Polls" && (
        <div className="community-polls">

          {polls.map((poll) => (
            <div className="community-poll-card" key={poll.id}>
              <h3>{poll.question}</h3>

              {poll.options.map((option) => (
                <button
                  className="poll-option"
                  key={option}
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("selected");
                  }}
                >
                  {option}
                </button>
              ))}

            </div>
          ))}

        </div>
      )}

      <button
        className="create-post-button"
        onClick={() => setShowCreatePost(true)}
      >
        <Plus size={22} />
        Create Post
      </button>

      {showCreatePost && (
        <div className="post-modal-overlay">

          <div className="post-modal">

            <div className="post-modal-header">
              <h2>Create Post</h2>

              <button
                onClick={() => setShowCreatePost(false)}
              >
                <X size={21} />
              </button>
            </div>

            <textarea
              placeholder="Share something with your campus..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />

            <button
              className="publish-post-button"
              onClick={createPost}
            >
              Publish Post
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

function ProfilePage({ setActivePage }) {
  return (
    <div className="page-section">
      <div className="page-heading">
        <div>
          <span className="eyebrow-dark">STUDENT ACCOUNT</span>
          <h1>My Profile</h1>
          <p>Manage your student portal.</p>
        </div>
      </div>

      <div className="panel profile-page-card">
        <div className="avatar profile-large-avatar">S</div>
        <h2>Student</h2>
        <p>Computer Engineering</p>

        <button
          className="join-button"
          onClick={() => setActivePage("Fees")}
        >
          View Fees & Payments
        </button>
      </div>
    </div>
  );
}

/* =========================
   SMART ATTENDANCE INSIGHTS
========================= */
function SmartAttendanceInsights({ setActivePage }) {
  const TARGET_PERCENT = 75;

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

  const isOverallSafe = overallPercentage >= TARGET_PERCENT;

  // Calculate dynamic insights for each subject
  const subjectInsights = attendanceData.map((subject) => {
    const percentage = Math.round((subject.attended / subject.total) * 100);
    const isSafe = percentage >= TARGET_PERCENT;

    // Consecutive classes needed to reach 75%:
    // (A + x) / (T + x) >= 0.75  =>  x >= 3T - 4A
    const classesNeeded = isSafe
      ? 0
      : Math.max(1, Math.ceil(3 * subject.total - 4 * subject.attended));

    // Classes student can miss while staying >= 75%:
    // A / (T + m) >= 0.75  =>  m <= (4A - 3T) / 3
    const canMiss = isSafe
      ? Math.max(0, Math.floor((4 * subject.attended - 3 * subject.total) / 3))
      : 0;

    return {
      ...subject,
      percentage,
      isSafe,
      classesNeeded,
      canMiss,
    };
  });

  const atRiskCount = subjectInsights.filter((s) => !s.isSafe).length;
  const safeCount = subjectInsights.filter((s) => s.isSafe).length;

  return (
    <section className="panel smart-insights-panel">
      <div className="insights-header">
        <div className="insights-header-left">
          <div className="insights-icon-box">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="insights-title-row">
              <h2>Smart Attendance Insights</h2>
              <span className="insights-target-pill">Target: {TARGET_PERCENT}% Min</span>
            </div>
            <p className="insights-subtitle">
              Dynamic semester target forecasting & subject-wise risk analysis
            </p>
          </div>
        </div>

        <div className={`insights-status-pill ${isOverallSafe ? "safe" : "risk"}`}>
          {isOverallSafe ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          <span>Overall: {isOverallSafe ? "Safe" : "At Risk"} ({overallPercentage}%)</span>
        </div>
      </div>

      {/* OVERALL TARGET PROGRESS & SUMMARY */}
      <div className="insights-overall-banner">
        <div className="insights-gauge-section">
          <div className="gauge-labels">
            <span className="gauge-title">Overall Semester Attendance</span>
            <span className={`gauge-value ${isOverallSafe ? "safe-text" : "risk-text"}`}>
              {overallPercentage}%
            </span>
          </div>

          <div className="target-progress-wrapper">
            <div className="target-progress-track">
              <div
                className={`target-progress-bar ${isOverallSafe ? "safe-bar" : "risk-bar"}`}
                style={{ width: `${Math.min(overallPercentage, 100)}%` }}
              />
              <div className="target-marker" style={{ left: `${TARGET_PERCENT}%` }}>
                <span className="target-marker-label">75% Target</span>
              </div>
            </div>
          </div>

          <p className="insights-friendly-msg">
            {isOverallSafe
              ? atRiskCount === 0
                ? "You're on track! Keep it up. All subjects are above the 75% minimum."
                : `You're on track overall! However, ${atRiskCount} ${
                    atRiskCount === 1 ? "subject needs" : "subjects need"
                  } your attention.`
              : "Your attendance needs attention. You are currently below the 75% minimum required attendance."}
          </p>
        </div>

        <div className="insights-summary-chips">
          <div className="summary-chip">
            <span className="chip-label">Subjects Status</span>
            <strong>
              <span className="chip-count safe-text">{safeCount} Safe</span>
              {atRiskCount > 0 && (
                <span className="chip-count risk-text"> · {atRiskCount} At Risk</span>
              )}
            </strong>
          </div>
          <div className="summary-chip">
            <span className="chip-label">Semester Requirement</span>
            <strong>75% Minimum Attendance</strong>
          </div>
        </div>
      </div>

      {/* SUBJECT BREAKDOWN & DYNAMIC ACTIONS */}
      <div className="insights-subjects-title">
        <div>
          <h3>Subject Breakdown & Required Actions</h3>
          <p>Calculated dynamically from your actual class attendance records</p>
        </div>
      </div>

      <div className="insights-subjects-grid">
        {subjectInsights.map((subj) => (
          <div
            key={subj.subject}
            className={`insight-subject-card ${subj.isSafe ? "card-safe" : "card-risk"}`}
          >
            <div className="insight-card-top">
              <div className="subject-title-area">
                <span className="subject-color-dot" style={{ background: subj.color }} />
                <strong>{subj.subject}</strong>
              </div>
              <span className={`status-tag ${subj.isSafe ? "tag-safe" : "tag-risk"}`}>
                {subj.isSafe ? (
                  <>
                    <CheckCircle size={12} /> Safe
                  </>
                ) : (
                  <>
                    <AlertCircle size={12} /> At Risk
                  </>
                )}
              </span>
            </div>

            <div className="insight-stats-row">
              <span className="subject-classes-count">
                {subj.attended} of {subj.total} classes attended
              </span>
              <strong className={`subject-pct ${subj.isSafe ? "safe-text" : "risk-text"}`}>
                {subj.percentage}%
              </strong>
            </div>

            {/* Visual target indicator with 75% line */}
            <div className="subj-progress-wrap">
              <div className="subj-progress-track">
                <div
                  className={`subj-progress-fill ${subj.isSafe ? "safe-fill" : "risk-fill"}`}
                  style={{
                    width: `${Math.min(subj.percentage, 100)}%`,
                    background: subj.isSafe ? subj.color : undefined,
                  }}
                />
                <div className="subj-target-line" style={{ left: "75%" }} title="75% Target" />
              </div>
            </div>

            {/* Friendly Dynamic Advice Message */}
            <div className={`insight-message-box ${subj.isSafe ? "msg-safe" : "msg-risk"}`}>
              {subj.isSafe ? (
                <>
                  <CheckCircle size={14} className="msg-icon" />
                  <span>
                    {subj.canMiss > 0
                      ? `Can miss up to ${subj.canMiss} ${
                          subj.canMiss === 1 ? "class" : "classes"
                        } while staying at or above 75%.`
                      : "Right at the 75% boundary. Attend upcoming classes to remain safe."}
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle size={14} className="msg-icon" />
                  <span>
                    Your attendance needs attention. Attend the next{" "}
                    <strong>{subj.classesNeeded}</strong> consecutive{" "}
                    {subj.classesNeeded === 1 ? "class" : "classes"} to reach 75%.
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="insights-footer">
        <button
          className="insights-view-link"
          onClick={() => setActivePage("Academics")}
        >
          <span>View full attendance records</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}

/* =========================
   HOME DASHBOARD
========================= */
function HomePage({ setActivePage, paymentMessage }) {
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
  // Dynamic greeting
const currentHour = new Date().getHours();

const greeting =
  currentHour >= 5 && currentHour < 12
    ? "Good morning"
    : currentHour >= 12 && currentHour < 17
    ? "Good afternoon"
    : "Good evening";
  
  // Dynamic date formatting for My Day
  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Data-driven next upcoming class
  const nextClass =
    todaySchedule.find((cls) => cls.isNext) ||
    todaySchedule.find((cls) => cls.status === "upcoming") ||
    todaySchedule[0];

  return (
    <div className="page-section">
      <div className="welcome">
        <div className="welcome-content">
          <p className="eyebrow">YOUR STUDENT PORTAL</p>
          <h1>{greeting}, Student! 👋</h1>
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
            onClick={() => setActivePage("Academics")}
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

      {/* SMART ATTENDANCE INSIGHTS */}
      <SmartAttendanceInsights setActivePage={setActivePage} />

      <div className="content-grid">
        {/* MY DAY: INTEGRATED SCHEDULE, NEXT CLASS SPOTLIGHT & REMINDERS */}
        <section className="panel my-day-panel">
          <div className="panel-heading my-day-heading">
            <div>
              <div className="my-day-title-row">
                <h2>My Day</h2>
                <span className="my-day-date-badge">
                  <CalendarDays size={13} />
                  {todayFormatted}
                </span>
              </div>
              <p>Your schedule, next class & daily highlights</p>
            </div>
            <button
              className="timetable-link"
              onClick={() => setActivePage("Academics")}
            >
              <span>View full timetable</span>
              <ArrowRight size={14} className="timetable-arrow" />
            </button>
          </div>

          {/* NEXT CLASS SPOTLIGHT HERO CARD */}
          {nextClass && (
            <div className="next-class-spotlight">
              <div className="next-class-top">
                <div className="next-badge-group">
                  <span className="next-badge">
                    <Sparkles size={12} />
                    {nextClass.badge || "Next class"}
                  </span>
                  <span className="next-countdown">
                    <Clock size={11} />
                    {nextClass.countdown || "Starting soon"}
                  </span>
                </div>
                <span className="next-time-pill">{nextClass.time}</span>
              </div>

              <div className="next-class-main">
                <h3 className="next-subject">{nextClass.subject}</h3>
                <div className="next-meta-row">
                  <span className="next-meta-item">
                    <MapPin size={13} />
                    <strong>{nextClass.room}</strong>
                  </span>
                  <span className="meta-separator">•</span>
                  <span className="next-meta-item">
                    <BookOpen size={13} />
                    <span>{nextClass.faculty}</span>
                  </span>
                  {nextClass.timeWindow && (
                    <>
                      <span className="meta-separator">•</span>
                      <span className="next-meta-item">
                        <Clock size={13} />
                        <span>{nextClass.timeWindow}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TODAY'S TIMETABLE LIST */}
          <div className="my-day-timeline-section">
            <div className="timeline-section-header">
              <h3>Today's Classes</h3>
              <span className="classes-count-badge">
                {todaySchedule.length} classes
              </span>
            </div>

            <div className="schedule-list">
              {todaySchedule.map((item) => (
                <div
                  key={item.id}
                  className={`schedule-item ${
                    item.isNext ? "highlight-next" : ""
                  } ${item.status === "completed" ? "completed-item" : ""}`}
                >
                  <div className="time">{item.time}</div>
                  <div className={`class-color ${item.color}`} />
                  <div className="class-details">
                    <strong>{item.subject}</strong>
                    <span>
                      {item.room} · {item.faculty}
                    </span>
                  </div>
                  <span
                    className={`class-tag ${
                      item.status === "completed"
                        ? "completed"
                        : item.status === "upcoming"
                        ? "upcoming"
                        : ""
                    }`}
                  >
                    {item.status === "completed" && (
                      <CheckCircle size={12} className="tag-icon" />
                    )}
                    {item.statusLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TODAY'S REMINDERS & NOTICES SECTION */}
          <div className="my-day-reminders">
            <div className="reminders-section-header">
              <div>
                <h3>Campus Reminders</h3>
                <p className="reminders-sub">Important updates for today</p>
              </div>
            </div>

            <div className="reminders-grid">
              {/* Fee Reminder */}
              <div className="reminder-card fee-card">
                <div className="reminder-header-row">
                  <div className="reminder-icon-box fee">
                    <CreditCard size={15} />
                  </div>
                  <span
                    className={`reminder-status-pill ${
                      paymentMessage ? "paid" : "pending"
                    }`}
                  >
                    {paymentMessage ? "Paid" : "Due Soon"}
                  </span>
                </div>
                <div className="reminder-body">
                  <strong>
                    {paymentMessage
                      ? "Fees Cleared"
                      : `Fee Due: ₹${totalPendingFee.toLocaleString("en-IN")}`}
                  </strong>
                  <p>
                    {paymentMessage
                      ? "All semester dues paid successfully. Receipt available."
                      : "Tuition and library charges pending payment."}
                  </p>
                </div>
                <button
                  className="reminder-link-btn"
                  onClick={() => setActivePage("Fees")}
                >
                  <span>{paymentMessage ? "View History" : "Pay now"}</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Event Reminder */}
              <div className="reminder-card event-card-reminder">
                <div className="reminder-header-row">
                  <div className="reminder-icon-box event">
                    <CalendarDays size={15} />
                  </div>
                  <span className="reminder-status-pill event">
                    {eventsData[0].category}
                  </span>
                </div>
                <div className="reminder-body">
                  <strong>{eventsData[0].title}</strong>
                  <p>
                    📅 {eventsData[0].date} · {eventsData[0].location}
                  </p>
                </div>
                <button
                  className="reminder-link-btn"
                  onClick={() => setActivePage("Events")}
                >
                  <span>Explore event</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
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

/* =========================================
   CAMPUSCONNECT ASSISTANT (CHATBOT PROTOTYPE)
========================================= */
const suggestedQuestions = [
  "What is my attendance?",
  "How much fee is pending?",
  "What is my next class?",
  "What upcoming events are available?",
];

const initialAssistantMessage = {
  id: "welcome-msg",
  sender: "assistant",
  text: "Hello Student! 👋 I'm your CampusConnect Assistant. How can I help you today? You can ask me about your attendance, fee dues, class schedule, or campus events.",
  showSuggestions: true,
};

function CampusAssistant({
  attendanceData,
  feeItems,
  paymentMessage,
  todaySchedule,
  eventsData,
  registeredEvents,
  setActivePage,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([initialAssistantMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const handleResetChat = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: "assistant",
        text: "Conversation reset! 👋 How can I help you today?",
        showSuggestions: true,
      },
    ]);
    setIsTyping(false);
  };

  const getResponseForQuery = (queryText) => {
    const q = queryText.toLowerCase().trim();

    // 1. ATTENDANCE QUERY
    if (
      q.includes("attendance") ||
      q.includes("absent") ||
      q.includes("present") ||
      q.includes("bunk") ||
      q.includes("percentage")
    ) {
      const totalAttended = attendanceData.reduce((s, x) => s + x.attended, 0);
      const totalClasses = attendanceData.reduce((s, x) => s + x.total, 0);
      const overallPct = Math.round((totalAttended / totalClasses) * 100);
      const atRisk = attendanceData.filter(
        (x) => Math.round((x.attended / x.total) * 100) < 75
      );

      let text = `📊 **Your overall attendance is ${overallPct}%** (${totalAttended} of ${totalClasses} classes attended).\n\n`;
      if (overallPct >= 75) {
        text += `✅ **Status: Safe** (Above the mandatory 75% requirement).\n`;
      } else {
        text += `⚠️ **Status: At Risk** (Below the mandatory 75% requirement).\n`;
      }

      if (atRisk.length > 0) {
        text += `\n⚠️ **Subject needing attention:**\n`;
        atRisk.forEach((subj) => {
          const pct = Math.round((subj.attended / subj.total) * 100);
          text += `• **${subj.subject}**: ${pct}% (${subj.attended}/${subj.total})\n`;
        });
      } else {
        text += `\n🎉 Fantastic! All individual subjects are at or above 75%.`;
      }

      return {
        text,
        action: {
          label: "View Attendance Screen →",
          page: "Academics",
        },
      };
    }

    // 2. FEES QUERY
    if (
      q.includes("fee") ||
      q.includes("dues") ||
      q.includes("due") ||
      q.includes("pending") ||
      q.includes("tuition") ||
      q.includes("payment") ||
      q.includes("pay")
    ) {
      const totalPending = feeItems.reduce((s, x) => s + x.amount, 0);

      if (paymentMessage) {
        return {
          text: `💳 **Fee Status: Cleared!**\n\nAll semester college fees have been paid in full. There are no pending dues on your account.\n\nReceipt Reference: Verified demo transaction.`,
          action: {
            label: "View Fee Receipt →",
            page: "Fees",
          },
        };
      }

      let text = `💳 **Pending Fee: ₹${totalPending.toLocaleString(
        "en-IN"
      )}**\n\nBreakdown of current charges:\n`;
      feeItems.forEach((f) => {
        text += `• ${f.name}: ₹${f.amount.toLocaleString("en-IN")}\n`;
      });
      text += `\nPlease clear these dues before the semester cutoff.`;

      return {
        text,
        action: {
          label: "Pay Fees Now →",
          page: "Fees",
        },
      };
    }

    // 3. SCHEDULE / CLASS QUERY
    if (
      q.includes("class") ||
      q.includes("next") ||
      q.includes("schedule") ||
      q.includes("timetable") ||
      q.includes("today") ||
      q.includes("lecture") ||
      q.includes("timing")
    ) {
      const nextClass =
        todaySchedule.find((c) => c.isNext) ||
        todaySchedule.find((c) => c.status === "upcoming") ||
        todaySchedule[0];

      let text = `🕒 **Your Next Class:**\n**${nextClass.subject}** at **${nextClass.time}**\n📍 Room: ${nextClass.room} · 👨‍🏫 ${nextClass.faculty}\n⏳ Status: ${
        nextClass.countdown || "Starting soon"
      }\n\n`;
      text += `📅 **Today's Schedule (${todaySchedule.length} classes):**\n`;
      todaySchedule.forEach((c) => {
        const tag =
          c.status === "completed"
            ? "✅ Completed"
            : c.status === "upcoming"
            ? "⏳ Up Next"
            : "📌 Later";
        text += `• ${c.time} – ${c.subject} (${c.room}) [${tag}]\n`;
      });

      return {
        text,
        action: {
          label: "View Full Timetable →",
          page: "Attendance",
        },
      };
    }

    // 4. EVENTS QUERY
    if (
      q.includes("event") ||
      q.includes("hackathon") ||
      q.includes("fest") ||
      q.includes("tournament") ||
      q.includes("cultural") ||
      q.includes("sports")
    ) {
      let text = `🎉 **Upcoming Campus Events (${eventsData.length} total):**\n\n`;
      eventsData.forEach((ev, i) => {
        const isReg = registeredEvents.includes(ev.id);
        text += `${i + 1}. **${ev.title}** (${ev.category})\n`;
        text += `   📅 ${ev.date} · ${ev.time}\n`;
        text += `   📍 ${ev.location}\n`;
        text += `   ${
          isReg ? "✅ You are registered!" : "🎫 Open for registration"
        }\n\n`;
      });

      return {
        text: text.trim(),
        action: {
          label: "Explore Events Screen →",
          page: "Events",
        },
      };
    }

    // 5. GREETING
    if (
      q.includes("hi") ||
      q.includes("hello") ||
      q.includes("hey") ||
      q.includes("help") ||
      q === ""
    ) {
      return {
        text: `Hello! 👋 I'm here to help. You can quickly ask me:\n• "What is my attendance?"\n• "How much fee is pending?"\n• "What is my next class?"\n• "What upcoming events are available?"`,
        showSuggestions: true,
      };
    }

    // 6. HELPFUL FALLBACK
    return {
      text: `I'm your CampusConnect Assistant prototype. I can answer questions about your **attendance**, **fee status**, **today's class schedule**, and **campus events**.\n\nTry clicking one of the suggested questions below!`,
      showSuggestions: true,
    };
  };

  const handleSend = (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : inputMessage;
    if (!query.trim() || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Realistic brief typing delay (500ms)
    setTimeout(() => {
      const response = getResponseForQuery(query);
      const assistantMsg = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: response.text,
        action: response.action,
        showSuggestions: response.showSuggestions,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 500);
  };

  const renderMessageContent = (text) => {
    return text.split("\n").map((line, idx, arr) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={idx} className="chat-line">
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
          {idx < arr.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="campus-assistant-root">
      {/* CHAT PANEL POPUP */}
      {isOpen && (
        <div className="assistant-chat-panel">
          {/* HEADER */}
          <div className="assistant-panel-header">
            <div className="assistant-header-info">
              <div className="assistant-avatar">
                <Bot size={18} />
                <span className="assistant-status-dot" />
              </div>
              <div className="assistant-title-group">
                <h3>CampusConnect Assistant</h3>
                <span>Student Info Bot · Prototype</span>
              </div>
            </div>
            <div className="assistant-header-actions">
              <button
                className="assistant-header-btn"
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                className="assistant-header-btn close-btn"
                onClick={() => setIsOpen(false)}
                title="Close assistant"
                aria-label="Close assistant"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="assistant-chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-row ${
                  msg.sender === "user" ? "user-row" : "bot-row"
                }`}
              >
                {msg.sender === "assistant" && (
                  <div className="bot-msg-avatar">
                    <Bot size={14} />
                  </div>
                )}
                <div className={`chat-bubble ${msg.sender}`}>
                  <div className="chat-bubble-content">
                    {renderMessageContent(msg.text)}
                  </div>

                  {/* ONE-CLICK DIRECT APP NAVIGATION SHORTCUT */}
                  {msg.action && (
                    <button
                      className="chat-action-btn"
                      onClick={() => {
                        setActivePage(msg.action.page);
                      }}
                    >
                      <span>{msg.action.label}</span>
                    </button>
                  )}

                  {/* CLICKABLE SUGGESTED QUESTIONS */}
                  {msg.showSuggestions && (
                    <div className="suggested-questions-box">
                      <p className="suggested-title">Suggested questions:</p>
                      <div className="suggested-chips">
                        {suggestedQuestions.map((qText, qIdx) => (
                          <button
                            key={qIdx}
                            className="suggested-chip"
                            onClick={() => handleSend(qText)}
                          >
                            {qText}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="chat-message-row bot-row">
                <div className="bot-msg-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble assistant typing-bubble">
                  <div className="typing-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FORM */}
          <form
            className="assistant-chat-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <div className="assistant-input-box">
              <input
                ref={inputRef}
                type="text"
                className="assistant-input"
                placeholder="Ask about attendance, fees, timetable..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                type="submit"
                className="assistant-send-btn"
                disabled={!inputMessage.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="assistant-disclaimer">
              Prototype assistant · Answers based on live student portal data
            </p>
          </form>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        className={`assistant-floating-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen ? "Close Campus Assistant" : "Open Campus Assistant"
        }
        title={isOpen ? "Close Campus Assistant" : "Open Campus Assistant"}
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <>
            <Bot size={24} />
            <span className="assistant-btn-pulse" />
            <span className="assistant-btn-sparkle">
              <Sparkles size={11} />
            </span>
          </>
        )}
      </button>
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
      case "Academics":
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
      case "Community":
  return <CommunityPage />;

case "Profile":
  return <ProfilePage setActivePage={setActivePage} />;

      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            paymentMessage={paymentMessage}
          />
        );
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

      {/* CAMPUSCONNECT ASSISTANT */}
      <CampusAssistant
        attendanceData={attendanceData}
        feeItems={feeItems}
        paymentMessage={paymentMessage}
        todaySchedule={todaySchedule}
        eventsData={eventsData}
        registeredEvents={registeredEvents}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default App;
