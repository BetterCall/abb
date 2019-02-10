import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@abb/controllers";

// container -> view
// container -> connector -> View
// Controller -> Connector -> View

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
