import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keyword = params.get("query") ?? "";

  return (
    <div>
      <h2>نتائج البحث عن: {keyword}</h2>
    </div>
  );
}
