import AppHeader from "@/components/AppHeader";
import { IonContent, IonPage } from "@ionic/react";

export default function AboutUs() {
  const images = [
    "https://objects.djie.cloud/aji/catering-about/aji.jpg",
    "https://objects.djie.cloud/aji/catering-about/adhi.jpg",
    "https://objects.djie.cloud/aji/catering-about/regina.jpg",
    "https://objects.djie.cloud/aji/catering-about/mawar.jpg",
  ];

  const peoples = [
    {
      name: "Prash Trisula Ajinata",
      role: "Lead Developer",
      img: images[0],
    },
    {
      name: "I Kadek Prasetya Adhi Nugraha",
      role: "Developer",
      img: images[1],
    },
    {
      name: "Regina Patricia Hartawan",
      role: "Developer",
      img: images[2],
    },
    {
      name: "Mawar Maharani",
      role: "Developer",
      img: images[3],
    },
  ];
  return (
    <IonPage>
      <AppHeader title="About Us" />
      <IonContent>
        <h1 className="text-center text-5xl font-extrabold text-[#597445] my-6" style={{ fontFamily: "Hurricane" }}>
          Meet Our Team
        </h1>

        <div className="grid grid-cols-2 gap-y-4">
          {peoples.map((people) => (
            <div className=" w-full ">
              <img src={people.img} alt="" className="h-60 object-cover" />
              <div className="p-2 flex flex-col justify-between text-center">
                <span className="font-medium w-full mb-2">{people.name}</span>
                <h6>{people.role}</h6>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
}
