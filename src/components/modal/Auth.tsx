import Image from "next/image";

export default function Auth() {
  return (
    <div>
        <button className="mb-2 w-[180px] flex items-center bg-white">
            <Image className="mr-2" src={"/auth_svg/btn_google_light_normal_ios.svg"} alt="google-login" height={32} width={32} />
            <span className="text-sm inline-block ">Sign in with Google</span>
        </button>
        <button className="mb-2 w-[180px] flex items-center bg-white">
            <Image className="mr-2" src={"/auth_svg/github-mark.svg"} alt="github-login" height={32} width={32}/>
            <span className="text-sm inline-block ">Sign in with Github</span>
        </button>        
    </div>
  )
}
