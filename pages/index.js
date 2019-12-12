import "./style.css";
import { Button } from "antd";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/a?id=1" as="/a/1" title="asdd">
        <Button>hi</Button>
      </Link>
    </div>
  );
};

export default Index;
