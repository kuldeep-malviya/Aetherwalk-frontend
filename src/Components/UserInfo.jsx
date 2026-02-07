import React from "react";
import axios from "axios"
import { useContext } from "react";
import { LogOut, User, Mail, Shield, Calendar, Package, Heart } from "lucide-react";
import { AuthContext } from "../store/AuthContext";


const UserInfo = ({ email = "user101@example.com", username = "user" }) => {
  const { user } = useContext(AuthContext);
  const logout = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log("Backend logout failed, clearing local session");
  }

  // ALWAYS logout on frontend
  localStorage.removeItem("token");
  localStorage.removeItem("cart");
  window.location.href = "/login";
};

  return (
    <div
      className="card shadow-lg border-0 rounded-4 overflow-hidden mx-auto"
      style={{ maxWidth: "420px" }}
    >
      {/* Gradient Header with Avatar */}
      <div
        className="position-relative text-white"
        style={{
          height: "160px",
          background: "linear-gradient(135deg, #f97316, #ea580c)",
        }}
      >
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ bottom: "-55px" }}
        >
          <div
            className="rounded-circle my-2 overflow-hidden border border-4 border-white shadow"
            style={{ width: "110px", height: "110px" }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
              alt="User avatar"
              className="w-100  h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body pt-5 text-center px-4 pb-4">
        <h2 className="card-title mb-1 fw-bold text-dark">{user.email}</h2>
        <p className="text-warning fw-medium mb-4">Premium Member</p>

        {/* Quick Stats */}
        <div className="row g-3 mb-4 text-center">
          <div className="col-4">
            <div className="bg-warning bg-opacity-10 rounded-3 p-3">
              <h5 className="fw-bold text-warning mb-0">42</h5>
              <small className="text-muted">Orders</small>
            </div>
          </div>
          <div className="col-4">
            <div className="bg-warning bg-opacity-10 rounded-3 p-3">
              <h5 className="fw-bold text-warning mb-0">18</h5>
              <small className="text-muted">Wishlist</small>
            </div>
          </div>
          <div className="col-4">
            <div className="bg-warning bg-opacity-10 rounded-3 p-3">
              <h5 className="fw-bold text-warning mb-0">9</h5>
              <small className="text-muted">Reviews</small>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="list-group list-group-flush mb-4 text-start">
          {[ 
            { icon: <User size={22} className="text-warning" />, label: "Full Name", value: ` ${username.replace("user","")}` },
            { icon: <Mail size={22} className="text-warning" />, label: "Email", value: `${user.email}` },
            { icon: <Shield size={22} className="text-warning" />, label: "Password", value: "••••••••••••" },
            { icon: <Calendar size={22} className="text-warning" />, label: "Joined", value: "March 15, 2024" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="list-group-item bg-light-subtle border-0 rounded-3 mb-2 d-flex align-items-center gap-3 py-3"
            >
              {item.icon}
              <div>
                <small className="text-muted d-block">{item.label}</small>
                <span className="fw-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="d-grid gap-3">
         

          <button onClick={logout} className="btn mb-5 btn-outline-secondary fw-medium d-flex align-items-center justify-content-center gap-2 py-3 hover-shadow">
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default UserInfo;
  