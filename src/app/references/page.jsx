import React from "react";
import img1 from "../../assets/sale3.jpg";
import img2 from "../../assets/sale4.jpg";
import img3 from "../../assets/sale5.jpg";
import img4 from "../../assets/sale6.jpg";
import Image from "next/image";

const page = () => {
  const references = [
    {
      img: img1,
      descp:
        "A megbízási szerződés mindkét fél általi aláírása igazolja a Termék ANSR Kft. részére történő átadását. A termék átvételekor a ANSR Kft. az átvett termékről fényképfelvételt készít. A ANSR Kft. a termék értékesítése során köteles a vevők figyelmét felhívni a fényképen látható, illetve a megbízási szerződésben rögzített további hibákra illetve hiányosságokra. ",
    },
    {
      img: img2,
      descp:
        "A műhelyünk 1993-ben alakult, a nemrég elhunyt Bíró Ádám indította el egy akkori tulajdonostársával: az Oroszlánbarlang szervízéből önálló műhelynek átalakulva. Ezt a találó cégnevet, hogy „Vintage ’52” egy azóta is töretlen jóbarátunknak, Grosskopf Krisztiánnak köszönhetjük, aki az elmúlt harminc év alatt állandó, mondhatom, napi látogatónk. Ezekben az években már Bíró Ádám barátja, Horváth Attila is törzsvásárlónk volt. Attila aztán 2006-ban csatlakozott a céghez, mint tulajdonos, de több lett annál: a cégünk szíve és motorja. Boltunk végleges, mai formáját 2015-ben nyerte el, amikor Bordás Attila érkezett hozzánk, aki azóta is nagy szakértelemmel, rutinnal és a hangszerek iránti tisztelettel erősíti a bolt működését. ",
    },
    {
      img: img3,
      descp:
        "A kész munkáért, ha teheted, személyesen gyere, mert amíg nem vagy teljesen elégedett az eredménnyel, úgysem engedünk el! Ha kérdésed van a hangszereddel kapcsolatban, gyere, szaktanácsadással is szívesen várunk. Az aktuális árakról érdeklődj a szervizünkben.",
    },
    {
      img: img4,
      descp:
        "A megbízási szerződés mindkét fél általi aláírása igazolja a Termék ANSR Kft. részére történő átadását. A termék átvételekor a ANSR Kft. az átvett termékről fényképfelvételt készít. A ANSR Kft. a termék értékesítése során köteles a vevők figyelmét felhívni a fényképen látható, illetve a megbízási szerződésben rögzített további hibákra illetve hiányosságokra. ",
    },
    {
      img: img2,
      descp:
        "A műhelyünk 1993-ben alakult, a nemrég elhunyt Bíró Ádám indította el egy akkori tulajdonostársával: az Oroszlánbarlang szervízéből önálló műhelynek átalakulva. Ezt a találó cégnevet, hogy „Vintage ’52” egy azóta is töretlen jóbarátunknak, Grosskopf Krisztiánnak köszönhetjük, aki az elmúlt harminc év alatt állandó, mondhatom, napi látogatónk. Ezekben az években már Bíró Ádám barátja, Horváth Attila is törzsvásárlónk volt. Attila aztán 2006-ban csatlakozott a céghez, mint tulajdonos, de több lett annál: a cégünk szíve és motorja. Boltunk végleges, mai formáját 2015-ben nyerte el, amikor Bordás Attila érkezett hozzánk, aki azóta is nagy szakértelemmel, rutinnal és a hangszerek iránti tisztelettel erősíti a bolt működését. ",
    },
    {
      img: img3,
      descp:
        "A kész munkáért, ha teheted, személyesen gyere, mert amíg nem vagy teljesen elégedett az eredménnyel, úgysem engedünk el! Ha kérdésed van a hangszereddel kapcsolatban, gyere, szaktanácsadással is szívesen várunk. Az aktuális árakról érdeklődj a szervizünkben.",
    },
    {
      img: img1,
      descp:
        "A megbízási szerződés mindkét fél általi aláírása igazolja a Termék ANSR Kft. részére történő átadását. A termék átvételekor a ANSR Kft. az átvett termékről fényképfelvételt készít. A ANSR Kft. a termék értékesítése során köteles a vevők figyelmét felhívni a fényképen látható, illetve a megbízási szerződésben rögzített további hibákra illetve hiányosságokra. ",
    },
  ];
  return (
    <div className="width pt-16 pb-60">
      <h1 className="heading mb-8">referenciák</h1>

      <div className="w-3/5 m-auto">
      <div className="flex flex-col gap-14">
        {references.map((reference) => (
          <div className="border-b-[1px] border-solid border-[#B1B1B1]">
            <Image src={reference.img} alt="" priority className="w-full" />
            <p className="body3 my-8">{reference.descp}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
