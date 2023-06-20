import { Stack } from "@mui/material";
import { category } from "../../constants";
import { color } from "../../constants/colors";

const Category = ({ selectCategory, selectedCategoryHandler }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: item.name === selectCategory && color.secondary,
            color: item.name === selectCategory && "#fff",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectCategory ? '#fff': color.secondary,
              marginRight: "15px ",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
