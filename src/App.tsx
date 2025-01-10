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

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Beranda from "./tabs/Beranda";
import Aktivitas from "./tabs/Aktivitas";
import Profil from "./tabs/Profil";
import EditProfile from "./pages/EditProfile";
import Cart from "./pages/purchase/Cart";
import Confirmation from "./pages/purchase/Confirmation";
import TabBar from "./components/TabBar";
import Search from "./pages/search";

import "./theme/variables.css";
import "./theme/globals.css";
import Catering from "./pages/catering";
import PaketView from "./pages/paketview";
import Detail from "./pages/detail";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./pages/about";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <ProtectedRoute exact path="/search" component={Search} />
          <ProtectedRoute
            exact
            path="/catering/:cateringid"
            component={Catering}
          />
          <ProtectedRoute
            exact
            path="/catering/:cateringid/paket/:paketid"
            component={PaketView}
          />

          <ProtectedRoute
            exact
            path="/transaksi/:transaksiId"
            component={Detail}
          />

          <ProtectedRoute
            exact
            path="/profile/edit-profile"
            component={EditProfile}
          />
          <ProtectedRoute exact path="/purchase/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/purchase/confirmation"
            component={Confirmation}
          />

          <ProtectedRoute exact path="/about-us" component={AboutUs} />

          <ProtectedRoute exact path="/tabs/aktivitas" component={Aktivitas} />
          <ProtectedRoute exact path="/tabs/beranda" component={Beranda} />
          <ProtectedRoute exact path="/tabs/profil" component={Profil} />
          <ProtectedRoute exact path="/tabs">
            <Redirect to="/tabs/beranda" />
          </ProtectedRoute>

          <ProtectedRoute exact path="/">
            <Redirect to="/tabs" />
          </ProtectedRoute>
        </IonRouterOutlet>

        <TabBar />
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
