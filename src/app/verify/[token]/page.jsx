"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { API_URL } from "@/lib/api";


export default function VerifyPage() {
  const { token } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/api/users/verify/${token}`)
      .then(res => res.text())
      .then(data => alert(data))
      .catch(err => console.log(err));
  }, [token]);

  return <h2 className="text-center mt-10">Verifying...</h2>;
}