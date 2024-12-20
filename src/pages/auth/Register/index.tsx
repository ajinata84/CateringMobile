import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonText,
  IonPage,
  useIonRouter,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import "./register.css";
import { toast } from "sonner";

const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterResponse {
  token: string;
  userId: string;
  username: string;
  customerId: string;
}

export default function Register() {
  const router = useIonRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await axios.post<RegisterResponse>(
        "http://localhost:3000/customer/register",
        data
      );

      const { token, userId, username } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);

      toast("Register Successful", {
        description: "Redirecting to home page...",
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/", "root", "replace");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Register Failed:", error.response?.data?.message);
        toast("Register Failed", {
          description: error.response?.data?.message,
          position: "top-center",
        });
      } else {
        console.error("An unexpected error occurred");
        toast("An unexpected error occurred", { position: "top-center" });
      }
    }
  };

  return (
    <IonPage>
      <IonContent className="register-page">
        <div className="Layout flex flex-col justify-center items-center h-screen relative">
          <IonText color="dark">
            <h1 className="register-title">Register</h1>
          </IonText>
          <IonCard className="register-card">
            <IonCardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <IonRow className="register-tabs">
                  <IonCol size="6">
                    <IonButton
                      expand="block"
                      fill="outline"
                      className="tab-button"
                      routerLink="/login"
                    >
                      Login
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton expand="block" className="tab-button active">
                      Register
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonItem className="input-item">
                  <IonInput
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                  />
                </IonItem>
                {errors.email && (
                  <IonText color="danger">{errors.email.message}</IonText>
                )}

                <IonItem className="input-item">
                  <IonInput
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                </IonItem>
                {errors.password && (
                  <IonText color="danger">{errors.password.message}</IonText>
                )}

                <IonItem className="input-item">
                  <IonInput {...register("username")} placeholder="Username" />
                </IonItem>
                {errors.username && (
                  <IonText color="danger">{errors.username.message}</IonText>
                )}

                <IonButton
                  expand="block"
                  className="register-button"
                  type="submit"
                >
                  Register
                </IonButton>
                <IonRow className="login-link">
                  <IonText>Already have an account? </IonText>
                  <IonButton fill="clear" routerLink="/login" className="link">
                    Login Now
                  </IonButton>
                </IonRow>
              </form>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
