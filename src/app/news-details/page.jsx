"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import newsImg1 from "../../assets/IMG(1).jpg";
import newsImg2 from "../../assets/Rectangle 168.jpg";
import newsImg3 from "../../assets/Rectangle 169.jpg";
import newsImg4 from "../../assets/Rectangle 170.jpg";
import Image from "next/image";
import { FaSquareFull } from "react-icons/fa";
import BreadCrumbs from "../components/BreadCrumbs";

const page = () => {
  const breadCrumbs = [
    {
      name: "hírek",
    },
    {
      name: "A Hangszerész VIII. rész",
      url: "/news-details",
    },
  ];
  const newsDetails = [
    {
      img: newsImg1,
      news: [
        {
          heading:
            "Kedves Tivadar! Hogyan lettél hangszerész, milyen iskolákat végeztél, kik voltak a mestereid, kik a tanítványaid?",
          descp1:
            "Édesapám a Mahart hajójavítóban dolgozott, ahol gyerekként sokszor megfordultam. A hajójavító műhelyeiben uralkodó egyedi, alkotó hangulat már akkor mély benyomást tett rám. Viszont én, mint anyaghoz, a fához vonzódtam inkább. Mivel már akkor aktívan zenéltem a Kozma Lajos Faipari Technikumból egyenes volt az utam a Liszt Ferenc Zeneművészeti Egyetem Hangszerészképzőjébe, ahol Schneider István és Bárány Péter mesterek tanítványaként végeztem. Később Romanek Tihamér, a neves hangszerkészítő mester szeretetteljes mentorálásával tettem le magam is a mestervizsgát.",
          descp2:
            "Jelenleg is a Zeneakadémia égisze alatt működő Bartók Béla Zeneművészeti és Hangszerészképző Gyakorló Szakgimnázium gyakorlati oktatója vagyok, 1995 óta folyamatosan. Lassan harminchoz közelít a mi tanműhelyünkből kikerült, végzett hangszerészek száma. Sokukkal mai napig tartom a kapcsolatot, sőt mára többükkel aktív baráti és munkakapcsolat is kialakult. Büszke vagyok a sikereikre, a tehetségük kiteljesedésére.",
        },
        {
          heading:
            "Hogyan jött létre a műhely? Mi a fő irányvonal, milyen hangszerek (elektromos, akusztikus, basszusgitár, erősítők, stb.)?",
          descp1:
            "A műhelyünk 1993-ben alakult, a nemrég elhunyt Bíró Ádám indította el egy akkori tulajdonostársával: az Oroszlánbarlang szervízéből önálló műhelynek átalakulva.",
          descp2:
            "Ezt a találó cégnevet, hogy „Vintage ’52” egy azóta is töretlen jóbarátunknak, Grosskopf Krisztiánnak köszönhetjük, aki az elmúlt harminc év alatt állandó, mondhatom, napi látogatónk.",
          descp3:
            "Ezekben az években már Bíró Ádám barátja, Horváth Attila is törzsvásárlónk volt. Attila aztán 2006-ban csatlakozott a céghez, mint tulajdonos, de több lett annál: a cégünk szíve és motorja.",
          descp4:
            "Boltunk végleges, mai formáját 2015-ben nyerte el, amikor Bordás Attila érkezett hozzánk, aki azóta is nagy szakértelemmel, rutinnal és a hangszerek iránti tisztelettel erősíti a bolt működését.",
          descp5:
            "Jelenleg is a Zeneakadémia égisze alatt működő Bartók Béla Zeneművészeti és Hangszerészképző Gyakorló Szakgimnázium gyakorlati oktatója vagyok, 1995 óta folyamatosan. Lassan harminchoz közelít a mi tanműhelyünkből kikerült, végzett hangszerészek száma. Sokukkal mai napig tartom a kapcsolatot, sőt mára többükkel aktív baráti és munkakapcsolat is kialakult. Büszke vagyok a sikereikre, a tehetségük kiteljesedésére.",
        },
      ],
    },
    {
      img: newsImg2,
      news: [
        {
          descp1:
            "A Vintage ’52 két részből áll: a hangszerboltból és a műhelyből. A boltban gitárokkal, erősítőkkel és kiegészítők széles skálájával foglalkozunk. A műhelyben pedig, hála égnek, nagy a változatosság, mert a mandolintól kezdve, a bendzsón át, az akusztikus- és elektromos gitárokig, basszusgitárokig sokféle hangszer érkezik javításra, restaurálásra. Sokszor megfordulnak muzeális értékű hangszerek is, amitől aztán Vintage ’52 teljes stábja érthető módon lázba jön. Valóban nagy öröm és megtiszteltetés régi hangszereket kézbe venni javításra. Ugyan elmondható, hogy az évek folyamán főként elektromos gitárokok érkeznek, de hangsúlyozom, hogy mindenféle gitárt örömmel javítunk. Magam hegedű javítását már csak elvétve, néhány törzsvendégnek, kedves barátomnak tudom elvállalni. Hegedűvel érkező ügyfeleinket a közeli, kiváló hegedűs kollégáimhoz szoktam irányítani. De el kell mondanom, hogy nagy szerelmem a hegedű is, magam is játszom rajta.",
        },
        {
          heading:
            "Milyen ismert magyar/külföldi zenészeknek javítottad a hangszerét? ",
          descp1:
            "Ezt a kérdést számos alkalommal tették már fel nekem. Nálunk, a Vintage-ben alapelv, hogy ha az ügyfelünk szereti a gitárját, legyen az ismert zenész, vagy amatőr gitárjátékos és ránk bízza a kincsét, akkor nálunk minden behozott hangszer egyenlő értéket képvisel. Ezt a legkevésbé sem lehet forintosítani.",
          descp2:
            "Ha egy hangszernek a gazdája egy ismert magyar, vagy külföldi zenész, az számunkra megtiszteltetés. Sosem szoktam konkrét neveket erre a kérdésre felsorolni, hiszen sok közismert zenész kedves barátommá is vált az évek alatt, Így csak azon izgulnék, hogy kit hagyok ki a felsorolásból. Örülök, ha meglátogatnak, ha beszélgetünk, és megtisztelnek azzal a bizalommal, hogy évek óta visszajárnak hozzám a hangszereikkel.",
          descp3:
            "Igaz, az többször előfordult, hogy egy külföldi gitáros érkezett váratlanul a műhelybe, mert a hangszerrel gond támadt az esti, magyarországi koncert előtt. Jó érzés ilyenkor, hogy a zenekedvelő, koncertre jegyet váltó emberek esti programját délután megmenthettük.",
        },
      ],
    },
    {
      img: newsImg3,
      news: [
        {
          heading:
            "Milyen érdekes történetet tudsz felemlíteni a hangszerjavítás kapcsán?  ",
          descp1:
            "A magyar zenetörténet kimagasló alakjához, kedves barátomhoz, Tátrai Tibuszhoz fűződik pályám egyik mérföldköve. A piros RÉ gitár, melynek elkészítésében részt vehettem, és Tibusz a barátságán túl megtisztel azzal is, hogy a gitárjainak a mai napig minden szervízelési feladatát én láthatom el.",
          descp1:
            "Szintén örömmel vettem részt a nemrég előkerült Radics gitár restaurálásában, és abban, hogy a „Bíbor Gibson” ismét a Béla által jól ismert hangján szólaljon mindannyiunk örömére.",
          descp3:
            "Gyakran előfordulnak műhelyünkben muzeális darabok, amelyek restaurálása igazi szakmai kihívás, és végtelen érdekesség ezeknek a régi hangszereknek a rendbehozatala.",
          descp4:
            "A magam története pedig abból áll, hogy a munkám a szenvedélyem is egyben. Örömmel lépek be a műhelybe nap mint nap, mindig adódik érdekes feladat, érkezik különleges hangszer, aminek a javításában boldogan elmerülök. Feltöltődöm, kikapcsolok munka közben. Az élet kisebb-nagyobb bosszantó dolgai engem is megtalálnak. De ha elindítok egy kellemes zenét a műhelyben, kézbe veszek egy javítandó hangszert, és legyek valami miatt bármilyen zaklatott is, a munkám megnyugtat, helyreteszi a gondolataimat.",
        },
      ],
    },
    {
      img: newsImg4,
      news: [
        {
          heading: "Milyen neves cégekkel vagytok kapcsolatban?  ",
          descp1:
            "Sok neves gitármárkának a magyarországi garanciális és egyéb hivatalos szervízét látjuk el. A teljesség igénye nélkül: Martin, Sigma, Cort. De ezek mellett a Magyarországra eladott kiemelt világmárkák, úgy mint Gibson, Fender, ESP, Epiphone, Taylor, stb. garanciális javításait is rendszeresen, a forgalmazó partner cégek kérésére elvégezzük.",
        },
        {
          heading:
            "Mit javasolsz a gitárosoknak a hangszerek használatával, karbantartásával kapcsolatosan?  ",
          descp1:
            "Nagyon örülök a kérdésnek. A hangszerek otthoni karbantartásának kardinális pontja az állandó, optimális páratartalom biztosítása (40-60% közötti) és az extrém hőmérséklettől való óvás nagyban hozzájárulhatnak a hangszer hosszú élettartamához.",
          descp2:
            " Szerencsére azt tapasztalom, hogy aki igazán szereti a hangszerét, az figyel a szakszerű karbantartásra, valamint igénybe veszi a hangszerészek szaktudását, hogy a hangszere mindig a legjobb formában legyen.",
          descp3: "Köszönöm a beszélgetést!",
        },
      ],
    },
  ];
  return (
    <div className="width pb-20 md:pb-40">
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <Link href="/news" className="md:mt-6 block">
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>

      <h2 className="text-[17px] font-semibold leading-[25px] text-[#202020] my-7">
        A Hangszerész VIII. rész
      </h2>
      <p className="body3 w-4/5">
        A sorozat következő részében ismét egy gitárjavító műhelyt mutatok be, a
        Csambalik Tivadar nevével fémjelzett Vintage ’52 gitárszervízt.{" "}
      </p>

      <div className="flex flex-col gap-6 md:gap-10 md:w-3/5 m-auto py-12">
        {newsDetails.map((news) => (
          <div className="flex flex-col gap-10">
            <Image src={news.img} alt="" className="w-full" priority />
            {news.news.map((details) => (
              <div className="flex flex-col gap-3">
                {details.heading ? (
                  <h6 className="body1 flex gap-5">
                    <FaSquareFull className="text-[10px] mt-1.5" />{" "}
                    {details.heading}
                  </h6>
                ) : (
                  ""
                )}
                <div className="flex flex-col gap-2 ml-5">
                  {details.descp1 ? (
                    <p className="body3">{details.descp1}</p>
                  ) : (
                    ""
                  )}
                  {details.descp2 ? (
                    <p className="body3">{details.descp2}</p>
                  ) : (
                    ""
                  )}
                  {details.descp3 ? (
                    <p className="body3">{details.descp3}</p>
                  ) : (
                    ""
                  )}
                  {details.descp4 ? (
                    <p className="body3">{details.descp4}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link href="/news">
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>
    </div>
  );
};

export default page;
