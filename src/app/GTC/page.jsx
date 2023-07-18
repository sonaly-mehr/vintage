"use client";
import React from "react";
import { BsArrowUp } from "react-icons/bs";

const page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const introductory = [
    {
      num: "1.",
      descp:
        "A ANSR Kft. az Üzletszabályzatát - általános szerződési feltételeit a vonatkozó hatályos jogszabályi előírásoknak megfelelően azért adta ki, hogy ebben részletesen szabályozza az általa tevékenységi körében kötött, adásvételre vonatkozó megbízási szerződésekre, továbbá a saját nevében, valamint megbízottként kötött adásvételi szerződésekre és annak igénybevételére vonatkozó feltételeket, a ANSR Kft. és a megbízási szerződés megbízó feleinek, illetve adásvételi szerződés vevő feleinek jogait, kötelezettségeit és egyéb, az adásvételi szerződéssel összefüggő lényeges körülményeket. ",
    },
    {
      num: "2.",
      descp:
        "Az Üzletszabályzat a ANSR Kft. és a vele szerződéses kapcsolatba lépő megbízó és vevő között létrejövő megbízási és adásvételi jogviszony általános szerződési feltételeit tartalmazza. Az itt nem szabályozott kérdéseket illetően a ANSR Kft. tevékenységére vonatkozó mindenkor hatályos magyar jogszabályok és hatósági előírások, különösen a Polgári Törvénykönyvben foglalt rendelkezések az irányadóak. II. Megbízási szerződés ",
    },
    {
      num: "3.",
      descp:
        "A megbízási szerződés alapján a ANSR Kft. mint megbízó jogosult és köteles a megbízó által átadott és a terméket a megbízó képviseletében adásvételi szerződés útján harmadik személyek részére értékesíteni a megbízó által meghatározott, és a megbízási szerződésben rögzített vételáron. ",
    },
    {
      num: "4.",
      descp:
        "A megbízási szerződés mindkét fél általi aláírása igazolja a Termék ANSR Kft. részére történő átadását. A termék átvételekor a ANSR Kft. az átvett termékről fényképfelvételt készít. A ANSR Kft. a termék értékesítése során köteles a vevők figyelmét felhívni a fényképen látható, illetve a megbízási szerződésben rögzített további hibákra illetve hiányosságokra.  ",
    },
    {
      num: "5.",
      descp:
        "A megbízó kifejezetten tudomásul veszi, hogy a kellékszavatosságért való felelősség - függetlenül attól, hogy a kellékszavatossági hibák, hiányosságok az átvételkor készített fényképen láthatóak voltak, vagy a megbízási szerződésben rögzítésre kerültek-e - kizárólag a megbízót terheli, a ANSR Kft. ezzel kapcsolatos felelőssége kizárt.  ",
    },
    {
      num: "6.",
      descp:
        "A ANSR Kft. a megbízási tevékenysége körében az alábbi feladatok ellátására vállal kötelezettséget:",
    },
    {
      num: "6.1",
      descp:
        "A termék kihelyezése a ANSR Kft. 1136 Budapest, Balzac u. 54. sz. alatt található Vintage'52 Hangszerviz hangszerüzletben, a ANSR Kft. által meghatározott kiállítási helyen. ",
    },
    {
      num: "6.2",
      descp:
        "A termék bemutatása az érdeklődők számára, a termék jellemzőire vonatkozó szükséges tájékoztatás megadása. ",
    },
    {
      num: "6.3",
      descp:
        "A potenciális vevővel az adásvételi szerződés feltételeinek - ideértve a vételárat is - meghatározása, szükség esetén a megbízó bevonásával. Megbízó tudomásul veszi, hogy a ANSR Kft. a saját hatáskörében jogosult eldönteni, hogy az adásvételi szerződés feltételeinek meghatározása érdekében igénybe veszi-e a megbízó közreműködését.",
    },
    {
      num: "6.4",
      descp:
        "Az adásvételi szerződés teljesítésének figyelemmel kísérése, a megbízó érdekeinek képviselete, a vevői kötelezettségek teljesítésének elősegítése illetve kikényszerítése a megbízó képviseletében, ideértve az adásvételi szerződéstől való elállást is. A megbízó tudomásul veszi, hogy a vevővel szemben közvetlenül csak akkor jogosult fellépni, ha a ANSR Kft. a vevővel szembeni, vevői kötelezettség teljesítésére vonatkozó fellépést a megbízó írásbeli felszólítása ellenére, az abban meghatározott póthatáridőben sem teljesíti. ",
    },
    {
      num: "6.5",
      descp:
        "A ANSR Kft. jogosult a vevővel létrejött adásvételi szerződéstől - a megbízó előzetes tájékoztatása mellett - a megbízó képviseletében elállni, amennyiben a vevő az előírt fizetési ütemezés szerinti és a további póthatáridőt is elmulasztotta bármelyik esedékes részlet megfizetését.6.6 Az adásvételi szerződéstől történő elállás esetén a ANSR Kft. köteles eljárni a foglaló jogkövetkezményeinek alkalmazása és az eredeti állapot helyreállítása körében.  ",
    },
    {
      num: "7",
      descp: "A termék vételárának megfizetése",
    },
    {
      num: "7.1",
      descp:
        " A megbízó kifejezetten tudomásul veszi, hogy a ANSR Kft.-vel és/vagy az adásvételi szerződés vevőjével szemben kizárólag a megbízási szerződésben meghatározott, vagy a szerződés teljesítése során a hozzájárulásával módosított vételárra tarthat igényt, és nem jogosult meghatározni, hogy a ANSR Kft. a harmadik személy vevők felé milyen vételáron értékesíti a terméket, és a ANSR Kft. által meghatározott vételárral szemben - a megbízási szerződésben meghatározott, vagy a közösen módosított összegű vételáron túlmenően - nem jogosult követelést érvényesíteni. A megbízási szerződésben meghatározott, vagy a közösen módosított összegű vételár és a harmadik személy vevővel kötött adásvételi szerződésen meghatározott vételár különbözete jutalékként kizárólag a ANSR Kft.-t illeti. ",
    },
    {
      num: "7.2",
      descp:
        "A ANSR Kft. a megbízási szerződésben meghatározott vételár összegét a megbízó részére annak teljes összege a vevő által történő megfizetését követő 8 napon belül köteles a megbízó részére egy összegben megfizetni. A megbízó tudomásul veszi, hogy ezen határidő elmulasztása esetén a ANSR Kft. késedelmi kamat fizetésére nem köteles. A vételár a ANSR Kft. általi megfizetésének feltétele, hogy a megbízó felmutassa a ANSR Kft.-vel létrejött megbízási szerződés eredeti példányát, valamint igazolja személyazonosságát. A vételár megbízó részére történő kifizetéséről a Promoto Kft. átvételi elismervényt állít ki, amelyet a megbízó a vételár kifizetésével egyidejűleg aláír.  ",
    },
    {
      num: "7.3",
      descp:
        "Amennyiben az adott termékre a megbízási szerződésben meghatározott vételáron, de részletfizetéssel érkezik vételi ajánlat, a ANSR Kft. köteles kapcsolatba lépni a megbízóval a részletfizetés felajánlott ütemezése és a vételárrészletek (és a foglaló) összege vonatkozásában, azzal, hogy ebben az esetben foglaló alkalmazása a megbízó eltérő rendelkezésének hiányában kötelező.  ",
    },
    {
      num: "7.4",
      descp:
        "Amennyiben az adott termékre a megbízási szerződésben meghatározotthoz képest alacsonyabb vételáron érkezik vételi ajánlat a ANSR Kft.-hez, - amennyiben ezt a lehetőséget a megbízó előzetesen a megbízási szerződésben ki nem zárta - a ANSR Kft. saját döntése szerint jogosult kapcsolatba lépni a megbízóval, hogy az alacsonyabb vételárat elfogadja-e; elfogadás esetén a megbízási szerződésben meghatározott vételár automatikusan módosítottnak tekintendő.   ",
    },
    {
      num: "8",
      descp:
        "A megbízó köteles a ANSR Kft.-t haladéktalanul, de legkésőbb 2 munkanapon belül tájékoztatni, ha a megbízási szerződésben feltüntetett helyekhez vagy vételárakhoz képest eltérő helyen vagy vételáron adott megbízást vagy jelentetett meg hirdetést a termék értékesítése vonatkozásában.  ",
    },
    {
      num: "9",
      descp:
        "A megbízó tudomásul veszi, hogy az alábbi esetekben köteles a ANSR Kft. részére a megbízási szerződésben meghatározott vételár 5%-át szerződésszegési kötbérként megfizetni, a ANSR Kft. felszólítására, a felszólítástól számított 8 napon belül: ",
    },
    {
      num: "9.1",
      descp:
        "Amennyiben a megbízó a megbízási szerződés létrejöttét és a termék átadását követően a ANSR Kft. megkerülésével kíván harmadik személy vevővel különösen, de nem kizárólag, ha a megbízó olyan harmadik személy vevővel köt közvetlenül adásvételi szerződést, aki már ezen szerződéskötést megelőzően kapcsolatba lépett a termék értékesítése kapcsán a ANSR Kft.-vel, ideértve azt az esetet is, ha a harmadik személy vevő a terméket a Vintage'52 Hangszervizben már megtekintette. A megbízási szerződés bármely okból történő megszűnése a ANSR Kft. jelen pont szerinti kötbérigényét nem érinti.  ",
    },
    {
      num: "9.2",
      descp:
        "Amennyiben a megbízó a megbízási szerződésben feltüntetett helyekhez vagy vételárakhoz képest eltérő helyen vagy vételáron adott megbízást vagy jelentetett meg hirdetést a termék értékesítése vonatkozásában, és elmulasztotta a fenti 8. pontban megjelölt kötelezettségét. A ANSR Kft. a megbízóval szembeni kötbérigényét jogosult beszámítás útján is érvényesíteni.  ",
    },
    {
      num: "10.",
      descp:
        "A határozatlan idejű megbízási szerződést a megbízó azonnali hatállyal, a ANSR Kft. 5 napos felmondási idő mellett jogosult egyoldalúan, indokolás nélkül felmondani. A határozott idejű megbízási szerződést egyik fél sem jogosult rendes felmondással felmondani a határozott idő lejártát megelőzően.  ",
    },
    {
      num: "11.",
      descp:
        "A megbízási szerződés megszűnésével - a megbízó általi felmondás esetén a felmondás közlésével egyidejűleg, a ANSR Kft. általi felmondás esetén legkésőbb a felmondási idő lejártának napján - a ANSR Kft. köteles a megbízás tárgyát képező terméket - a rendeltetésszerű használattal, illetve tárolással együttjáró állagromlást kivéve - eredeti állapotban a megbízó részére visszaadni, a megbízó pedig köteles azt átvenni. A ANSR Kft. a termék átadásáról elismervényt állít ki, a megbízó a termék átvételét aláírásával igazolja. Amennyiben a megbízó a termék átvételére vonatkozó kötelezettségét határidőben nem teljesíti, a ANSR Kft. a terméket felelős őrzésbe veszi, azzal, hogy jogosult a megbízóval szemben minden, a késedelemmel érintett napra napi 1.000,- Ft tárolási, raktározási díjat érvényesíteni. A megbízó tudomásul veszi, hogy a ANSR Kft. a termék tárolására legfeljebb az átvételi határidő eredménytelen elteltétől számított 6 hónapig köteles, ezt követően jogosult a terméket értékesíteni, amely értékesítésből a költségek levonása után fennmaradó vételárat a megbízó az általános elévülési időn belül követelheti. ",
    },
    {
      num: "12.",
      descp:
        "A megbízási szerződés megszűnése esetén a megbízó a termék visszaadásakor a ANSR Kft. részére visszavételi elismervényt állít ki. Amennyiben a termék visszaadásakor a megbízó a terméken olyan hibákat, hiányosságokat észlel, amelyek megítélése szerint a termék ANSR Kft. részére történő átadásakor még nem voltak meg, úgy köteles ezekről a hibákról a ANSR Kft.-t egyidejűleg, az átvétel helyszínén tájékoztatni. Amennyiben a ANSR Kft. a hibák, hiányosságok meglétét elismeri, azt azt az elismervényen aláírásával igazolja, mely esetben a ANSR Kft. vállalja, hogy az így keletkezett kárt a megbízó részére 30 napon belül megtéríti. Minden egyéb esetben - ideértve azt az esetet is, ha a megbízó az átvételkor észlelt hibáról nem az átvételkor egyidejűleg tájékoztatja a ANSR Kft.-t - a megbízót terheli annak bizonyítása, hogy az adott hiba vagy hiányosság a termék megbízó részére történt visszaadását megelőzően keletkezett. III. Adásvételi szerződés ",
    },
    {
      num: "13.",
      descp:
        "A ANSR Kft. az adásvételi szerződést saját tulajdonban lévő termékek esetén a saját nevében, egyes esetekben, használt termék esetén a termék tulajdonosa mint megbízó nevében megbízottként köti meg, erről a tényről az egyes adásvételi szerződések megkötésekor a Vevőt tájékoztatja.   ",
    },
    {
      num: "14.",
      descp:
        " Az adásvételi szerződés-minta kitöltésével és aláírásával a ANSR Kft. vagy az adásvételi szerződésben megjelölt megbízó mint eladó és a szerződésben megjelölt jogalany mint vevő között adásvételi szerződés jön létre az ott meghatározott termék adásvétele tárgyában, az ott megjelölt vételár ellenében. Az adásvételi szerződés annak mindkét fél általi aláírásával lép hatályba. A vevő tudomásul veszi, hogy amennyiben a ANSR Kft. az eladó képviselőjeként jár el, a ANSR Kft. jogosult az eladót az adásvételi szerződés alapján megillető jogok gyakorlására, de ez a képviselet nem hoz létre önálló jogviszonyt a vevő és a ANSR Kft. között, a vevő az adásvételi szerződéssel kapcsolatos jogait elsősorban a termék eladójával szemben érvényesítheti.  ",
    },
    {
      num: "15.",
      descp:
        "Részletfizetés esetén a Vevő köteles az adásvételi szerződésben meghatározott esedékességkor az ott megjelölt vételárrészletet a ANSR Kft. részére megfizetni. A Vevő késedelmes teljesítése esetére a késedelemmel érintett időszakra a mindenkori törvényes kamatmértéknek megfelelő mértékű késedelmi kamatot köteles fizetni az Eladó részére. Az egyes vételárrészletek átvételérő a ANSR Kft. átvételi elismervényt állít ki.  ",
    },
    {
      num: "16.",
      descp:
        "A Vevő tudomásul veszi, hogy a foglaló a Ptk. 243-245 §§ szabályaival összhangban Vevőnek kétszeresen visszajár, amennyiben a szerződés az Eladó hibájából meghiúsul. A Vevő az adott foglalót elveszíti, amennyiben a szerződés a Vevő hibájából hiúsul meg. Amennyiben egyik félnek sem felróható a szerződés meghiúsulása, az adott foglaló egyszeres összege jár vissza a Vevőnek. ",
    },
    {
      num: "17.",
      descp:
        "A Vevő fizetési késedelme esetén a ANSR Kft. köteles a Vevőt a teljesítésre felhívni. A felhívásban foglalt póthatáridő eredménytelen eltelte esetén a ANSR Kft.jogosult az adásvételi szerződéstől - a foglaló jogkövetkezményeinek alkalmazása mellett - elállni.  ",
    },
    {
      num: "18.",
      descp:
        "A szerződés aláírásával a Vevő elismeri, hogy az ANSR Kft. a Vevő részére minden olyan tájékoztatást megadott a Termékkel kapcsolatban, amely annak értéke szempontjából jelentőséggel bír vagy bírhat, illetve részletesen tájékoztatta a Termékkel kapcsolatos minden olyan körülményről, melyet a Termék értéke, használhatósága vagy egyéb tulajdonsága szempontjából lényegesnek minősül. ",
    },
    {
      num: "19.",
      descp:
        "Amennyiben az adásvétel tárgyának az átadáskor felismerhető vagy a ANSR Kft. által ismert hibája van, azt a felek az átadáskor külön mellékletben rögzítik. Az itt rögzített hibákra a vevő nem hivatkozhat a hibás teljesítés körében mint olyan hibákra, amelyek már a teljesítéskor megvoltak. Amennyiben az adott terméket a ANSR Kft. megbízottként értékesíti, úgy a vevő a kellékszavatossági igényeit kizárólag a megbízóval/eladóval szemben közvetlenül érvényesítheti.  ",
    },
    {
      num: "20.",
      descp:
        "Vevő tudomásul veszi, hogy a ANSR Kft. a Termék után jótállásra nem köteles, azt új termék esetén a jótállást termék magyarországi forgalmazója nyújtja. A jótállás részletes feltételeiről az ANSR Kft. a Vevőt tájékoztatta, a jótállási jegyet - amennyiben az adott termék esetében a forgalmazó ilyet kibocsát - a Vevő részére átadta. Amennyiben az adott termékre a forgalmazó jótállási jegyet nem bocsát ki, úgy a Vevő a jótállási jogait a jelen szerződés eredeti példányának felmutatásával érvényesítheti. Vevő tudomásul veszi, hogy egyes Termékek esetében a ANSR Kft. a forgalmazó megbízásából a jótállási igények érvényesítése érdekében szervízként jár el. ",
    },
    {
      num: "21.",
      descp:
        "A Vevő tudomásul veszi, hogy a ANSR Kft. egyes esetekben a Termék forgalmazójával kötött megállapodás alapján bizonyos, a Vevővel a szerződés megkötésekor közölt ingyenes szolgáltatásokat nyújt; az ezen szolgáltatások nyújtása azonban nem hoz létre szerződéses jogviszonyt a ANSR Kft. és a Vevő között, az ezzel kapcsolatos szavatossági vagy egyéb igényeit a Vevő közvetlenül a forgalmazóval szemben érvényesítheti.  ",
    },
    {
      num: "22.",
      descp:
        "Amennyiben a vételár megfizetése egy összegben, a szerződés aláírásakor történik, úgy az adásvétel tárgya tulajdonjogának vevő részére történő átruházása és az adásvétel tárgyának birtokbaadása a szerződés aláírásával egyidejűleg történik. Amennyiben a vételár - foglaló alkalmazása mellett - több részletben történik, úgy a ANSR Kft. az adásvétel tárgyára vonatkozó tulajdonjogát a teljes vételár megfizetéséig fenntartja, és a birtokbaadásra a teljes vételár megfizetésével egyidejűleg kerül sor. IV. Hangszer kölcsönzése  ",
    },
    {
      num: "23.",
      descp:
        "A ANSR Kft. mint kölcsönbeadó és a kölcsönbe vevő között létrejövő kölcsönszerződés keretében a ANSR Kft. a tulajdonában álló hangszereket illetve más berendezéseket ad át a kölcsönbevevő részére időleges rendeltetésszerű használat céljából, amely használatért a kölcsönbe vevő a ANSR Kft. részére bérleti díjat köteles fizetni. A kölcsönszerződés aláírásával a kölcsönbe vevő a kölcsön tárgyát képező dolog átvételét elismeri.  ",
    },
    {
      num: "24.",
      descp:
        "A felek a kölcsön tárgyát képező dolog átadás-átvételekor rögzítik a dolog meglévő hibáit, hiányosságait. Ezen előzetesen rögzített hibákon túlmenően a kölcsönbe vevő a kölcsönszerződés lejártakor az átvételkori állapotban köteles a dolgot a ANSR Kft. részére visszaszolgáltatni. A kölcsönbe vevő köteles a dolgot rendeltetésszerűen használni, és állagának megóvásáról gondoskodni.  ",
    },
    {
      num: "25.",
      descp:
        "A kölcsönbevevő az átvett dologért teljes felelősséggel tartozik, így köteles helytállni a dologban bekövetkezett hibáért, sérülésért, értékcsökkenéséért vagy egyéb kárért (ideértve a ANSR Kft. felmerülő elmaradt hasznát és szükségessé váló kiadásait is), függetlenül attól, hogy a kár bekövetkezte rendeltetésszerű használat eredménye, illetve, hogy a kárt a kölcsönbe vevő vagy harmadik személy okozta jogszerű vagy jogellenes magatartással (ideértve a bűncselekménnyel okozott kárt is). A kár megtérítése alól a kölcsönbe vevő kizárólag akkor mentesül, ha bizonyítja, hogy a kár bekövetkezése a dolognak az átvételkor is meglévő hibájára, hiányosságára vezethető vissza. ",
    },
    {
      num: "26.",
      descp:
        "A dolog visszaszolgáltatásakor a ANSR Kft. átvételi elismervényt állít ki, amelyen szükség esetén rögzíti a dologban a kölcsönbe vevő általi átvételt követően keletkezett hibákat, hiányosságokat, sérüléseket. A dolog késedelmes visszaszolgáltatása esetén a kölcsönbe vevő a késedelemmel érintett időszak minden napjára köteles a bérleti díj 5%-ának megfelelő késedelmi kötbért megfizetni a ANSR Kft. részére, az erre vonatkozó felszólítástól számított 8 napon belül. V. Záró rendelkezések, adatkezelés ",
    },
    {
      num: "27.",
      descp:
        "A ANSR Kft. a partnerei azonosításához szükséges és elégséges személyes adatot a szerződések létrehozatala, tartalmának meghatározása, módosítása, teljesítésének figyelemmel kísérése, valamint az azzal kapcsolatos követelések érvényesítése céljából kezeli.  ",
    },
    {
      num: "28.",
      descp:
        "Az adásvételi szerződésben nem szabályozott kérdésekben a Polgári Törvénykönyvről szóló 1959. évi IV. törvény (Ptk.) illetve az egyéb hatályos jogszabályok rendelkezései irányadók. ",
    },
    {
      num: "29.",
      descp:
        "A jelen Üzletszabályzat a Vintage'52 Hangszerviz-ben (1136 Bp., Balzac u. 54.) nyomtatott formában, illetve a ANSR Kft. honlapján (www.vintage52.hu) megtekinthető. ",
    },
  ];
  return (
    <div className="width pt-10 md:pt-16 pb-20 md:pb-60">
      <h1 className="heading mb-8">ÁSZF</h1>

      <div className="md:w-3/5 m-auto flex flex-col gap-3 md:gap-6 text-[15px] leading-[22px]">
        <p>
          1074 Bp. Munkás u. 7/B, adószám: 22726506-2-42, a továbbiakban: ANSR
          Kft.) által kötött adásvételi szerződésekhez.{" "}
        </p>
        <p>I. Bevezető rendelkezések</p>

        <div className="flex flex-col gap-6">
          {introductory.map((intro) => (
            <div className="flex gap-1">
              <p>
                <span className="text-[15px] leading-[22px] font-semibold text-primary">
                  {intro.num}
                </span>{" "}
                {intro.descp}
              </p>
            </div>
          ))}
        </div>

        <p>
          Budapest, 2009. november 10. <br /> ANSR Kft.A{" "}
        </p>

        <button
          className="bttn flex md:hidden w-full justify-center mt-4"
          onClick={scrollToTop}
        >
          vissza az oldal tetejére <BsArrowUp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default page;
