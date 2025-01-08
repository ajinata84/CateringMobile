import React, { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonItem, IonLabel, IonInput, IonCard } from "@ionic/react";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useIonRouter } from "@ionic/react";

const editProfileSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  hp: z.string().min(10, "Phone number must be at least 10 digits"),
  alamat: z.string().min(5, "Address must be at least 5 characters"),
  img: z.string().url("Invalid image URL"),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

export default function EditProfile() {
  const router = useIonRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
  });

  // State untuk userData dan loading
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    hp: "",
    alamat: "",
    img: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/customer/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { username, email, password, hp, alamat, img } = response.data;

        // Update userData dan form value
        setUserData({ username, email, password, hp, alamat, img });
        setValue("username", username);
        setValue("email", email);
        setValue("password", password); // Sebaiknya password tidak di-prefetch untuk keamanan
        setValue("hp", hp);
        setValue("alamat", alamat);
        setValue("img", img);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        toast.error("Failed to load profile data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setValue]);

  // Handle form submission
  const onSubmit = async (data: EditProfileFormData) => {
    try {
      await axios.put("http://localhost:3000/customer/me", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.push("/tabs/profil", "root", "replace");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Update Failed:", error.response?.data?.message);
        toast.error("Update Failed: " + error.response?.data?.message);
      } else {
        console.error("An unexpected error occurred");
        toast.error("An unexpected error occurred");
      }
    }
  };

  // Tampilkan loading state jika data belum di-fetch
  if (isLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Loading...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <p>Loading your profile data...</p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton routerLink="/tabs/profil">
              <ChevronLeft />
            </IonButton>
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="edit-profile-container">
          <IonCard className="editprofile-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput type="text" {...register("username")} placeholder={userData.username || "Enter your username"} />
                {errors.username && <p className="error-message">{errors.username.message}</p>}
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput type="email" {...register("email")} placeholder={userData.email || "Enter your email"} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password" {...register("password")} placeholder="Enter your new password" />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Phone</IonLabel>
                <IonInput type="tel" {...register("hp")} placeholder={userData.hp || "Enter your phone number"} />
                {errors.hp && <p className="error-message">{errors.hp.message}</p>}
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Address</IonLabel>
                <IonInput type="text" {...register("alamat")} placeholder={userData.alamat || "Enter your address"} />
                {errors.alamat && <p className="error-message">{errors.alamat.message}</p>}
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Image URL</IonLabel>
                <IonInput type="text" {...register("img")} placeholder={userData.img || "Enter image URL"} />
                {errors.img && <p className="error-message">{errors.img.message}</p>}
              </IonItem>

              <IonButton expand="block" type="submit" className="save-button" style={{ marginTop: "20px" }}>
                Save Changes
              </IonButton>
            </form>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
