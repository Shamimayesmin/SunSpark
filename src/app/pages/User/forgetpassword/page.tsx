"use client";
import { useForgetpasswordMutation } from "@/redux/user/signupAndLoginSlice";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SmallLoader from "@/components/common/Loader/smallLoader";
import Link from "next/link";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import img from "@/assets/E-commerce/loginPageImage.jpg";
import logo from "@/assets/E-commerce/logo main.png";

const page = () => {
  const router = useRouter();
  const [forgetpassword, { isLoading, isError }] = useForgetpasswordMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;

    const res = await forgetpassword({ email });

    //@ts-ignore
    if (res.data?.statusCode === 200) {
      //@ts-ignore
      toast.success(res.data.message);
      router.back();
      //@ts-ignore
    } else if (res?.error?.status === 500) {
      //@ts-ignore
      toast.error(res.error.data.message);

      //@ts-ignore
    } else {
      //@ts-ignore
      toast.error("Something went wrong!!");
    }
  };

  return (
    <div className="w-full h-screen flex flex-wrap bg-[#FFFFFF]">
    <Toaster />
    <div className="hidden lg:block lg:w-1/2">
      <Image alt="Image" src={img} className="w-full h-screen" />
    </div>
    <div className="lg:w-1/2 w-full px-4 lg:px-24 lg:mt-[16vh] ">
      <div className="flex flex-wrap justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="h-20 w-32"></Image>
        </Link>
        <h1 className="text-[#153870] text-center text-2xl lg:text-3xl font-bold">
        Forgot Password
        </h1>
        <p className="text-[#627A9F] mt-8">Lost your password? Please enter your email address. We will send you a link to create a new password via email.</p>
      </div>
      <form onSubmit={handleSubmit} className="pt-16">
        <div className="mt-5 w-full ">
          <label className="label">
            <span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
              Email
            </span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiMail className="h-4 w-4 text-[#8A8A8A]" /> 
            </span>
            <input
              type="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
            />
           
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className={`btn bg-[#153870] hover:bg-[#016B90] w-full border-none text-white ${
              isLoading ? "disabled" : ""
            }`}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#33A4FF" : "",
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? <SmallLoader /> : "Send Email"}
          </button>
        </div>
       
      </form>
     
    </div>
  </div>
  );
};

export default page;
