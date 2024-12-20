import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonItem,
  IonInput,
  useIonRouter,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import "./login.css";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginResponse {
  token: string;
  userId: string;
  username: string;
  customerId: string;
}

export default function Login() {
  const router = useIonRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/auth/login",
        data
      );

      const { token, userId, username, customerId } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("customerId", customerId);

      toast("Login Successful", {
        description: "Redirecting to home page...",
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/", "root", "push");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login Failed:", error.response?.data?.message);
        toast("Login Failed", {
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
      <IonContent className="login-page">
        <div className="Layout flex flex-col justify-center items-center h-screen">
          <IonText color="dark">
            <h1 className="login-title">Login</h1>
          </IonText>
          <IonCard className="login-card">
            <IonCardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <IonRow className="login-tabs">
                  <IonCol size="6">
                    <IonButton expand="block" className="tab-button active">
                      Login
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton
                      expand="block"
                      fill="outline"
                      className="tab-button"
                      routerLink="/register"
                    >
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

                <IonButton
                  expand="block"
                  className="login-button"
                  type="submit"
                >
                  LOGIN
                </IonButton>
                <IonRow className="register-link">
                  <IonText>Not a Member? </IonText>
                  <IonButton
                    fill="clear"
                    routerLink="/register"
                    className="link"
                  >
                    Register Now
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
