"use client";

import { useState } from "react";
import { Text } from "./typography/Text";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "contact@zmariann.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyEmail}
      className="w-fit self-start cursor-pointer"
      aria-label="Copy email address"
    >
      <Text> {copied ? "kimásolva" : email}</Text>
    </button>
  );
}

export function CopyTelnum() {
  const [copied, setCopied] = useState(false);
  const telnum = "+36304347211";

  const CopyTelnum = async () => {
    await navigator.clipboard.writeText(telnum);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={CopyTelnum}
      className="w-fit self-start cursor-pointer"
      aria-label="Copy email address"
    >
      <Text> {copied ? "kimásolva" : telnum}</Text>
    </button>
  );
}
