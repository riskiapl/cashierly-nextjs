import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">🌞</span>
      <Switch checked={isDark} onCheckedChange={handleChange} />
      <span className="text-sm">🌚</span>
    </div>
  );
};

export default ThemeSwitcher;
