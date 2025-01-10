import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";

interface ProtectedRouteProps extends Omit<RouteProps, "component"> {
  component?: React.ComponentType<RouteComponentProps>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => {
        if (!token) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : null;
      }}
    />
  );
};

export default ProtectedRoute;
