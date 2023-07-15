'use client'
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';
import Image from 'next/image';
import news1 from '../../assets/IMG(1).jpg'
import news2 from '../../assets/IMG(2).jpg'
import news3 from '../../assets/IMG.jpg'
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import styles from '../styles/index.module.css'
import PaginationButtons from '../components/pagination/PaginationButtons';

const page = () => {
    const news = [
        {
          img: news1,
          heading: "Különleges zárvatartás",
          descp:
            "“A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.”",
          date: "2022. 09. 17",
        },
        {
          img: news2,
          heading: "A Hangszerész VIII. rész ",
          descp:
            "“A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.”",
          date: "2022. 09. 17",
          link: "/"
        },
        {
          img: news3,
          heading: "Nyílt nap a hangszerészképzőben",
          descp:
            "Február 22-én mindent megtudhatsz képzéseinkről, az oktatás menetéről, a hangszerészképzés elméleti és gyakorlati oldaláról.",
          date: "2022. 09. 17",
          link:"/"
        },
        {
            img: news2,
            heading: "A Hangszerész VIII. rész ",
            descp:
              "“A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.”",
            date: "2022. 09. 17",
            link: "/"
          },
          {
            img: news3,
            heading: "Nyílt nap a hangszerészképzőben",
            descp:
              "Február 22-én mindent megtudhatsz képzéseinkről, az oktatás menetéről, a hangszerészképzés elméleti és gyakorlati oldaláról.",
            date: "2022. 09. 17",
            link:"/"
          },
          {
            img: news2,
            heading: "A Hangszerész VIII. rész ",
            descp:
              "“A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.”",
            date: "2022. 09. 17",
            link: "/"
          },
          {
            img: news3,
            heading: "Nyílt nap a hangszerészképzőben",
            descp:
              "Február 22-én mindent megtudhatsz képzéseinkről, az oktatás menetéről, a hangszerészképzés elméleti és gyakorlati oldaláról.",
            date: "2022. 09. 17",
            link:"/"
          },
          {
            img: news2,
            heading: "A Hangszerész VIII. rész ",
            descp:
              "“A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.”",
            date: "2022. 09. 17",
            link: "/"
          },
          {
            img: news3,
            heading: "Nyílt nap a hangszerészképzőben",
            descp:
              "Február 22-én mindent megtudhatsz képzéseinkről, az oktatás menetéről, a hangszerészképzés elméleti és gyakorlati oldaláról.",
            date: "2022. 09. 17",
            link:"/"
          },
      ];

    return (
    <div className="width pt-10 md:pt-14 pb-16 md:pb-28">
      <div className="flex justify-between items-center pb-4">
        <h1 className="heading">hírek</h1>
      </div>

      <div className='flex justify-center mb-5'>
        <PaginationButtons/>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-10 md:gap-y-16">
        {news.map((news) => (
          <div className="">
            <Image
              src={news.img}
              alt=""
              priority
              unoptimized={true}
              className="w-full"
            />
            <span className="flex justify-end text-xs tracking-wider text-black pt-2">{news.date}</span>
            <h6 className="font-semibold text-[17px] leading-[25px] text-[#081F32]">{news.heading}</h6>
            <p className="text-[15px] font-light leading-[22px] text-[#374A59] pt-2 pb-4">{news.descp}</p>
            {
                news.link? <Link href={news.link}><button className="bttn">elolvasom <FiArrowRight className="text-xl"/></button></Link> : ""
            }
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-6 mb-5'>
        <PaginationButtons/>
        </div>
    </div>
    );
};

export default page;