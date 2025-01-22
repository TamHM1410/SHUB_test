import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const SkeletonCard = (props) => {
  const { isActive, item } = props;
  return (
    <Card
      className={`w-[160px] h-[94px]  border-2 ${
        isActive && "border-blue-700"
      }`}
    >
      <CardContent>
        <div>
          <div className="flex justify-between pt-3">
            <div>
              <Skeleton className="h-[6px] w-[20px] bg-blue-700" />
            </div>
            <Avatar>
              <AvatarImage src={item?.ava} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[10px] w-[30px]" />
          <Skeleton className="h-[10px] w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

const ContentCard = (props) => {
  const { item } = props;
  return (
    <Card className="w-[672px] h-auto p-4 min-h-[350px] z-50">
      <CardHeader>
        <CardTitle>
          <div>
            <div className="flex justify-between pt-3">

              <div>
                <Skeleton className="h-[10px] w-[20px] bg-blue-700" />
                <div className="py-3 text-[14px] font-[400]">{item?.address}</div>
                <div className="text-[20px] font-[500]">{item?.name}</div>
              </div>
              <Avatar className="w-[62px] h-[62px]">
                <AvatarImage src={item?.ava} alt="@shadcn" />
              </Avatar>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {item?.des}
        </div>
      </CardContent>
    </Card>
  );
};

const CompainionCard = (props) => {
  const { item, isActive, type } = props;
  return (
    <>
      <div>
        {type === "skeleton" && (
          <SkeletonCard isActive={isActive} item={item} />
        )}
        {type === "selected" && <ContentCard item={item} />}
      </div>
    </>
  );
};

export default CompainionCard;
