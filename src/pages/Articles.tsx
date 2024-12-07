import { useNavigate, useSearchParams } from "react-router-dom";
import PageContainer from "../components/shared/containers/PageContainer";
import { appRoutes } from "../config";
import { useEffect } from "react";

export default function Articles() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const ref = searchParams.get("ref");

  useEffect(() => {
    if (!ref) navigate(appRoutes.blogs);
  }, [ref, navigate]);

  if (!ref) return null;

  return (
    <PageContainer>
      <div>{ref}</div>
    </PageContainer>
  );
}
