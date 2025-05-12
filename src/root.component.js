import SignInForm from "./Components/SignInForm";
import { AuthForm } from "./Components/AuthForm";
import signInImg from "./assets/images/login-01.jpg";
import Logos from "./assets/icons/allogosmybodytech.svg";

export default function Root() {
  return (
    <AuthForm
      isLogin={true}
      image={signInImg}
      title={"Ingresa a My BodyTech"}
      logo={Logos}
    >
      <SignInForm />
    </AuthForm>
  );
}