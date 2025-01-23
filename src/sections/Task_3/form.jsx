import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Task3View() {
  return (
    <> 
    <div className="flex flex-col justify-center items-center py-40">
    <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Kết quả</Label>
        <Input type="email" id="email" placeholder="Kết quả" />
      </div>

    </div>
      
    </>
  );
}
