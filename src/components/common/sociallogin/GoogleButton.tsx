import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useUserSocialLoginMutation } from "@/redux/user/signupAndLoginSlice";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import error from "next/error";
import toast from "react-hot-toast";

const cookies = new Cookies();

const GoogleButton: React.FC = () => {
  const { data: session } = useSession();
  const [userSocialLogin, { isLoading, isError }] =
    useUserSocialLoginMutation();
  const router = useRouter();

  const handleSocialLogin = async () => {
    if (session) {
      const [firstname, lastname] = session.user?.name?.split(" ") || ["", ""];
      const email = session.user?.email || "";
      const password = email.slice(0, 8);

      try {
        const response: any = await userSocialLogin({
          firstname,
          lastname,
          email,
          password,
        });

        if (response?.data?.data?.accessToken) {
          const expirationTime = new Date();
          expirationTime.setTime(
            expirationTime.getTime() + 24 * 60 * 60 * 1000
          ); // 24 hour from now

          cookies.set("accessToken", response.data.data.accessToken, {
            path: "/",
          });
          toast.success("Loggedin successfully, redirecting to home page...");
          router.push("/pages/E-Commerce");
        } else {
          toast.error(
            "This email is already registered with diffrent provider"
          );
          console.error("Error logging in:", error);
          signOut();
        }
      } catch (error) {
        toast.error("Opps, Something went wrong!");
        console.error("Error logging in:", error);
      }
    }
  };

  useEffect(() => {
    handleSocialLogin();
  }, [session]);

  return (
    <div className="">
      <GoogleLoginButton
        onClick={() => {
          signIn("google");
          //   handleSocialLogin();
        }}
      />
    </div>
  );
};

export default GoogleButton;
