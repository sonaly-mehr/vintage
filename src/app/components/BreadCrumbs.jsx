"use client";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbs = ({ breadCrumbs }) => {
  const pathname = usePathname();

  return (
    <>
      <ol className="inline-flex flex-wrap items-center my-8 gap-2 md:gap-0">
        {breadCrumbs &&
          breadCrumbs.map((breadCrumb, index) => (
            <li className="inline-flex items-center gap-2">
              <Link
                href={`${breadCrumb.url && breadCrumb.url}`}
                className={`font-bold text-xs uppercase hover:text-primary ${
                  pathname === breadCrumb.url
                    ? "text-primary"
                    : "text-[#3F3F3F]"
                }`}
              >
                {breadCrumb.name}
              </Link>
              {breadCrumbs?.length - 1 !== index && (
                <MdArrowForwardIos className="mr-2" />
              )}
            </li>
          ))}
      </ol>
    </>
  );
};

export default BreadCrumbs;
