import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  toggleDesktopMenu,
  updateSearch,
} from "../../store/slices/desktopSlice";

interface SearchTextFieldProps {
  width?: string;
}

const SearchTextField = ({ width }: SearchTextFieldProps) => {
  const { t } = useTranslation();
  const search = useAppSelector((state) => state.desktopMenu.search);
  const dispatch = useAppDispatch();

  const onSearchChanged = (newSearch: string) => {
    dispatch(toggleDesktopMenu());
    dispatch(updateSearch(newSearch));
  };

  return (
    <TextField
      InputProps={{
        startAdornment: <Search sx={{ color: "white" }} />,
      }}
      value={search}
      onChange={(ev) => onSearchChanged(ev.target.value)}
      hiddenLabel
      sx={{
        backgroundColor: "#39373a",
        borderRadius: "15px",
        input: {
          color: "white",
        },
        width: width || "90%",
        height: "100%",
      }}
      placeholder={t("desktop.footer.searchPlaceholder")}
    />
  );
};

export default SearchTextField;
