
import React, { useEffect } from 'react';
import { signIn, useSession } from "next-auth/react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useUserSocialLoginMutation } from '@/redux/user/signupAndLoginSlice';
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import error from 'next/error';

const cookies = new Cookies();


const FacebookButton: React.FC = () => {
    const { data: session } = useSession();
    const [userSocialLogin, { isLoading, isError }] = useUserSocialLoginMutation();
    const router = useRouter();

    const handleFacebookLogin = async () => {
        if (session) {
            const [firstname, lastname] = session.user?.name?.split(' ') || ['', ''];
            const email = session.user?.email || '';
            const password = email.slice(0, 8);

            try {
                const response: any = await userSocialLogin({
                    firstname,
                    lastname,
                    email,
                    password,
                });

                if ( response?.data?.data?.accessToken) {
                    const expirationTime = new Date();
                    expirationTime.setTime(expirationTime.getTime() + 24 * 60 * 60 * 1000); // 24 hour from now
            
                    cookies.set("accessToken", response.data.data.accessToken, { path: "/" });
                    router.back();
                  } else {
                    console.error("Error logging in:", error);
                  }
            } catch (error) {
                console.error("Error logging in:", error);
            }
        }
    };


    return (
        <div className=''>
            <FacebookLoginButton onClick={() => {
                signIn("facebook"); 
                handleFacebookLogin();
            }} />
        </div>
    );
};
export default FacebookButton;
