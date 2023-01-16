import Image from "next/image";
import styles from "@/styles/Login.module.scss";

export default function Login() {
  return (
    <div>
      <div className={styles.Login}>
        <div>
          <Image src="/1.svg" alt="13" width={100} height={100} priority />
        </div>
        <h2>Big Welcome</h2>
        <span>It's time to make some changes!</span>
        <form>
          <input placeholder="email@domain.com" />
          <button type="button">Authorize</button>
        </form>
      </div>
    </div>
  );
}
