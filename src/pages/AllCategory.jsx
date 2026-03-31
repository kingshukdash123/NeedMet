import { useCategories } from "../hooks/useCategories";
import { CategorySection } from "../components";
import { useMemo } from "react";

export default function AllCategory() {

  const { categories, loading, error } = useCategories();

  const groupedCategories = useMemo(() => {
    return categories.reduce((acc, cat) => {
      if (!acc[cat.section]) {
        acc[cat.section] = [];
      }
      acc[cat.section].push(cat);
      return acc;
    }, {});
  }, [categories]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      {Object.entries(groupedCategories).map(([section, items]) => (
        <CategorySection
          key={section}
          title={section}
          categories={items}
          style={{ textAlign: "center" }}
          showSeeAll={false}
        />
      ))}
    </div>
  );
}