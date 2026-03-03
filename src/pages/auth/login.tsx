import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const router = useRouter();
    const handleLogin = () => {
        console.log("Button clicked, navigating to /produk"); 
        localStorage.setItem("isLogin", "true");
        router.push("/produk");
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handleLogin}>Login ke Produk (Imperatif)</button> <br />
            {/* <button onClick={() => push('/produk')}>Login</button><br />
            <button onClick={() => handleLogin()}>Login</button><br /> */}
            <Link href="/auth/register">Ke Halaman Register (Link)</Link>
        </div>
    );
};

export default halamanLogin;