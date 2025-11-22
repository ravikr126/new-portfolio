import React from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaDownload, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ConnectionLink } from "@/data/constantData";

type Props = {};

const SocialMediaSection = (props: Props) => {
  return (
    <div className="flex space-x-4 pt-2">
      <Link
        href={ConnectionLink.Github}
        target="_blank"
        className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="h-5 w-5" />
      </Link>
      <Link
        href={ConnectionLink.Linkedin}
        target="_blank"
        className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="h-5 w-5" />
      </Link>
      <Link
        href={ConnectionLink.X}
        target="_blank"
        className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label="X"
      >
        <FaSquareXTwitter className="h-5 w-5" />
      </Link>
      <Link
        href={ConnectionLink.Youtube}
        target="_blank"
        className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label="YouTube"
      >
        <FaYoutube className="h-5 w-5" />
      </Link>
      <Link
        href={ConnectionLink.leetcode}
        target="_blank"
        className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
        aria-label="LeetCode"
      >
        <SiLeetcode className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default SocialMediaSection;
