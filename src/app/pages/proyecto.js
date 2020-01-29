import App from "../components/App";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  return (
    <App>
      <div id="projects" className="section grey">
        <div className="w-container">
          <h1 className="heading-3">{router.query.titulo}</h1>
          <div className="divider grey"></div>
        </div>
      </div>
    </App>
  );
};

export default Page;
