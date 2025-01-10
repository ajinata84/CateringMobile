import React, { useState, useEffect } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonToggle, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import { logOutOutline, storefrontOutline, helpCircleOutline, notificationsOutline, lockClosedOutline, keyOutline } from "ionicons/icons";
import "./profil.css";
import { ArrowBigLeft } from "lucide-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "sonner";

export default function Profil() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    img: "",
  });
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/customer/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        history.push("/login");
      }
    };

    fetchUserData();
  }, [history]);

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    history.push("/login");
    // Redirect ke halaman login
    toast("Logout Successful", {
      description: "Redirecting to Login page...",
      position: "top-center",
    });
  };

  const handleAboutus = () => {
    history.push("/about-us"); // Redirect ke halaman About Us
  };

  return (
    <IonPage>
      <IonContent>
        <div className="profile-container">
          {user ? (
            <>
              <div className="profile-avatar">
                <img
                  src={user.img} // Ganti dengan URL avatar
                  alt="Profile Avatar"
                />
              </div>
              <br />
              <h2 className="profile_name">{user.username}</h2>
              <p className="profile-email">{user.email}</p>
              <IonButton expand="block" className="edit-profile-button" routerLink="/profile/edit-profile">
                Edit Profile
              </IonButton>
            </>
          ) : (
            <p>Loading...</p> // Ditampilkan saat data sedang diambil
          )}
        </div>

        <IonList>
          {/* Inventories Section */}
          <div className="section-title">Inventories</div>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={storefrontOutline} />
            <IonLabel>My Stores</IonLabel>
            <div className="badge">2</div>
          </IonItem>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={helpCircleOutline} />
            <IonLabel>Support</IonLabel>
          </IonItem>

          {/* Preferences Section */}
          <div className="section-title">Preferences</div>
          <IonItem lines="full">
            <IonIcon slot="start" icon={notificationsOutline} />
            <IonLabel>Push Notifications</IonLabel>
            <IonToggle slot="end" checked />
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" icon={lockClosedOutline} />
            <IonLabel>Face ID</IonLabel>
            <IonToggle slot="end" checked />
          </IonItem>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={keyOutline} />
            <IonLabel>PIN Code</IonLabel>
          </IonItem>
        </IonList>

        {/* Logout Section */}

        <IonButton expand="block" color="danger" onClick={handleLogout} className="logout-button">
          <IonIcon slot="start" icon={logOutOutline} />
          Logout
        </IonButton>
        <IonButton expand="block" color={"primary"} onClick={handleAboutus} className="logout-button">
          <IonIcon slot="start" />
          About US
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
