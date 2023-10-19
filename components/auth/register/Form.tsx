import CustomButton from "@/components/common/button/CustomButton";
import InputBoxLable from "@/components/common/input/InputBoxLable";
import { useAppDispatch } from "@/store";
import { setAuth, setJid } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

// client side to add interactivity using local state
export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ username: "", password: "", name: "", email: "" });
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("values is ", values)
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("values is ", values)
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      dispatch(setJid(data.access_token));
      dispatch(setAuth(true));
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <InputBoxLable label={"Name"} id={"name"} type={"text"} onChange={handleChange} value={values.name}/>
      </div>
      <div>
        <InputBoxLable label={"Email"} id={"email"} type={"text"} onChange={handleChange} value={values.email}/>
      </div>
      <div>
        <InputBoxLable label={"Username"} id={"username"} type={"text"} onChange={handleChange} value={values.username}/>
      </div>
      <div>
        <InputBoxLable label={"Password"} id={"password"} type={"password"} onChange={handleChange} value={values.password}/>
      </div>
      <br />
      <div className="flex justify-center w-full">
        <CustomButton colorName={"warning"} name={"Sign Up"} onClick={handleSubmit}/>
      </div>
    </div>
  );
}
