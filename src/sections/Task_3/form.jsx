import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { get_input } from "@/api/test3";
import toast from "react-hot-toast";
import axiosClient from "@/utils/axiosClient";

export default function Task3View() {
  const [isLoading, setIsloading] = useState(false);
  const [token, setToken] = useState("");
  const [data, setData] = useState({
    number: [],
    query: {
      type: "",
      range: [],
    },
  });
  const [result, setResult] = useState([]);

  const handleGetInput = async () => {
    setIsloading(true);

    try {
      const res = await get_input();
      if (res?.query?.type === "1") {
        const sum = res.data.number
          .slice(res?.query?.range[0], res?.query?.range[1])
          .reduce((acc, num) => acc + num, 0);

        setResult(sum);
      } else {
        let totalEvenIndexNums = 0;
        let totalOddIndexNums = 0;

        let newArr = res.data.number.slice(
          res?.query?.range[0],
          res?.query?.range[1]
        );
        for (i = 0; i < newArr.length; i++) {
          if (i % 2 === 0) {
            totalEvenIndexNums += newArr[i];
          } else {
            totalOddIndexNums += newArr[i];
          }
        }
        let total = totalEvenIndexNums - totalOddIndexNums;
        setResult(total);
      }
      setToken(res?.token);
      setData(res?.data);
      setIsloading(false);
      toast.success("Get data ok");
    } catch (error) {
      setIsloading(false);
      toast.error("Get data failure,Server error");
    }
  };

  const handleSendOutput = () => {
    if (!token || token === "") return toast.error("!missing token");

    try {
      const res = axiosClient.post("/output", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: result,
      });
    } catch (error) {}
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-40">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div className="py-5">
            <Button onClick={() => handleGetInput()}>Click to get input</Button>
          </div>
          <div>
            <Label htmlFor="email">Input</Label>
            <Input type="email" id="email" placeholder="Input" />
          </div>
          <div>
            <Label htmlFor="email">Type</Label>
            <Input
              type="email"
              id="email"
              placeholder="type"
              value={data.query?.type}
              readOnly
            />
          </div>
          <div>
            <Label htmlFor="email">Out put</Label>
            <Input
              type="email"
              id="email"
              placeholder="Output"
              readOnly
              value={result}
            />
          </div>
          <div className="py-5">
            <Button onClick={() => handleSendOutput()}>Send output</Button>
          </div>
        </div>
      </div>
    </>
  );
}
