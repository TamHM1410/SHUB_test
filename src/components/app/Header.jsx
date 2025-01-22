"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="w-full h-[50px] flex justify-start fixed	z-[10] bg-blue-500 ">
      <NavigationMenu>
        <NavigationMenuList>
          <div className={navigationMenuTriggerStyle()}>
            <img
              src="https://play-lh.googleusercontent.com/7zYZ3jM7kWvJdua6h9TWwnjgVkkMvATP-HlKmhb-5_FF9Ck2rHd-OyoIN_a4TcKIQIk"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <span className="text-white font-[600]">SHUB TEST FE INTERN</span>
          </div>
          <NavigationMenuItem className="mx-2 gap-5 text-white ">
            <Link to="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Task 1
              </NavigationMenuLink>
            </Link>
            <Link to="/task-2" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Task 2
              </NavigationMenuLink>
            </Link>
            <Link to="/task-3" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Task 3
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
