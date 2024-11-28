"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

const AboutMe = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/users/user-2");
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="">
      {loading ? (
        <div className="space-y-4 pt-12">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      ) : user ? (
        <Card className=" pt-8 border-none shadow-none">
          <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
          <div className="flex items-center mb-6">
            <Avatar className="h-20 w-20 mr-4">
              <AvatarImage src={user.avatar || 'https://github.com/shadcn.png'} alt="User Avatar" />
            </Avatar>
            <div>
              <h3 className="text-lg font-medium">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
          <div className="space-y-4 text-left">
            <div>
              <h4 className="text-sm font-medium text-gray-500">User Type</h4>
              <p className="text-gray-700">{capitalizeFirstLetter(user.user_type)}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Date of Birth</h4>
              <p className="text-gray-700">
                {new Date(user.date_of_birth).toLocaleDateString("en-GB")}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Gender</h4>
              <p className="text-gray-700">{user.gender}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Email</h4>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Phone Number</h4>
              <p className="text-gray-700">{user.phone_no || "Not Provided"}</p>
            </div>
          </div>
        </Card>
      ) : (
        <p className="text-center text-gray-500">User not found.</p>
      )}
    </div>
  );
};

export default AboutMe;
