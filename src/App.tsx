import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, newspaperOutline, personCircleOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/variables.css";
import "./theme/globals.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Beranda from "./tabs/Beranda";
import Aktivitas from "./tabs/Aktivitas";
import Profil from "./tabs/Profil";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/beranda" component={Beranda} />
              <Route exact path="/tabs/aktivitas" component={Aktivitas} />
              <Route exact path="/tabs/profil" component={Profil} />
              <Route exact path="/tabs">
                <Redirect to="/tabs/beranda" />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="beranda" href="/tabs/beranda">
                <IonIcon icon={home} />
                <IonLabel>Beranda</IonLabel>
              </IonTabButton>
              <IonTabButton tab="aktivitas" href="/tabs/aktivitas">
                <IonIcon icon={newspaperOutline} />
                <IonLabel>Aktivitas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profil" href="/tabs/profil">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>

        <Route exact path="/">
          <Redirect to="/tabs" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
