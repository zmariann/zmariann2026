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

export function CopyTelNum() {
  const [copied, setCopied] = useState(false);
  const tel = "+36304347211";

  const CopyTelNum = async () => {
    await navigator.clipboard.writeText(tel);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={CopyTelNum}
      className="w-fit self-start cursor-pointer"
      aria-label="Copy email address"
    >
      <Text> {copied ? "kimásolva" : tel}</Text>
    </button>
  );
}