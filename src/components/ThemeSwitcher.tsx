import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} />
      <Switch checked={isDark} onCheckedChange={handleChange} />
      <Moon size={16} />
    </div>
  );
};

export default ThemeSwitcher;
