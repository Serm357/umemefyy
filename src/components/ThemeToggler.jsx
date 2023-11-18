import { Moon, Sun } from "../assets/icons";

const ThemeToggler = () => {
  return (
    <label className="flex cursor-pointer gap-2">
      <Sun />
      <input type="checkbox" value="dark" className="toggle theme-controller" />
      <Moon />
    </label>
  );
};
export default ThemeToggler;
